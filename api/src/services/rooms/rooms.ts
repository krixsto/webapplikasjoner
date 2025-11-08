import { db } from 'src/lib/db'
import type { Prisma } from '@prisma/client'

export const rooms = () => {
  return db.room.findMany()
}

interface CreateRoomArgs {
  input: Prisma.RoomCreateInput
}

type DeleteRoomArgs = {
  id: number
}

export const createRoom = ({ input }: CreateRoomArgs) => {
  return db.room.create({ data: input })
}

export const deleteRoom = ({ id }: DeleteRoomArgs) => {
  return db.room.delete({ where: { id } })
}