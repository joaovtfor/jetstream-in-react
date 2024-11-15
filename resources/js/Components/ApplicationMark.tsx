import logo from '../../assets/logos/Logo-tempo-integral.png';
import styled from 'styled-components';

const Img = styled.img`
    width: 80px;
`;

const MySvgComponent: React.FC = () => {
    return (
        <div>
            <Img src={logo} alt="Logo" />
        </div>
    );
};

export default MySvgComponent;
