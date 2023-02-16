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
                <h2 className="text-2xl font-bold mb-3 text-white ">
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

                <h3 className="text-2xl font-bold mb-3 mt-8">Solidity</h3>
                <h5 className="text-lg text-orange-600 font-bold mb-4 lg:mb-4 xl:mb-4">Solidity explain</h5>
                <p className="text-orange-100 mb-6 pl-4">
                Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state. <br />
                Solidity is a curly-bracket language designed to target the Ethereum Virtual Machine (EVM). It is influenced by C++, Python and JavaScript. You can find more details about which languages Solidity has been inspired by in the language influences section. <br />
                Solidity is statically typed, supports inheritance, libraries and complex user-defined types among other features. <br />
                With Solidity you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets. <br />
                When deploying contracts, you should use the latest released version of Solidity. Apart from exceptional cases, only the latest version receives security fixes. Furthermore, breaking changes as well as new features are introduced regularly. We currently use a 0.y.z version number to indicate this fast pace of change.
                </p>

                <p className="font-bold mb-4 text-black">Resources</p>
                <p className="text-orange-100 mb-6 pl-4">
                  refrence: <small>https://docs.soliditylang.org/en/v0.8.18/</small>
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
