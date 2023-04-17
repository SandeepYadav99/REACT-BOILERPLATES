import { HTTP_METHODS } from '../../helpers/constants';
import { AUTH_ROUTES } from '../../helpers/routes.config';
import { requestV1 } from '../../services/rest';
import {
  ForgotPasswordPayload,
  ForgotPasswordResponse,
  LogOutPayload,
  LoginPayload,
  LoginResponse,
  LogoutResponse,
  MePayload,
  MeResponse,
  RefreshTokenPayload,
  RefreshTokenResponse,
  ResetPasswordPayload,
  ResetPasswordResponse,
} from '../../types/auth';

export async function login(payload: LoginPayload) {
  return requestV1<LoginPayload, LoginResponse>({ url: AUTH_ROUTES.LOGIN, method: HTTP_METHODS.POST, payload: payload });
}

export async function logOut(payload: LogOutPayload) {
  return requestV1<LogOutPayload, LogoutResponse>({ url: AUTH_ROUTES.SIGNOUT, method: HTTP_METHODS.POST, payload: payload });
}

export async function forgotPassword(payload: ForgotPasswordPayload) {
  return requestV1<ForgotPasswordPayload, ForgotPasswordResponse>({ url: AUTH_ROUTES.FORGOT_PASSWORD, method: HTTP_METHODS.POST, payload: payload });
}

export async function resetPassword(payload: ResetPasswordPayload) {
  return requestV1<ResetPasswordPayload, ResetPasswordResponse>({ url: AUTH_ROUTES.RESET_PASSWORD, method: HTTP_METHODS.POST, payload: payload });
}

export async function refreshTokenApi(payload: RefreshTokenPayload) {
  return requestV1<RefreshTokenPayload, RefreshTokenResponse>({ url: AUTH_ROUTES.REFRESH_TOKEN, method: HTTP_METHODS.POST, payload: payload });
}

export async function me() {
  return requestV1<MePayload, MeResponse>({ url: AUTH_ROUTES.ME, method: HTTP_METHODS.GET });
}
