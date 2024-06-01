<script>
	import { enhance } from '$app/forms';
	import { Button, Checkbox, Input, Radio, RadioGroup } from '@svelteuidev/core';
	const inputOverride = {
		width: '100%',
		marginBottom: '20px',
		marginLeft: '20px',
		padding: '0.5rem'
	};
</script>

<h2>Pardon our dust!</h2>
<h1>Coming soon, Prism Physical Therapy website and clinic.</h1>

<p>
	We're located in Clinton Washington. If you would like to join our non-spammy mailing list for
	updates, please enter your information below. We look forward to working with you soon.
</p>

<form
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
		placeholder="example@email.com"
		override={inputOverride}
	/>

	<label for="email"> Full Name: </label>
	<Input type="text" name="name" id="name" placeholder="Benjamin Bernal" override={inputOverride} />

	<RadioGroup
		description={'Are you a returning patient?'}
		id="returning"
		name="returning"
		items={[
			{ label: 'Yes', value: 'yes' },
			{ label: 'No', value: 'no' }
		]}
	/>
	<!-- <RadioGroup name="returning" id="returning" >
		<label for="returning">Are you a returning patient? </label>
		<Radio>Yes</Radio>
		<Radio>No</Radio>
	</RadioGroup> -->
	<Button type="submit">Subscribe</Button>
</form>

<style>
	form {
		margin: 0 auto;
		padding: 20px;
		border: 1px solid black;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		border-radius: 6px;
		margin: 40px;
		max-width: 500px;
	}
	label {
		align-self: flex-start;
		margin-bottom: 10px;
	}
	/* form > button {
		width: max-content;
	} */
</style>
