import {useState} from 'react';
import { Input } from 'antd';
import {useContext} from "react";
import {BrandContext} from "../../../config/context.tsx";

const TermInput = () => {
    const {data, setData} = useContext(BrandContext);
    const [text, setText] = useState('');

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
        setData({...data, term: e.target.value});
    }

    return <Input placeholder="Termo" style={{width: "300px"}} value={text} onChange={onChangeHandler} />
};

export default TermInput;