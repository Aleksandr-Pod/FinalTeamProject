import React, { useState, useEffect } from 'react';
import styles from './passwordStrengthBar.module.css';
import { validatePassword } from '../../helpers/validatePassword';

export default function PasswordStrengthBar({ password }) {
  const [validate, setValidate] = useState({
    hasLow: false,
    hasCap: false,
    hasNumber: false,
    has8digit: false,
  });

  useEffect(() => {
    validatePassword(password, setValidate);
  }, [password]);

  const strength = Object.values(validate).reduce((a, item) => a + item, 0);
  return (
    <div className={styles.progress}>
      <div
        className={`${styles.progressDone} ${
          styles[`progressDone-${strength}`]
        }`}
        style={{
          opacity: 1,
          width: `${strength * 25}%`,
        }}
      ></div>
    </div>
  );
}
