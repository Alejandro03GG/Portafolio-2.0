import React from "react";

const SkillCard = ({ icon, skillName, description }) => {
  return (
    <div className="bg-[#000000] rounded-2xl border border-[#3D4A5D] p-4">
      <div className="flex gap-3">
        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-b from-[#7fbafa] to-[#72b4fc] rounded-[7px]">
          {icon}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-center">
            <p className="text-[20px] text-[#EAEAEA] font-medium">
              {skillName}
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs text-[#EAEAEA] text-justify leading-5 mt-2 ">
        {description}
      </p>
    </div>
  );
};

export default SkillCard;
