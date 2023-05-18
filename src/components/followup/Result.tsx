import { useContext } from 'react'
import { FollowUpContext } from '../../config/context'

const Result = () => {
    const { result } = useContext(FollowUpContext)

    if(result) {
        return (
            <div>Success</div>
        )
    }
    return (
        <div>
            Error
        </div>
    );
};

export default Result;