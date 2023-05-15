import ClassDropdown from "../form/ClassDropdown.tsx";
import SituationDropdown from "../form/SituationDropdown.tsx";
import TermInput from "../form/TermInput.tsx";
import {Form} from 'antd';
import SearchButton from "../form/SearchButton.tsx";

const GeneralSection = () => {

  return (
    <div style={{padding: "20px"}}>
      <Form layout="inline">
        <Form.Item label="Termo" colon={false}>
          <TermInput/>
        </Form.Item>
        <Form.Item>
          <ClassDropdown/>
        </Form.Item>
        <Form.Item>
          <SituationDropdown/>
        </Form.Item>
        <Form.Item>
          <SearchButton showText/>
        </Form.Item>
      </Form>
    </div>
  );
};

export default GeneralSection;