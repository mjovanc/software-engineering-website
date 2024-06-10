<script>
	import { concurrent } from 'svelte-typewriter'
</script>

<div class="max-w-6xl mx-auto mb-24 pt-56 text-center">
	<h1 id="home" class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white" use:concurrent={{ delay: 60, interval: 120, cursor: true }}>
		We invest in the engineers of tomorrow
	</h1>
	<p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
		Welcome to the official website for the Software Engineering Community. Here, we come together to share, discuss, and learn from each other.
	</p>
	<a href="https://x.com/i/communities/1699807431709041070" target="_blank" class="join-btn inline-flex items-center border border-borderGray rounded-lg justify-center px-5 py-3 text-base font-medium text-center text-white bg-gray-600 rounded-lg hover:bg-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
		Join us on 𝕏
	</a>
</div>

<style>
    .join-btn {
        transition: background-color 0.6s ease; /* Adjust the duration (0.5s) as needed */
    }
</style>

