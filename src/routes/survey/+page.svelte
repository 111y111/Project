<script>
  import SurveyHeader from '$lib/SurveyHeader.svelte';
  import SurveyItem from '$lib/SurveyItem.svelte';
  import { aspects } from '$lib/survey.js';
</script>

<section class="wrap">
  <!-- Header -->
  <SurveyHeader 
    title="สำรวจเพาะปลูก 8 ด้าน" 
    subtitle="อัปเดตสถานะการประเมินมาตรฐาน GAP" 
  />

  <!-- Grid ของ Survey Items -->
  <section class="grid">
    {#each aspects as item, i}
      <SurveyItem {...item} />
    {/each}
  </section>
</section>

<style>
  .wrap { 
    padding: 16px; 
    max-width: 1200px;
    margin: 0 auto;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }
</style>
