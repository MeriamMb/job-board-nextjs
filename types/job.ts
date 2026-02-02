export type Job = {
    id: number
    title: string
    company: string
    location: string
    type: 'CDI' | 'Freelance' | 'Remote'
    stack: string[]
    description: string
    slug: string
  }
  