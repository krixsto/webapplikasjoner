import { db } from 'src/lib/db'
import type { Prisma } from '@prisma/client'

export const devices = () => {
  return db.device.findMany()
}

interface CreateDeviceArgs {
  input: Prisma.DeviceCreateInput
}

export const createDevice = ({ input }: CreateDeviceArgs) => {
  return db.device.create({ data: input })
}