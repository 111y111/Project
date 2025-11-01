

/**
 * @typedef {Object} SurveyAspect
 * @property {string} title
 * @property {string=} lastUpdated
 * @property {string=} note
 * @property {string=} ctaLabel
 * @property {string=} imageAlt
 */

/** @type {SurveyAspect[]} */
export const aspects = [
  { title: 'การจัดการน้ำ',      lastUpdated: '26/02/2568 เวลา 19:00 น.', note: 'บันทึกข้อมูลแล้ว', ctaLabel: 'แก้ไขข้อมูล', imageAlt: 'water' },
  { title: 'การจัดการที่ดิน',    lastUpdated: '26/02/2568 เวลา 19:00 น.', note: 'บันทึกข้อมูลแล้ว', ctaLabel: 'แก้ไขข้อมูล', imageAlt: 'soil' },
  { title: 'การใช้ปุ๋ยและยา', note: 'ไม่มีการบันทึกข้อมูล', ctaLabel: 'เพิ่มข้อมูล', imageAlt: 'fert-chem' },
  { title: 'ยานพาหนะ อุปกรณ์', note: 'ไม่มีการบันทึกข้อมูล', ctaLabel: 'เพิ่มข้อมูล', imageAlt: 'tools' },
  { title: 'การเก็บเกี่ยว', note: 'ไม่มีการบันทึกข้อมูล', ctaLabel: 'เพิ่มข้อมูล', imageAlt: 'harvest' },
  { title: 'การพักผลผลิต', note: 'ไม่มีการบันทึกข้อมูล', ctaLabel: 'เพิ่มข้อมูล', imageAlt: 'postharvest' },
  { title: 'สถานที่ต่าง ๆ', note: 'ไม่มีการบันทึกข้อมูล', ctaLabel: 'เพิ่มข้อมูล', imageAlt: 'facilities' },
  { title: 'ผู้ปฏิบัติงาน', note: 'ไม่มีการบันทึกข้อมูล', ctaLabel: 'เพิ่มข้อมูล', imageAlt: 'workers' }
]