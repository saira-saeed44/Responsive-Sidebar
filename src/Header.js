import React, { useState } from 'react';  
const Header = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", src: "Chart-fill" },
    { title: "Inbox", src: "Chat" },
    { title: "Accounts", src: "User" },
    { title: "Schedule", src: "Calendar" },
    { title: "Search", src: "Search" },
    { title: "Analytics", src: "Chart" },
    { title: "Files", src: "Folder"},
    { title: "Setting", src: "Setting" },
  ];

  return (
    <header>
      <div className='flex w-[3/5]'>
        <div className={`${open ? "w-72" : "w-20"} p-5 pt-8 duration-300 h-screen bg-blue-500 relative`}>
          <img
            src={require('./images/download (2).png')} alt='toggle'
            className={`absolute cursor-pointer top-9 border-2 rounded-full h-5 -right-3 border-dark-purple ${!open && "rotate-180"}`}
            onClick={() => {
              setOpen(!open)
            }}
          />
          <div className={`flex gap-x-4 items-center ${Menus[0] && 'bg-light-white'}`}>
            <img src={require('./images/sairalogo.jpg')} className={`cursor-pointer h-10 rounded-full duration-500 ${open && "rotate-[360deg]"}`} alt='logo' />
            <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "scale-0"}`}>Personal Protfolio</h1>
          </div>
          <ul className='pt-6'>
            {Menus.map((menu, index) => (
              <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
                <img className='h-5 rounded-full'  src={require(`./images/${menu.src}.png`)} alt={menu.title} />
                <span className={`${!open && 'hidden'} origin-left text-white duration-200`}>{menu.title}</span>
              </li> 
            ))}
          </ul>
        </div>
        <div className='p-7 text-2xl font-semibold flex-1 h-screen'>
          <h1 className='text-blue-700'>Home Page</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
