import { Box, Input, Text } from "@chakra-ui/react";
import { TitleT } from "../types/Content";

type Props = { onChange: (_: string) => void } & Omit<TitleT, "type">;

const Title = ({ content, onChange }: Props) => {
  return (
    <Box>
      <Text>Title</Text>
      <Input
        value={content}
        onChange={(event) => onChange(event.target.value)}
        width="full"
      />
    </Box>
  );
};

export default Title;
