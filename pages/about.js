import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <div className='px-4'> {/* container */}
    {/* wrap start */}
    <Head>
        <title>MOSI-SOL ABOUT</title>
    </Head>
    
    <section class="w-full mx-auto text-center bg-gray-900 mb-8 rounded-lg py-8 shadow-2xl hover:shadow-xl">
        <h1 class="bg-gradient-to-r from-orange-300 via-indigo-500 to-red-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            MOSI &nbsp; SOL
        </h1>
        <span class="sm:block text-lg font-light text-white"> Solidity smart contract , Web3 </span>
    </section>

    {/* page content */}
    <div class="flex md:justify-between my-8">
        <article class="rounded-xl bg-white p-6 ring ring-indigo-50 sm:p-8">
            <div class="flex items-start">
                <div
                class="hidden sm:grid sm:h-20 sm:w-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500"
                aria-hidden="true">
                <div class="flex items-center gap-1">
                    <span class="w-4 h-0.5 rounded-full bg-indigo-500"></span>
                    <span class="w-6 h-0.5 rounded-full bg-indigo-500"></span>
                    <span class="h-4 w-0.5 rounded-full bg-blue-500"></span>
                    <span class="h-8 w-0.5 rounded-full bg-purple-500"></span>
                    <span class="h-4 w-0.5 rounded-full bg-blue-500"></span>
                    <span class="w-6 h-0.5 rounded-full bg-indigo-500"></span>
                    <span class="w-4 h-0.5 rounded-full bg-indigo-500"></span>
                </div>
                </div>

                <div class="sm:ml-8">
                <strong
                    class="rounded border border-indigo-500 bg-indigo-500 px-3 py-1.5 text-[15px] font-medium text-white"
                >
                    Solidity explain
                </strong>

                <h3 class="mt-4 text-lg font-medium sm:text-xl">
                    <a href="https://docs.soliditylang.org/en/v0.8.18/" class="hover:underline"> Solidity explain </a>
                </h3>

                <p class="mt-1 text-sm text-gray-700">
                Solidity is an object-oriented, high-level language for implementing smart contracts. Smart contracts are programs which govern the behaviour of accounts within the Ethereum state. <br />
                Solidity is a curly-bracket language designed to target the Ethereum Virtual Machine (EVM). It is influenced by C++, Python and JavaScript. You can find more details about which languages Solidity has been inspired by in the language influences section. <br />
                Solidity is statically typed, supports inheritance, libraries and complex user-defined types among other features. <br />
                With Solidity you can create contracts for uses such as voting, crowdfunding, blind auctions, and multi-signature wallets. <br />
                When deploying contracts, you should use the latest released version of Solidity. Apart from exceptional cases, only the latest version receives security fixes. Furthermore, breaking changes as well as new features are introduced regularly. We currently use a 0.y.z version number to indicate this fast pace of change.
                </p>

                <div class="mt-4 sm:flex sm:items-center sm:gap-2">
                    <div class="flex items-center text-gray-500">
                    <p class="ml-1 text-xs font-medium">2017-2023</p>
                    </div>

                    <span class="hidden sm:block" aria-hidden="true">&middot;</span>

                    <p class="mt-2 text-xs font-medium text-gray-500 sm:mt-0">
                    <a href="https://github.com/mosi-sol" class="underline hover:text-gray-700"> github </a> - 
                    <a href="https://www.linkedin.com/in/moslem-abbasi/" class="underline hover:text-gray-700"> linkedin </a>
                    </p>
                </div>
                </div>
            </div>
        </article>


        <h1 class="bg-gradient-to-r from-red-300 via-indigo-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
            Solidity #101
            <span class="sm:block text-lg"> Solidity smart contract , Web3 </span>
        </h1>
    </div>

    

    {/* footer message */}
    <div class="fixed inset-x-0 bottom-12 px-4 pb-3">
        <div class="relative rounded-lg bg-indigo-600 px-4 py-3 pr-14 text-white">
            <p class="text-left text-sm font-medium sm:text-center">
            Did you like to learn more about solidity, smart contract & web3? &nbsp;
            <a class="underline" href="/blog"> Learn More &rarr; </a>
            </p>
        </div>
    </div>

    {/* wrap end */}
    </div>
  );
}
