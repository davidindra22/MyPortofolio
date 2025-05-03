export type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  slug: string;
  teknologies?: string[];
  features?: { bold: string; desc: string }[]; // tambahkan tanda ?
};
