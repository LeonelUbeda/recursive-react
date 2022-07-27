import { Box, Input, Text, Textarea } from "@chakra-ui/react";
import { ParagraphT } from "../types/Content";

type Props = { onChange: (_: string) => void } & Omit<ParagraphT, "type">;

const Paragraph = ({ content, onChange }: Props) => {
  return (
    <Box>
      <Text>Text area</Text>
      <Textarea
        onChange={(event) => onChange(event.target.value)}
        value={content}
        placeholder="insert paragraph text"
        width="full"
      />
    </Box>
  );
};

export default Paragraph;
