<script>
	// Define an array of team members with their information
	const teamMembers = [
		{ name: 'Anthony Waldsmith', x: 'anthonywaldz', avatar: 'https://pbs.twimg.com/profile_images/1537490192159846403/sTsGcoS9_400x400.jpg'},
		{ name: 'Carlos Aponte', x: '0xCaponte', avatar: 'https://pbs.twimg.com/profile_images/1568565425213956096/gkZQBqjO_400x400.jpg' },
		{ name: 'Robin Hallabro-Kokko', x: 'hallabrokokko', avatar: 'https://pbs.twimg.com/profile_images/1684431913296048130/6m3omfdQ_400x400.jpg' },
		{ name: 'khushi', x: 'khushi_ftw', avatar: 'https://pbs.twimg.com/profile_images/1782662557473665024/0Ot4tOXe_400x400.jpg' },
		{ name: 'Nathaniel Knudsen', x: 'stoicswe', avatar: 'https://pbs.twimg.com/profile_images/1721553766510419968/7zQpiHtP_400x400.png' },
		{ name: 'Arthur', x: 'arthurdotwork', avatar: 'https://pbs.twimg.com/profile_images/1763983127670583296/zbpQ0FwX_400x400.jpg' },
	];
</script>

<div class="mt-16 max-w-6xl mx-auto">
	<h3 class="text-2xl font-bold text-textPrimary mb-4">Co-Admins</h3>
	<div class="grid grid-cols-3 gap-4">
		{#each teamMembers as member}
			<div class="profile-card border border-borderGray p-4 rounded-lg text-center">
				<img src={member.avatar} width=150 alt="Profile Picture" class="profile-image rounded-full mx-auto mb-2">
				<div class="text-lg font-bold mb-1 text-textPrimary">{member.name}</div>
				<a href="https://x.com/{member.x}" target="_blank" rel="noopener noreferrer" class="text-textSecondary">@{member.x}</a>
			</div>
		{/each}
	</div>
</div>

<style>
    /* Add any custom styling for the component here */
</style>
