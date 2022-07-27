import { Box, Checkbox, Icon, IconButton, Input, Text } from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import { Children, ContentType } from "../types/Content";
import Paragraph from "./Paragraph";
import Title from "./Title";
import Section from "./Section";

type Props = {
  id: string;
  onChange: (id: string, value: ContentType) => void;
} & ContentType;

const Recursive = ({ id, onChange, ...props }: Props) => {
  const getElement = () => {
    switch (props.type) {
      case "title": {
        return (
          <Title
            content={props.content}
            onChange={(value) =>
              onChange(id, { type: props.type, content: value })
            }
          />
        );
      }
      case "paragraph": {
        return (
          <Paragraph
            content={props.content}
            onChange={(value) => onChange(id, { ...props, content: value })}
          />
        );
      }

      case "section": {
        return (
          <Section
            {...props}
            id={id}
            onChange={(id, value) => onChange(id, { ...value })}
          />
        );
      }

      default:
        return <></>;
    }
  };
  return <Box w="full">{getElement()}</Box>;
};

export default Recursive;
