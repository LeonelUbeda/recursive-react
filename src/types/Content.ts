export type TitleT = {
  type: "title";
  content: string;
};

export type ParagraphT = {
  type: "paragraph";
  content: string;
};

export type Quote = {
  type: "quote";
  children: Children;
};

export type SectionT = {
  type: "section";
  children: Children;
};

export type Accordion = {
  type: "accordion";
  children: Children;
};

export type ContentType = TitleT | ParagraphT | Quote | SectionT;
export type Children = Array<ContentType>;
