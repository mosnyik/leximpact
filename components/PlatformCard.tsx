// import Image from "next/image";

// interface PlatformCardProps {
//   title: string;
//   description: string;
//   imageSrc: string;
//   iconSlot?: React.ReactNode;
// }

// export default function PlatformCard({
//   title,
//   description,
//   imageSrc,
//   iconSlot,
// }: PlatformCardProps) {
//   return (
//     <div className="w-[427px] h-[582px] bg-heroMild rounded-[8px] shadow-[2px_2px_5px_1px_rgba(0,0,0,0.18)] flex flex-col overflow-hidden">
//       {/* Gradient Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-b from-heroStrong/95 via-white/90 to-heroMild/90 z-0"></div>

//       <div className="relative h-[386px] w-full">
//         <Image src={imageSrc} alt={title} fill className="object-cover" />
//         {iconSlot && (
//           <div className="absolute bottom-4 left-4 bg-primary p-2 rounded-md">
//             {iconSlot}
//           </div>
//         )}
//       </div>
//       <div className="flex flex-col gap-2 px-[30px] pt-4 justify-center align-middle">
//         <h3 className="text-[24px] font-semibold leading-[1] text-[#1A1A1A] font-montserrat">
//           {title}
//         </h3>
//         <p className="text-[16px] font-normal leading-[1] text-[#666666] font-montserrat">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

interface PlatformCardProps {
  title: string;
  description: string;
  imageSrc: string;
  iconSlot?: React.ReactNode;
  hasOverlay?: boolean;
}

export default function PlatformCard({
  title,
  description,
  imageSrc,
  iconSlot,
  hasOverlay = false,
}: PlatformCardProps) {
  return (
    <div className="w-96 [427px] max-h-96 bg-heroMild rounded-[8px] shadow-[2px_2px_5px_1px_rgba(0,0,0,0.18)] overflow-hidden flex flex-col">
      <div className="relative h-[386px] w-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover rounded-md"
        />
        {hasOverlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/30 via-transparent to-transparent z-10 rounded-t-[8px]" />
        )}
        {iconSlot && (
          <div className="absolute bottom-4 left-4 bg-primary p-2 rounded-md z-20">
            {iconSlot}
          </div>
        )}
      </div>

      <div className="flex flex-col justify-center items-center p-4 text-center gap-2">
        <h3 className="text-[24px] font-semibold leading-[1] text-[#1A1A1A] font-montserrat">
          {title}
        </h3>
        <p className="text-[16px] font-normal leading-[1] text-[#666666] font-montserrat max-w-[356px] pb-20">
          {description}
        </p>
      </div>
    </div>
  );
}
