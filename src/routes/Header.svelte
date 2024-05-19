<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/logo.svg';
	import { Image } from '@svelteuidev/core';

	// let currentPath;
	// onMount(() => {
	// 	currentPath = window.location.pathname;
	// });
	// export let title;
	// export let href;
</script>

<header>
	<div class="header">
		<div class="logo_row">
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
			<a href="/">Home</a>
			<a href="/about">About</a>
			<!-- <a href="/contact">Contact Me</a> -->
			<!-- <a href="blog">Blog</a> -->
			<!-- <a href="/videos">Videos</a> -->
			<a href="/faq">FAQ</a>
		</nav>
	</div>
</header>

<style>
	.header {
		width: 100%;
		box-shadow: var(--box-shadow-lvl1);
	}
	.logo_row {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		height: 100%;
		padding: 0 20px;
		box-shadow: var(--box-shadow-lvl1);
		--logo-height: 60px;
	}
	.logo_text {
		font-family: var(--font);
		margin-left: 20px;
		font-size: 32px;
		font-weight: 300;
	}
	nav {
		box-sizing: border-box;
		display: flex;
		padding: 20px 0;
		width: 100%;
		border-top: 1px solid black;
	}
	nav > a {
		margin-left: 20px;
		text-decoration: none;
		color: black;
		font-family: var(--font);
	}
</style>
