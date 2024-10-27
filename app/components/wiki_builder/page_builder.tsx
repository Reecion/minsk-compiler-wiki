import { CodeChange, Constructor, Property, Method, CodeType } from '@/app/models/models'
import React, { Fragment, ReactNode } from 'react'
import s from './style.module.css'
import Link from 'next/link';
import { compound_data, type_data } from '@/app/models/data_types'
import CodeBox from './code_box';

interface Props {
    item: CodeChange;
    index: number;
    isOpen: boolean;
    children?: ReactNode | ReactNode[];
}

interface BCProps {
    name: string;
    constructor: Constructor;
}

interface BPTProps {
    properties: Property[];
}

interface BMTProps {
    methods: Method[];
}

interface WTProps {
    type: CodeType;
}

const WrapType = ({ type }: WTProps): ReactNode | ReactNode[] => {
    const found_data = type_data.filter((e) => { if (e.name == type.type) return e })

    const single_type_col = 'c-2';
    const compound_type_col = 'c-2';

    if (found_data.length > 0) {
        if (found_data[0]?.link != undefined) {
            return (<Link href={found_data[0].link} className={single_type_col}>{type.type}{type.is_list && '[]'}</Link>)
        }
        return (<span className={single_type_col}>{type.type}{type.is_list && '[]'}</span>);
    } else {
        const is_compound = compound_data.filter((e) => { if (e.name == type.type) return e })
        if (is_compound.length > 0) {
            return (
                <Fragment>
                    {<span className={compound_type_col}>{type.type}{'<'}</span>}
                    {type.children.map((it, k) => {
                        return (
                            <Fragment key={`ttt-${k}-${type.type}`}>
                                {<WrapType type={it}></WrapType>}
                                {k == type.children.length - 1 ? '' : ', '}
                            </Fragment>
                        )
                    })}
                    {<span className={compound_type_col}>{`>`}</span>}
                </Fragment>
            );
        }
    }
    return (<span className='text-red-600'>{type.type}</span>)
}

const BuildConstructor = ({ name, constructor }: BCProps) => {
    return (
        <div>
            <h3>
                <span className='c-1'>{constructor.scope}</span>
                {' '}
                {name}
                {' ('}
                {constructor.parameters.map((p, idx) => <Fragment key={`constr-param-${idx}`}>
                    {<WrapType type={p.type}></WrapType>}
                    {' '}
                    {p.name}
                    {idx == constructor.parameters.length - 1 ? '' : ', '}
                </Fragment>)}
                {')'}
                {constructor.delegated.length > 0 && <span className='c-fg-2'>{' : this('}</span>}
                {constructor.delegated.map((d, idx) => <span className='c-fg-2' key={`constr-del-${idx}`}>
                    {d}
                    {idx == constructor.delegated.length - 1 ? '' : ', '}
                </span>)}
                {constructor.delegated.length > 0 && <span className='c-fg-2'>{')'}</span>}
            </h3>
            <p>{constructor.description}</p>
            <CodeBox code={constructor.body}></CodeBox>
            <br />
        </div>
    )
}

const BuildPropertiesTable = ({ properties }: BPTProps) => {
    return (
        <div className='w-full overflow-x-auto new-x-scroll'>
            <table><tbody>
                {properties.map((property, idx) => {
                    return (
                        <tr key={`ptr-${idx}`}>
                            <td className='c-1'>{property.scope}</td>
                            <td className=''><WrapType type={property.type}></WrapType></td>
                            <td className='font-semibold'><Link href={`#${property.name}`} className='underline'>{property.name}</Link></td>
                        </tr>
                    )
                })}
            </tbody></table>
        </div>
    )
}

const BuildMethodsTable = ({ methods }: BMTProps) => {
    return (
        <div className='w-full overflow-x-auto new-x-scroll'>
            <table><tbody>
                {methods.map((method, idx) => {
                    return (
                        <tr key={`mtr-${idx}`}>
                            <td className='c-1'>{method.scope}</td>
                            <td className=''><WrapType type={method.return_type}></WrapType></td>
                            <td className='font-semibold'><Link href={`#${method.signature}`} className='underline'>{method.signature}</Link></td>
                        </tr>
                    )
                })}
            </tbody></table>
        </div>
    )
}

