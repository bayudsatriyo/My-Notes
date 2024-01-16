import React from "react";

interface LoginProps {
  login: (email: string, password: string) => void;
}
function useInputLogin(
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

function Login({ login }: LoginProps) {
  const [email, onChangeEmail, resetEmail] = useInputLogin("");
  const [password, onChangePassword, resetPassword] = useInputLogin("");

  function onSubmitLogin(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    login(email, password);

    resetEmail();
    resetPassword();
  }

  return (
    <form
      onSubmit={onSubmitLogin}
      className="login-input flex flex-col w-1/2 mx-auto gap-4 text-start"
    >
      <label htmlFor="email">
        <span className="font-semibold after:content-['*'] after:ml-0.5 after:text-red-500">
          Email
        </span>
        <br />
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onChangeEmail}
          className="w-full h-8 pl-1 my-2 ring-violet-500 ring"
        />
      </label>
      <label htmlFor="passowrd">
        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 font-semibold">
          Password
        </span>
        <br />
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          minLength={6}
          onChange={onChangePassword}
          className="w-full h-8 pl-1 my-2 ring-violet-500 ring "
        />
      </label>
      <button className="rounded-2xl bg-gradient-to-r from-purple-900 to-violet-600 w-fit py-1 px-7 mb-4 text-slate-50 hover:text-violet-700 hover:from-slate-50 hover:to-slate-50 hover:border-violet-700 border font-semibold mx-auto">
        Masuk
      </button>
    </form>
  );
}

export default Login;
