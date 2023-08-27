export type dropdownItem = { name: string; contents: string[] };
export type textureInfoItem = { title: string; contents: string };

export type Menu = {
  category: string;
  dropdown: dropdownItem[];
  textureInfo: textureInfoItem[];
};
