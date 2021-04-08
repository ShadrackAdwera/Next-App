import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';

const postsPath = path.join(process.cwd(),'data');

const getPostData = (fileName) => {
    const fileDir = path.join(postsPath, fileName);
    const fileContent = fs.readFileSync(fileDir,'utf-8');
    const {data, content} = matter(fileContent);
    
    const slug = fileName.replace(/\.md$/,'');

    const postData = {
        slug,
        ...data,
        content
    }
    return postData;
}

export const getAllPosts = () => {
const postFiles = fs.readdirSync(postsPath);

}