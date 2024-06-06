import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

type QUERY = () => null;

export default async function db(query: QUERY): Promise<null> {
	// ... you will write your Prisma Client queries here
	try {
		return await query();
	} catch (error) {
		console.error('DB query or update error: ', error);
	} finally {
		await prisma.$disconnect();
	}
	return null;
}

export function sum(a: number, b: number) {
	return a + b;
}
