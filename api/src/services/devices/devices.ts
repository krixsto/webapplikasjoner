import { db } from 'src/lib/db'
import type { Prisma } from '@prisma/client'

export const devices = () => {
  return db.device.findMany()
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