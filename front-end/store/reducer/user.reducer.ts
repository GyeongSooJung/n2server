import { HYDRATE } from "next-redux-wrapper";
import {
  UserState,
  // UserInfo,
  // User,
  // Company,
  actionTypesUser,
  ActionsUser,
} from "../interfaces";
import { UserInfo } from "../../src/models/auth.entity";
import { User } from "../../src/models/user.entity";
import { Company } from "../../src/models/company.entity";

export const initialState: UserState = {
  signInInfo: <UserInfo>{
    id: "",
    pwd: "",
  },
  user: <User>{
    // email: "",
    // password: "",
    // auth: "worker",
    // name: "",
    // comID: "",
    // hpNumber: "",
    // address: "",
    // joinDate: 0,
    // approval: false,
  },
  company: <Company>{
    // name: "",
    // comRegNum: "",
    // mbRegNum: "",
    // mbTypeNum: "",
    // ownerName: "",
    // busType: "",
    // busItem: "",
    // phoneNum: "",
    // faxNum: "",
    // address: "",
    // approval: false,
  },
};

interface HydratePayload {
  userAll: UserState;
}

const userAll = (
  state = initialState,
  action: ActionsUser | { type: typeof HYDRATE; payload: HydratePayload }
): UserState => {
  switch (action.type) {
    //이게 뭘 뜻하는거지??
    case HYDRATE:
      return { ...state, ...action.payload.userAll };

    // // 입력값 onChange 기능
    // case actionTypesUser.USER_INPUT:
    //   return {
    //     ...state,
    //     [action.data[0]]: action.data[1],
    //   };

    // 로그인 기능
    case actionTypesUser.USER_SIGNIN:
      return {
        ...state,
      };

    // 로그아웃 기능
    case actionTypesUser.USER_SIGNOUT:
      return {
        ...state,
      };

    // 회원가입 기능
    case actionTypesUser.USER_SIGNUP:
      return {
        ...state,
      };

    // 이메일 인증번호 전송 기능
    case actionTypesUser.USER_EMAIL_SEND:
      return {
        ...state,
      };

    // 이메일 인증번호 체크 기능
    case actionTypesUser.USER_AUTHNUM_CHECK:
      return {
        ...state,
      };

    // 사업자번호 유효성 검사 기능
    case actionTypesUser.USER_COMPANY_CHECK:
      return {
        ...state,
      };

    // 사업자번호 검색 기능
    case actionTypesUser.USER_COMPANY_FIND:
      return {
        ...state,
      };

    // 이메일 찾기 기능
    case actionTypesUser.USER_FIND_EMAIL:
      return {
        ...state,
      };

    // 비밀번호 찾기 기능
    case actionTypesUser.USER_FIND_PW:
      return {
        ...state,
      };

    // 사업자등록증 업로드 기능
    case actionTypesUser.COM_FILE_UPLOAD:
      return {
        ...state,
      };

    // 정비업등록증 업로드 기능
    case actionTypesUser.MAN_FILE_UPLOAD:
      return {
        ...state,
      };

    // 심사요청
    case actionTypesUser.APPROVAL_REQUEST:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userAll;
