import {Input} from "antd";

const MultipleTermsInput = () => {
    return (
        <div>
            <Input placeholder="Termo" size="large" style={{width: "100px"}} />
            <Input placeholder="Termo" size="large" style={{width: "100px"}} />
        </div>
    );
};

export default MultipleTermsInput;