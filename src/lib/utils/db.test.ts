// sum.test.js
import { expect, test } from 'vitest';
import db, { prisma, sum } from './db';

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('db func connects to database', async () => {
	await db(async () => {
		prisma;
		const allUsers = await prisma.customer.findMany();
		console.log(allUsers);
		await expect(allUsers.length === 0);
	});
});
