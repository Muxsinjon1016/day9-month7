import React from "react";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { request } from "../../config/request";
import { saveState } from "../../config/storage";
import { useLogin } from "../../services/mutation/useLogin";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  email: z.string().min(4, "At least 4 charecters"),
  password: z
    .string(2)
    .min(4, "At least 4 charecters")
    .max(8, "Maximum 8 charecters"),
});

export const Login = () => {
  const [password, setPassword] = React.useState(false);
  const { mutate } = useLogin();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const loginSubmit = (data) => {
    mutate(data, {
      onSuccess: (res) => {
        saveState("user", { ...res.user, token: res.accessToken });
        navigate("/");
      },
    });

    reset();
  };

  const showPassword = () => {
    setPassword(!password);
  };

  return (
    <div className="relative bg-gray-900 h-screen">
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <div className="bg-bg1 bg-cover bg-no-repeat w-[460px] h-[360px] mt-32 border-2 border-gray-300 p-7 rounded-12">
          <p className="text-center text-xl font-medium text-white">
            It is demo, so this is no need to register
          </p>
          <form onSubmit={handleSubmit(loginSubmit)} className="mt-7">
            <Input
              register={register}
              className={"mt-4"}
              type={"email"}
              name={"email"}
              placeholder={"Email"}
            />
            {errors.email && (
              <p className="text-red-600 font-medium text-lg">
                {errors.email.message}
              </p>
            )}
            <div className="flex mt-4 items-center gap-0 rounded-12 bg-white">
              <Input
                register={register}
                type={password ? "text" : "password"}
                name={"password"}
                placeholder={"Password"}
              />

              {password ? (
                <IoMdEyeOff
                  onClick={showPassword}
                  className="w-7 h-auto mr-2 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={showPassword}
                  className="w-7 h-auto mr-2 cursor-pointer"
                />
              )}
            </div>
            {errors.password && (
              <p className="text-red-600 font-medium text-lg">
                {errors.password.message}
              </p>
            )}
            <Button
              className={"mt-7"}
              type={"submit"}
              variant={"submit"}
              children={"Send"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
