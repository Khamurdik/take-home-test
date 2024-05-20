import React from 'react';
import { BiSolidDashboard, BiBriefcase, BiLogOut } from 'react-icons/bi'

interface IconPropsType {
  icon: React.ReactNode,
  text: string,
}

const SidebarIcon: React.FC<IconPropsType> = ({ icon, text = 'tooltip 💡' }) => {

  return (
    <div className="relative flex items-center justify-center 
        h-12 w-12 mt-4 mb-2 mx-auto bg-gray-100 
      hover:bg-blue-600 dark:bg-gray-800 
      text-blue-500 hover:text-white
        hover:rounded-xl rounded-3xl
        transition-all duration-300 ease-linear
        cursor-pointer shadow-lg">
      {icon}
      <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
        text-white bg-gray-900 
          text-xs font-bold 
          transition-all duration-100 scale-0 origin-left">
        {text}
      </span>
    </div>
  );
};
const SidebarBottomIcon: React.FC<IconPropsType> = ({ icon, text = 'tooltip 💡' }) => {

  return (
    <div className="relative flex items-center justify-center 
        h-12 w-12 mt-4 mb-4 mx-auto bg-gray-100 
      hover:bg-blue-600 dark:bg-gray-800 
      text-blue-500 hover:text-white
        hover:rounded-xl rounded-3xl
        transition-all duration-300 ease-linear
        cursor-pointer shadow-lg">
      {icon}
      <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
        text-white bg-gray-900 
          text-xs font-bold 
          transition-all duration-100 scale-0 origin-left">
        {text}
      </span>
    </div>
  );
};

const Sidebar: React.FC = () => {

  return (
    <div className='fixed top-0 h-screen w-20 m-0 flex flex-col bg-gray-900 text-white shadow-lg'>
      <div className='justify-self-start'>
        <SidebarIcon icon={<BiSolidDashboard size="24" />} text="Dashboard with all graphs" />
        <SidebarIcon icon={<BiBriefcase size="24" />} text="Calculating portfolio value" />
      </div>
      <div className='justify-self-end mt-auto'>
      <SidebarBottomIcon icon={<BiLogOut size="24" />} text="Logout" />
      </div>
    </div>
  );
};

export default Sidebar;