export type dropdownItem = { name: string; contents: string[] };
export type textureInfoItem = { name: string; contents: string };

export type Menu = {
  category: string;
  dropdown: dropdownItem[];
  textureInfo: textureInfoItem[];
};
