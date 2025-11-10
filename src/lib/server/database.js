// database.js
import crypto from 'crypto';

// Mock DB สำหรับ waterRecords
const db = {
  waterRecords: new Map()  
};



export function getWaterRecords(userid) {
  if (!db.waterRecords.has(userid)) db.waterRecords.set(userid, []);
  return db.waterRecords.get(userid);
}

export function createWaterRecord(userid, record) {
  const records = db.waterRecords.get(userid) || [];
  records.push(record);
  db.waterRecords.set(userid, records);
  return record;
}

export function resetWaterRecords(userid) {
  db.waterRecords.set(userid, []);
}
