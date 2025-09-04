import Section from "./Section";
import Badge from "./Badge";
import { Code2 } from "lucide-react";
import SKILLS from "../data/skills";

export default function Skills() {
  return (
    <Section id="skills" title="Skills" icon={Code2}>
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div key={group} className="rounded-2xl border p-5">
            <h4 className="font-semibold mb-3">{group}</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((it) => (
                <Badge key={it}>{it}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
