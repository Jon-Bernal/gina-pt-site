import type { Actions } from '@sveltejs/kit';

export const actions: Actions = {
	submit: async ({ request }) => {
		try {
			const formData = Object.fromEntries(await request.formData());
			const { email, name, message } = formData;
			const validEmail = true;
			if (!validEmail) throw Error('invalid email address');

			console.log('email :>> ', email);
			console.log('name :>> ', name);
			console.log('message :>> ', message);
		} catch (error) {
			// Todo: send email about a problem to Yo self
			console.log('send email that there was a problem');
		}
	}
};
