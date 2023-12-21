import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String1496238',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-21T14:19:09.068Z',
      },
    },
    two: {
      data: {
        email: 'String9808408',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2023-12-21T14:19:09.068Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
