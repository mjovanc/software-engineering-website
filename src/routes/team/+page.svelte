<script lang="ts">
  import { onMount } from 'svelte';

  // Set page title on component mount
  let pageTitle = 'Team - Software Engineering Community';
  onMount(() => {
    document.title = pageTitle;
  });

  const admins = [
    { name: 'Marcus Cvjeticanin', x: 'mjovanc', avatar: 'https://pbs.twimg.com/profile_images/1788505805131534336/u0y57h6T_400x400.jpg' },
  ];
  const coAdmins = [
    { name: 'Anthony Waldsmith', x: 'anthonywaldz', avatar: 'https://pbs.twimg.com/profile_images/1537490192159846403/sTsGcoS9_400x400.jpg' },
    { name: 'Carlos Aponte', x: '0xCaponte', avatar: 'https://pbs.twimg.com/profile_images/1800548764144263170/mpsgOkDO_400x400.jpg' },
    { name: 'Robin Hallabro-Kokko', x: 'hallabrokokko', avatar: 'https://pbs.twimg.com/profile_images/1684431913296048130/6m3omfdQ_400x400.jpg' },
    { name: 'Khushi', x: 'khushi_ftw', avatar: 'https://pbs.twimg.com/profile_images/1810401586746896385/y8DS5jwd_400x400.jpg' },
    { name: 'Nathaniel Knudsen', x: 'stoicswe', avatar: 'https://pbs.twimg.com/profile_images/1721553766510419968/7zQpiHtP_400x400.png' },
    { name: 'Arthur', x: 'arthurdotwork', avatar: 'https://pbs.twimg.com/profile_images/1763983127670583296/zbpQ0FwX_400x400.jpg' },
  ];
  const moderators = [
    { name: 'Avantasia', x: 'Avantasia', avatar: 'https://pbs.twimg.com/profile_images/1278061250233188352/cIulp7Sm_400x400.png' },
    { name: 'Filip Płotnicki', x: 'filipplotnicki', avatar: 'https://pbs.twimg.com/profile_images/1703446270835073024/nhoRhde9_400x400.jpg' },
    { name: 'Dongwook', x: 'DongWookChung2', avatar: 'https://pbs.twimg.com/profile_images/1733575617810165760/uxe2tg7c_400x400.jpg' },
    { name: 'Haitong Yu', x: 'haitong_yu', avatar: 'https://pbs.twimg.com/profile_images/1738313024480677888/LYVWhFEc_400x400.jpg' },
    { name: 'Heath Henley', x: 'Heath_Henley', avatar: 'https://pbs.twimg.com/profile_images/1792688197324926976/ftsYQjLX_400x400.jpg' },
    { name: 'Tim Ottinger', x: 'tottinge', avatar: 'https://pbs.twimg.com/profile_images/1600487552062033923/I57lai7y_400x400.jpg' },
    { name: 'Zach Warunek', x: 'ZachWarunek', avatar: 'https://pbs.twimg.com/profile_images/1795293659472265216/5vKpJVRM_400x400.jpg' },
    { name: 'Adrian Dittman', x: 'AdrianDittman', avatar: 'https://pbs.twimg.com/profile_images/1715183897297002496/67FPPcja_400x400.png' },
  ];
</script>

<!-- Add this part of the content in the Svelte file to include the title and coming soon message -->
<h1 class="text-xl2 mt-14 regular-font text-black uppercase dark:text-white">Team</h1>

<div class="mt-16 max-w-6xl mx-auto">
  <h3 class="text-2xl mb-4 font-bold regular-font text-black uppercase dark:text-white">Admin/Founder</h3>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each admins as member}
      <div class="profile-card border border-gray-light p-4 rounded-lg text-center bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500">
        <img src={member.avatar} width=150 alt="Profile Picture" class="profile-image rounded-full mx-auto mb-2 transform transition duration-500">
        <div class="text-lg regular-font font-bold mb-1 text-black dark:text-white">{member.name}</div>
        <a href="https://x.com/{member.x}" target="_blank" rel="noopener noreferrer" class="regular-font">@{member.x}</a>
      </div>
    {/each}
  </div>

  <h3 class="text-2xl mt-16 mb-4 font-bold regular-font text-black uppercase dark:text-white">Co-Admins</h3>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each coAdmins as member}
      <div class="profile-card border border-gray-light p-4 rounded-lg text-center bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500">
        <img src={member.avatar} width=150 alt="Profile Picture" class="profile-image rounded-full mx-auto mb-2 transform transition duration-500">
        <div class="text-lg regular-font font-bold mb-1 text-black dark:text-white">{member.name}</div>
        <a href="https://x.com/{member.x}" target="_blank" rel="noopener noreferrer" class="regular-font">@{member.x}</a>
      </div>
    {/each}
  </div>

  <h3 class="text-2xl mt-16 mb-4 font-bold regular-font text-black uppercase dark:text-white">Moderators</h3>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {#each moderators as member}
      <div class="profile-card border border-gray-light p-4 rounded-lg text-center bg-transparent hover:bg-black hover:bg-opacity-50 transition duration-500">
        <img src={member.avatar} width=150 alt="Profile Picture" class="profile-image rounded-full mx-auto mb-2 transform transition duration-500">
        <div class="text-lg regular-font font-bold mb-1 text-black dark:text-white">{member.name}</div>
        <a href="https://x.com/{member.x}" target="_blank" rel="noopener noreferrer" class="regular-font">@{member.x}</a>
      </div>
    {/each}
  </div>
</div>

<style>
  .profile-image {
    filter: grayscale(100%);
    transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  .profile-card:hover .profile-image {
    filter: grayscale(0%);
    transform: scale(1.05); /* Zoom in the image by 5% */
  }

  .profile-card {
    transition: background-color 0.3s ease; /* Adjust the duration as needed */
  }

  .profile-card:hover {
    background-color: rgba(0, 0, 0, 0.5); /* Transparent black background */
  }
</style>
