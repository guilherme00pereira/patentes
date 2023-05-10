import ClassDropdown from "./form/ClassDropdown";
import SituationDropdown from "./form/SituationDropdown";
import TextInput from "./form/TextInput";
import { Form } from 'antd';

const SimpleSearchSection = () => {
    return (
        <div style={{padding: "20px"}}>
            <Form layout="inline">
                <Form.Item>
                    <TextInput />
                </Form.Item>
                <Form.Item>
                    <ClassDropdown />
                </Form.Item>
                <Form.Item>
                    <SituationDropdown />
                </Form.Item>
            </Form>
        </div>
    );
};

export default SimpleSearchSection;