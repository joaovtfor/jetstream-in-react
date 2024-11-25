import logo from '../../assets/logos/Logo-tempo-integral.png'

const ApplicationLogo = ({ className }: { className?: string }) => {
    return (
        <img className={'w-[40vw] sm:w-[200px] m-auto ' + className} src={logo} alt="Logo" />
    );
}

export default ApplicationLogo;
