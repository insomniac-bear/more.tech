export const createUserRespons = (data: any) => {
  return {
    uuid: data.uuid,
    name: data.name,
    surname: data.surname,
    patronymic: data.patronymic,
    email: data.email,
    phone: data.phone,
    avatar: data?.avatar,
    department: data.department.name,
    position: data.position.name,
    role: data.role.name,
    wallets: data.Wallets.map((wallet: any) => wallet.publicKey),
    skills: data.Skills.map((skill: any) => ({ name: skill.type, value: skill.value, period: skill.period }))
  }
}