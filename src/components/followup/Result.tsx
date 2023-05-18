import { useContext } from 'react'
import { MdCheckCircle } from "react-icons/md";
import { FollowUpContext } from '../../config/context'
import { Typography } from "antd";

const { Title } = Typography

const Result = () => {
    const { result } = useContext(FollowUpContext)

    return (
        <div className="result-box">
            <Title level={2}>{result.message}</Title>
            <div>
                {result.success && <MdCheckCircle className="check-success" />}
            </div>
        </div>
    );
};

export default Result;