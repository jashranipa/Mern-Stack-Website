import React from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as GiIcons from 'react-icons/gi';


export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Student',
    path: '/student',
    icon: <SiIcons.SiGoogleclassroom />,
    cName: 'nav-text'
  },
  {
    title: 'Faculty',
    path: '/faculty',
    icon: <GiIcons.GiTeacher />,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <AiIcons.AiFillContacts />,
    cName: 'nav-text'
  }
];