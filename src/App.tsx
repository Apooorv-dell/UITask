import { Grid, GridItem } from "@chakra-ui/react";

import BottomSideBar from "./components/BottomSideBar";
import SideNav from "./components/SideNav";
import TopNav from "./components/TopNav";
import SearchBox from "./components/SearchBox";
import Filter from "./components/Filter";
import CanddidateBorad from "./components/CanddidateBorad";
import "./App.css";

function App() {
  return (
    <>
      <Grid
        templateAreas={`"side nav nav "  "side main sub" `}
        gridTemplateColumns={"72px 1fr 3fr"}
        gridTemplateRows={"120px"}
      >
        <GridItem area="side" bg="white" height={"100vh"} boxShadow="xl" position={'fixed'} >
          <SideNav />
          <BottomSideBar />
        </GridItem>
        <GridItem area="nav" bg=" #F9FAFF" >
          <TopNav />
        </GridItem>
        <GridItem area="main" bg=" #F9FAFF"  >

            <SearchBox />
            <Filter />

        </GridItem>
        <GridItem area="sub" >
<CanddidateBorad/>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
