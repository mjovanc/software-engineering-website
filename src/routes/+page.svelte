<script lang="ts">
	import { onMount } from 'svelte';
	import anime from 'animejs/lib/anime.js';

	// Set page title on component mount
	let pageTitle = 'Software Engineering Network';
	onMount(() => {
		document.title = pageTitle;

		// Initialize the animation when the component mounts
		anime({
			targets: '.rgb-text',
			color: ['#ff0000', '#00ff00', '#0000ff', '#ff0000'],
			duration: 15000,
			easing: 'linear',
			loop: true,
			// To ensure the animation is smooth
			autoplay: true,
			direction: 'alternate'
		});
	});

	const experts = [
		{
			name: "Uncle Bob Martin",
			xHandle: "unclebobmartin",
			title: "Author, Agile Coach, and Software Craftsmanship Pioneer",
			image: "/experts/unclebobmartin.jpg"
		},
		{
			name: "ThePrimeagen",
			xHandle: "ThePrimeagen",
			title: "CEO @ TheStartup",
			image: "/experts/theprimeagen.jpg"
		},
		{
			name: "Josh Long",
			xHandle: "starbuxman",
			title: "Spring Developer Advocate",
			image: "/experts/starbuxman.jpg",
		},
		{
			name: "Daniel Lemire",
			xHandle: "lemire",
			title: "Computer Science Professor at the University of Quebec",
			image: "/experts/lemire.jpg",
		},
		{
			name: "Kevlin Henney",
			xHandle: "KevlinHenney",
			title: "Software Development Consultant, Trainer, Speaker and Writer",
			image: "/experts/KevlinHenney.jpg",
		}
	];

	// Define the communities array with image paths, names, and links
	const communities = [
		{
			name: 'Software Engineering',
			image: '/communities/swe.jpeg',
			link: 'https://x.com/i/communities/1699807431709041070'
		},
		{
			name: 'Rust Programming Language',
			image: '/communities/rust.png',
			link: 'https://x.com/i/communities/1733520006279815231'
		},
		{
			name: 'Go Programming Language',
			image: '/communities/go.png',
			link: 'https://x.com/i/communities/1817186904846029101'
		},
		{
			name: 'DevOps | SRE',
			image: '/communities/devops.jpeg',
			link: 'https://x.com/i/communities/1523681883384549376'
		},
		{
			name: 'Machine Learning',
			image: '/communities/ml.jpeg',
			link: 'https://x.com/i/communities/1760409305298174098'
		}
	];

	const partners = [
		{
			name: 'Sevalla',
			image: '/partners/sevalla.png',
			link: 'https://sevalla.com'
		},
		{
			name: 'ByteSizeGo',
			image: '/partners/bytesizego.png',
			link: 'https://www.bytesizego.com'
		},
	];
</script>

<h1 class="regular-font text-black uppercase dark:text-white">
	We invest in the <span class="rgb-text italic">engineers</span> of tomorrow.
</h1>
<p class="mt-6 text-lg regular-font text-black dark:text-gray max-w-4xl">
	Welcome to the official website for the Software Engineering Network. Here, we come together to
	share, discuss, and learn from each other.
</p>

<!-- Experts Section -->
<div class="experts-section mt-16 max-w-6xl mx-auto">
	<h2 class="text-2xl mb-4 regular-font text-black uppercase dark:text-white">Notable Members</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each experts as expert}
			<div class="expert-card border border-full-white dark:border-gray-light rounded-lg text-center bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500">
				<img src={expert.image} alt={expert.name} class="expert-image mx-auto mt-4 mb-4 w-24 h-24 rounded-full transform transition duration-500"/>
				<h3 class="text-xl regular-font mb-1 text-black dark:text-white flex items-center justify-center">
					{expert.name}
					<a
						href="https://x.com/{expert.xHandle}"
						target="_blank"
						rel="noopener noreferrer"
						class="text-sm text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-purple ml-2 no-hover-effect">
						@{expert.xHandle}
					</a>
				</h3>
				<p class="text-xs bold-font mt-2 mb-4 text-black dark:text-white">{expert.title}</p>
<!--				<p class="text-sm mt-4 mb-4 text-black dark:text-white italic">"{expert.quote}"</p>-->
			</div>
		{/each}
	</div>
</div>

<!-- Community Section -->
<!--<div class="mt-16 max-w-6xl mx-auto">
	<h2 class="text-2xl mb-4 regular-font text-black uppercase dark:text-white">Our Communities</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each communities as community}
			<a href={community.link} class="community-card-link">
				<div
					class="community-card border border-full-white dark:border-gray-light rounded-lg text-center bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500"
				>
					<img
						src={community.image}
						width=""
						alt={community.name}
						class="community-image mx-auto mb-2 transform transition duration-500"
					/>
					<div class="text-lg regular-font mb-1 text-black dark:text-white">{community.name}</div>
				</div>
			</a>
		{/each}
	</div>
</div>-->

<!-- Partners Section -->
<div class="mt-16 max-w-6xl mx-auto">
	<h2 class="text-2xl mb-4 regular-font text-black uppercase dark:text-white">Partners</h2>
	<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
		{#each partners as community}
			<a href={community.link} class="partner-card-link no-hover-effect">
				<div
					class="partner-card bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500"
				>
					<img
						src={community.image}
						width=""
						alt={community.name}
						class="partner-image mx-auto mb-2 transform transition duration-500"
					/>
				</div>
			</a>
		{/each}
	</div>
</div>

<style>
    .expert-image {
        filter: grayscale(100%);
        transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    .expert-card {
        overflow: hidden;
        transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }

    .expert-card:hover .expert-image {
        filter: grayscale(0%);
        transform: scale(1.05);
    }

    .expert-card:hover {
        background-color: rgba(0, 0, 0, 0); /* Transparent background */
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); /* Add a subtle shadow effect */
    }


	.community-image {
		filter: grayscale(100%);
		transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
		width: 100%; /* Ensure the image fits the card width */
		height: auto; /* Maintain the aspect ratio */
	}

	.community-card {
		overflow: hidden; /* Prevent the image from overflowing */
		transition: background-color 0.3s ease; /* Adjust the duration as needed */
	}

	.community-card:hover .community-image {
		filter: grayscale(0%);
		transform: scale(1.05); /* Zoom in the image by 5% */
	}

	.community-card:hover {
		background-color: rgba(0, 0, 0, 0); /* Transparent black background */
	}

	/* Remove the underline from links */
	.community-card-link {
		text-decoration: none;
		color: inherit;
		display: block;
	}

  .partner-image {
      filter: grayscale(100%);
      transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
      max-height: 150px; /* Set a consistent maximum height */
      width: auto; /* Maintain aspect ratio */
      margin: auto; /* Center the image inside the card */
  }

  .partner-card {
      margin: 1rem;
      display: flex;
      align-items: center; /* Center vertically */
      justify-content: center; /* Center horizontally */
      height: 200px; /* Set a consistent height for all cards */
      transition: background-color 0.3s ease; /* Adjust the duration as needed */
  }

  .partner-card:hover .partner-image {
      filter: grayscale(0%);
      transform: scale(1.02); /* Zoom in the image by 5% */
  }

  .partner-card:hover {
      background-color: rgba(0, 0, 0, 0); /* Transparent black background */
  }

  /* Remove the underline from links */
  .partner-card-link {
      text-decoration: none;
      color: inherit;
      display: block;
  }
</style>
