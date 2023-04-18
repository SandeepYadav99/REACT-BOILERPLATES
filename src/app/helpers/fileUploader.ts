import { getFileUploadUrl } from '../services/fileUpload/fileupload.services';

export const imageUploaderPlugin = (type: string) => {
  console.log('image uploader plugin loading');

  return function MyCustomUploadAdapterPlugin(editor: any) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
      return new MyUploadAdapter(loader, type);
    };
  };
};

export class MyUploadAdapter {
  loader: any;
  xhr: any;
  fileModule: string;

  constructor(loader: any, type: string) {
    // CKEditor 5's FileLoader instance.
    this.loader = loader;
    this.fileModule = type;
  }

  // Starts the upload process.
  upload(): Promise<{ default: string }> {
    return new Promise(async (resolve, reject) => {
      const file = await this.loader.file;
      const xhr = (this.xhr = new XMLHttpRequest());

      console.log('file', file);
      const payload = {
        fileName: file.name,
        fileModule: this.fileModule,
        mimeType: file.type,
      };
      const { data } = await getFileUploadUrl(payload);

      const genericErrorText = "Couldn't upload file:" + ` ${file.name}.`;

      xhr.open('PUT', data.url);
      xhr.setRequestHeader('Content-Type', file.type);
      xhr.onreadystatechange = () => {
        resolve({
          default: data.displayUrl,
        });
      };
      xhr.addEventListener('error', () => reject(genericErrorText));
      xhr.addEventListener('abort', () => reject());
      xhr.addEventListener('load', () => {
        const response = xhr.response;
        console.log('response', response);
        if (!response || response.error) {
          return reject(response && response.error ? response.error.message : genericErrorText);
        }
        // If the upload is successful, resolve the upload promise with an object containing
        // at least the "default" URL, pointing to the image on the server.
        resolve({
          default: data.displayUrl,
        });
      });
      xhr.send(file);
    });
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }
}
