import {Input, Button, Form, Checkbox} from 'antd'
import {useAuth} from "../../hooks/useAuth.tsx";
import {useNavigate} from "react-router-dom";

const SignIn = () => {
  const [form] = Form.useForm()
  const auth = useAuth();
  const navigate = useNavigate();

  const executeSignIn = async () => {
    const values = await form.validateFields()

    const result = await auth.signIn(values.username, values.password);
    if (result.success) {
      navigate({ pathname: "/painel" });
    } else {
      alert(result.message);
    }
  };

  return (
    <Form
      form={form}
      layout='vertical'
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input size="large" style={{ width: '300px' }} />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password size="large" style={{ width: '300px' }} />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" onClick={executeSignIn}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignIn;