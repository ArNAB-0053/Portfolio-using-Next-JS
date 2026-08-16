export type ProjectTab =
  | "All"
  | "Web Application"
  | "Machine Learning"
  | "React Native"
  | "Extension";

export const PROJECT_TABS: readonly ProjectTab[] = [
  "All",
  "Web Application",
  "Machine Learning",
  "React Native",
  "Extension",
] as const;

export interface Project {
  id: string;
  project_heading: string;
  project_desc: string;
  project_img: string;
  github_link: string;
  deployed_link?: string;
  tags: string[];
  project_tag: string[];
  bg: string;
  fontSize: string;
}

type UnknownRecord = Record<string, unknown>;

const isRecord = (value: unknown): value is UnknownRecord =>
  typeof value === "object" && value !== null;

const isString = (value: unknown): value is string => typeof value === "string";

const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every(isString);

export const isProject = (value: unknown): value is Project => {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.id) &&
    isString(value.project_heading) &&
    isString(value.project_desc) &&
    isString(value.project_img) &&
    isString(value.github_link) &&
    (value.deployed_link === undefined || isString(value.deployed_link)) &&
    isStringArray(value.tags) &&
    isStringArray(value.project_tag) &&
    isString(value.bg) &&
    isString(value.fontSize)
  );
};

export const isProjectArray = (value: unknown): value is Project[] =>
  Array.isArray(value) && value.every(isProject);

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  tech: string[];
  highlights: string[];
}

export interface SkillEntry {
  name: string;
  logo: string;
  left: boolean;
  style?: string;
}

export interface SkillCategory {
  name: string;
  skills: SkillEntry[];
}
