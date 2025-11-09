// database.js
import crypto from 'crypto';

// Mock database (in-memory)
const db = {
  users: new Map(),            // User_id => User object
  farms: new Map(),            // Farm_id => Farm object
  farmOwners: new Map(),       // Owner_id => Farm_Owner object
  gapCategories: new Map(),    // category_Gap_id => GAP_Category
  gapCriteria: new Map(),      // criteria_id => GAP_Criteria
  appCategories: new Map(),    // category_app_id => App_Category
  gapActivities: new Map(),    // activity_id => GAP_Activity
  gapRecords: new Map(),       // record_id => GAP_Record
  gapProgress: new Map(),      // progress_id => GAP_Progress
  gapRequests: new Map(),      // request_id => GAP_Request
  inspections: new Map(),      // inspection_id => Inspection
  certifications: new Map()    // cert_id => Certification
};

// ======= User =======
export function createUser({ phone, name, surname, user_type, email, id_number, idcard_file, cerofBusRegist_file, houseRegist_file }) {
  const id = crypto.randomUUID();
  const user = {
    user_id: id,
    phone,
    name,
    surname,
    user_type,
    email,
    id_number,
    idcard_file,
    cerofBusRegist_file,
    houseRegist_file,
    create_at: new Date().toISOString()
  };
  db.users.set(id, user);
  return user;
}

export function getUser(user_id) {
  return db.users.get(user_id);
}

// ======= Farm =======
export function createFarm({ user_id, durianType, durianAge, durianTreeCount, floweringStartDate, expectedHarvestMonth, expectedYield, location, size, titleDeedNumber, titleDeed_file }) {
  const id = crypto.randomUUID();
  const farm = {
    farm_id: id,
    user_id,
    durianType,
    durianAge,
    durianTreeCount,
    floweringStartDate,
    expectedHarvestMonth,
    expectedYield,
    location,
    size,
    titleDeedNumber,
    titleDeed_file
  };
  db.farms.set(id, farm);
  return farm;
}

export function getFarm(farm_id) {
  return db.farms.get(farm_id);
}

// ======= Farm_Owner =======
export function addFarmOwner({ user_id, farm_id, gap_category }) {
  const id = crypto.randomUUID();
  const owner = { owner_id: id, user_id, farm_id, gap_category };
  db.farmOwners.set(id, owner);
  return owner;
}

// ======= GAP_Category =======
export function getGAPCategory(category_Gap_id) {
  return db.gapCategories.get(category_Gap_id);
}

// ======= GAP_Criteria =======

// ======= App_Category =======


// ======= GAP_Activity =======


// ======= GAP_Record =======
export function createGAPRecord({ activity_name, record_text, image_url, result }) {
  const id = crypto.randomUUID();
  const record = { record_id: id, activity_name, record_text, image_url, result };
  db.gapRecords.set(id, record);
  return record;
}

// ======= GAP_Progress =======
export function createGAPProgress({ category_Gap, passed_major, passed_minor, overall_progress, recommendation, date_time }) {
  const id = crypto.randomUUID();
  const progress = { progress_id: id, category_Gap, passed_major, passed_minor, overall_progress, recommendation, date_time };
  db.gapProgress.set(id, progress);
  return progress;
}

// ======= GAP_Request =======
export function createGAPRequest({ farm_id, request_date, status }) {
  const id = crypto.randomUUID();
  const request = { request_id: id, farm_id, request_date, status };
  db.gapRequests.set(id, request);
  return request;
}

// ======= Inspection =======
export function createInspection({ request_id, inspector_id, submissionDate, expectedCompletionDate, statusResult }) {
  const id = crypto.randomUUID();
  const inspection = { inspection_id: id, request_id, inspector_id, submissionDate, expectedCompletionDate, statusResult };
  db.inspections.set(id, inspection);
  return inspection;
}

// ======= Certification =======
export function createCertification({ request_id, inspection_id, inspector_id, issue_date, expire_date, cert_file }) {
  const id = crypto.randomUUID();
  const cert = { cert_id: id, request_id, inspection_id, inspector_id, issue_date, expire_date, cert_file };
  db.certifications.set(id, cert);
  return cert;
}

// ======= Export DB for debug =======
export function debugDB() {
  return db;
}
