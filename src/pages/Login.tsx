import { Layout, Row } from "antd";
import Card from "antd/es/card/Card";
import React, { FC } from "react";
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify={"center"} align={"middle"} className="h100">
        <Card>
          <LoginForm />
        </Card>
      </Row>
    </Layout>
  );
};

export default Login;
