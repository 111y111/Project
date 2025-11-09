<script>
  export let data;
  export let form; // รับข้อมูล error หรือ success จาก server
</script>

<h1>🚗 แบบประเมินยานพาหนะและอุปกรณ์</h1>

{#if form?.error}
  <p class="error">{form.error}</p>
{/if}

{#if form?.success}
  <div class="success-message">✅ ส่งข้อมูลเรียบร้อยแล้ว</div>
{/if}

<form method="POST" action="?/submit">
  <div class="card">
    <p>1. วัสดุสัมผัสผลผลิตไม่ก่อปนเปื้อนใช่หรือไม่?</p>
    <label><input type="radio" name="q1" value="ใช่" required> ใช่</label>
    <label><input type="radio" name="q1" value="ไม่ใช่"> ไม่ใช่</label>
  </div>

  <div class="card">
    <p>2. ล้างอุปกรณ์ทุกครั้งและจัดการน้ำล้างถูกต้องหรือไม่?</p>
    <label><input type="radio" name="q2" value="ใช่" required> ใช่</label>
    <label><input type="radio" name="q2" value="ไม่ใช่"> ไม่ใช่</label>
  </div>

  <div class="card">
    <p>3. ภาชนะของเสีย/สารเคมี/ปุ๋ย แยกจากภาชนะเก็บเกี่ยวใช่หรือไม่?</p>
    <label><input type="radio" name="q3" value="ใช่" required> ใช่</label>
    <label><input type="radio" name="q3" value="ไม่ใช่"> ไม่ใช่</label>
  </div>

  <div class="card">
    <p>4. ตรวจสอบเครื่องมือที่ต้องการความแม่นยำอย่างน้อยปีละครั้งหรือไม่?</p>
    <label><input type="radio" name="q4" value="ใช่" required> ใช่</label>
    <label><input type="radio" name="q4" value="ไม่ใช่"> ไม่ใช่</label>
  </div>

  <div class="card">
    <p>5. สถานที่ปฏิบัติงานมีสุขลักษณะเพียงพอหรือไม่?</p>
    <label><input type="radio" name="q5" value="ใช่" required> ใช่</label>
    <label><input type="radio" name="q5" value="ไม่ใช่"> ไม่ใช่</label>
  </div>

  <div class="actions">
    <button type="submit">ส่งข้อมูล</button>
  </div>
</form>

<form method="POST" action="?/reset" style="margin-top:1rem;">
  <button type="submit" class="reset">รีเซ็ตคำตอบ</button>
</form>

<style>
  h1 {
    margin-bottom: 1rem;
  }
  .card {
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    padding: 14px;
    margin-bottom: 12px;
  }
  .actions {
    display: flex;
    gap: 10px;
  }
  .error {
    color: #b91c1c;
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
  .success-message {
    background: #ecfdf5;
    border-radius: 8px;
    color: #15803d;
    padding: 12px;
    margin-bottom: 1rem;
  }
  button {
    padding: 6px 12px;
    border-radius: 6px;
    border: none;
    background: #16a34a;
    color: white;
    font-weight: bold;
  }
  button.reset {
    background: #f87171;
  }
  button:hover {
    opacity: 0.9;
  }
</style>
