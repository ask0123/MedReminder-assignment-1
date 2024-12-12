import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: async (email: string, password: string) => {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },
  register: async (name: string, email: string, password: string) => {
    const response = await api.post('/auth/register', { name, email, password });
    return response.data;
  },
};

export const medicines = {
  getAll: async () => {
    const response = await api.get('/medicines');
    return response.data;
  },
  create: async (data: { name: string; dosage: string; scheduleTime: string }) => {
    const response = await api.post('/medicines', data);
    return response.data;
  },
  update: async (id: string, data: { name: string; dosage: string; scheduleTime: string }) => {
    const response = await api.put(`/medicines/${id}`, data);
    return response.data;
  },
  delete: async (id: string) => {
    await api.delete(`/medicines/${id}`);
  },
};

export const acknowledgments = {
  create: async (medicineId: string, status: 'taken' | 'missed') => {
    const response = await api.post('/acknowledgments', { medicineId, status });
    return response.data;
  },
  getLogs: async (filters?: { userId?: string; startDate?: string; endDate?: string }) => {
    const response = await api.get('/acknowledgments', { params: filters });
    return response.data;
  },
};