import projects from "@/app/data/dataProjects";
import DetailProjectClient from "./DetailProject";

export default async function DetailProject({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="text-white p-10">
        <p>Project tidak ditemukan.</p>
      </main>
    );
  }

  return <DetailProjectClient project={project} />;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
