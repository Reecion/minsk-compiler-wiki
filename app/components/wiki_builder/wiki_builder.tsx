'use client'
import { WikiPage, Episode } from '@/app/models/models';
import React, { ReactNode, useState } from 'react'
import PageSelect from './page_select';
import { episodes } from '@/app/models/models'
import BuildPage from './page_builder';
import { useSearchParams } from 'next/navigation';

interface Props {
    page_object: object;
    children?: ReactNode | ReactNode[];
}

const WikiBuilder = ({ page_object, children }: Props) => {
    const obj_string = JSON.stringify(page_object)
    const page_info: WikiPage = JSON.parse(obj_string);

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
            {page_info.episodes.map((code_change, index) => (
                <BuildPage
                    key={`page-${index}`}
                    index={index}
                    item={code_change}
                    isOpen={code_change.episode[0] <= currentPage && code_change.episode[1] >= currentPage}
                ></BuildPage>))}
        </div>
    )
}

export default WikiBuilder
