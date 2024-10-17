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
import { RequestLogin } from "@/lib/Actions";
import { ROUTES } from "@/lib/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/logo.png";

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
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (loginInfo: LoginProps) => RequestLogin(loginInfo),
    onSuccess: (data) => {
      toast.success(data?.message, {
        position: "top-center",
      });
      router.push(ROUTES.BLOGS);
    },
    onError: (error) => {
      const message = error instanceof Error ? error.message : "مشکلی پیش امده";
      toast.error(message, {
        position: "top-center",
      });
    },
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
      className="min-h-dvh px-8 flex flex-col w-full justify-center items-center gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <header className="flex flex-col gap-8 items-center mb-8">
        <Image className="rounded-full w-44" src={Logo} alt="logo" />
        <h1 className="text-3xl font-bold">وبلاگ تخصصی لورم</h1>
      </header>
      <InputField type="text" name="userName" register={register} />
      <InputField type="password" name="password" register={register} />
      <Button className="h-10 pb-2" as="button" type="submit">
        ورود
      </Button>
    </form>
  );
};

export default LoginPage;
