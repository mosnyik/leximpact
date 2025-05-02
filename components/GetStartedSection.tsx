// components/GetStartedSection.tsx
export default function GetStartedSection() {
  return (
    <section className="bg-[#E0E7FF] py-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-4">
        Ready to Get Started?
      </h2>
      <p className="text-[#1E3A8A] font-semibold mb-8">
        Join our community and be part of Africa’s digital transformation.
      </p>
      <button className="bg-white text-[#1E3A8A] border border-[#1E3A8A] hover:bg-[#f0f4ff] transition px-6 py-3 rounded-md font-medium inline-flex items-center gap-2">
        Join the Community
        <span>→</span>
      </button>
    </section>
  );
}
