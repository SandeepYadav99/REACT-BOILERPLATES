export interface LoginPayload {
  email: string;
  password: string;
  userRole: string;
}

export interface LoginUserObj {
  avatarId: string;
  companyName: string;
  email: string;
  emailVerified: boolean;
  id: string;
  isDeactivated;
  name: string;
  userRole: string;
  userStatus: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: LoginUserObj;
}

export interface LogOutPayload {
  refreshToken: string;
}

export interface LogoutResponse {}

export interface ForgotPasswordForm {
  email: string;
}

export interface ForgotPasswordPayload {
  email: string;
}

export interface ForgotPasswordResponse {}

export interface ResetPasswordForm {
  token: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordPayload {
  token: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export interface ResetPasswordResponse {}

export interface RefreshTokenPayload {
  refreshToken: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
  user: LoginUserObj;
}

export interface MePayload {}
export interface MeResponse {
  avatarId: string;
  companyName: string;
  email: string;
  emailVerified: boolean;
  id: string;
  isDeactivated;
  name: string;
  userRole: string;
  userStatus: string;
  avatar: {
    s3Key: string;
    mimeType: string;
    id: string;
    urn: string;
    mediaUrl: string;
  };
}
