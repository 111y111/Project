import { fail } from '@sveltejs/kit';
import crypto from 'crypto';

// จำลอง database
const db = new Map();

// ฟังก์ชันภายในไฟล์
function _getWaterRecords(userid) {
  if (!db.has(userid)) db.set(userid, []);
  return db.get(userid);
}

function _createWaterRecord(userid, record) {
  const records = db.get(userid) || [];
  records.push(record);
  db.set(userid, records);
}

function _resetWaterRecords(userid) {
  db.set(userid, []);
}

/** @type {import('./$types').PageServerLoad} */
export function load({ cookies }) {
  let userid = cookies.get('userid');
  if (!userid) {
    userid = crypto.randomUUID();
    cookies.set('userid', userid, { path: '/' });
  }

  const waterRecords = _getWaterRecords(userid);

  return { waterRecords, userid };
}

/** @type {import('./$types').Actions} */
export const actions = {
  submit: async ({ cookies, request }) => {
    const userid = cookies.get('userid');
    const formData = await request.formData();

    const q1 = formData.get('q1')?.trim();
    const q1Other = formData.get('q1Other')?.trim() || '';
    const q2 = formData.get('q2')?.trim();
    const q3 = formData.get('q3'); // File
    const q4 = formData.get('q4')?.trim();

    const errors = {};

    // Validation
    if (!q1) errors.q1 = 'โปรดเลือกแหล่งน้ำ';
    // ✅ ถ้าเลือก "อื่นๆ" ต้องกรอกช่องอื่นๆ
    if (q1 === 'อื่นๆ' && !q1Other) errors.q1Other = 'โปรดระบุแหล่งน้ำอื่นๆ';

    if (!q2) errors.q2 = 'โปรดเลือกว่าผ่านการบำบัดหรือไม่';
    if (!q3 || q3.size === 0) errors.q3 = 'โปรดอัปโหลดรูปภาพ';
    if (!q4) errors.q4 = 'โปรดกรอกแหล่งน้ำหลังเก็บเกี่ยว';

    if (Object.keys(errors).length > 0) {
      return fail(422, { errors, q1, q1Other, q2, q4 });
    }

    // บันทึกข้อมูล
    _createWaterRecord(userid, { q1, q1Other, q2, q3Name: q3.name, q4 });

    return { success: true };
  },

  reset: async ({ cookies }) => {
    const userid = cookies.get('userid');
    _resetWaterRecords(userid);
    return { success: true };
  }
};
