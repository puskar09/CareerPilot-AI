import { useState, type ChangeEvent, type FormEvent } from 'react';
import { InputField, SelectField } from './FormField';
import type { FormValues, FormErrors, PredictResponse } from '../types';
import { validateForm } from '../utils/validation';
import { encodeFormValues } from '../utils/encoder';
import { predict } from '../services/api';
import axios from 'axios';

// ── Dropdown options ─────────────────────────────────────────────
const GENDER_OPTIONS = ['Male', 'Female'] as const;
const YES_NO_OPTIONS = ['Yes', 'No'] as const;
const BOARD_OPTIONS = ['Central', 'Others'] as const;
const HSC_STREAM_OPTIONS = ['Science', 'Commerce', 'Arts'] as const;
const DEGREE_TYPE_OPTIONS = ['Sci&Tech', 'Comm&Mgmt', 'Others'] as const;
const SPECIALISATION_OPTIONS = ['Mkt&Fin', 'Mkt&HR'] as const;

const INITIAL_FORM: FormValues = {
  gender: '',
  ssc_p: '',
  ssc_b: '',
  hsc_p: '',
  hsc_b: '',
  hsc_s: '',
  degree_p: '',
  degree_t: '',
  workex: '',
  etest_p: '',
  specialisation: '',
  mba_p: '',
};

interface PredictionFormProps {
  onResult: (result: PredictResponse | null) => void;
  onError: (message: string) => void;
  onLoading: (loading: boolean) => void;
}

const PredictionForm = ({ onResult, onError, onLoading }: PredictionFormProps) => {
  const [form, setForm] = useState<FormValues>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    // Clear error on change
    if (errors[id as keyof FormValues]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Scroll to first error
      const firstErrorKey = Object.keys(validationErrors)[0];
      document.getElementById(firstErrorKey)?.focus();
      return;
    }

    setIsLoading(true);
    onLoading(true);
    onResult(null);
    onError('');

    try {
      const payload = encodeFormValues(form);
      const result = await predict(payload);
      onResult(result);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        const detail =
          err.response?.data?.detail ||
          err.response?.data?.message ||
          `Server error: ${err.response?.status ?? 'unknown'}`;
        onError(detail);
      } else {
        onError('Unable to connect to the backend. Make sure the FastAPI server is running on port 8000.');
      }
    } finally {
      setIsLoading(false);
      onLoading(false);
    }
  };

  const handleReset = () => {
    setForm(INITIAL_FORM);
    setErrors({});
    onResult(null);
    onError('');
  };

  return (
    <form
      id="predict-form"
      onSubmit={handleSubmit}
      noValidate
      aria-label="Campus placement prediction form"
    >
      <div className="form-grid">
        {/* ── Personal ─────────────────────────────────────── */}
        <SelectField
          id="gender"
          label="Gender"
          value={form.gender}
          onChange={handleInput}
          options={GENDER_OPTIONS}
          placeholder="Select gender"
          error={errors.gender}
        />

        <SelectField
          id="workex"
          label="Work Experience"
          value={form.workex}
          onChange={handleInput}
          options={YES_NO_OPTIONS}
          placeholder="Select option"
          error={errors.workex}
        />

        {/* ── SSC ──────────────────────────────────────────── */}
        <InputField
          id="ssc_p"
          label="SSC Percentage (10th)"
          value={form.ssc_p}
          onChange={handleInput}
          placeholder="e.g. 78.5"
          hint="Enter a value between 0 and 100"
          error={errors.ssc_p}
          min="0"
          max="100"
          step="0.01"
        />

        <SelectField
          id="ssc_b"
          label="SSC Board (10th)"
          value={form.ssc_b}
          onChange={handleInput}
          options={BOARD_OPTIONS}
          placeholder="Select board"
          error={errors.ssc_b}
        />

        {/* ── HSC ──────────────────────────────────────────── */}
        <InputField
          id="hsc_p"
          label="HSC Percentage (12th)"
          value={form.hsc_p}
          onChange={handleInput}
          placeholder="e.g. 82.0"
          hint="Enter a value between 0 and 100"
          error={errors.hsc_p}
          min="0"
          max="100"
          step="0.01"
        />

        <SelectField
          id="hsc_b"
          label="HSC Board (12th)"
          value={form.hsc_b}
          onChange={handleInput}
          options={BOARD_OPTIONS}
          placeholder="Select board"
          error={errors.hsc_b}
        />

        <SelectField
          id="hsc_s"
          label="HSC Stream (12th)"
          value={form.hsc_s}
          onChange={handleInput}
          options={HSC_STREAM_OPTIONS}
          placeholder="Select stream"
          error={errors.hsc_s}
        />

        {/* ── Degree ───────────────────────────────────────── */}
        <InputField
          id="degree_p"
          label="Undergraduate Degree %"
          value={form.degree_p}
          onChange={handleInput}
          placeholder="e.g. 75.0"
          hint="Enter a value between 0 and 100"
          error={errors.degree_p}
          min="0"
          max="100"
          step="0.01"
        />

        <SelectField
          id="degree_t"
          label="Degree Type"
          value={form.degree_t}
          onChange={handleInput}
          options={DEGREE_TYPE_OPTIONS}
          placeholder="Select degree type"
          error={errors.degree_t}
        />

        {/* ── Tests ────────────────────────────────────────── */}
        <InputField
          id="etest_p"
          label="Employability Test Score (%)"
          value={form.etest_p}
          onChange={handleInput}
          placeholder="e.g. 64.0"
          hint="Enter a value between 0 and 100"
          error={errors.etest_p}
          min="0"
          max="100"
          step="0.01"
        />

        {/* ── MBA ──────────────────────────────────────────── */}
        <SelectField
          id="specialisation"
          label="MBA Specialisation"
          value={form.specialisation}
          onChange={handleInput}
          options={SPECIALISATION_OPTIONS}
          placeholder="Select specialisation"
          error={errors.specialisation}
        />

        <InputField
          id="mba_p"
          label="MBA Percentage"
          value={form.mba_p}
          onChange={handleInput}
          placeholder="e.g. 68.5"
          hint="Enter a value between 0 and 100"
          error={errors.mba_p}
          min="0"
          max="100"
          step="0.01"
        />
      </div>

      {/* ── Actions ─────────────────────────────────────────────── */}
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          marginTop: '2rem',
          flexWrap: 'wrap',
        }}
      >
        <button
          type="submit"
          id="predict-submit-btn"
          disabled={isLoading}
          className="btn btn-primary btn-lg"
          style={{ flex: '1 1 200px' }}
          aria-busy={isLoading}
        >
          {isLoading ? (
            <>
              <span className="spinner" aria-hidden="true" />
              Analysing Profile…
            </>
          ) : (
            '🎯 Predict My Placement'
          )}
        </button>

        <button
          type="button"
          id="predict-reset-btn"
          onClick={handleReset}
          className="btn btn-secondary btn-lg"
          style={{ flex: '0 0 auto' }}
          aria-label="Reset form"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default PredictionForm;
