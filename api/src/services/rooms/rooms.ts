import { db } from 'src/lib/db'

export const rooms = () => {
  return db.room.findMany()
}