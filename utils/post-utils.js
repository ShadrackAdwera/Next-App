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
const allPosts = postFiles.map(postFile => getPostData(postFile));
const sortedPosts = allPosts.sort((a,b)=> a.date>b.date? -1 : 1);
return sortedPosts;
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.map(post=>post.isFeatured);
    return featuredPosts;
}