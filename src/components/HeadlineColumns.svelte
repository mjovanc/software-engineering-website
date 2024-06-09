<script>
	const columns = [
		{
			title: 'Share',
			description: 'Facilitating seamless knowledge exchange.'
		},
		{
			title: 'Discuss',
			description: 'Encouraging dynamic idea exchange and problem-solving.'
		},
		{
			title: 'Learn',
			description: 'Exploring a journey of continuous growth and skill enhancement.'
		}
	];
</script>

<section class="py-12 mb-20">
	<div class="max-w-6xl mx-auto">
		<div class="text-center mb-12">
			<h2 class="leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
				What we value
			</h2>
		</div>
		<div class="mt-10">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				{#each columns as column}
					<div class="value-card text-center p-6 border border-borderGray rounded-lg">
						<div class="text-left ml-4">
							{#if column.title === 'Share'}
							<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.122 17.645a7.185 7.185 0 0 1-2.656 2.495 7.06 7.06 0 0 1-3.52.853 6.617 6.617 0 0 1-3.306-.718 6.73 6.73 0 0 1-2.54-2.266c-2.672-4.57.287-8.846.887-9.668A4.448 4.448 0 0 0 8.07 6.31 4.49 4.49 0 0 0 7.997 4c1.284.965 6.43 3.258 5.525 10.631 1.496-1.136 2.7-3.046 2.846-6.216 1.43 1.061 3.985 5.462 1.754 9.23Z"/>
							</svg>
							{/if}

							{#if column.title === 'Discuss'}
								<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
									<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"/>
								</svg>
							{/if}

							{#if column.title === 'Learn'}
							<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
							</svg>
							{/if}

						</div>
						<p class="mt-4 text-base leading-6 text-gray-600 dark:text-gray-300"><span class="font-extrabold">{column.title}.</span> {column.description}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
    .value-card {
        transition: background-color 0.6s ease; /* Adjust the duration (0.5s) as needed */
    }

    .value-card:hover {
        background-color: rgba(73, 73, 73, 0.32);
    }
</style>