export interface ConverterCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface ConverterGroup {
  id: string;
  groupName: string;
  categories: ConverterCategory[];
}
