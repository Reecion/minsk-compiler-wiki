import { Enum } from '@/app/models/models';
import React, { Fragment, ReactNode } from 'react'

interface Props {
    item: Enum;
    index: number;
    isOpen: boolean;
    children?: ReactNode | ReactNode[];
}

const BuildEnumPage = ({ item, index, isOpen, children }: Props) => {
    return isOpen ? (
        <Fragment>
            <div className={`px-4 py-2`}>
                <h1>
                    <span className='c-1 font-light text-xl'>{item.class_scope}</span>
                    {' '}
                    {item.title}
                </h1>
                <p>{item.description}</p>
            </div>

            {item.tables.length > 0 && <hr className='big-hr'></hr>}

            {item.tables?.map((table, idx) => {
                return (
                    <Fragment key={`enum-table-${idx}`}>
                        <div className={`px-4 py-2`}>
                            <h2>{table.title}</h2>
                            <table>
                                <tbody>
                                    {table.items.map((row, idx2) => {
                                        return (
                                            <tr key={`t-${idx}-r-${idx2}`}>
                                                <td className={`${row.color == 'new' && 'text-green-400 w-full'} w-full ${row.color == 'red' && 'text-red-500 w-full'} ${row.hint != null && 'tooltip'}`}>
                                                    {row.name}
                                                    {row.hint != null && <span className='tooltiptext'>{row.hint}</span>}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {idx == item.tables.length - 1 ? '' : <hr className='big-hr'></hr>}
                    </Fragment>
                )
            })}

        </Fragment>
    ) : (<></>)
}

export default BuildEnumPage
