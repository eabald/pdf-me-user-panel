import axios, { AxiosResponse } from 'axios';
import { Credentials } from '../redux/auth/auth.types';

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
  const response = await axios.post('http:localhost:5000/auth/login', credentials, {
    withCredentials: true,
  });
  return response.data
}
