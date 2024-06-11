<script>
	import { enhance } from '$app/forms';
	import { Button, Container, Input, Text, Textarea } from '@svelteuidev/core';
	const inputOverride = {
		width: '100%',
		marginBottom: '20px',
		marginLeft: '20px',
		padding: '0.5rem'
	};
</script>

<Container size="md">
	<form
		action="?/submit"
		method="POST"
		use:enhance={() => {
			console.log('testing');
		}}
	>
		<h2>Contact Me</h2>
		<label for="email">Your email</label>
		<Input
			type="email"
			name="email"
			id="email"
			placeholder="Benjamin@example.com"
			override={inputOverride}
		/>

		<label for="name">Your name</label>
		<Input
			type="text"
			name="name"
			id="name"
			placeholder="Benjamin Bernal"
			override={inputOverride}
		/>

		<label for="message">Message</label>
		<Textarea
			name="message"
			id="message"
			resize={true}
			placeholder="Benjamin Bernal"
			override={inputOverride}
		/>

		<Button type="submit">Send</Button>
	</form>
</Container>

<style>
</style>
