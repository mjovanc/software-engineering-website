<script>
	// Define an array of team members with their information
	const teamMembers = [
		{ name: 'Avantasia', x: 'Avantasia', avatar: 'https://pbs.twimg.com/profile_images/1278061250233188352/cIulp7Sm_400x400.png' },
		{ name: 'Filip Płotnicki', x: 'filipplotnicki', avatar: 'https://pbs.twimg.com/profile_images/1703446270835073024/nhoRhde9_400x400.jpg' },
		{ name: 'Dongwook', x: 'DongWookChung2', avatar: 'https://pbs.twimg.com/profile_images/1733575617810165760/uxe2tg7c_400x400.jpg' },
		{ name: 'Haitong Yu', x: 'haitong_yu', avatar: 'https://pbs.twimg.com/profile_images/1738313024480677888/LYVWhFEc_400x400.jpg' },
		{ name: 'Heath Henley', x: 'Heath_Henley', avatar: 'https://pbs.twimg.com/profile_images/1792688197324926976/ftsYQjLX_400x400.jpg' },
		{ name: 'Tim Ottinger', x: 'tottinge', avatar: 'https://pbs.twimg.com/profile_images/1600487552062033923/I57lai7y_400x400.jpg' },
		{ name: 'Zach Warunek', x: 'ZachWarunek', avatar: 'https://pbs.twimg.com/profile_images/1795293659472265216/5vKpJVRM_400x400.jpg' },
	];
</script>

<div class="mt-16 mb-16 max-w-6xl mx-auto ">
	<h3 class="text-2xl font-bold text-textPrimary mb-4">Moderators</h3>
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
