export interface Project {
  id: number;
  name: string;
  type: string;
  overview: string;
  shortDesc: string;
  stack: string[];
  status: string;
  updated: string;
  images: string[];
}

export interface Indicator {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
  fifth: boolean;
}
