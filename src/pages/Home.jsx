import ContainerGrid from "../components/Layout/ContainerGrid.jsx";
import Main from "../components/Layout/Main.jsx";
import SideBar from "../components/Layout/SideBar.jsx";
import Header from "../components/Layout/Header.jsx";

export default function Home() {
    return (
        <ContainerGrid>
            <Header>
                <div className="top-bar">
                    Top bar
                </div>
            </Header>
            <SideBar>Side bar</SideBar>
            <Main>Main</Main>
        </ContainerGrid>
    )
}