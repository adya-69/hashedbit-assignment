import React from 'react';

function Input({ label, type, name, value, onChange }) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}

      />
    </div>
  );
}

export default Input;