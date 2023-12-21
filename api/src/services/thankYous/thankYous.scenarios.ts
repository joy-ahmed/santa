import type { Prisma, ThankYou } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThankYouCreateArgs>({
  thankYou: {
    one: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-21T14:22:14.881Z',
            updatedAt: '2023-12-21T14:22:14.881Z',
          },
        },
        user: {
          create: {
            email: 'String8351303',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:22:14.881Z',
          },
        },
        toUser: {
          create: {
            email: 'String2487514',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:22:14.881Z',
          },
        },
      },
    },
    two: {
      data: {
        message: 'String',
        event: {
          create: {
            name: 'String',
            date: '2023-12-21T14:22:14.881Z',
            updatedAt: '2023-12-21T14:22:14.881Z',
          },
        },
        user: {
          create: {
            email: 'String3828699',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:22:14.881Z',
          },
        },
        toUser: {
          create: {
            email: 'String2541587',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:22:14.881Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThankYou, 'thankYou'>
