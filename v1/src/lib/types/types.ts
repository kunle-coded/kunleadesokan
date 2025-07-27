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
  projDetails: {
    intro: string;
    need: string;
    problem: string;
    role: string;
    outcome: string[];
    outcomeTitle: string[];
    outcomeGallery: string[];
    interlude: {
      title: string;
      body: string;
    };
    execution: string[];
    executionList: string[];
    challenges: string[];
    challengesGallery: string[];
    solutions: string[];
    solutionsGallery: string[];
    result: string[];
    resultSummary: string;
  };
}

export interface Indicator {
  first: boolean;
  second: boolean;
  third: boolean;
  fourth: boolean;
  fifth: boolean;
}

export interface timeline {
  id: number;
  experience: string;
  level: number;
  year: string;
}

export interface Education {
  id: number;
  institution: string;
  title: string;
  period: string;
}

export interface Experience {
  id: number;
  company: string;
  period: string;
  points: string[];
  responsibility: string;
  role: string;
}

export interface Resume {
  experience: Experience[];
  techSkills: string[];
  otherSkills: string[];
}

export interface Faq {
  id: number;
  question: string;
  answer: string;
}
