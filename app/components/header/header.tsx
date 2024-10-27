'use client'
import React, { useContext } from 'react'
import s from './style.module.css'
import { IoMdMenu } from "react-icons/io";
import { SidebarContext } from '@/app/components/contexts/sidebar_context';
import WikiSearch from '../wiki_search/wiki_search';

const Header = () => {
  const { isOpen, toggleMenu } = useContext(SidebarContext);

  return (
    <div className={s.header}>
      <IoMdMenu className={s.menuIcon} size={36} onClick={toggleMenu}/>
      <WikiSearch className={s.searchBar}></WikiSearch>
      <span className={s.title}>Minsk Compiler</span>
    </div>
  )
}

export default Header
