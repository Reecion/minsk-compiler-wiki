'use client'
import { Fragment, useRef, useState } from 'react'
import s from './style.module.css'
import handleSearch from './handle_search';
import { episodes } from '@/app/models/models';

import { IoMdSearch } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";

interface Props {
    onChange?: (text: string) => void;
    className?: string;
}

const WikiSearch = ({ className, onChange }: Props) => {
    const searchInput = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false);
    const [text, setText] = useState('');
    const [results, setResults] = useState<any[]>([]);
    const [eps, setEpisodes] = useState<any[]>([]);
    const [episode, setEpisode] = useState(0);

    const result = [
        { title: 'Not implemented', description: 'Global search is not implemented yet.' }
    ]

    const changeText = (t: string) => {
        setText(t);
        if (t.length > 1) {
            onChange?.(t);
            searchText();
        } else {
            setOpen(false);
        }
    }

    const changeEpisode = (ep: number) => {
        setEpisode(ep);
        setEpisodes([]);
    }

    const focus = () => {
        searchInput.current?.focus()
    }

    const test = () => {
        handleSearch(text);
    }

    const showEpisodes = () => {
        setResults([]);
        setEpisodes(episodes);
        setOpen(true);
    }

    const searchText = () => {
        setResults(result);
        setEpisodes([]);
        setOpen(true);
    }

    return (
        <div tabIndex={0} onBlur={() => setOpen(false)} className={s.searchBar + ' ' + className}>
            <div className={s.searchBarTitle}>
                <IoMdSearch size={20} className='ml-4 my-auto c-1' onClick={test} />
                <input
                    ref={searchInput}
                    type={'text'}
                    value={text}
                    className={s.searchBarInput}
                    placeholder={'Search documentation'}
                    onChange={(e) => changeText(e.target.value)}
                />
                <div className={s.select} onClick={showEpisodes}>
                    <span className='my-auto'>{episode == 0 ? 'Any' : `Ep. ${episode}`}</span>
                    <IoMdArrowDropdown className='mr-4 my-auto' />
                </div>
            </div>
            <ul className={`${s.searchList} new-scroll ${open ? "flex max-h-72" : "hidden"}`}>
                {results.map((item, index) => {
                    return (
                        <li key={`search-item-${index}`} className={s.searchItem}>
                            <span className={s.searchItemTitle}>{item.title}</span>
                            <span className={s.searchItemDescription}>{item?.description}</span>
                        </li>
                    )
                })}
                {eps.map((item, index) => {
                    return (
                        <li key={`search-item-${index}`} className={s.searchItem} onClick={() => changeEpisode(item.id)}>
                            <span className={s.searchItemTitle}>{item.id == 0 ? 'Any' : `Ep. ${item.id}`}</span>
                            <span className={s.searchItemDescription}>{item.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default WikiSearch
