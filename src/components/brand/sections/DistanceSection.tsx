import ClassDropdown from "../form/ClassDropdown.tsx";
import SituationDropdown from "../form/SituationDropdown.tsx";
import TermInput from "../form/TermInput.tsx";
import {Form} from 'antd';
import DistanceDropdown from "../form/DistanceDropdown.tsx";
import SearchButton from "../form/SearchButton.tsx";

const DistanceSection = () => {
  return (
    <div style={{padding: "20px"}}>
      <Form layout="inline">
        <Form.Item>
          <TermInput/>
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
          <SearchButton/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default DistanceSection;