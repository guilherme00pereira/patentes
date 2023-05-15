import Avatar from '../assets/avatar.png';
import { Typography } from 'antd'

const { Title } = Typography;

interface TitleProps {
  title: string;
}
const HeaderSection = ({title}: TitleProps) => {
  return (
    <div className="header-section">
        <div>
            <Title>{title}</Title>
        </div>
        <div>
            <span>Usuário</span>
            <img src={Avatar} alt="Avatar" />
        </div>
    </div>
  )
};

export default HeaderSection;