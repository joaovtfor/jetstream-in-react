import logo from '../../assets/logos/Logo-tempo-integral.png';
import styled from 'styled-components';

const Img = styled.img`
`;

interface MySvgComponentProps {
    className?: string;
}

const MySvgComponent: React.FC<MySvgComponentProps> = ({ className }) => {
    return (
        <div>
            <Img className={className} src={logo} alt="Logo" />
        </div>
    );
};

export default MySvgComponent;
