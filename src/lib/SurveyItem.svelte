<script>
  // Props จาก aspects
  let { title, lastUpdated = '', note = '', ctaLabel = 'ดูรายละเอียด', imageAlt = '' } = $props();
</script>

<div class="card">
  <div class="content">
    <h3>{title}</h3>

    {#if lastUpdated}
      <p class="meta">บันทึกข้อมูลล่าสุด {lastUpdated}</p>
    {:else}
      <p class="meta">ยังไม่เคยบันทึกข้อมูล</p>
    {/if}

    {#if note}
      <p class="note">{note}</p>
    {/if}

    <!-- ปุ่มเปลี่ยนเป็นลิงก์ไปยังฟอร์ม -->
    <a class="btn" href={`/survey/${imageAlt.toLowerCase()}`}>{ctaLabel}</a>
  </div>
</div>

<style>
  .card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    padding: 16px;
    transition: transform 0.2s;
  }

  .card:hover {
    transform: translateY(-2px);
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  h3 { margin: 0; font-size: 18px; font-weight: 600; }

  .meta { font-size: 13px; color: #6b7280; margin: 0; }
  .note { font-size: 14px; color: #374151; margin: 0; }

  /* ปรับปุ่มเป็นลิงก์ */
  .btn {
    margin-top: 8px;
    background: #3b82f6;
    color: #fff;
    border: none;
    padding: 8px 12px;
    border-radius: 8px;
    text-decoration: none;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s;
  }

  .btn:hover {
    background: #2563eb;
  }
</style>
