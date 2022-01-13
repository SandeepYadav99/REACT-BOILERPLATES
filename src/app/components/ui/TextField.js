import React from 'react';
import classnames from 'classnames';

export const InputFeedback = ({ error }) => (error ? <div className="invalid-feedback mb-3">{error}</div> : null);

const TextField = ({ type, id, label, error, value, onChange, className, ...props }) => {
  const InputClasses = classnames(
    'input',
    {
      'is-invalid': !!error,
    },
    className,
  );

  return (
    <>
      <input id={id} className={InputClasses} type={type ? type : 'text'} value={value} onChange={onChange} {...props} />
      <InputFeedback error={error} />
    </>
  );
};

export default TextField;
