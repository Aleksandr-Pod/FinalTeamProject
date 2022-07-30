export const validatePassword = (password, setValidate) => {
  if (password.match(/\d+/g)) {
    setValidate(o => ({ ...o, hasNumber: true }));
  } else {
    setValidate(o => ({ ...o, hasNumber: false }));
  }

  if (password.match(/[A-Z]+/g)) {
    setValidate(o => ({ ...o, hasCap: true }));
  } else {
    setValidate(o => ({ ...o, hasCap: false }));
  }

  if (password.match(/[a-z]+/g)) {
    setValidate(o => ({ ...o, hasLow: true }));
  } else {
    setValidate(o => ({ ...o, hasLow: false }));
  }

  if (password.length > 7) {
    setValidate(o => ({ ...o, has8digit: true }));
  } else {
    setValidate(o => ({ ...o, has8digit: false }));
  }
};
