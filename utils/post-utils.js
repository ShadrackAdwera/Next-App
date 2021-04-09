import path from 'path';
import fs from 'fs';

import matter from 'gray-matter';

const postsPath = path.join(process.cwd(),'data');

export const getPostFiles = () => {
    return fs.readdirSync(postsPath);
}

export const getPostData = (fileIdentifier) => {
    const slug = fileIdentifier.replace(/\.md$/,'');

    const fileDir = path.join(postsPath, `${slug}.md`);
    const fileContent = fs.readFileSync(fileDir,'utf-8');
    const {data, content} = matter(fileContent);
    

    const postData = {
        slug,
        ...data,
        content
    }
    return postData;
}

export const getAllPosts = () => {
const postFiles = getPostFiles();
const allPosts = postFiles.map(postFile => getPostData(postFile));
const sortedPosts = allPosts.sort((a,b)=> a.date>b.date? -1 : 1);
return sortedPosts;
}

export const getFeaturedPosts = () => {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post=>post.isFeatured);
    return featuredPosts;
}