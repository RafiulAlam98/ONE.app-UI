import { decodedToken } from "@/helpers/utils/jwt";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "@/helpers/utils/saveData";

const authKey = "accessToken";

export const storeUserInfo = (accessToken, user, role) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key) => {
  return localStorage.removeItem(key);
};
