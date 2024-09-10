import React from 'react';

interface MentorCardProps {
  variant: 'v1' | 'v2';
  name: string;
  title: string;
  imageUrl: string;
}

const MentorCard: React.FC<MentorCardProps> = ({ variant, name, title, imageUrl }) => {
  const commonClasses = "clickable-element flex flex-col items-center gap-2 rounded-xl cursor-pointer transition-all duration-200 min-w-[230px] flex-grow select-none";
  const v1Classes = "bg-white border border-gray-200 shadow-sm hover:shadow-md p-9 pb-4";
  const v2Classes = "p-2";
  

  return (
    <div className={`${commonClasses} ${variant === 'v1' ? v1Classes : v2Classes}`}>
      <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          width={100}
          height={100}
          className="rounded-full pointer-events-none object-cover"
          draggable="false"
        />
      </div>
      <div className="flex flex-col items-center gap-0 w-full">
        <h3 className="text-base font-semibold text-center text-[#121926] leading-6">{name}</h3>
        <p className="text-base font-normal text-center text-[#121926] leading-6">{title}</p>
      </div>
    </div>
  );
};

export default MentorCard;