import axios from 'axios';
import type { PredictRequest, PredictResponse } from '../types';

const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
});

/** Health-check the backend (GET /) */
export async function checkHealth(): Promise<boolean> {
  try {
    await client.get('/');
    return true;
  } catch {
    return false;
  }
}

/** Submit prediction request (POST /predict) */
export async function predict(payload: PredictRequest): Promise<PredictResponse> {
  const { data } = await client.post<PredictResponse>('/predict', payload);
  return data;
}
