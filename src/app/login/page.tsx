"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { LoginProps } from "@/types/types";
import Button from "@/components/ui/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import InputField from "@/components/ui/InputField";
import { useMutation } from "@tanstack/react-query";
import RequestLogin from "../../../lib/RequestLogin";
import { ROUTES } from "../../../lib/constants";
import { useRouter } from "next/navigation";

// VALIDATION
const loginSchema = yup.object().shape({
  userName: yup
    .string()
    .required("نام کاربری را وارد کنید")
    .min(4, "نام کاربری باید حداقل شامل 4 کاراکتر باشد"),
  password: yup
    .string()
    .required("رمزعبور را وارد کنید")
    .min(5, "رمز عبور باید حداقل شامل 5 کاراکتر باشد"),
});

// LOGIN PAGE
const LoginPage = () => {
  const router = useRouter()

  const mutation = useMutation({
    mutationFn: (loginInfo: LoginProps) => RequestLogin(loginInfo),
    onSuccess: (data) => {
      toast(data.message, {
        type: "success",
        position: "top-center",
      });
      router.push(ROUTES.BLOGS)
    },
    onError: (error) => {
      toast(error.message, {
        type: "error",
        position: "top-center",
      });
    }
  });

  // REACT HOOK FORM
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
    mode: "onSubmit",
  });

  // SHOWING TOAST WHEN ERROR IS FOUND
  useEffect(() => {
    if (errors.userName || errors.password) {
      toast(
        <>
          {errors.userName?.message && (
            <span className="text-sm">
              {errors.userName.message}
              <br />
            </span>
          )}
          {errors.password?.message && (
            <span className="text-sm">{errors.password.message}</span>
          )}
        </>,
        {
          position: "top-center",
          autoClose: 3000,
        }
      );
    }
  }, [errors]);

  // HANDLING SUBMISSION
  const onSubmit = (info: LoginProps) => {
    mutation.mutate(info);
  };

  return (
    <form
      className="min-h-dvh flex flex-col w-full justify-center items-center gap-7"
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputField type="text" name="userName" register={register} />
      <InputField type="password" name="password" register={register} />
      <Button as="button" type="submit">
        ورود
      </Button>
    </form>
  );
};

export default LoginPage;
