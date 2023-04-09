import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const ReacHookForm = () => {
  const form = useForm();
  const { register, control } = form;
  const { name, onBlur, onChange, ref } = register("username");

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          type="text"
          id="username"
        />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Username</label>
        <input
          type="text"
          id="channel"
          {...register("channel")}
        />

        <button> Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ReacHookForm;
