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
 

      <ul className='bg-white rounded-lg border border-gray-200 grid grid-cols lg:w-1/2 sm:w-full text-gray-900 shadow-2xl py-2'>
      <li className='px-6 py-2 border-b border-gray-800 w-full bg-black flex justify-center mb-4 rounded-lg'>
        <h1 className='text-3xl font-bold mb-4 text-white p-2'>SOL &nbsp; BLOG</h1>
      </li>
        {posts.map(({ slug, frontmatter }) => (
            <div
              key={slug}
              className='' 
            >
                <Head>
                  <title>Sol Blog</title>        
                </Head>
                <div className=''> {/* margin */}
                  <Link href={`/post/${slug}`}>
                    <a>
                      <li className='px-6 py-2 border-b border-gray-200 w-full hover:text-white hover:bg-blue-700 flex justify-between capitalize'>
                        <span className=''>
                          <h4 className='text-lg font-bold'>{frontmatter.title}</h4>
                          <p className='text-sm text-gray-400 hover:text-white'>{frontmatter.metaDesc}</p>
                        </span>
                        <span className='text-sm text-sky-400 hover:text-white'>{frontmatter.article}</span>
                      </li>
                    </a>
                  </Link>
                </div>  
            </div> 
        ))}
        <li className='mb-4'></li>
      </ul>

    </div>
  );
}
