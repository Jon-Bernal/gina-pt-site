<script>
import { page } from '$app/stores';
import logo from "$lib/assets/fun_prism.png"
// import FaRegUser from 'svelte-icons/fa/FaRegUser.svelte'
</script>
<header>
  <div class="header">
    <div class="logo_row">
      <div class="logo">
        <img src={logo} alt="Prism PT Logo" height="100" width="100" class="logo_img"/> <h2 class="logo_text">Prism PT</h2>
      </div>
      <button class="account_btn">
        <svg class="account_svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path stroke-width="0" stroke="red" d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"></path></svg>
      </button>
      </div>
      <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact Me</a>
      <a href="blog">Blog</a>
      <a href="/videos">Videos</a>
      <!-- <a href="#">link6</a> -->
    </nav>
  </div>

</header>
<style>
  .header{
    width: 100%;
    /* height: 100px; */
    box-shadow: var(--box-shadow-lvl1);
  }
  .logo_row{
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
  .account_btn {
    height: var(--logo-height);
    width: auto;
    background: none;
    border: none;
    stroke-width: 1px;
  }
  .account_svg {
    height: 45px;
    width: auto;
  }

  nav {
    display: flex;
    padding: 20px;
    width: 100%;
    border-top: 1px solid black;
  }
  nav > a {
    margin-left: 20px;
    text-decoration: none;
    color: black;
    font-family: var(--font)
  }
</style>