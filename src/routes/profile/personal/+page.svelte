<script>
  import { goto } from '$app/navigation';

  let data = {
    personal: {
      user_type: 'เกษตรกร',
      email: 'user@example.com',
      prefix: 'นาย',
      firstname: 'สมชาย',
      lastname: 'ใจดี',
      id_number: '1234567890123',
      idcard_file: '',
      birthday: '1990-01-01',
      address: '123 หมู่บ้านตัวอย่าง',
      phone_number: '099-999-9915'
    },
    durian: {
      durian_type: "หมอนทอง",
      durian_age: '5',
      tree_count: '20',
      flowering_startdate: "2025-03-15",
      harvest_month: "มิถุนายน",
      weight_expected: "1500.5"
    },
    farm: {
      location: 'https://www.google.com/maps?q=14.973211,102.08432'
    },
    titledeed: {
      titledeed_num: 'TD-1001',
      titledeed_file: ''
    }
  };

  const labels = {
    personal: {
      user_type: 'ประเภทผู้ใช้',
      prefix: 'คำนำหน้า',
      email: 'อีเมล',
      firstname: 'ชื่อ',
      lastname: 'นามสกุล',
      id_number: 'หมายเลขบัตรประชาชน',
      idcard_file: 'อัปโหลดรูปภาพบัตรประชาชน',
      birthday: 'วันเกิด',
      address: 'ที่อยู่',
      phone_number: 'เบอร์โทรศัพท์'
    }
  };

  // เก็บค่าชั่วคราวระหว่างแก้ไข
  let formData = structuredClone(data.personal);

  // ฟังก์ชันจำลอง
  function saveData() {
    data.personal = { ...formData };
    alert('✅ บันทึกข้อมูลเรียบร้อย');
    goto('/profile');
  }

  function cancelEdit() {
    formData = structuredClone(data.personal);
    goto('/profile');
  }
</script>

<h1>บัญชีผู้ใช้</h1>

<!-- ข้อมูลส่วนตัว -->
<form class="profile" on:submit|preventDefault={saveData}>
  <fieldset class="card">
    <legend>
      ข้อมูลส่วนตัว
      <div class="buttons">
        <button type="submit" class="save">บันทึก</button>
        <button type="button" class="cancel" on:click={cancelEdit}>ยกเลิก</button>
      </div>
    </legend>

    {#each Object.entries(formData) as [key, value]}
      <div class="field">
        <label>{labels.personal[key]}</label>

        {#if key === 'idcard_file'}
          <input
            type="file"
            on:change={(e) => formData[key] = e.target.files[0]?.name || ''}
          />
        {:else if key === 'birthday'}
          <input type="date" bind:value={formData[key]} />
        {:else if key === 'email'}
          <input type="email" bind:value={formData[key]} />
        {:else if key === 'phone_number'}
          <input type="tel" bind:value={formData[key]} />
        {:else}
          <input type="text" bind:value={formData[key]} />
        {/if}
      </div>
    {/each}
  </fieldset>
</form>

<style>
  .profile {
    font-family: 'Prompt', sans-serif;
    margin: 0 auto;
  }

  h1 {
    color: #010b05;
    margin-bottom: 16px;
  }

  fieldset.card {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 3px 8px rgba(0,0,0,0.1);
    padding: 20px;
    margin-bottom: 20px;
    border: none;
  }

  legend {
    font-weight: 700;
    font-size: 1.2rem;
    color: #14532d;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .buttons {
    display: flex;
    gap: 8px;
    margin-left: 20px;
  }

  .field {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 8px;
  }

  label {
    width: 220px;
    font-weight: 600;
    color: #374151;
  }

  input {
    flex: 1;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    padding: 6px;
  }

  button {
    padding: 6px 12px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    font-weight: 600;

  }

  .save {
    background-color: #16a34a;
    color: white;
  }

  .cancel {
    background-color: #dc2626;
    color: white;
  }

  .save:hover {
    background-color: #15803d;
  }

  .cancel:hover {
    background-color: #b91c1c;
  }
</style>
