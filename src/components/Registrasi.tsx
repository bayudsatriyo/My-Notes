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
    <form
      onSubmit={SubmitHandler}
      className="register-input flex flex-col w-2/3 mx-auto gap-2 text-start py-5"
    >
      {" "}
      <label htmlFor="name">
        <span className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 block py-2">
          Name
        </span>
        <input
          id="name"
          type="text"
          placeholder="Nama"
          value={name}
          onChange={onNameChange}
          className="w-full focus:ring-violet-700 focus:ring border-violet-500 border-2 rounded-md pl-1"
        />
      </label>
      <label htmlFor="email">
        <span className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 block py-2">
          Email
        </span>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
          className="w-full focus:ring-violet-700 focus:ring border-violet-500 border-2 rounded-md pl-1"
        />
      </label>
      <label htmlFor="password">
        <span className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500 block py-2">
          Password
        </span>
        <input
          id="password"
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          value={password}
          onChange={onPasswordChange}
          className="w-full focus:ring-violet-700 focus:ring border-violet-500 border-2 rounded-md pl-1"
        />
      </label>
      <button className="mt-4 rounded-2xl bg-gradient-to-r from-purple-900 to-violet-600 w-fit py-2 px-10 font-semibold text-slate-50 hover:from-slate-50 hover:to-slate-50 hover:text-violet-700 border hover:border-violet-700 mx-auto">
        Register
      </button>
    </form>
  );
}

export default Register;
