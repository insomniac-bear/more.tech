import { nextTick } from 'process';
import { User } from '../models';

export const findUser = async (param: string, value: string) => {
  try {
    if (param === 'uuid') {
      return await User.findByPk(value, {
        include: {
          all: true,
        },
        attributes: {
          exclude: ['password, createdAt, updatedAt']
        }
      });
    }

    return await User.findOne({ where: {
      [param]: value,
      include: {
        all: true,
      },
      attributes: {
        exclude: ['password, createdAt, updatedAt']
      }
  }});

  } catch (err: any) {
    nextTick(err);
  }

}