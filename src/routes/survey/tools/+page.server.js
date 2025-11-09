import { fail } from '@sveltejs/kit';

// ใช้จำลองฐานข้อมูลชั่วคราว
const db = new Map();

export function load({ cookies }) {
  let userid = cookies.get('userid');
  if (!userid) {
    userid = crypto.randomUUID();
    cookies.set('userid', userid, { path: '/' });
  }

  if (!db.get(userid)) db.set(userid, []);

  return {
    answers: db.get(userid)
  };
}

export const actions = {
  submit: async ({ request, cookies }) => {
    const formData = await request.formData();
    const userid = cookies.get('userid');

    const answers = [];
    for (let i = 1; i <= 5; i++) {
      const value = formData.get(`q${i}`);
      if (!value) {
        return fail(400, {
          error: 'โปรดตอบทุกข้อก่อนส่งข้อมูล',
          formData: Object.fromEntries(formData)
        });
      }
      answers.push(value);
    }

    db.set(userid, answers);
    return { success: true };
  },

  reset: async ({ cookies }) => {
    const userid = cookies.get('userid');
    db.set(userid, []);
    return { reset: true };
  }
};
