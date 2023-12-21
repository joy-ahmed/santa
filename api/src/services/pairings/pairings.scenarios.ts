import type { Prisma, Pairing } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PairingCreateArgs>({
  pairing: {
    one: {
      data: {
        updatedAt: '2023-12-21T14:21:33.763Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-21T14:21:33.763Z',
            updatedAt: '2023-12-21T14:21:33.763Z',
          },
        },
        santa: {
          create: {
            email: 'String2058436',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:21:33.763Z',
          },
        },
        person: {
          create: {
            email: 'String4584455',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:21:33.763Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-12-21T14:21:33.763Z',
        event: {
          create: {
            name: 'String',
            date: '2023-12-21T14:21:33.764Z',
            updatedAt: '2023-12-21T14:21:33.764Z',
          },
        },
        santa: {
          create: {
            email: 'String4003382',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:21:33.764Z',
          },
        },
        person: {
          create: {
            email: 'String6146615',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2023-12-21T14:21:33.764Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pairing, 'pairing'>
