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

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="E-mail"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
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