import { PrismaClient } from "@/generated/prisma/client";

const globalForPrisma= global as unknown as {
    prisma:PrismaClient;

}
// global is not affected by hot reload

const prisma= globalForPrisma.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production"){
    globalForPrisma.prisma=prisma;
}

export default prisma
