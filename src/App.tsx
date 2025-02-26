import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { Show, Hide } from "@chakra-ui/media-query";

function App() {
  return (
    <>
      <Button>Click Me</Button>
      <Hide breakpoint="(max-width: 1024px)">
        <Button>Click Me LG</Button>
      </Hide>
    </>
  );
}

export default App;
