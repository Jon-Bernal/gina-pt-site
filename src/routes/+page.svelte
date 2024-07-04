<script>
	import { enhance } from '$app/forms';
	import { Button, Checkbox, Input, Radio, RadioGroup } from '@svelteuidev/core';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	const inputOverride = {
		width: '100%',
		marginBottom: '20px',
		marginLeft: '20px',
		padding: '0.5rem'
	};

	let missing = true;
	onMount(() => {
		if (browser) {
			/* 1. define variables */
			var me = 'name';
			var place = 'host.tld';

			/* 2. find email link to replace */
			var elink = document.getElementById('mlink');

			/* 3. replace link href with variables  */
			if (elink) {
				elink.href = `mailto:gina@whidbeyprismpt.com`;
			}
		}
	});
</script>

<h2>Pardon our dust!</h2>
<h1>Coming soon, Prism Physical Therapy website and clinic.</h1>

<p>
	We're located in Clinton, Washington. If you would like to chat with Gina, the owner, scheduler
	and physical therapist or or have us keep you up to date on our progress, Feel free to drop Gina
	an email at: <a id="mlink" href="#">gina@whidbeyprismpt.com</a>.
</p>

<p>
	If by any chance you tried to submit your email to us through our contact form before July 3rd,
	please send Gina an email. The contact form wasn't actually sending us people's email address
	correctly and we'd still love to be able to reach out and help you!
</p>

<!-- <p>
	We're located in Clinton, Washington. If you would like to join our non-spammy mailing list for
	updates, please enter your information below. We look forward to working with you soon.
</p> -->

<!-- <form
	action="?/submit"
	method="POST"
	use:enhance={() => {
		console.log('test form running');
	}}
>
	<label for="email"> Email: </label>
	<Input
		type="email"
		name="email"
		id="email"
		placeholder="Benjamin@example.com"
		override={inputOverride}
	/>

	<label for="email"> Full Name: </label>
	<Input type="text" name="name" id="name" placeholder="Benjamin Bernal" override={inputOverride} />

	<RadioGroup
		label={'Are you a returning patient?'}
		id="returning"
		name="returning"
		style={'align-self: start;'}
		size="md"
		items={[
			{ label: 'Yes', value: 'yes' },
			{ label: 'No', value: 'no' }
		]}
	/>
	<Button type="submit">Subscribe</Button>
</form> -->

<style>
	form {
		margin: 40px auto;
		padding: 20px;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		border-radius: 6px;
		max-width: 500px;
	}
	label {
		align-self: flex-start;
		margin-bottom: 10px;
	}
	button {
		align-self: end;
		margin-top: 40px;
	}
</style>
