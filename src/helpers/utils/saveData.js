export const saveDataToBrowser = (token, email, role) => {
  localStorage.setItem("token", token),
    localStorage.setItem("role", role),
    localStorage.setItem("email", email);
};
