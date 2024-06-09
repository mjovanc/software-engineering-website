<script>
	import Navbar from '../components/Navbar.svelte';
	import Body from '../components/Body.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<div class="mx-auto bg-primary-transparent">
	<Navbar />
	<Body />
	<Footer />
</div>


<style lang="postcss">
    :global(html) {
        background-color: theme('colors.background');
        background-image: url('/stars.png');
        background-repeat: repeat;
        background-attachment: fixed;
        background-size: 500px;
    }

    :global(h1) {
        @apply font-jetbrains text-textPrimary text-4xl lg:text-5xl;
    }

    :global(h2) {
        @apply font-jetbrains text-textPrimary text-3xl lg:text-4xl;
    }

    :global(h3) {
        @apply font-jetbrains text-textPrimary text-2xl lg:text-3xl;
    }

    :global(h4) {
        @apply font-jetbrains text-textPrimary text-xl lg:text-2xl;
    }

    :global(h5) {
        @apply font-jetbrains text-textPrimary text-lg lg:text-xl;
    }

    :global(h6) {
        @apply font-jetbrains text-textPrimary text-base lg:text-lg;
    }

    :global(body) {
        font-family: 'JetBrains Mono', monospace;
        font-weight: lighter;
    }
</style>