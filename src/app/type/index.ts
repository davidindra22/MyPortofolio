export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
  slug: string;
  technologies?: string[];
  features?: { bold: string; desc: string }[]; // tambahkan tanda ?
};
