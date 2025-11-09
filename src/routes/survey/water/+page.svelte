<script>
  export let data;
  export let form;
  let selectedQ1 = form?.q1 || '';
</script>

<h1>💧 แบบประเมินการจัดการน้ำ</h1>

{#if form?.errors}
  <p class="error">มีข้อผิดพลาด โปรดตรวจสอบข้อมูล</p>
{/if}

{#if form?.success}
  <div class="success-message">✅ ส่งข้อมูลเรียบร้อยแล้ว</div>
{/if}

<form method="POST" enctype="multipart/form-data" action="?/submit">
  <div class="card">
    <p>Q1: แหล่งน้ำที่ใช้ในการปลูกมาจากไหน?</p>
    <select name="q1" bind:value={selectedQ1} required>
      <option value="">-- เลือก --</option>
      <option value="น้ำบาดาล">น้ำบาดาล</option>
      <option value="คลองสาธารณะ">คลองสาธารณะ</option>
      <option value="น้ำฝน">น้ำฝน</option>
      <option value="น้ำประปา">น้ำประปา</option>
      <option value="อื่นๆ">อื่นๆ</option>
    </select>
    {#if form?.errors?.q1}<div class="error">{form.errors.q1}</div>{/if}
  </div>

  {#if selectedQ1 === 'อื่นๆ'}
    <div class="card">
      <p>โปรดระบุแหล่งน้ำอื่นๆ</p>
      <input type="text" name="q1Other" value={form?.q1Other ?? ''} />
      {#if form?.errors?.q1Other}<div class="error">{form.errors.q1Other}</div>{/if}
    </div>
  {/if}

  <div class="card">
    <p>Q2: แหล่งน้ำผ่านการบำบัดก่อนใช้หรือไม่?</p>
    <label><input type="radio" name="q2" value="เคยผ่านการบำบัด" checked={form?.q2==='เคยผ่านการบำบัด'}> เคยผ่านการบำบัด</label>
    <label><input type="radio" name="q2" value="ไม่เคยผ่านการบำบัด" checked={form?.q2==='ไม่เคยผ่านการบำบัด'}> ไม่เคยผ่านการบำบัด</label>
    {#if form?.errors?.q2}<div class="error">{form.errors.q2}</div>{/if}
  </div>

  <div class="card">
    <p>Q3: อัปโหลดรูปภาพแหล่งน้ำ</p>
    <input type="file" name="q3" accept="image/*" />
    {#if form?.errors?.q3}<div class="error">{form.errors.q3}</div>{/if}
  </div>

  <div class="card">
    <p>Q4: แหล่งน้ำหลังเก็บเกี่ยวมาจากไหน?</p>
    <input type="text" name="q4" value={form?.q4 ?? ''} />
    {#if form?.errors?.q4}<div class="error">{form.errors.q4}</div>{/if}
  </div>

  <div class="actions">
    <button type="submit">ส่งข้อมูล</button>
</div>
</form>

<form method="POST" action="?/reset" style="margin-top:1rem;">
  <button type="submit" class="reset">รีเซ็ตคำตอบ</button>
</form>

<style>
.card { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:14px; margin-bottom:12px; }
.actions { display:flex; gap:10px; }
.error { color:#b91c1c; margin-top:4px; }
.success-message { text-align:center; color:#16a34a; font-weight:bold; margin-top:20px; background:#ecfdf5; padding:10px; border-radius:8px; }
</style>
