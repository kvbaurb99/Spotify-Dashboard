import React, { useState } from 'react';
import { BsFillPlayFill, BsThreeDots } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import Menu from './Menu';

export default function PopularSong({ title, image, listeners, time, position }) {
  const [isHover, setIsHover] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuEnter = () => {
    setShowMenu(true);
    setIsHover(true);
  };

  const handleMenuLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      onMouseLeave={() => setIsHover(false)}
      onMouseEnter={() => setIsHover(true)}
      className={`flex w-[90%] lg:w-[95%] mx-auto rounded-lg items-center bg-[#18181C] mt-3 text-white lg:ml-5 p-3 popular-song active:bg-[#444444] ${
        showMenu ? 'bg-[#444444]' : 'hover:bg-[#292929]'
      }`}
    >
      <div className="flex items-center w-full">
        {isHover || showMenu ? (
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
              isHover || showMenu ? 'text-white' : null
            }`}
          >
            {listeners.toLocaleString()}
          </p>
        </div>
        <div className="flex gap-8 items-center lg:w-auto w-full justify-end relative right-3 lg:right-0">
          <p className="text-sm text-[#b3b3b3] lg:block hidden">{time}</p>
          {isHover || showMenu ? (
            <AiOutlineHeart className="w-6 absolute left-[4rem] text-xl hidden lg:block" />
          ) : null}
          {isHover || showMenu ? (
            <BsThreeDots
              onClick={() => setShowMenu(!showMenu)}
              className="w-6 absolute lg:left-[6rem] text-xl"
            />
          ) : null}
          {showMenu ? (
            <Menu onMouseEnter={handleMenuEnter} onMouseLeave={handleMenuLeave} />
          ) : null}
        </div>
      </div>
    </div>
  );
}
