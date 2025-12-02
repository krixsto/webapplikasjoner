import { db } from 'src/lib/db'
import type { Prisma } from '@prisma/client'
import { context } from '@redwoodjs/graphql-server'

export const rooms = () => {
  const userId = context.currentUser?.id
  return db.room.findMany({
    where: { userId }
  })
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

export const deleteRoom = async ({ id }: DeleteRoomArgs) => {
  await db.device.deleteMany({
    where: { room_id: id }
  })
  return db.room.delete({ where: { id } })
}