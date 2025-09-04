import Section from "./Section";
import { Award } from "lucide-react";
import CERTS from "../data/certs";

export default function Certifications() {
  return (
    <Section id="certs" title="Certifications" icon={Award}>
      <div className="grid md:grid-cols-2 gap-6">
        {CERTS.map((c) => (
          <div key={c.name} className="rounded-2xl border p-5">
            <h4 className="font-semibold">{c.name}</h4>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              {c.org} • {c.year}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
