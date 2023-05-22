import React from "react";
import { Stack, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

// type formValue = {
//   email: string,
//   password : string
// }

const ReacHookForm = () => {
  // const form = useForm<formValue>();
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;
  const onSubmit = (form) => {
    console.log(form);
  };

  return (
    <div>
      <h4>ReacHookForm</h4>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2} width={400}>
          <TextField
            label="Username"
            type="email"
            {...register("email", { required: "Required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          >
            {" "}
            Username{" "}
          </TextField>
          <TextField
            label="Password"
            type="password"
            {...register("password", { required: " Required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          >
            {" "}
            Password{" "}
          </TextField>
          <Button type="submit" variant="contained" color="primary">
            {" "}
            Login{" "}
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default ReacHookForm;
