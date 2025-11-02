<script>
  let data = {
    personal: {
      userType: 'เกษตรกร',
      email: 'user@example.com',
      firstname: 'สมชาย',
      lastname: 'ใจดี',
      idcard: '1234567890123',
      birthday: '1990-01-01',
      address: '123 หมู่บ้านตัวอย่าง'
    },
    durian: {
      durianType: 'หมอนทอง',
      durianOther: ''
    },
    farm: {
      farmName: 'แปลงตัวอย่าง',
      farmSize: '10 ไร่',
      location: 'จังหวัดตัวอย่าง'
    },
    landDoc: {
      deedNumber: '123/456',
      issueDate: '2020-01-01',
      file: 'deed.pdf'
    }
  };

  // สำหรับ edit field
  let editField = null;
  let tempValue = '';

  function startEdit(section, key) {
    editField = `${section}.${key}`;
    tempValue = data[section][key];
  }

  function saveEdit(section, key) {
    data[section][key] = tempValue;
    editField = null;
  }

  function cancelEdit() {
    editField = null;
  }
</script>

<section class="profile">
  <h1>บัญชีผู้ใช้</h1>

  <!-- ข้อมูลส่วนตัว -->
  <div class="card">
    <h2>ข้อมูลส่วนตัว</h2>
    {#each Object.entries(data.personal) as [key, value]}
      <div class="field">
        <label>{key}</label>
        {#if editField === `personal.${key}`}
          <input bind:value={tempValue} />
          <button type="button" on:click={() => saveEdit('personal', key)}>💾 บันทึก</button>
          <button type="button" on:click={cancelEdit}>❌ ยกเลิก</button>
        {:else}
          <input type="text" value={value} readonly />
          <button type="button" on:click={() => startEdit('personal', key)}>✏️</button>
        {/if}
      </div>
    {/each}
  </div>

  <!-- ข้อมูลพันธุ์ทุเรียน -->
  <div class="card">
    <h2>ข้อมูลพันธุ์ทุเรียน</h2>
    {#each Object.entries(data.durian) as [key, value]}
      <div class="field">
        <label>{key}</label>
        {#if editField === `durian.${key}`}
          <input bind:value={tempValue} />
          <button type="button" on:click={() => saveEdit('durian', key)}>💾</button>
          <button type="button" on:click={cancelEdit}>❌</button>
        {:else}
          <input type="text" value={value} readonly />
          <button type="button" on:click={() => startEdit('durian', key)}>✏️</button>
        {/if}
      </div>
    {/each}
  </div>

  <!-- ข้อมูลแปลงเพาะปลูก -->
  <div class="card">
    <h2>ข้อมูลแปลงเพาะปลูก</h2>
    {#each Object.entries(data.farm) as [key, value]}
      <div class="field">
        <label>{key}</label>
        {#if editField === `farm.${key}`}
          <input bind:value={tempValue} />
          <button type="button" on:click={() => saveEdit('farm', key)}>💾</button>
          <button type="button" on:click={cancelEdit}>❌</button>
        {:else}
          <input type="text" value={value} readonly />
          <button type="button" on:click={() => startEdit('farm', key)}>✏️</button>
        {/if}
      </div>
    {/each}
  </div>

  <!-- หลักฐานการใช้ที่ดิน -->
  <div class="card">
    <h2>หลักฐานการใช้ที่ดิน</h2>
    {#each Object.entries(data.landDoc) as [key, value]}
      <div class="field">
        <label>{key}</label>
        {#if editField === `landDoc.${key}`}
          <input bind:value={tempValue} />
          <button type="button" on:click={() => saveEdit('landDoc', key)}>💾</button>
          <button type="button" on:click={cancelEdit}>❌</button>
        {:else}
          <input type="text" value={value} readonly />
          <button type="button" on:click={() => startEdit('landDoc', key)}>✏️</button>
        {/if}
      </div>
    {/each}
  </div>

  <div class="btn-group">
    <button class="btn" on:click={() => alert('ข้อมูลถูกยืนยัน ✅')}>ยืนยันข้อมูล</button>
  </div>
</section>

<style>
  .profile {font-family: 'Prompt', sans-serif; }
  h1 { color: #010b05; margin-bottom: 16px; }
  .card { background: #fff; border-radius: 12px; box-shadow: 0 3px 8px rgba(0,0,0,0.1); padding: 20px; margin-bottom: 20px; }
  .field { display: flex; align-items: center; gap: 6px; margin-bottom: 8px; }
  label { width: 150px; font-weight: 600; }
  input[readonly] { background-color: #f3f4f6; border: 1px solid #d1d5db; border-radius: 6px; padding: 6px; flex: 1; }
  input { flex: 1; border: 1px solid #d1d5db; border-radius: 6px; padding: 6px; }
  button { padding: 6px 10px; border-radius: 6px; border: none; cursor: pointer; }
  .btn-group { display: flex; justify-content: flex-end; margin-top: 16px; }
  .btn { background-color: #166534; color: #fff; padding: 10px 16px; border-radius: 8px; font-weight: 600; }
</style>
