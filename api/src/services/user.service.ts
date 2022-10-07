import { User } from '../models';

export const findUser = async (param: string, value: string) => {
  try {
    if (param === 'uuid') {
      return await User.findByPk(value, {
        include: {
          all: true,
        },
        attributes: {
          exclude: ['password']
        }
      });
    }

    return await User.findOne({ where: {
      [param]: value,
      include: {
        all: true,
      },
      attributes: {
        exclude: ['password']
      }
  }});

  } catch (err: any) {
    throw new Error(err.message)
  }

}