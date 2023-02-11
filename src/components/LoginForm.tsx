import { Button, Form, Input } from "antd";
import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const dispatch = useDispatch<any>();
  const { error, isLoading } = useTypedSelector((state) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useActions();
  const submit = () => {
    login(username, password);
  };
  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required("Please, enter username")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[rules.required("Please, enter password")]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Button loading={isLoading} type="primary" htmlType="submit">
          Enter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
