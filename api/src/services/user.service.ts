import { User, Wallet } from '../models';
import { getDepartmentById } from './department.service';
import { getPositionById } from './position.service';
import { getRoleById } from './role.service';
import { createSkill } from './skill.service';
import { createWallet } from './wallet.service';

export const findUser = async (param: string, value: string) => {
  try {
    if (param === 'uuid') {
      return await User.findByPk(value, {
        include: {
          all: true,
        }
      });
    }

    return await User.findOne({ where: {
      [param]: value,
    },
    include: {
      all: true,
    }
  });

  } catch (err: any) {
    throw new Error(err.message);
  }
}

type TUserDataType = {
  name: string,
  surname: string,
  patronymic: string,
  email: string,
  phone: number,
  avatar: string,
  departmentId: number,
  positionId: number,
  roleId: number,
};

type TWalletType = 'self' | 'chief' | 'hr';
type TRoleName = 'user' | 'hr' | 'admin' | 'chief';

export const createUser = async (data: TUserDataType, walletType: TWalletType, roleName: TRoleName) => {
  const {
    name,
    surname,
    patronymic,
    email,
    phone,
    avatar,
    departmentId,
    positionId,
    roleId
  } = data;

  const department = await getDepartmentById(departmentId);
  const role = await getRoleById(roleId);
  const position = await getPositionById(positionId);

  const newUser = await User.create({
    name,
    surname,
    patronymic,
    email,
    password: 'qwerty',
    phone,
    avatar,
    departmentId: department && department.id,
    positionId: position && position.id,
    roleId: role && role.id,
  });

  const hardSkill = newUser.uuid && await createSkill(newUser.uuid, 'hard', 'current');
  const softSkill = newUser.uuid && await createSkill(newUser.uuid, 'soft', 'current');

  const walletsKey = await createWallet();

  await Wallet.create({
    privateKey: walletsKey.privateKey,
    publicKey: walletsKey.publicKey,
    type: 'self',
    userUuid: newUser.uuid
  });

  if (roleName === 'chief' || roleName === 'hr') {
    await Wallet.create({
      privateKey: walletsKey.privateKey,
      publicKey: walletsKey.publicKey,
      type: walletType,
      userUuid: newUser.uuid
    });
  }

  return {
    newUser,
    hardSkill,
    softSkill,
    walletsKey,
  }
}
