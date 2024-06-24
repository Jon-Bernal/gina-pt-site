import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

// expose a singleton
const db = new PrismaClient();

export default db;
