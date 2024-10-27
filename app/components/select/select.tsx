import React from 'react'
import s from './style.module.css'
import { IoMdArrowDropdown } from "react-icons/io";

const CustomSelect = () => {
  return (
    <div className={s.select}>
      <span className='my-auto'>Ep. 1</span>
      <IoMdArrowDropdown className='my-auto' />
    </div>
  )
}

export default CustomSelect
