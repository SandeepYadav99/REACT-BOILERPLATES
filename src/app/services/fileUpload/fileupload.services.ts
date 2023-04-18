import { HTTP_METHODS } from '../../helpers/constants';
import { FILE_UPLOAD } from '../../helpers/routes.config';
import { FilePayload, FileResponse } from '../../types/common';
import { requestV1 } from '../rest';

export async function getFileUploadUrl(payload: FilePayload) {
  const response = await requestV1<FilePayload, FileResponse>({
    url: FILE_UPLOAD.URL,
    method: HTTP_METHODS.POST,
    payload: payload,
  });

  return response;
}

export async function fileUpload(payload: FilePayload, file: Blob) {
  const { data } = await getFileUploadUrl(payload);
  return new Promise((res, rej) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      const xhr = new XMLHttpRequest();
      xhr.open('PUT', data.url);
      xhr.onreadystatechange = () => {
        res(data);
      };
      xhr.setRequestHeader('Content-Type', file.type);

      xhr.send(file);
    };
  });
}
