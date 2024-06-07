import db, { prisma } from '$lib/utils/db';
import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	submit: async ({ request }) => {
		try {
			const formData = Object.fromEntries(await request.formData());
			const { email, name, returning } = formData;
			const validEmail = true;
			if (!validEmail) throw Error('invalid email address');
			// Todo: Validate user's email
			// Todo: Check email for sql injection.
			// Todo: Add email to DB

			console.log('email :>> ', email);
			console.log('name :>> ', name);
			console.log('returning :>> ', returning);
			db.customer.create({ data: { email, name } });
		} catch (error) {
			// Todo: send email about a problem to Yo self
			console.log('send email that there was a problem');
		}
	}
};
