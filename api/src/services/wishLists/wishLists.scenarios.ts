import type { Prisma, WishList } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WishListCreateArgs>({
  wishList: {
    one: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-21T14:21:50.232Z',
        user: {
          create: {
            email: 'String2519387',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:21:50.232Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-21T14:21:50.232Z',
            updatedAt: '2023-12-21T14:21:50.232Z',
          },
        },
      },
    },
    two: {
      data: {
        name: 'String',
        url: 'String',
        updatedAt: '2023-12-21T14:21:50.232Z',
        user: {
          create: {
            email: 'String3305653',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:21:50.232Z',
          },
        },
        event: {
          create: {
            name: 'String',
            date: '2023-12-21T14:21:50.232Z',
            updatedAt: '2023-12-21T14:21:50.232Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WishList, 'wishList'>
