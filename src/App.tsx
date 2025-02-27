// import { Show, Hide } from "@chakra-ui/media-query";

import { Grid, GridItem, Show } from "@chakra-ui/react";
import { Hide } from "@chakra-ui/media-query";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Hide breakpoint="(max-width: 1024px)">
          <GridItem area="aside" bg="gold">
            Aside
          </GridItem>
        </Hide>

        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
