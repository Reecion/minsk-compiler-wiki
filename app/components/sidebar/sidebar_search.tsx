'use client'
import { Fragment, useEffect, useRef, useState } from 'react'
import s from './style.module.css'
import { episodes } from '@/app/models/models';

import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiConsoleController } from 'react-icons/gi';

interface Props {
    onChange?: (text: string, episode?: number) => void;
    className?: string;
    default_episode?: number;
}

const MenuSearch = ({ className, onChange, default_episode }: Props) => {
    const searchInput = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [eps, setEpisodes] = useState<any[]>(episodes);
    const [episode, setEpisode] = useState<number>(0);

    useEffect(() => {
        setEpisode(default_episode == undefined ? episodes.length > 0 ? episodes[0].id : 0 : default_episode);
    }, [default_episode]);

    const changeText = (t: string) => {
        setText(t);
        onChange?.(t, episode);
        searchText();
    }

    const changeEpisode = (ep: number) => {
        setEpisode(ep);
        setEpisodes([]);
        onChange?.(text, ep);
    }

    const focus = () => {
        searchInput.current?.focus()
    }

    const test = () => {
        console.log('');
    }

    const toggleEpisodes = () => {
        setEpisodes(episodes);
        setOpen(prev => !prev);
    }

    const searchText = () => {
        setEpisodes([]);
        setOpen(true);
    }

    return (
        <div tabIndex={0} onBlur={() => setOpen(false)} className={s.searchBar + ' ' + className}>
            <div className={s.searchBarTitle}>
                <IoMdSearch className=' w-7 h-7 ml-4 my-auto c-1' onClick={test} />
                <input
                    ref={searchInput}
                    type={'text'}
                    value={text}
                    className={s.searchBarInput}
                    placeholder={'Search menu'}
                    onChange={(e) => changeText(e.target.value)}
                />
                <div className={s.select} onClick={toggleEpisodes}>
                    <span className='my-auto'>{`${episode == 0 ? 'Any' : `Ep. ${episode}`}`}</span>
                    <IoMdArrowDropdown className='mr-4 my-auto' />
                </div>
            </div>
            <ul className={`${s.searchList} new-scroll ${open ? "flex max-h-72" : "hidden"}`}>
                {eps.map((item, index) => {
                    return (
                        <li key={`search-item-${index}`} className={s.searchItem} onClick={() => changeEpisode(index)}>
                            <span className={s.searchItemTitle}>{item.id == 0 ? 'Any' : `Ep. ${item.id}`}</span>
                            <span className={s.searchItemDescription}>{item?.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MenuSearch
