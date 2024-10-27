import p1 from '@/app/pages/info.json';
import p2 from '@/app/pages/lexer.json';
import p3 from '@/app/pages/parser.json';

const pages = [p1, p2, p3]

const searchMultipleFiles = (text: string) => {
    let foundList = [];
    pages.map((page) => {
        const json = JSON.parse(JSON.stringify(page));
        console.log(json);
    });
}

const handleSearch = (textToSearch: string) => {
    searchMultipleFiles(textToSearch);
}

export default handleSearch;