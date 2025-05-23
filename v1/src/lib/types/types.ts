export interface Project {
  client: string;
  description: string;
  externalLink: string;
  gitHubLink: string;
  goal: string;
  id: number;
  images: string[];
  intent: string;
  name: string;
  overview: string;
  role: string;
  stack: string[];
  status: string;
  type: string;
  year: string;
}

export interface Indicator {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
  fifth: boolean;
}
