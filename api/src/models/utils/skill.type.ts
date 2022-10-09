export type SkillAttributes = {
  id?: number,
  type: 'hard' | 'soft',
  value: number,
  period: 'last' | 'current',
  userUuid?: string,
}