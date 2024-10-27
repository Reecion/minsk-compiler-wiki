'use client'
import { EnumWiki, Episode } from '@/app/models/models';
import React, { ReactNode, useState } from 'react'
import PageSelect from './page_select';
import { episodes } from '@/app/models/models'
import { useSearchParams } from 'next/navigation';
import BuildEnumPage from './enum_page_builder';

interface Props {
    page_object: object;
    children?: ReactNode | ReactNode[];
}

const WikiEnumBuilder = ({ page_object, children }: Props) => {
    const obj_string = JSON.stringify(page_object)
    const page_info: EnumWiki = JSON.parse(obj_string);

    const searchParams = useSearchParams()
    const urlEpisode = searchParams.get('episode')

    const epList: Episode[] = [...page_info.episodes.map((pc) => {
        const found = episodes.find((ep) => ep.id >= pc.episode[0] && ep.id <= pc.episode[1]);
        if (found)
            return found;
    }).filter((e) => e != undefined)]

    const defaultEpisode = epList.length > 0 ? (epList[0] != undefined ? epList[0].id : 0) : 0

    const tryParse = (num: string | null) => {
        try {
            if (num != null) {
                let foundEp = -1;
                for (let i = 0; i < epList.length; i++) {
                    if (epList[i].id.toString() == num) {
                        foundEp = i;
                        break;
                    }
                    if (epList[i].id < parseInt(num)) {
                        if ((i + 1) < epList.length) {
                            if (epList[i].id >= parseInt(num)) {
                                foundEp = i;
                                break;
                            }
                        } else {
                            foundEp = i;
                            break;
                        }
                    }
                }
                if (foundEp != -1) {
                    return epList[foundEp].id;
                }
            }
            return defaultEpisode;
        } catch (err) {
            return defaultEpisode;
        }
    }

    const startEpisode = tryParse(urlEpisode);

    const [currentPage, setCurrentPage] = useState(startEpisode);

    return (
        <div>
            <PageSelect className='sticky top-1 right-2 ml-auto' default_episode={currentPage} onChange={(e) => setCurrentPage(e)} episodesList={epList}></PageSelect>
            {page_info.episodes.map((enum_changes, index) => (
                <BuildEnumPage
                    key={`page-${index}`}
                    index={index}
                    item={enum_changes}
                    isOpen={enum_changes.episode.includes(currentPage)}
                ></BuildEnumPage>))}
        </div>
    )
}

export default WikiEnumBuilder
