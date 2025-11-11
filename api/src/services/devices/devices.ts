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

export const toggleAllDevices = ({ status }: { status: boolean }) => {
  return db.device.updateMany({
    data: { device_status: status },
  })
}