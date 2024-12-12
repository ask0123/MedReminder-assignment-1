export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface Medicine {
  id: string;
  name: string;
  dosage: string;
  scheduleTime: string;
  userId: string;
}

export interface AcknowledgmentLog {
  id: string;
  medicineId: string;
  userId: string;
  status: 'taken' | 'missed';
  timestamp: string;
}