import {useState} from 'react';
import { Input } from 'antd';
import {useContext} from "react";
import {BrandContext} from "../../../config/context.tsx";

const TextInput = () => {
    const {data, setData} = useContext(BrandContext);
    const [text, setText] = useState('');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        setData({...data, term: e.target.value});
    }

    return (
        <div>
            <Input placeholder="Termo" style={{width: "300px"}} value={text} onChange={onChangeHandler} />
        </div>
    );
};

export default TextInput;