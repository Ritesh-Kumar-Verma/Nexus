import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
const ChatBox = ({ activeChat }) => {
  //sample chat
  const chatData = [
    {
      id: 1,
      username: "Alex Rivera",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      message:
        "Hey, did you see the update on the project? The new UI looks clean.",
      time: "10:45 AM",
      date: "2024-05-12",
      isOnline: true,
      unreadCount: 2,
    },
    {
      id: 2,
      username: "Sarah Chen",
      icon: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      message:
        "I've attached the final design specs. Let me know if you need anything else!",
      time: "Yesterday",
      date: "2024-05-11",
      isOnline: false,
      unreadCount: 0,
    },
  ];

  return (
    <div
      className={`flex flex-col h-full   p-2 gap-2  ${activeChat ? "" : "hidden "}`}
    >
      <div className="h-full  ">
        {chatData.map((data, index) => (
          <div key={index} className="flex h-16  items-center gap-3">
            <img src={data.icon} alt="" className="h-10 rounded-full" />
            <div className=" flex flex-col">
              <div className="text-[#DCDDDE] font-bold text-md">
                {data.username}{" "}
                <span className="text-[#8E9297] text-sm">{data.time}</span>
              </div>
              <div className="text-[#DCDDDE]">{data.message}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center bg-[#383A40] rounded-xl px-2 py-1 mx-4 mb-4">
        <input
          type="text"
          placeholder={`Message ${activeChat || "Friends"}`}
          className="bg-transparent flex-1 focus:outline-none text-[#DBDEE1] p-3 placeholder:text-[#949BA4]"
        />

        <button className="px-3 text-[#B5BAC1] hover:text-[#FFFFFF] transition-colors cursor-pointer">
          <FontAwesomeIcon icon={faPaperPlane} className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default ChatBox;
