import type {
  FormValues,
  PredictRequest,
  GenderOption,
  YesNoOption,
  HscStreamOption,
  DegreeTypeOption,
  SpecialisationOption,
  BoardOption,
} from '../types';

// ── Encoding maps (human label → model integer) ──────────────────

const GENDER_MAP: Record<GenderOption, number> = {
  Female: 0,
  Male: 1,
};

const YES_NO_MAP: Record<YesNoOption, number> = {
  No: 0,
  Yes: 1,
};

const BOARD_MAP: Record<BoardOption, number> = {
  Central: 0,
  Others: 1,
};

const HSC_STREAM_MAP: Record<HscStreamOption, number> = {
  Commerce: 0,
  Science: 1,
  Arts: 2,
};

const DEGREE_TYPE_MAP: Record<DegreeTypeOption, number> = {
  'Comm&Mgmt': 0,
  'Sci&Tech': 1,
  Others: 2,
};

const SPECIALISATION_MAP: Record<SpecialisationOption, number> = {
  'Mkt&Fin': 0,
  'Mkt&HR': 1,
};

/** Convert user-friendly form values to ML model encoded payload */
export function encodeFormValues(form: FormValues): PredictRequest {
  return {
    gender: GENDER_MAP[form.gender as GenderOption],
    ssc_p: parseFloat(form.ssc_p),
    ssc_b: BOARD_MAP[form.ssc_b as BoardOption],
    hsc_p: parseFloat(form.hsc_p),
    hsc_b: BOARD_MAP[form.hsc_b as BoardOption],
    hsc_s: HSC_STREAM_MAP[form.hsc_s as HscStreamOption],
    degree_p: parseFloat(form.degree_p),
    degree_t: DEGREE_TYPE_MAP[form.degree_t as DegreeTypeOption],
    workex: YES_NO_MAP[form.workex as YesNoOption],
    etest_p: parseFloat(form.etest_p),
    specialisation: SPECIALISATION_MAP[form.specialisation as SpecialisationOption],
    mba_p: parseFloat(form.mba_p),
  };
}
