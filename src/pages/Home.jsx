import ContainerGrid from "../components/Layout/ContainerGrid.jsx";
import Main from "../components/Layout/Main.jsx";
import SideBar from "../components/Layout/SideBar.jsx";
import TopBar from "../components/Layout/TopBar.jsx";

export default function Home() {
    return (
        <ContainerGrid>
            <TopBar>Top bar</TopBar>
            <SideBar>Side bar</SideBar>
            <Main>Main</Main>
        </ContainerGrid>
    )
}