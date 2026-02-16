type SkillCategory = {
  title: string;
  skills: string[];
};

export default function SkillsGrid({ data }: { data: SkillCategory[] }) {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {data.map((cat, i) => (
        <div key={i} className="border rounded-2xl p-6">
          <h3 className="font-semibold mb-4">{cat.title}</h3>

          <div className="flex flex-wrap gap-2">
            {cat.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
