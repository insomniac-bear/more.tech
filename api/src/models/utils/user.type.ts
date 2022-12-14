export type UserAttributes = {
  uuid?: string,
  name: string,
  surname: string,
  patronymic: string,
  email: string,
  password: string,
  phone: number,
  avatar?: string,
  departmentId?: number | null,
  positionId?: number | null,
  roleId?: number | null,
}