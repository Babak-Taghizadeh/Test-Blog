import axios, { AxiosError, AxiosResponse } from "axios";
import { LoginProps, LoginResponse } from "@/types/types";
import { API_ROUTES } from "./constants";

const RequestLogin = async(loginInfo: LoginProps): Promise<LoginResponse> => {
    try {
        const response:AxiosResponse<LoginResponse> = await axios.post(API_ROUTES.LOGIN_REQUEST, loginInfo);
        return response.data;
      } catch (error) {
        if (error instanceof AxiosError) {
          throw new Error(error.response?.data?.error || "خطایی پیش آمده");
        } else {
          throw new Error("لطفا مجددا امتحان کنید");
        }
      }
}

export default RequestLogin