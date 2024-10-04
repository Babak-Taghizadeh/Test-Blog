import { LoginProps, LoginResponse } from "@/types/types";
import { API_ROUTES } from "./constants";

const RequestLogin = async(loginInfo: LoginProps): Promise<LoginResponse> => {
    try {
        const response = await fetch(API_ROUTES.LOGIN_REQUEST, {
          method: "POST",
          body: JSON.stringify(loginInfo),
          headers: { "Content-Type": "application/json" },
        });
        return response.json();
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(error.message || "خطایی پیش آمده");
        } else {
          throw new Error("لطفا مجددا امتحان کنید");
        }
      }
}

export default RequestLogin