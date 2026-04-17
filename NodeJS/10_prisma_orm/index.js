import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

async function main() {
  // await prisma.user.create({
  //   data: {
  //     name: 'Pedro',
  //     email: 'pedro@prisma.io',
  //     posts: {
  //       create: { title: 'Hello World pedro' },
  //     },
  //     profile: {
  //       create: { bio: 'I like pedro' },
  //     },
  //   },
  // })

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     posts: true,
  //     profile: true,
  //   },
  // })
  // console.dir(allUsers, { depth: null })

  const post = await prisma.post.update({
    where: { id: 2 },
    data: { published: true },
  })
  console.log(post)
}


main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })