import {Form} from "antd";
import ClassDropdown from "../form/ClassDropdown.tsx";
import SituationDropdown from "../form/SituationDropdown.tsx";
import MultipleTermsInput from "../form/MultipleTermsInput.tsx";
import SearchButton from "../form/SearchButton.tsx";

const RadicalSection = () => {
  return (
    <div style={{padding: "20px"}}>
      <Form layout="inline">
        <Form.Item>
          <MultipleTermsInput/>
        </Form.Item>
        <Form.Item>
          <ClassDropdown/>
        </Form.Item>
        <Form.Item>
          <SituationDropdown/>
        </Form.Item>
        <Form.Item>
          <SearchButton/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RadicalSection;