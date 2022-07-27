import { Box, Select, Text, VStack } from "@chakra-ui/react";
import { ContentType, SectionT } from "../types/Content";
import AddChildrenSelect from "./AddChildrenSelect";
import Recursive from "./Recursive";

type Props = {
  id: string;
  onChange: (id: string, value: ContentType) => void;
} & SectionT;

const Section = ({ id, onChange, ...props }: Props) => {
  return (
    <VStack
      paddingY="4"
      paddingLeft="4"
      paddingRight="2"
      w="full"
      spacing={6}
      border="1px solid"
      borderColor="gray.400"
    >
      {props.children.length > 0 && (
        <VStack w="full">
          {props.children.map((element, index) => (
            <Recursive
              {...element}
              id={`${id === "" ? "" : `${id}.`}children.${index}`}
              onChange={onChange}
              key={index}
            />
          ))}
        </VStack>
      )}
      <Box w="full">
        <Text textAlign="left" w="full">
          Add new children
        </Text>
        <AddChildrenSelect
          onAdd={(newChildren) => {
            onChange(id, {
              ...props,
              children: [...props.children, newChildren],
            });
          }}
        />
      </Box>
    </VStack>
  );
};

export default Section;