const BuildPropertiesDescriptions = ({ properties }: BPTProps) => {
    return (
        <>
            {properties.map((property, idx) => {
                return (
                    <div key={`pd-${idx}`} className='py-2 px-4'>
                        <h3 id={property.name}>
                            <span className='c-1'>{property.scope}</span>
                            <span className=''> {<WrapType type={property.type} ></WrapType>}</span>
                            {' '}
                            <span className='font-semibold'>{property.name}</span>
                            {property.assignment != null ? <span className='c-fg-2'> {property.assignment}</span> : ''}
                        </h3>
                        <p>{property.description}</p>
                        {idx == properties.length - 1 ? null : <hr></hr>}
                    </div>
                )
            })}
        </>
    )
}

const BuildMethodsDescriptions = ({ methods }: BMTProps) => {
    return (
        <>
            {methods.map((method, idx) => {
                return (
                    <div key={`pd-${idx}`} className='py-2 px-4'>
                        <h3 id={method.signature}>
                            <span className='c-1'>{method.scope}</span>
                            {' '}
                            {<WrapType type={method.return_type}></WrapType>}
                            {' '}
                            <span className='font-semibold'>{method.signature}</span>
                            {method.parameters.length > 0 && ' ('}
                            {method.parameters.map((p, idx) => <Fragment key={`method-param-${idx}`}>
                                {p.extended != null && <span className='c-2'>this </span>}
                                {<WrapType type={p.type}></WrapType>}
                                {' '}
                                {p.name}
                                {idx == method.parameters.length - 1 ? '' : ', '}
                            </Fragment>)}
                            {method.parameters.length > 0 && ')'}
                        </h3>
                        <p>{method.description}</p>
                        <CodeBox code={method.body}></CodeBox>
                        {idx == methods.length - 1 ? null : <hr></hr>}
                    </div>
                )
            })}
        </>
    )
}

const BuildPage = ({ item, isOpen, index, children }: Props) => {
    if (!isOpen)
        return <></>

    return (
        <Fragment>
            <div className={`px-4 py-2`}>
                <h1>
                    <span className='c-1 font-light text-sm'>{item.class_scope}</span>
                    {' '}
                    {item.title}
                    {' '}
                    {item.extends != null && <span className='c-1 font-light text-sm'>extends</span>}
                    {item.extends != null && ' '}
                    {item.extends != null && <span className='c-0 font-normal text-lg'>{item.extends}</span>}
                </h1>
                <p>{item.description}</p>
            </div>

            {item.changes != '' && (
                <>
                    <hr className='big-hr'></hr>
                    <div className={`px-4 py-2`}>
                        <h2 className='c-3'>Changes</h2>
                        <pre className='text-pretty c-4'>{item.changes}</pre>
                    </div>
                </>
            )}

            {(item.properties.length > 0 || item.methods.length > 0 || item.constructors.length > 0) && <hr className='big-hr'></hr>}

            {item.constructors.length > 0 && (
                <div className={`px-4 py-2`}>
                    <h2>Constructors</h2>
                    {item.constructors.map((con, idx) => (
                        <BuildConstructor
                            key={`p-${index}-c-${idx}`} constructor={con} name={item.title}
                        ></BuildConstructor>
                    ))}
                    <hr></hr>
                </div>
            )}

            {item.properties.length > 0 && (
                <div className={`px-4 py-2`}>
                    <h2>Properties</h2>
                    <BuildPropertiesTable properties={item.properties}></BuildPropertiesTable>
                    <br /><hr></hr>
                </div>
            )}

            {item.methods.length > 0 && (
                <div className={`px-4 py-2`}>
                    <h2>Methods</h2>
                    <BuildMethodsTable methods={item.methods}></BuildMethodsTable>
                </div>
            )}

            {(item.properties.length > 0 || item.methods.length > 0) && <hr className='big-hr'></hr>}

            {item.properties.length > 0 && (
                <div className={`px-4 py-2`}>
                    <h2>Properties descriptions</h2>
                    <BuildPropertiesDescriptions properties={item.properties}></BuildPropertiesDescriptions>
                </div>
            )}

            {item.properties.length > 0 && item.methods.length > 0 && <hr className='big-hr'></hr>}

            {item.methods.length > 0 && (
                <div className={`px-4 py-2`}>
                    <h2>Methods descriptions</h2>
                    <BuildMethodsDescriptions methods={item.methods}></BuildMethodsDescriptions>
                </div>
            )}

        </Fragment>
    )
}

export default BuildPage
