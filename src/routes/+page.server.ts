import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	submit: async ({ request }) => {
		try {
			console.log('request :>> ', { request });
			const formData = Object.fromEntries(await request.formData());
			console.log('formData :>> ', formData);
			const email = formData.email;
			const validEmail = true;
			if (!validEmail) throw Error('invalid email address');
			// Todo: Validate user's email
			// Todo: Check email for sql injection.
			// Todo: Add email to DB
			console.log(`add ${email} to database`);
		} catch (error) {
			// Todo: send email about a problem to Yo self
			console.log('send email that there was a problem');
		}
	}
};
