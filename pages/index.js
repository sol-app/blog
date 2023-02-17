import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}


export default function Home({ posts }) {
  return (
    
    
    <div className='flex justify-center flex justify-between'> 
      
        <section className="mb-32 grid grid-cols lg:w-1/2 sm:w-full px-4 py-4 prose">

              <div className="mb-12 lg:mb-0">
                <div className="block rounded-lg shadow-lg px-6 py-12 lg:py-6 xl:py-12 md:px-12 lg:-mr-14 bg-blue-800">
                <h2 className="text-2xl font-bold mb-3 text-black ">
                  Who am i?
                </h2>
                <p className="text-orange-100 mb-8 pl-4 capitalize">
                  i am a solidity engineer, smart contract developer, web3 programmer.
                </p>
                <p className='text-orange-100 mb-8 pl-4 text-sm capitalize'>
                  Familier by: hardhat, foundry, remix, git, github, gitlab -- Agile, Scrum, Jira, Slack...
                </p>
                <p className='text-orange-100 mb-8 pl-4 text-sm'>
                  Talks about: #btc, #ethereum, #solidity, #blockchain, and #cryptocommunity
                </p>

                <hr />

                <h3 className="text-2xl font-bold mb-3 mt-8">My Vision</h3>
                <h5 className="text-lg text-orange-600 font-bold mb-4 lg:mb-4 xl:mb-4">About blockchain</h5>
                <p className="text-orange-100 mb-6 pl-4">
                  Perhaps the most important human achievement is community! <br />
                  But there is no clarity and transparency in any community like blockchain. <br />
                  From transaction without intermediaries to fraud-free voting, all made possible through smart contracts on the blockchain platform. <br />
                  In the blockchain community, democracy can be felt in the virtual community. <br />
                  The most interesting point for me is this transparency, how about you? <hr />
                </p>

                <p className="font-bold mb-4 text-white">Reach me</p>
                <p className="text-orange-500 mb-6 pl-4">
                  at linktree: <small> https://linktr.ee/mosi.sol </small>
                </p>

                <hr />

                </div>
              </div>

          </section>
 
          <section className="">
            <div class="md:masonry-2-col lg:masonry-3-col box-border mx-auto before:box-inherit after:box-inherit">
              <h2 className='bg-orange-600 text-white text-center font-bold text-3xl w-full rounded border border-orange-500 shadow-2xl p-8'>
                SOL BLOG
                <p className='text-sm font-medium'>Solidity , Web3</p>
              </h2>
        
              {posts.map(({ slug, frontmatter }) => (
                  <div key={slug} className='break-inside p-8 my-6 bg-gray-100 rounded-lg shadow-xl hover:shadow-2xl border border-gray-300'>
                      <Head>
                        <title>Sol Blog</title>   
                        <link rel="icon" href="/favicon.ico" />
                        <meta name="google-site-verification" content="d9NgJAp48eq3zLlz0sW1VA0inhfTXsUpGiHaNyev-hM" />
                        <meta name="robots" content="all" />
                        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                        <meta name="google" content="notranslate" key="notranslate" />
                      </Head>
                      
                      <div>
                        <Link href={`/post/${slug}`}><a>
                          <h3 className='font-bold hover:text-blue-500 text-2xl'>{frontmatter.title} </h3>
                        </a></Link> 
                        <p className='text-gray-500'>{frontmatter.metaDesc}</p>
                        <div className='flex justify-between'>
                          <small className='text-orange-700'>{frontmatter.article}</small>
                          <Link href={`/post/${slug}`}><a>
                            <small className='font-light hover:text-blue-500 text-blue-800 text-sm'>Reade more </small>
                          </a></Link> 
                        </div>
                      </div> 

                  </div> 
                ))}

              </div>
            </section>


    </div>
    
  );
}
