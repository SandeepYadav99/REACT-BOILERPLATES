export interface EnvironmentType {
  baseUrl: string;
  clientId: string;
}

export interface FilePayload {
  fileName: string;
  fileModule: string;
  mimeType: string;
}

export interface FileResponse {
  fileName: string;
  fileId: string;
  url: string;
  displayUrl: string;
}
