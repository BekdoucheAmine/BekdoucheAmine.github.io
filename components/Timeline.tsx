type Experience = {
  year: string;
  role: string;
  company: string;
  description: string;
};

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <div className="space-y-8">
      {items.map((exp, i) => (
        <div key={i} className="flex gap-6">
          <div className="w-24 text-gray-500">{exp.year}</div>

          <div className="flex-1 border-l pl-6">
            <h3 className="font-semibold text-lg">
              {exp.role} — {exp.company}
            </h3>

            <p className="text-gray-600 mt-2">{exp.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
