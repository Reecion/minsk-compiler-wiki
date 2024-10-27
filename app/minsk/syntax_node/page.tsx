import Layout from '@/app/components/layout/layout'
import WikiBuilder from '@/app/components/wiki_builder/wiki_builder'
import React from 'react'
import json_page from '@/app/pages/syntax_node.json'

const Page = () => {

    return (
        <Layout>
            <WikiBuilder page_object={json_page} >

            </WikiBuilder>
        </Layout>
    )
}

export default Page
