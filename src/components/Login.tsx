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
    <form onSubmit={onSubmitLogin} className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onChangeEmail}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        minLength={6}
        onChange={onChangePassword}
      />
      <button>Masuk</button>
    </form>
  );
}

export default Login;
