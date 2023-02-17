import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import Head from 'next/head';

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (   
    <div className='prose md:prose-lg lg:prose-xl prose-pre:bg-slate-800 prose-pre:text-zinc-100 px-4 grid grid-cols-1 mx-auto flex-1 w-full mb-8'> 
        <Head>
          <title>Sol Blog | {frontmatter.title}</title>   
          <link rel="icon" href="/favicon.ico" />
          <meta name="author" content={frontmatter.metaTitle}>
          <meta name="description" content={frontmatter.metaDesc} key="desc"/>
          <meta property="og:title" content={frontmatter.title} />
          <meta property="og:description" content={frontmatter.article} />
        </Head>
        <h1>
          <span className='text-2xl mr-4'>{frontmatter.title}</span>
          <small className='text-sm bg-blue-500 text-white rounded-md p-2 font-thin uppercase'>{frontmatter.article}</small>
        </h1>        
        <div className='shadow-lg grid grid-cols-1' dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        <nav className='rounded-md w-full my-8'>
            <span><a href="/blog" className='text-blue-600 hover:text-blue-700'>Home</a></span>
            <span><b className='text-gray-500 mx-2'>/</b></span>
            <span><b className='text-gray-500'>{frontmatter.title}</b></span>
        </nav>

      </div>
      
  );
}
