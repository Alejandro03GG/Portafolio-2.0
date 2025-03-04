import React from "react";

const ProjectCard = ({ imgUrl, title, tags, link }) => {
  return (
    <div className="h-full bg-[#000000] rounded-xl overflow-hidden shadow-md mx-2">
      <a
        href={link ? link : "#"}
        target="_blank"
        rel="noopener noreferre"
        className="block transform transition-transform duration-300 hover:scale-105"
      >
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-72 md:h-80 object-cover cursor-pointer"
        />
      </a>
      <div className="px-4 py-5">
        <h3 className="text-white text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xds text-secondary bg-blue-400 px-3 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
