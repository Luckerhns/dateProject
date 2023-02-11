import { Button, Layout, Menu, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../routes/mainRoute";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const { logout } = useActions();
  const { isAuth, user } = useTypedSelector((state) => state.auth);
  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <Menu theme="dark" mode="horizontal">
            <div>{user.username}</div>
            <Menu.Item title="string" key={1} onClick={(e) => logout()}>
              Logout
            </Menu.Item>
          </Menu>
        ) : (
          <>
            <Menu theme="dark" mode="horizontal">
              <Menu.Item onClick={(e) => navigate(RouteNames.LOGIN)} key={1}>
                Логин
              </Menu.Item>
            </Menu>
          </>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
