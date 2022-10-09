export type ActivityAttributes = {
  id?: number,
  title: string,
  type: 'hard' | 'soft',
  profit: number,
  description: string,
  authorUuid?: string,
  departmentId?: number,
}