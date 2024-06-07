import { FC } from 'react'
import Img4 from '/images/our-team/artem.png'
import Img2 from '/images/our-team/burak.png'
import Img3 from '/images/our-team/kory.jpg'
import Img1 from '/images/our-team/matvii.jpg'

type TeamMember = {
  id: number
  name: string
  role: string
  description: string
  image: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Matvii Kharchenko',
    role: 'Frontend Developer',
    description:
      'Matvii is the visionary crafting our user-friendly interface and ensuring seamless performance.',
    image: Img1
  },
  {
    id: 2,
    name: 'Burak Ugar',
    role: 'Backend Developer',
    description:
      'Burak is the architect behind our robust server-side logic and secure deployment.',
    image: Img2
  },
  {
    id: 3,
    name: 'Kory DeJong',
    role: 'Project Manager',
    description:
      'Kory is the catalyst orchestrating our project timeline and driving our social media engagement.',
    image: Img3
  },
  {
    id: 4,
    name: 'Artem Fortelnyi',
    role: 'Reference Designer.',
    description:
      'Artem is the meticulous curator of our comprehensive documentation and innovative design inspirations.',
    image: Img4
  }
]

const OurTeam: FC = () => {
  return (
    <section className="w-full py-12" id="our-team">
      <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Team
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Meet the talented individuals behind our success.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:scale-105 hover:shadow-md"
            >
              <img
                alt={`Team Member ${member.id}`}
                className="h-40 w-40 rounded-full object-cover"
                height={400}
                src={member.image}
                style={{
                  aspectRatio: '400/400',
                  objectFit: 'cover'
                }}
                width={400}
              />
              <div className="space-y-2 text-center">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {member.role}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurTeam
