import { db } from 'src/lib/db'
import type { Prisma } from '@prisma/client'

export const devices = () => {
  return db.device.findMany()
}

export const device = ({ id }) => {
  return db.device.findUnique({
    where: { id },
  })
}

interface CreateDeviceArgs {
  input: Prisma.DeviceCreateInput
}

type DeleteDeviceArgs = {
  id: number
}

export const createDevice = ({ input }: CreateDeviceArgs) => {
  return db.device.create({ data: input })
}

export const deleteDevice = ({ id }: DeleteDeviceArgs) => {
  return db.device.delete({where: { id } })
}

export const toggleAllDevices = async ({ status }: { status: boolean }) => {
  const userId = context.currentUser.id

  const rooms = await db.room.findMany({
    where: { userId },
    select: { id: true},
  }
)

const roomIds = rooms.map((r) => r.id)

if (roomIds.length === 0) {
  return { count: 0}
}

  return db.device.updateMany({
    where: {
      room_id: { in: roomIds },
      },
    data: { device_status: status },
  })
}

export const toggleDevice = ({
  id,
  status,
}: {
  id: number
  status: boolean
}) => {
  return db.device.update({
    where: { id },
    data: { device_status: status },
  })
}