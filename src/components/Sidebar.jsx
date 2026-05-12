import React from "react";
import assets from "../assets/assets";
import FloatingUserMenu from './FloatingUserMenu';



const Sidebar = ({user, setUser, friendsList,serverList ,activeChat, setActiveChat }) => {
  const handleChat = (username) => {
    setActiveChat(username);
  };

  return (
    <div className="relative flex bg-[#202225] w-120 ">

      
      <FloatingUserMenu user={user} setUser={setUser}/>

      {/* Server selector */}
      
      <div className="flex flex-col gap-4  w-16 bg-[#2F3136] pt-3 px-3">
        <div className=" h-10 w-10">
          <img src={assets.Nexus} className="" alt="" />
        </div>

        {serverList.map((data,index)=>(
          <div key={index} className="">
            <img src={data.icon} alt="" className="rounded-xl hover:cursor-pointer " />
          </div>
        ))}



       
      </div>

      <div className="  border-2 w-full border-x-[#42464D] h-full flex flex-col items-center pt-3 px-3">
        {/* Logo */}
        {/* <div className="text-2xl border  rounded-xl px-2 py-1 w-full flex gap-2">
        <img src={assets.Nexus} className="h-8   " alt="" />
        <h1>Nexus</h1>
      </div> */}

        {/* Search Box */}
        <div className="w-full">
          <input
            type="text"
            className="border w-full rounded-lg  focus:outline-0 h-10 p-2 text-xl "
            placeholder="Search"
          />
        </div>

        {/* Friends */}
        <div className="  border-[#42464D]  flex flex-col gap-2 w-full  ">
          <h1 className="h-10    text-lg flex justify-between items-center  hover:text-white ">
            Recent <span className="cursor-pointer">+</span>
          </h1>

          {/* Chat option */}
          <div className=" flex flex-col gap-2">
            {friendsList.map((data, index) => (
              <div
                onClick={() => handleChat(data.username)}
                key={index}
                className={`flex h-10 gap-2 items-center hover:bg-[#84CC16] rounded-lg px-2 ${activeChat === data.username ? "bg-[#A3E635]" : ""} `}
              >
                <img src={data.avtar} alt="t" className="h-8 " />
                <h1
                  className={` col-span-2   text-2xl text-[#DCDDDE] hover:text-[#8E9297]   cursor-pointer  rounded-xl `}
                >
                  {data.username}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
