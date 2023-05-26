import {Layout as Container} from 'antd'
import SignIn from "../components/auth/SignIn.tsx";

const { Content } = Container

const Auth = () => {


  return (
      <Container>
        <Content style={{ minHeight: '100vh', display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div className="auth-card">
            <SignIn />
          </div>
        </Content>
      </Container>
  );
};

export default Auth;