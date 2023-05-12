import {Button} from 'antd';
import {useContext} from "react";
import {BrandContext} from "../../../config/context.tsx";

const SubmitButton = () => {
    const {data} = useContext(BrandContext);

  const submitHandler = () => {
    console.table(data);
  }

    return <Button type="primary" onClick={submitHandler}>Buscar</Button>;
};

export default SubmitButton;