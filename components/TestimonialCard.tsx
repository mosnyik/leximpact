interface TestimonialCardProps {
  text: string;
  name: string;
  role: string;
}

export default function TestimonialCard({
  text,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div
      className={`w-[480px] h-[240px] bg-white rounded-[12px] shadow-[2px_2px_5px_1px_rgba(0,0,0,0.18)] p-6 mt-12 flex flex-col justify-between border`}
    >
      <p className="text-[#4B5563] text-base font-montserrat">{text}</p>
      <div className="flex items-center gap-3 mt-4">
        <div className="w-6 h-6 bg-[#021488] rounded-full" />
        <div>
          <p className="text-[#021488] font-semibold font-montserrat">{name}</p>
          <p className="text-sm text-[#6B7280] font-montserrat">{role}</p>
        </div>
      </div>
    </div>
  );
}
