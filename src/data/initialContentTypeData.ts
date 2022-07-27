import { ContentType } from "../types/Content";

const initialContentTypeData: Array<ContentType> = [
  { content: "", type: "paragraph" },
  {
    children: [],
    type: "section",
  },
  {
    content: "",
    type: "title",
  },
  {
    children: [],
    type: "quote",
  },
];

export default initialContentTypeData;
