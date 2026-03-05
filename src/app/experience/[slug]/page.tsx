import Link from "next/link";
import { notFound } from "next/navigation";
import { experiences } from "@/data/experiences";

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = (slug || "").trim().toLowerCase();

  const e = experiences.find((x) => x.slug.toLowerCase() === s);
  if (!e) return notFound();

  return (
    <article className="space-y-6">
      <Link href="/experience" className="text-sm underline">
        ← Retour expériences
      </Link>

      <header className="space-y-2">
        <h1 className="h1">{e.title}</h1>
        <p className="muted">
          {[e.company, e.location, e.period].filter(Boolean).join(" • ")}
        </p>
        {e.excerpt ? <p className="muted">{e.excerpt}</p> : null}
      </header>

      <section className="space-y-2">
        <h2 className="h2">Missions</h2>

        {e.missions?.length ? (
          <ul className="list-disc space-y-1 pl-5 muted">
            {e.missions.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        ) : (
          <p className="muted">Aucune mission renseignée.</p>
        )}
      </section>
    </article>
  );
}