import AppLayout from "@/Layouts/AppLayout";
import Welcome from "@/Components/Welcome";
import styled from "styled-components";

const Home = () => {

    const BoxSection = styled.div`
        width: 12rem;
        height: 12rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        font-family: 'Fredoka', sans-serif;
        opacity: 0.5;
        border-width: 1px;
        margin: 20px;
        -webkit-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        -moz-box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
        box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);
    `;

    return (
        <AppLayout
            title="Home"
            header={
                <h2 className="text-xl font-semibold leading-tight text-theme-blue-2">
                    Home
                </h2>
            }
        >
            <div >
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-background px-20 flex justify-around flex-wrap dark:bg-gray-800 sm:rounded-lg">
                        <BoxSection className="bg-theme-green border-theme-green">
                            Teste
                        </BoxSection>
                        <BoxSection className="bg-theme-blue-2 border-theme-blue-2">
                            Teste
                        </BoxSection>
                        <BoxSection className="bg-theme-green border-theme-green">
                            Teste
                        </BoxSection>
                        <BoxSection className="bg-theme-blue-2 border-theme-blue-2">
                            Teste
                        </BoxSection>
                        <BoxSection className="bg-theme-green border-theme-green">
                            Teste
                        </BoxSection>
                        <BoxSection className="bg-theme-blue-2 border-theme-blue-2">
                            Teste
                        </BoxSection>
                        <BoxSection className="bg-theme-green border-theme-green">
                            Teste
                        </BoxSection>
                        <BoxSection className="bg-theme-blue-2 border-theme-blue-2">
                            Teste
                        </BoxSection>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default Home;
