import type { ChangeEvent } from 'react';

// ── Text / Number Input ──────────────────────────────────────────

interface InputFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  min?: string;
  max?: string;
  step?: string;
  type?: 'text' | 'number';
}

export const InputField = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  hint,
  error,
  required = true,
  min,
  max,
  step,
  type = 'number',
}: InputFieldProps) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">
      {label}
      {required && <span aria-hidden="true">*</span>}
    </label>
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      min={min}
      max={max}
      step={step}
      aria-describedby={error ? `${id}-error` : hint ? `${id}-hint` : undefined}
      aria-invalid={!!error}
      className={`form-input${error ? ' error' : ''}`}
    />
    {hint && !error && (
      <span id={`${id}-hint`} className="form-hint">
        {hint}
      </span>
    )}
    {error && (
      <span id={`${id}-error`} role="alert" className="form-error">
        {error}
      </span>
    )}
  </div>
);

// ── Select / Dropdown ────────────────────────────────────────────

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  options: readonly string[];
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export const SelectField = ({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = 'Select…',
  error,
  required = true,
}: SelectFieldProps) => (
  <div className="form-group">
    <label htmlFor={id} className="form-label">
      {label}
      {required && <span aria-hidden="true">*</span>}
    </label>
    <select
      id={id}
      value={value}
      onChange={onChange}
      aria-describedby={error ? `${id}-error` : undefined}
      aria-invalid={!!error}
      className={`form-select${error ? ' error' : ''}`}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
    {error && (
      <span id={`${id}-error`} role="alert" className="form-error">
        {error}
      </span>
    )}
  </div>
);
