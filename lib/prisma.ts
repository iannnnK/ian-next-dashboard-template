import {PrismaClient} from '@prisma/client'

declare global {
    var prisma: PrismaClient | undefined
}

const prisma = global.prisma || new PrismaClient()

if(process.env.NODE_ENV === 'development') global.prisma = prisma
else {
    console.log('prisma 잘 수행됨');
}
export default prisma