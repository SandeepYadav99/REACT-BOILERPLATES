import { isArray, isBoolean, isNumber, isObject, isString } from 'lodash';

const convertJsonToFormData = (data) => {
  const formData = new FormData();

  Object.keys(data).forEach((key) => {
    const value = data[key];

    if (isString(value) || isNumber(value)) {
      formData.append(key, value);
    } else if (isArray(value)) {
      formData.append(key, JSON.stringify(value));
    } else if (isObject(value)) {
      formData.append(key, value, value.name);
    }
  });

  return formData;
};
export default convertJsonToFormData;
