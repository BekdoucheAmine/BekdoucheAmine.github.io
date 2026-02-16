import CVDownload from "@/components/CVDownload";
import SkillsGrid from "@/components/SkillsGrid";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="px-8 py-16 max-w-6xl mx-auto">

      {/* HERO */}
      <section className="mb-24 flex flex-col md:flex-row items-center gap-12">

        {/* PHOTO DE PROFIL */}
        <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl border">
          <img
            src="/images/profile/amine.png" // ← remplace par ton image
            alt="Photo de profil d'Amine Bekdouche"
            className="w-full h-full object-cover"
          />
        </div>

        {/* TEXTE */}
        <div>
          <h1 className="text-5xl font-bold mb-4">Amine Bekdouche</h1>

          <p className="text-2xl text-gray-600 mb-6">
            Ingénieur FPGA & Systèmes Embarqués
          </p>

          <p className="text-lg max-w-3xl mb-6 text-gray-700">
            Spécialisé en conception numérique, développement VHDL, validation FPGA
            et architectures embarquées pour environnements R&D. Passionné par les
            systèmes critiques, la métrologie et l’optimisation hardware.
          </p>

          <CVDownload />
        </div>
      </section>

      {/* PROJETS */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-6">Projets d’ingénierie</h2>

        <div className="space-y-6">

          <a href="/projects/ge-vernova" className="block border p-8 rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Monitoring & Validation FPGA</h3>
            <p className="text-gray-600">
              Développement VHDL et automatisation Python pour systèmes de protection réseau.
            </p>
          </a>

          <a href="/projects/euromov" className="block border p-8 rounded-2xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold">Prototypage de capteurs biomédicaux</h3>
            <p className="text-gray-600">
              Recherche, prototypage et caractérisation métrologique de capteurs de pression flexibles.
            </p>
          </a>

        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold mb-6">Compétences</h2>

        <SkillsGrid
          data={[
            {
              title: "FPGA",
              skills: ["VHDL", "OSVVM", "AXI", "Avalon", "Cyclone SX", "Artix-7", "Zynq"]
            },
            {
              title: "Systèmes embarqués",
              skills: ["STM32", "C/C++", "Assembleur", "Drivers Baremetal/Linux"]
            },
            {
              title: "Outils CAO",
              skills: ["Vivado", "ModelSim", "Quartus", "MATLAB", "LabVIEW"]
            },
            {
              title: "Instrumentation",
              skills: ["OMICRON C256plus", "Multimètre", "Oscilloscope", "Analyseur logique"]
            },
            {
              title: "Outils logiciels",
              skills: ["GIT", "SVN", "Office", "Confluence", "JIRA"]
            }
          ]}
        />
      </section>

      {/* CONTACT */}
      <Contact />

    </main>
  );
}