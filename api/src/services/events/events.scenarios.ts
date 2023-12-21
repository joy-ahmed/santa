import type { Prisma, Event } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.EventCreateArgs>({
  event: {
    one: {
      data: {
        name: 'String',
        date: '2023-12-21T14:21:14.363Z',
        updatedAt: '2023-12-21T14:21:14.363Z',
      },
    },
    two: {
      data: {
        name: 'String',
        date: '2023-12-21T14:21:14.363Z',
        updatedAt: '2023-12-21T14:21:14.363Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<Event, 'event'>
