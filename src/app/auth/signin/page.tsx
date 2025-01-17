"use client";
import { fetchWrapper } from "@/utils/fetchWrapper";
import { useForm, SubmitHandler } from "react-hook-form";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { KeyboardEvent } from "react";
import Link from "next/link";

type Inputs = {
  email: string;
  password: string;
};

export default function Signin() {
  const router = useRouter();
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const request: any = await fetchWrapper("auth/login", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(data),
      });

    
      setCookie("TOKEN", request.token);
      setCookie("USER", JSON.stringify(request.user));

      router.refresh();
    } catch (error: any) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Ops!",
        description: (
          <div className="text-destructive-foreground">{error?.message}</div>
        ),
      });
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    const key = e.code;
    if (key === "Enter") {
      handleSubmit(onSubmit);
    }
  };

  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white">
        <div className="m-auto w-full rounded-md bg-white p-6  lg:max-w-xl">
          <h1 className="text-center text-3xl font-semibold text-blue-700">
            Login
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-blue-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="mt-2 text-red-100">Campo Obrigatório</span>
              )}
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Senha
              </label>
              <input
                type="password"
                className="mt-2 block w-full rounded-md border bg-white px-4 py-2 text-blue-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                {...register("password", { required: true })}
                onKeyDown={handleKeyPress}
              />
              {errors.password && (
                <span className="mt-2 text-red-100">Campo Obrigatório</span>
              )}
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                className="w-full transform rounded-md bg-blue px-4 py-2 tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none"
              >
                Login
              </Button>
            </div>
            <div className="mt-[15px] flex justify-center">
              <p>
                Não tem uma conta?{" "}
                <Link href="/auth/signup">
                  <span className="text-blue">Cadastra-se</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
