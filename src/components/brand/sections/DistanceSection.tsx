import ClassDropdown from "../form/ClassDropdown.tsx";
import SituationDropdown from "../form/SituationDropdown.tsx";
import TextInput from "../form/TextInput.tsx";
import {Button, Form} from 'antd';
import DistanceDropdown from "../form/DistanceDropdown.tsx";

const DistanceSection = () => {
  return (
    <div style={{padding: "20px"}}>
      <Form layout="inline">
        <Form.Item>
          <TextInput/>
        </Form.Item>
        <Form.Item>
          <DistanceDropdown/>
        </Form.Item>
        <Form.Item>
          <ClassDropdown/>
        </Form.Item>
        <Form.Item>
          <SituationDropdown/>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Buscar</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DistanceSection;