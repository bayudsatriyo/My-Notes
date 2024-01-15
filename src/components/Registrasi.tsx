import React from "react";

export interface AuthState {
  name: string;
  email: string;
  password: string;
}

interface propsAuth {
  register: (user: AuthState) => void;
}

function useInputRegist(
  defaultValue: string
): [string, (event: React.ChangeEvent<HTMLInputElement>) => void, () => void] {
  const [value, setValue] = React.useState(defaultValue);
  const onHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  const resetValue = () => {
    setValue(defaultValue);
  };

  return [value, onHandler, resetValue];
}

function Register({ register }: propsAuth) {
  const [name, onNameChange, resetName] = useInputRegist("");
  const [email, onEmailChange, resetEmail] = useInputRegist("");
  const [password, onPasswordChange, resetPassword] = useInputRegist("");

  function SubmitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const payload = {
      name,
      email,
      password,
    };

    register(payload);

    resetName();
    resetEmail();
    resetPassword();
  }

  return (
    <form onSubmit={SubmitHandler} className="register-input">
      <input
        type="text"
        placeholder="Nama"
        value={name}
        onChange={onNameChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password}
        onChange={onPasswordChange}
      />
      <button>Register</button>
    </form>
  );
}

export default Register;
