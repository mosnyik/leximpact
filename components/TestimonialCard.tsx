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
      className={`max-w-[480px] max-h-60 bg-white rounded-[12px] shadow-[2px_2px_5px_1px_rgba(0,0,0,0.18)] p-6 mt-12 flex flex-col justify-center border`}
    >
      <p className="text-[#4B5563]  text-base font-montserrat mb-6">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-6 h-6 bg-[#0546B6] rounded-full" />
        <div>
          <p className="text-[#6B7280] font-semibold font-montserrat">{name}</p>
          <p className="text-sm text-[#6B7280] font-montserrat">{role}</p>
        </div>
      </div>
    </div>
  );
}
