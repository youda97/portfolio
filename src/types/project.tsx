export interface Project {
  id: number;
  title: string;
  image: string;
  projectType: string;
  languages: string;
  client?: string;
  previewLink?: string;
}
