import { AddIcon } from "@chakra-ui/icons";
import { HStack, IconButton, Select, SelectProps } from "@chakra-ui/react";
import React, { useState } from "react";
import initialContentTypeData from "../data/initialContentTypeData";
import { Children, ContentType } from "../types/Content";

type Props = {
  onAdd: (children: ContentType) => void;
} & Omit<SelectProps, "children">;

const AddChildrenSelect = ({ onAdd, ...props }: Props) => {
  const [state, setState] = useState("title");
  const handleOnClick = () => {
    switch (state) {
      case "paragraph":
      case "title": {
        onAdd({ type: state, content: "" });
        break;
      }
      case "section": {
        onAdd({ type: state, children: [] });
        break;
      }
    }
  };
  return (
    <HStack w="full">
      <Select
        {...props}
        onChange={(event) => setState(event.target.value)}
        value={state}
      >
        <option value="section">section</option>
        <option value="title">title</option>
        <option value="paragraph">paragraph</option>
      </Select>
      <IconButton
        aria-label=""
        icon={<AddIcon />}
        onClick={() => handleOnClick()}
      />
    </HStack>
  );
};

export default AddChildrenSelect;
