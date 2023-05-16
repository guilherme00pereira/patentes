import {Form} from "antd";
import ClassDropdown from "../form/ClassDropdown.tsx";
import SituationDropdown from "../form/SituationDropdown.tsx";
import MultipleTermsInput from "../form/MultipleTermsInput.tsx";
import SearchButton from "../form/SearchButton.tsx";

const RadicalSection = () => {
  return (
    <div style={{padding: "20px"}}>
      <Form layout="inline">
          <MultipleTermsInput/>
        <Form.Item name="classe" label="Classe" colon={false}>
          <ClassDropdown />
        </Form.Item>
        <Form.Item name="situacao" label="Situação" colon={false}>
          <SituationDropdown />
        </Form.Item>
        <Form.Item>
          <SearchButton showText source="r" />
        </Form.Item>
      </Form>
    </div>
  );
};

export default RadicalSection;