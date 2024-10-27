import Layout from '@/app/components/layout/layout'
import React from 'react'
import WikiEnumBuilder from '@/app/components/wiki_builder/wiki_enum_builder'
import json_page from '@/app/pages/syntax_kind.json'

const Page = () => {

    return (
        <Layout>
            <WikiEnumBuilder page_object={json_page} >

            </WikiEnumBuilder>
        </Layout>
    )
}

export default Page
