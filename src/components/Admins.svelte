<script>
	// Define an array of team members with their information
	const teamMembers = [
		{ name: 'Marcus Cvjeticanin', x: 'mjovanc', avatar: 'https://pbs.twimg.com/profile_images/1788505805131534336/u0y57h6T_400x400.jpg'},
	];
</script>

<div class="max-w-6xl mx-auto">
	<h3 class="text-2xl font-bold text-textPrimary mb-4">Admin</h3>
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
