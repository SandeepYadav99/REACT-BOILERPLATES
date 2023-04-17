import { serialize } from 'object-to-formdata';
import { LOCAL_STORAGE_KEYS } from './constants';

export const convertJsonToFormData = (data: Object) => {
  const formData = serialize(data, { indices: true });
  return formData;
};

export const removeTokenAfterLogout = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_KEYS.REFRESH_TOKEN);
  localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
  localStorage.removeItem(LOCAL_STORAGE_KEYS.USER_ROLE);
};
