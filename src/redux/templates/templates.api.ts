import axios, { AxiosResponse } from 'axios';

interface TemplatesResponse extends AxiosResponse {
  templates: any[];
}

export async function getTemplatesRequest(): Promise<TemplatesResponse> {
  const response = axios.get('/templates/all', { withCredentials: true });
  return (await response).data;
}
