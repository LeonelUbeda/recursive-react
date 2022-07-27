import { Box, SimpleGrid } from "@chakra-ui/react";
import dot from "dot-object";
import deepmerge from "deepmerge";
import { useState } from "react";
import Recursive from "./components/Recursive";
import { Children, ContentType } from "./types/Content";

function App() {
  const [state, setState] = useState<ContentType>({
    type: "section",
    children: [
      {
        type: "paragraph",
        content: "simon prro",
      },
    ],
  });
  return (
    <Box m="4" w="full">
      <SimpleGrid columns={2} gridColumnGap={8}>
        <Recursive
          {...state}
          id=""
          onChange={(id, value) => {
            console.log("chaale", id, value);

            if (id === "") {
              setState(value);
            } else {
              const newObject = structuredClone(state);
              dot.copy("newvalue", id, { newvalue: value }, newObject);

              console.log(newObject);
              setState(newObject);
            }
          }}
        />
        <div>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      </SimpleGrid>
    </Box>
  );
}

export default App;
