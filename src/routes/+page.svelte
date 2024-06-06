<script>
	import Navbar from '../components/Navbar.svelte';
	import Body from '../components/Body.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<Navbar />
<Body />
<Footer />

<style lang="postcss">
    :global(html) {
        background-color: theme('colors.background');
        background-image: url('/stars.png');
        background-repeat: repeat;
        background-attachment: fixed;
        background-size: 500px;
    }
    :global(h1) {
        @apply font-jetbrains text-primary;
    }
</style>