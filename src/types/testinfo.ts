export interface TestInfoType {
  id: number;
  name: string;
  duration: string;
  description: {
    general: string;
    aim: string;
    structure: { title: string; text: string }[];
  };
}
