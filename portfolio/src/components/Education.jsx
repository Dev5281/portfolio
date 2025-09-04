import Section from "./Section";
import { GraduationCap } from "lucide-react";
import EDUCATION from "../data/education";

export default function Education() {
  return (
    <Section id="education" title="Education" icon={GraduationCap}>
      <div className="grid md:grid-cols-2 gap-6">
        {EDUCATION.map((e) => (
          <div key={e.school} className="rounded-2xl border p-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h4 className="font-semibold">{e.school}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">
                  {e.degree}
                </p>
              </div>
              <span className="text-sm opacity-80">{e.time}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
