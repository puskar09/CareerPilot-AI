// ── API Request / Response Types ────────────────────────────────

export interface PredictRequest {
  gender: number;        // Male=1, Female=0
  ssc_p: number;        // SSC percentage
  ssc_b: number;        // SSC board: Central=0, Others=1
  hsc_p: number;        // HSC percentage
  hsc_b: number;        // HSC board: Central=0, Others=1
  hsc_s: number;        // HSC stream: Commerce=0, Science=1, Arts=2
  degree_p: number;     // Degree percentage
  degree_t: number;     // Degree type: Comm&Mgmt=0, Sci&Tech=1, Others=2
  workex: number;       // Work experience: No=0, Yes=1
  etest_p: number;      // Employability test percentage
  specialisation: number; // MBA specialisation: Mkt&Fin=0, Mkt&HR=1
  mba_p: number;        // MBA percentage
}

export interface PredictResponse {
  prediction: string;
  confidence: number;
  message: string;
}

export interface ApiError {
  detail?: string;
  message?: string;
}

// ── Form Field Types ─────────────────────────────────────────────

export type GenderOption = 'Male' | 'Female';
export type YesNoOption = 'Yes' | 'No';
export type HscStreamOption = 'Science' | 'Commerce' | 'Arts';
export type DegreeTypeOption = 'Sci&Tech' | 'Comm&Mgmt' | 'Others';
export type SpecialisationOption = 'Mkt&Fin' | 'Mkt&HR';
export type BoardOption = 'Central' | 'Others';

export interface FormValues {
  gender: GenderOption | '';
  ssc_p: string;
  ssc_b: BoardOption | '';
  hsc_p: string;
  hsc_b: BoardOption | '';
  hsc_s: HscStreamOption | '';
  degree_p: string;
  degree_t: DegreeTypeOption | '';
  workex: YesNoOption | '';
  etest_p: string;
  specialisation: SpecialisationOption | '';
  mba_p: string;
}

export type FormErrors = Partial<Record<keyof FormValues, string>>;
