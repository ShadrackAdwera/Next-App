import AllPosts from '../../components/posts/all-posts';

const DUMMY_DATA = [ 
    {
      title: 'Why Nextjs over React.js',
      image: 'getting-started-nextjs.png',
      date: '2021-04-04',
      shortText:
        'Next.js is a React framework for production. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
      slug: 'why-nextjs-over-reactjs',
    },
    {
      title: 'Why Nextjs over React.js',
      image: 'getting-started-nextjs.png',
      date: '2021-04-04',
      shortText:
        'Next.js is a React framework for production. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
      slug: 'why-nextjs-over-reactjs-pt2',
    },
    {
      title: 'Why Nextjs over React.js',
      image: 'getting-started-nextjs.png',
      date: '2021-04-04',
      shortText:
        'Next.js is a React framework for production. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
      slug: 'why-nextjs-over-reactjs-pt3',
    },
    {
      title: 'Why Nextjs over React.js',
      image: 'getting-started-nextjs.png',
      date: '2021-04-04',
      shortText:
        'Next.js is a React framework for production. Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.',
      slug: 'why-nextjs-over-reactjs-pt4',
    },
  ];

const Posts = () => {
return <AllPosts posts={DUMMY_DATA}/>
}

export default Posts;