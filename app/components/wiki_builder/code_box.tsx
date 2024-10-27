'use client'
import React, { Fragment, ReactNode, useState } from 'react'
import { FaCode } from "react-icons/fa";
import s from './style.module.css'
import Highlight from 'react-highlight'
import 'react-highlight/node_modules/highlight.js/styles/sunburst.css';


interface Props {
    code?: string
    children?: ReactNode | ReactNode[];
}

const CodeBox = ({ code, children }: Props) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <Fragment>
            {!isOpen &&
                <div onClick={() => setOpen(prev => !prev)} className='hover:cursor-pointer mt-3 c-fg-2 text-xs px-5 py-2 border border-1 flex gap-3 w-max'>
                    <FaCode className='my-auto' /> Show body
                </div>
            }
            {isOpen && <div className={s.codeBox + ' relative mt-3'}>
                <div className='hover:cursor-pointer absolute top-3 right-5 text-xs flex gap-3' onClick={() => setOpen(prev => !prev)}>
                    <FaCode className='my-auto' size={12} />
                    Hide code
                </div>
                <Highlight className={`language-csharp`}>
                    {code}
                </Highlight>
            </div>}
        </Fragment>
    )
}

export default CodeBox
