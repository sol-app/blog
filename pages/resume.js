import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <div className='container'>
        
        <div className='w-full h-auto rounded-lg shadow-xl hover:shadow-2xl border border-gray-300 mb-12'>
            
                <div className="max-w-7xl mx-auto">
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                            <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                            </svg>
                            <div className="space-y-2">
                            <p className="text-slate-500">Did you like to learn more about blockchain, smart contract and the web3?</p>
                            <a href="/blog" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">Read Blog →</a>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:p-0'>
              <Head>
                <title>Resume | Sol Blog</title>        
              </Head>
              
                {/* left */}
                <div className='md:col-span-1 w-full mb-8 mx-2 rounded-lg'>
                {/* bio  */}
                    <div className="relative block overflow-hidden rounded-lg border-x border-gray-300 p-8 shadow-xl hover:shadow-2xl">
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

                        <div className="justify-between sm:flex">
                            <div>
                            <h3 className="text-xl font-bold text-gray-900">
                            Moslem Abbasi
                            </h3>

                            <p className="mt-1 text-xs font-medium text-gray-600">aka Moßi</p>
                            </div>

                            <div className="ml-3 hidden flex-shrink-0 sm:block">
                            <img
                                alt="Mosi-sol"
                                src="https://camo.githubusercontent.com/e7e99df326e59e95eb28cd63a9c37a3d765c7116b9a74a0627eb332c3a7e762c/68747470733a2f2f73696d706c6569636f6e732e6f72672f69636f6e732f736f6c69646974792e737667"
                                className="h-16 w-16 rounded-lg object-cover shadow-sm"
                            />
                            </div>
                        </div>

                        <div className="mt-4 sm:pr-8 capitalize">
                            <p className="text-sm text-gray-800">
                            Blockchain Engineer • Solidity programmer • Smart contract developer
                            </p>
                            <p className="text-sm text-gray-500">
                            Talks about: #btc, #ethereum, #solidity, #blockchain, and #cryptocommunity
                            </p>
                        </div>

                        <dl className="mt-6 flex">
                            <div className="flex flex-col-reverse">                            
                            <dt className="text-sm font-medium text-blue-400 hover:text-blue-500 hover:font-bold">
                                <a href='https://github.com/mosi-sol'>Github</a>
                            </dt>
                            <dd className="text-xs text-gray-500">portfolio</dd>
                            </div>

                            <div className="ml-3 flex flex-col-reverse sm:ml-6">
                            <dt className="text-sm font-medium text-blue-400 hover:text-blue-500 hover:font-bold">                                
                                <a href='https://www.linkedin.com/in/moslem-abbasi/'>Linkedin</a>
                            </dt>
                            <dd className="text-xs text-gray-500">call me</dd>
                            </div>
                        </dl>
                    </div>

                {/* donation */}
                <div className="my-8 max-w-7xl mx-auto border-x border-gray-300 shadow-xl hover:shadow-2xl">
                        <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                            <svg className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
                            </svg>
                            <div className="space-y-2">
                            <p className="text-slate-800">Buy me a coffee</p>
                            <a href="https://sol-app.github.io/Donation/" className="block text-indigo-400 group-hover:text-slate-800 transition duration-200" target="_blank">DONATION NOW →</a>
                            </div>
                        </div>
                        </div>
                    </div>

                {/* education */}
                    <article className="mt-8 rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8 shadow-xl hover:shadow-2xl mb-8 border-x border-gray-300">
                        <div className="flex items-start">

                            <div className="sm:ml-8">
                                <strong className="rounded border border-blue-500 bg-blue-500 px-3 py-1.5 text-[15px] font-medium text-white">
                                    Education
                                </strong>
                                
                                <div className="mb-8">
                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                        Self Study Smartcontract <br />
                                        <span className="text-sm font-light ml-4">2017 - Present</span>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700 capitalize">
                                        <span className="text-gray-500">#ethereum , #polygon , #bsc = #evm-blockchain</span><br />
                                        &middot;  Blockchain Engineer <br />
                                        &middot;  Solidity Programmer <br />
                                        &middot;  Smartcontract developer <br />
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className='h-1 w-full bg-gray-300 rounded-xl'></div>

                        <div className="flex items-start">

                            <div className="sm:ml-8">
                                
                                <div className="mb-8">
                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                    Southern Industrial Sciences <br />
                                        <span className="text-sm font-light ml-4">Sep 2010</span>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700 capitalize">
                                        <span className="text-gray-500">Master of Business Administration</span><br />
                                        &middot;  MBA, Business, Management, Marketing, and Related Support Services <br />
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className='h-1 w-full bg-gray-300 rounded-xl'></div>

                        <div className="flex items-start">

                            <div className="sm:ml-8">
                                
                                <div className="mb-8">
                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                    Southern Industrial Sciences <br />
                                        <span className="text-sm font-light ml-4">Sep 2009</span>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700 capitalize">
                                        <span className="text-gray-500">Insurance</span><br />
                                        &middot;  insurance, general insurance, risk managment, etc...
                                    </p>
                                </div>

                            </div>
                        </div>

                        <div className='h-1 w-full bg-gray-300 rounded-xl'></div>                        

                        <div className="flex items-start">

                            <div className="sm:ml-8">
                                
                                <div className="mb-2">
                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                    Technical and professional school <br />
                                        <span className="text-sm font-light ml-4">1998</span>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700 capitalize">
                                        <span className="text-gray-500">Computer Engineering | Programming</span><br />
                                        &middot;  languages: pascal, c, Delphi <br />
                                        &middot;  as a db: foxpro
                                    </p>
                                </div>

                            </div>
                        </div>
                    </article>

                </div>

                {/* right */}

                <div className='md:col-span-2 w-full mb-8 mx-2'>
                
                    <article className="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8 shadow-xl hover:shadow-2xl mb-8 border-x border-gray-300">
                        <div className="flex items-start">

                            <div className="sm:ml-8">
                            <strong className="rounded border border-blue-500 bg-blue-500 px-3 py-1.5 text-[15px] font-medium text-white">
                                About me
                            </strong>

                            <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                WHO AM I:
                            </h3>

                            <p className="mt-1 text-sm text-gray-700 capitalize">
                            &middot; Solidity Programmer · Smartcontract developer, such as: <br />
                            &nbsp;&nbsp;&nbsp;&nbsp; Defi, Nft and Insurancefi, Gamefi, etc on EVM Blockchains. <br />
                            &middot; The father of two angels, a husband. <br />
                            &middot; Independent journalist in the field of finance, blockchain and insurance. <br />
                            &middot; I have just started learning Deutsch. Looking for interest. <br />
                            &middot; Familier by: hardhat, foundry, remix, git, github, gitlab -- Agile, Scrum, Jira, Slack... <br />
                            &middot; Favorite ide: vscode .
                            </p>

                            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                <div className="flex items-center text-gray-500">
                                
                                <p className="ml-1 text-xs font-medium text-purple-500">Skils: </p>
                                </div>

                                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                Finance · Web3 · Smart Contracts · Auditing · Scrum · Agile ...
                                </p>
                            </div>
                            </div>
                        </div>
                    </article>
                
                    <article className="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8 shadow-xl hover:shadow-2xl mb-8 border-x border-gray-300">
                        <div className="flex items-start">

                            <div className="sm:ml-8">
                                <strong className="rounded border border-blue-500 bg-blue-500 px-3 py-1.5 text-[15px] font-medium text-white">
                                    Experience
                                </strong>
                                
                                <div className="mb-8">
                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                        Solidity Developer (smart contract) 
                                        <span className="text-sm font-light ml-12">Mar 2017 - Present</span>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700 capitalize">
                                        <span className="text-gray-500">#ethereum , #polygon , #bsc are my favorite #evm s.</span><br />
                                        &middot; smart contract is the real democracy! <br />
                                        &middot; Skills: Finance · Scrum · Auditing · Web3 · Smart Contracts
                                    </p>

                                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                        <div className="flex items-center text-gray-500">
                                            <p className="ml-1 text-xs font-medium text-purple-500">position: </p>
                                        </div>

                                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                        Freelance, Teaching
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="h-1 w-full bg-gray-300"><hr /></div>

                                <div className="mb-8">
                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                        Tribon  |  Co-Founder
                                        <span className="text-sm font-light ml-12">Jan 2020 - Nov 2021 · 1 yr 11 mot</span>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700 capitalize">
                                        <span className="text-gray-500">Over 30 independent clients.</span><br />
                                        &middot; Helping newbies in the web3 world to grow and improve. <br />
                                        &middot; Consultation and development of required software: portfolio, web application. <br />
                                        &middot; Services: Software as a Service (SaaS) · Auditing · Web3 · Smart Contracts <br />
                                        &middot; Skills: Finance · Scrum · Software as a Service (SaaS) · Auditing · Web3 · Smart Contracts
                                    </p>

                                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                        <div className="flex items-center text-gray-500">
                                            <p className="ml-1 text-xs font-medium text-purple-500">position: </p>
                                        </div>

                                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                        Tribon co-founde · Full-time
                                        </p>
                                    </div>
                                </div>
                                
                                <div className="h-1 w-full bg-gray-300"><hr /></div>

                                <div className="mb-8">
                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                    Financial Software Engineer
                                        <span className="text-sm font-light ml-12">Sep 2011 - Aug 2019 · 8 yrs</span>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700 capitalize">
                                        &middot; Almost 9 years in the field of insurance and finance <br />
                                        &middot; Skills: Finance · Scrum
                                    </p>

                                    <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                        <div className="flex items-center text-gray-500">
                                            <p className="ml-1 text-xs font-medium text-purple-500">position: </p>
                                        </div>

                                        <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                        <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                        insurance company · Full-time
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </article>
                
                    <article className="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8 shadow-xl hover:shadow-2xl mb-8 border-x border-gray-300">
                        <div className="flex items-start">

                            <div className="sm:ml-8">
                                <strong className="rounded border border-blue-500 bg-blue-500 px-3 py-1.5 text-[15px] font-medium text-white">
                                    Skils
                                </strong>
                                
                                <div className="mb-8">
                                    <h3 className="mt-4 text-lg font-medium sm:text-xl">
                                        Blockchain Programming 
                                        <span className="text-sm font-light ml-12">smart contract</span>
                                    </h3>

                                    <p className="mt-1 text-sm text-gray-700 capitalize">
                                        &middot; Solidity language: using for Smart Contract development & security audit . <br />
                                        &middot; Other: General Insurance, Web3, Scrum, Agile, ...
                                    </p>
                                    
                                </div>

                            </div>
                        </div>
                    </article>

                </div>
                

            {/*  */}
            

          </div> 
        
        {/* last */}
          <article className="rounded-xl w-full bg-white p-6 ring ring-indigo-50 sm:p-8 shadow-xl hover:shadow-2xl mb-8 border-x border-gray-300">
                <div className="flex items-start md:px-[20%]">

                    <div className="sm:ml-8">
                        <strong className="rounded border border-blue-500 bg-blue-500 px-3 py-1.5 text-[15px] font-medium text-white">
                            Volunteering
                        </strong>
                        
                        <div className="mb-8">
                            <h3 className="mt-4 text-lg font-medium sm:text-xl">
                            Teaching Programming
                                <span className="text-sm font-light ml-12">in solidity + web3 technology</span>
                            </h3>

                            <p className="mt-1 text-sm text-gray-700 capitalize">
                                <span className="text-gray-500">Jan 2022 - Present</span><br />
                                &middot; how to learn/read/write code in solidity language. <br />
                                &middot; from scratch in farsi 
                            </p>

                            <div className="mt-4 sm:flex sm:items-center sm:gap-2">
                                <div className="flex items-center text-gray-500">
                                    <p className="ml-1 text-xs font-medium text-purple-500">Free education goals:  </p>
                                </div>

                                <span className="hidden sm:block" aria-hidden="true">&middot;</span>

                                <p className="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                                free learn for everyone (@pafecafe in youtube + other media)
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </article>

    </div>
  );
}
