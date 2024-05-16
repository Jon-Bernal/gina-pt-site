<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	// import './styles.css'
	import { SvelteUIProvider } from '@svelteuidev/core';
</script>

<SvelteUIProvider withNormalizeCSS withGlobalStyles>
	<div class="app">
		<Header />
		<main>
			<slot />
		</main>
		<!-- <Footer /> -->
	</div>
</SvelteUIProvider>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

	:root {
		--font: 'Roboto', sans-serif;
		--link-color: #323232;
		--font-colot: #323232;
		--primary-color: #7ce3ff;
		--secondary-color: #f96743;
		--box-shadow-lvl1: 0px 0px 4px black;
	}

	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
