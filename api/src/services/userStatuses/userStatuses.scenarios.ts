import type { Prisma, UserStatus } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserStatusCreateArgs>({
  userStatus: {
    one: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String5424108',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:19:56.162Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-21T14:19:56.162Z',
            updatedAt: '2023-12-21T14:19:56.162Z',
          },
        },
      },
    },
    two: {
      data: {
        status: 'INVITED',
        user: {
          create: {
            email: 'String6064106',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:19:56.162Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-21T14:19:56.162Z',
            updatedAt: '2023-12-21T14:19:56.162Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserStatus, 'userStatus'>
