import { db } from 'src/lib/db'
import { hashPassword } from '@redwoodjs/auth-dbauth-api'
import { requireAuth } from 'src/lib/auth'

export const updateMyPassword = async ({ newPassword }: {newPassword: string}) => {
  requireAuth()

  const [hashedPassword, salt] = hashPassword(newPassword)

  await db.user.update({
    where: { id: context.currentUser.id },
    data: { hashedPassword, salt },
  })

  return { message: 'Password updated successfully' }
}

export const users = () => {
  return db.user.findMany({select: { id: true, email: true }})
}