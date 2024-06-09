<script>
	let isOpen = false;
</script>

<nav class="border-b border-borderGray bg-primary-transparent p-4 fixed top-0 w-full z-50">
	<div class="max-w-6xl mx-auto flex justify-between items-center">
		<a href="#" class="text-textPrimary text-xl font-bold">Software Engineering Community</a>
		<button class="text-textPrimary lg:hidden" on:click={() => isOpen = !isOpen}>
			☰
		</button>
		<div class="hidden lg:flex space-x-4">
			<a href="#home" class="text-textPrimary">Home</a>
			<a href="#about" class="text-textPrimary">About</a>
			<a href="#team" class="text-textPrimary">Our Team</a>
			<a href="#contact" class="text-textPrimary">Contact</a>
		</div>
	</div>
	{#if isOpen}
		<div class="lg:hidden flex flex-col space-y-2 mt-2">
			<a href="#home" class="text-textPrimary">Home</a>
			<a href="#about" class="text-textPrimary">About</a>
			<a href="#team" class="text-textPrimary">Our Team</a>
			<a href="#contact" class="text-textPrimary">Contact</a>
		</div>
	{/if}
</nav>

<style>
    nav {
        @apply bg-primary p-4 font-jetbrains;
    }
    nav a {
        @apply text-textPrimary;
    }

    .bg-primary-transparent {
        background-color: rgba(0, 0, 0, 0.8); /* Adjust RGB values and opacity as needed */
    }
</style>
