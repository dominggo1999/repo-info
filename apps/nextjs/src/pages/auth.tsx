import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { TextField, Button } from "@acme/ui-react";
import { login, CORRECT_EMAIL, CORRECT_PASSWORD } from "@acme/services";
import { useRouter } from "next/router";

interface IFormInput {
  email: string;
  password: string;
}

const Auth = () => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    const { error, success } = login({
      email: data.email,
      password: data.password,
    });

    if (success) {
      router.push("/");
    }

    if (error) {
      setErrorMessage(error);
    }
  };

  const onChangeHandler = (event: string) => {
    const e = { target: { event } };
    return e;
  };

  return (
    <>
      <form
        className="flex w-full flex-col gap-y-4 md:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          label="Email"
          {...register("email", {
            required: true,
          })}
          onChange={(e) => register("email").onChange(onChangeHandler(e))}
          type="email"
        />
        <TextField
          label="Password"
          {...register("password", {
            required: true,
          })}
          type="password"
          onChange={(e) => register("password").onChange(onChangeHandler(e))}
        />

        {errorMessage && (
          <div className="text-danger">
            <p>{errorMessage}</p>
          </div>
        )}

        <Button className="self-start" type="submit">
          Login
        </Button>
      </form>
      <div className="mt-3 text-sm">
        <p>
          Email : <span className="font-medium">{CORRECT_EMAIL}</span>
        </p>
        <p>
          Password : <span className="font-medium">{CORRECT_PASSWORD}</span>
        </p>
      </div>
    </>
  );
};

export default Auth;
