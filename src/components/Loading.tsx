import { Spin, Typography } from 'antd';

const { Title } = Typography;

const Loading = () => {
    return (
        <div className="loading">
            <Title level={3}>Buscando resultados</Title>
            <Spin size="large" />
        </div>
    );
};

export default Loading;