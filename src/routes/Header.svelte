<script lang="ts">
	import { page } from '$app/stores';
	import logo from '$lib/assets/fun_prism.png';

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
			<div class="logo">
				<img src={logo} alt="Prism PT Logo" height="100" width="100" class="logo_img" />
				<h2 class="logo_text">Prism PT</h2>
			</div>
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
		justify-content: space-between;
		align-items: center;
		height: 100%;
		padding: 0 20px;
		box-shadow: var(--box-shadow-lvl1);
		--logo-height: 60px;
	}
	.logo {
		display: flex;
		align-items: center;
	}
	.logo_img {
		height: var(--logo-height);
		width: auto;
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
