export const setToLocalStorage = (key, verify) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, verify);
};
export const setRoleToLocalStorage = (key, verify) => {
  console.log(role);
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.setItem(key, verify);
};

export const getFromLocalStorage = (key) => {
  if (!key || typeof window === "undefined") {
    return "";
  }

  return localStorage.getItem(key);
};
