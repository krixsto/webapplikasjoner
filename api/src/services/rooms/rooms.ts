import { db } from 'src/lib/db'
import type { Prisma } from '@prisma/client'

export const rooms = () => {
  return db.room.findMany()
}

interface CreateRoomArgs {
  input: Prisma.RoomCreateInput
  userId: number
}

export const createRoom = ({ input, userId }: CreateRoomArgs) => {
  return db.room.create({
    data: { ...input, userId },
  })
}