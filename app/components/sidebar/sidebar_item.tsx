
'use client'
import s from './style.module.css'
import { MenuItem } from '@/app/models/menu_items'
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
    item: MenuItem,
    index: number,
    prefix: string,
    indent: number,
}

const GetIndent = (n: number) => {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push('')
    }
    return arr;
}

const CreateMenuItem = ({ item, index, prefix, indent = 0 }: Props) => {
    const [isCollapsed, setCollapsed] = useState(true);
    const indentArr = GetIndent(indent);
    const textStyle = indent == 0 ? s.menuItemHeader2 : s.menuItemSpan;
    if (item.children != null) {
        return (
            <Fragment>
                <li className={`${s.sidebarItem} ${s.hasNoLink}`} onClick={() => setCollapsed(prev => !prev)}>
                    {indentArr.map((it, key) => <span className='ml-1' key={`${prefix}spacer-${key}`}></span>)}
                    <span className={textStyle + ' my-auto'}>{item.name}</span>
                    {<IoMdArrowDropdown className='ml-auto my-auto' />}
                </li>
                {!isCollapsed && item.children.map((child, child_index) => (
                    <CreateMenuItem key={prefix + index + '-sub-' + child_index} item={child} index={child_index} prefix={prefix + 'sub-'} indent={indent + 1}></CreateMenuItem>
                ))}
            </Fragment>
        )
    }
    if (item.url != null) {
        return (
            <li className={`${s.sidebarItem}`}>
                <Link href={item.url} className={s.linkClass}>
                    {item.Icon != undefined && (<item.Icon size={20} />)}
                    {indentArr.map((it, key) => <span className='ml-1' key={`${prefix}spacer-${key}`}></span>)}
                    <span className={textStyle + ' my-auto'}>{item.name}</span>
                </Link>
            </li>
        )
    }
    return (
        <li className={`${s.sidebarItem} ${s.hasNoLink}`}>
            {indentArr.map((it, key) => <span className='ml-1' key={`${prefix}spacer-${key}`}></span>)}
            <span className={textStyle + ' my-auto'}>{item.name}</span>
        </li>
    )
}

export default CreateMenuItem;