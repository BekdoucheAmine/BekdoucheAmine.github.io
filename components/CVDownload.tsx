export default function CVDownload() {
  return (
    <a
      href="/cv.pdf"
      download
      className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
    >
      Download CV (PDF)
    </a>
  );
}
