<script>
	import Headline from './Headline.svelte';
	import HeadlineColumns from './HeadlineColumns.svelte';
	import Team from './Team.svelte';
	import Contact from './Contact.svelte';
	import About from './About.svelte';
</script>

<section class="container mx-auto p-4 bg-primary-transparent">
	<div class="container mx-auto mt-8">
		<Headline />
		<HeadlineColumns />
		<About />
		<Team />
		<Contact />

	</div>

</section>

<style>
    section {
        @apply container mx-auto p-4 bg-primary-transparent;
    }
    section h2 {
        @apply text-2xl font-bold mb-4 font-jetbrains text-primary;
    }
    section p {
        @apply text-textSecondary;
    }
    .bg-primary-transparent {
        background-color: rgba(0, 0, 0, 0.5); /* Adjust RGB values and opacity as needed */
    }
</style>
