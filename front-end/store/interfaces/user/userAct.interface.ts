export enum actionTypesUser {
  USER_SIGNIN = "USER_SIGNIN",
  USER_SIGNUP = "USER_SIGNUP",
  USER_SIGNOUT = "USER_SIGNOUT",
  USER_EMAIL_SEND = "USER_EMAIL_SEND",
  USER_AUTHNUM_CHECK = "USER_AUTHNUM_CHECK",
  USER_COMPANY_CHECK = "USER_COMPANY_CHECK",
  USER_COMPANY_FIND = "USER_COMPANY_FIND",
  USER_FIND_EMAIL = "USER_FIND_EMAIL",
  USER_FIND_PW = "USER_FIND_PW",
  COM_FILE_UPLOAD = "COM_FILE_UPLOAD",
  MAN_FILE_UPLOAD = "MAN_FILE_UPLOAD",
  APPROVAL_REQUEST = "APPROVAL_REQUEST",
}

export type ActionsUser =
  | UserSignIn
  | UserSignUp
  | UserSignOut
  | UserEmailSend
  | UserAuthNumCheck
  | UserCompanyCheck
  | UserCompanyFind
  | UserFindEamil
  | UserFindPw
  | ComFileUpload
  | ManFileUpload
  | ApprovalRequest;

// 로그인
export interface UserSignIn {
  type: actionTypesUser.USER_SIGNIN;
  payload: any;
}

// 로그아웃
export interface UserSignOut {
  type: actionTypesUser.USER_SIGNOUT;
  payload: any;
}

// 회원가입
export interface UserSignUp {
  type: actionTypesUser.USER_SIGNUP;
  payload: any;
}

// 이메일 인증번호 전송
export interface UserEmailSend {
  type: actionTypesUser.USER_EMAIL_SEND;
  payload: any;
}

// 인증번호 검사
export interface UserAuthNumCheck {
  type: actionTypesUser.USER_AUTHNUM_CHECK;
  payload: any;
}

// 사업자번호 유효성 검사
export interface UserCompanyCheck {
  type: actionTypesUser.USER_COMPANY_CHECK;
  payload: any;
}

// 사업자번호 검색
export interface UserCompanyFind {
  type: actionTypesUser.USER_COMPANY_FIND;
  payload: any;
}

// 이메일 찾기
export interface UserFindEamil {
  type: actionTypesUser.USER_FIND_EMAIL;
  payload: any;
}

// 비밀번호 찾기
export interface UserFindPw {
  type: actionTypesUser.USER_FIND_PW;
  payload: any;
}

// 사업자등록증 업로드
export interface ComFileUpload {
  type: actionTypesUser.COM_FILE_UPLOAD;
  payload: any;
}

// 정비업등록증 업로드
export interface ManFileUpload {
  type: actionTypesUser.MAN_FILE_UPLOAD;
  payload: any;
}

// 심사요청
export interface ApprovalRequest {
  type: actionTypesUser.APPROVAL_REQUEST;
  payload: any;
}
