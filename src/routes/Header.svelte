<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.svg';
	import { Image } from '@svelteuidev/core';
	import { onMount } from 'svelte';

	let currentPath: string;
	onMount(() => {
		currentPath = window.location.pathname;
		console.log('currentPath :>> ', currentPath);
	});
</script>

<header>
	<div class="logo">
		<svg height="75px" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
			<!-- Right Side -->
			<polygon points="0,0 512,128 512,0" style="fill:#55b6fe;stroke:#55b6fe;stroke-width:0" />
			<polygon points="0,0 512,256 512,128" style="fill:#1a5ab1;stroke:#1a5ab1;stroke-width:0" />
			<polygon points="0,0 512,256 512,384" style="fill:#0f115d;stroke:#0f115d;stroke-width:0" />
			<polygon points="0,0 512,512 512,384" style="fill:#c7cfa8;stroke:#c7cfa8;stroke-width:0" />
			<!-- Bottom -->
			<polygon points="0,0 512,512 384,512" style="fill:#c3bf53;stroke:#c3bf53;stroke-width:0" />
			<polygon points="0,0 256,512 384,512" style="fill:#c28944;stroke:#c28944;stroke-width:0" />
			<polygon points="0,0 128,512 256,512" style="fill:#c87736;stroke:#c87736;stroke-width:0" />
			<polygon points="0,0 0,512 128,512" style="fill:#a32f3c;stroke:#a32f3c;stroke-width:0" />
			<rect width="512" height="512" rx="20" style="fill:none;stroke:black;stroke-width: 20; " />
		</svg>
		<h2 class="logo_text">Prism Physical Therapy</h2>
	</div>
	<nav>
		<!-- <a href="/" class:active={$page.path.includes(href)}>Home</a> -->
		<a href="/" on:click={() => (currentPath = '/')} data-active={`${currentPath === '/'}`}>Home</a>
		<a
			href="/about"
			on:click={() => (currentPath = '/about')}
			data-active={`${currentPath === '/about'}`}>About</a
		>
		<!-- <a href="blog">Blog</a> -->
		<!-- <a href="/videos">Videos</a> -->
		<a href="/faq" on:click={() => (currentPath = '/faq')} data-active={`${currentPath === '/faq'}`}
			>FAQ</a
		>
		<a
			href="/contact"
			on:click={() => (currentPath = '/contact')}
			data-active={`${currentPath === '/contact'}`}>Contact Me</a
		>
	</nav>
</header>

<style>
	header {
		width: 100%;
		/* box-shadow: var(--box-shadow-lvl1); */
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 40px;
		/* background-color: white; */
		background-color: #323232;
		box-sizing: border-box;
		--text-color: white;
	}
	.logo {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 100%;
		/* padding: 0 20px; */
		/* box-shadow: var(--box-shadow-lvl1); */
		--logo-height: 60px;
	}
	.logo_text {
		font-family: var(--font);
		margin-left: 20px;
		font-size: 36px;
		font-weight: 600;
		/* color: var(--dark-blue); */
		color: var(--text-color);
	}
	nav {
		box-sizing: border-box;
		display: flex;
		align-items: center;
	}
	nav > a {
		margin-left: 20px;
		text-decoration: none;
		color: var(--text-color);
		font-family: var(--font);
		font-size: 1.25rem;
	}
	a[data-active='true'] {
		border-bottom: 2px solid var(--text-color);
		/* border-bottom: 2px solid black; */
	}
	nav > a:hover {
		color: var(--orange);
	}
	[data-active='true']:hover {
		color: var(--orange);
		border-bottom: 2px solid var(--orange);
	}
</style>
