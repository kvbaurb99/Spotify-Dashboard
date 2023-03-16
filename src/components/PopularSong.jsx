import React, { useState } from 'react';
import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Menu from './Menu';

export default function PopularSong({ title, image, listeners, time, position, openMenuIndex, setOpenMenuIndex, index }) {
  const [isHover, setIsHover] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuEnter = () => {
    setShowMenu(true);
    setIsHover(true);
  };

  const handleMenuLeave = () => {
    setIsHover(false);
  };

  const handleMenuClick = () => {
    if (openMenuIndex === index) {
      setOpenMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
    }
  };

  return (
    <div
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
      className={`flex w-[90%] lg:w-[95%] mx-auto rounded-lg items-center bg-[#18181C] mt-3 text-white lg:ml-5 p-3 popular-song active:bg-[#444444] ${
        index === openMenuIndex ? 'bg-[#444444]' : 'hover:bg-[#292929]'
      }`}
    >
      <div className="flex items-center w-full">
        {isHover || index === openMenuIndex ? (
          <BsFillPlayFill className="absolute text-xl" />
        ) : (
          <p className="text-sm text-[#b3b3b3] absolute">{position}</p>
        )}
        <img src={image} alt="song" className="w-[45px] ml-8" />
        <p className="ml-5 lg:w-auto w-[250px]">{title}</p>
      </div>
      <div className="flex w-full lg:justify-around">
        <div className="lg:block hidden">
          <p
            className={`text-sm text-[#b3b3b3] ${
              isHover || index === openMenuIndex ? 'text-white' : null
            }`}
          >
            {listeners.toLocaleString()}
          </p>
        </div>
        <div className="flex gap-8 items-center lg:w-auto w-full justify-end relative right-3 lg:right-0">
          <p className="text-sm text-[#b3b3b3] lg:block hidden">{time}</p>
          {isHover || index === openMenuIndex ? (
            <AiOutlineHeart className="w-6 absolute left-[4rem] text-xl hidden lg:block" />
          ) : null}
          {isHover || index === openMenuIndex ? (
            <BsThreeDots onClick={handleMenuClick} className="w-6 absolute lg:left-[6rem] text-xl" />
          ) : null}
          {index === openMenuIndex ? (
            <Menu onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
