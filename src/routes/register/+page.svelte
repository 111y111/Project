<script>
  import { goto } from '$app/navigation';

  let step = 1;
  let userType = ''; // เกษตรกร / นิติบุคคล

  let form = {
    email: '',
    firstname: '',
    lastname: '',
    idcard: '',
    birthday: '',
    address: '',
    durianType: '',
    durianOther: ''
  };

  function nextStep() {
    if (step === 1 && !userType) {
      alert('กรุณาเลือกประเภทผู้ใช้งานก่อน');
      return;
    }
    if (step === 2 && !form.durianType) {
      alert('กรุณาเลือกพันธุ์ทุเรียนก่อน');
      return;
    }
    step++;
  }

  function prevStep() {
    step--;
  }

  // ✅ เมื่อกดยืนยันครั้งสุดท้ายในหน้าลงทะเบียน
  function goToProfile() {
    const data = { userType, ...form };
    // ส่งข้อมูลไปหน้า profile ผ่าน query string หรือ localStorage
    localStorage.setItem('registerData', JSON.stringify(data));
    goto('/profile');
  }
</script>

<section class="register">
  <h1>ลงทะเบียนเพื่อเข้าร่วมระบบมาตรฐาน GAP</h1>
  <p class="subtitle">ขั้นตอนที่ {step} จาก 2</p>

  <!-- Step 1 -->
  {#if step === 1}
  <div class="card">
    <h2>ข้อมูลส่วนตัว</h2>
    <p class="label">เลือกประเภทผู้ใช้งาน</p>

    <div class="user-type">
      <div class="option {userType === 'เกษตรกร' ? 'active' : ''}" on:click={() => (userType = 'เกษตรกร')}>
        <img src="/images/farmer.png" alt="เกษตรกร" />
        <span>เกษตรกร</span>
      </div>

      <div class="option {userType === 'นิติบุคคล' ? 'active' : ''}" on:click={() => (userType = 'นิติบุคคล')}>
        <img src="/images/company.png" alt="นิติบุคคล" />
        <span>นิติบุคคล</span>
      </div>
    </div>

    <div class="form">
      <label>อีเมล</label>
      <input type="email" bind:value={form.email} required />
      <label>ชื่อ</label>
      <input type="text" bind:value={form.firstname} required />
      <label>นามสกุล</label>
      <input type="text" bind:value={form.lastname} required />
      <label>เลขบัตรประจำตัวประชาชน</label>
      <input type="text" maxlength="13" bind:value={form.idcard} required />
      <label>วันเกิด</label>
      <input type="date" bind:value={form.birthday} required />
      <label>ที่อยู่</label>
      <textarea rows="3" bind:value={form.address}></textarea>
    </div>

    <div class="btn-group">
      <button class="btn next" on:click={nextStep}>ถัดไป</button>
    </div>
  </div>
  {/if}

  <!-- Step 2 -->
  {#if step === 2}
  <div class="card">
    <h2>เลือกพันธุ์ทุเรียนในแปลง</h2>
    <div class="durian-list">
      {#each ['หมอนทอง','ก้านยาว','ชะนี','หลงลับแล','กระดุมทอง','พวงมณี','อื่นๆ'] as type}
        <label class="radio">
          <input type="radio" name="durian" value={type} bind:group={form.durianType} />
          <span>{type}</span>
        </label>
      {/each}
    </div>

    {#if form.durianType === 'อื่นๆ'}
    <div class="form">
      <label>ระบุพันธุ์อื่นๆ</label>
      <input type="text" bind:value={form.durianOther} placeholder="ระบุชื่อพันธุ์ทุเรียน" />
    </div>
    {/if}

    <div class="btn-group">
      <button class="btn back" on:click={prevStep}>ย้อนกลับ</button>
      <button class="btn submit" on:click={goToProfile}>ยืนยัน</button>
    </div>
  </div>
  {/if}
</section>

<style>
  .register { max-width: 600px; margin: 0 auto; padding: 24px; font-family: 'Prompt', sans-serif; color: #1f2937; }
  .card { background: #fff; border-radius: 12px; box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1); padding: 20px; }
  h1 { text-align: center; color: #14532d; }
  .subtitle { text-align: center; color: #4b5563; margin-bottom: 16px; }
  .option { border: 2px solid transparent; padding: 8px; border-radius: 10px; cursor: pointer; transition: .2s; }
  .option.active { border-color: #166534; background-color: #dcfce7; }
  .form label { display: block; margin-top: 10px; font-weight: 500; }
  input, textarea { width: 100%; border: 1px solid #d1d5db; border-radius: 8px; padding: 8px; margin-top: 4px; }
  .btn-group { display: flex; justify-content: space-between; margin-top: 20px; }
  .btn { background: #166534; color: #fff; padding: 10px 16px; border-radius: 8px; border: none; cursor: pointer; }
  .btn.back { background: #9ca3af; }
  .radio { display: flex; align-items: center; gap: 6px; }
</style>
