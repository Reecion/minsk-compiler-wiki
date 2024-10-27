'use client'
import React, { useEffect, useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import s from './style.module.css'
import { Episode } from '@/app/models/models'

interface Props {
    default_episode?: number;
    episodesList?: Episode[];
    onChange?: (value: number) => void;
    className?: string;
}

const no_items: Episode[] = [
    {
        id: 0,
        title: 'Empty',
        video_url: '',
        source_code: ''
    }
]

const PageSelect = ({ episodesList = no_items, default_episode, className, onChange } : Props) => {
    const [open, setOpen] = useState(false);
    const [episode, setEpisode] = useState<number>(episodesList.length > 0 ? episodesList[0].id : 0);

    const changeEpisode = (ep: Episode) => {
        setEpisode(ep.id);
        onChange?.(ep.id);
        setOpen(false);
    }

    useEffect(() => {
        setEpisode(default_episode == undefined ? episodesList.length > 0 ? episodesList[0].id : 0 : default_episode);
    }, [default_episode]);

    return (
        <div tabIndex={0} onBlur={() => setOpen(false)} className={`h-9 w-28 relative ${className}`}>
            <div className={s.pageSelect} onClick={() => setOpen(prev => !prev)}>
                <span className='my-auto'>{episode == 0 ? 'None' : `Ep. ${episode}`}</span>
                <IoMdArrowDropdown className='ml-auto my-auto' />
            </div>
            <ul className={`${s.pageSelectList} new-scroll ${open ? "flex max-h-72" : "hidden"}`}>
                {episodesList.map((item, index) => {
                    return (
                        <li key={`page-select-item-${index}`} className={s.pageSelectItem} onClick={() => changeEpisode(item)}>
                            {item.id != 0 && <span className={s.pageSelectItemTitle}>{`Ep. ${item.id}`}</span>}
                            <span className={s.pageSelectItemDescription}>{item?.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default PageSelect
