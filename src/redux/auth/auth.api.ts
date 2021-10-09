import axios, { AxiosResponse } from 'axios';
import { Credentials, SignUpCredentials } from './auth.slice';

interface UserResponse extends AxiosResponse {
  id: number;
  email: string;
  isEmailConfirmed: boolean;
  stripeCustomerId: string;
  name: number;
  isResettingPassword: boolean;
}

export async function signInRequest(
  credentials: Credentials
): Promise<UserResponse> {
  const response = await axios.post('/auth/log-in', credentials, {
    withCredentials: true,
  });
  return response.data
}

export async function SignUpRequest(
  signUpCredentials: SignUpCredentials
): Promise<UserResponse> {
  const response = await axios.post('/auth/register', signUpCredentials, {
    withCredentials: true,
  })
  return response.data;
}

export async function signOutRequest(): Promise<void> {
  await axios.post('/auth/log-out', {
    withCredentials: true,
  });
}
