import ClassDropdown from "../form/ClassDropdown.tsx";
import SituationDropdown from "../form/SituationDropdown.tsx";
import TextInput from "../form/TextInput.tsx";
import {Form} from 'antd';
import SubmitButton from "../form/SubmitButton.tsx";

const GeneralSection = () => {

  return (
    <div style={{padding: "20px"}}>
      <Form layout="inline">
        <Form.Item>
          <TextInput/>
        </Form.Item>
        <Form.Item>
          <ClassDropdown/>
        </Form.Item>
        <Form.Item>
          <SituationDropdown/>
        </Form.Item>
        <Form.Item>
          <SubmitButton/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GeneralSection;