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

                

                <h3 class="mt-4 text-lg font-medium sm:text-xl">
                    <a href="https://docs.soliditylang.org/en/latest/cheatsheet.html" class="hover:underline"> Solidity Cheatsheet </a>
                </h3>

                <p class="mt-1 text-sm text-gray-700">

                    <section id="cheatsheet">
                    <h1>Cheatsheet<a class="headerlink" href="#cheatsheet" title="Permalink to this heading"></a></h1>
                    <section id="order-of-precedence-of-operators">
                    <span id="index-0"></span><h2>Order of Precedence of Operators<a class="headerlink" href="#order-of-precedence-of-operators" title="Permalink to this heading"></a></h2>
                    <p>The following is the order of precedence for operators, listed in order of evaluation.</p>
                    <table class="docutils align-default">
                    <colgroup>
                    <col style="width: 13%" />
                    <col style="width: 40%" />
                    <col style="width: 47%" />
                    </colgroup>
                    <thead>
                    <tr class="row-odd"><th class="head"><p>Precedence</p></th>
                    <th class="head"><p>Description</p></th>
                    <th class="head"><p>Operator</p></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="row-even"><td rowspan="6"><p><em>1</em></p></td>
                    <td><p>Postfix increment and decrement</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">++</span></code>, <code class="docutils literal notranslate"><span class="pre">--</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p>New expression</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">new</span> <span class="pre">&lt;typename&gt;</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p>Array subscripting</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">&lt;array&gt;[&lt;index&gt;]</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p>Member access</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">&lt;object&gt;.&lt;member&gt;</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p>Function-like call</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">&lt;func&gt;(&lt;args...&gt;)</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p>Parentheses</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">(&lt;statement&gt;)</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td rowspan="5"><p><em>2</em></p></td>
                    <td><p>Prefix increment and decrement</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">++</span></code>, <code class="docutils literal notranslate"><span class="pre">--</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p>Unary minus</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">-</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p>Unary operations</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">delete</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p>Logical NOT</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">!</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p>Bitwise NOT</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">~</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p><em>3</em></p></td>
                    <td><p>Exponentiation</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">**</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p><em>4</em></p></td>
                    <td><p>Multiplication, division and modulo</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">*</span></code>, <code class="docutils literal notranslate"><span class="pre">/</span></code>, <code class="docutils literal notranslate"><span class="pre">%</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p><em>5</em></p></td>
                    <td><p>Addition and subtraction</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">+</span></code>, <code class="docutils literal notranslate"><span class="pre">-</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p><em>6</em></p></td>
                    <td><p>Bitwise shift operators</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">&lt;&lt;</span></code>, <code class="docutils literal notranslate"><span class="pre">&gt;&gt;</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p><em>7</em></p></td>
                    <td><p>Bitwise AND</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">&amp;</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p><em>8</em></p></td>
                    <td><p>Bitwise XOR</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">^</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p><em>9</em></p></td>
                    <td><p>Bitwise OR</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">|</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p><em>10</em></p></td>
                    <td><p>Inequality operators</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">&lt;</span></code>, <code class="docutils literal notranslate"><span class="pre">&gt;</span></code>, <code class="docutils literal notranslate"><span class="pre">&lt;=</span></code>, <code class="docutils literal notranslate"><span class="pre">&gt;=</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p><em>11</em></p></td>
                    <td><p>Equality operators</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">==</span></code>, <code class="docutils literal notranslate"><span class="pre">!=</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p><em>12</em></p></td>
                    <td><p>Logical AND</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">&amp;&amp;</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p><em>13</em></p></td>
                    <td><p>Logical OR</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">||</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td rowspan="2"><p><em>14</em></p></td>
                    <td><p>Ternary operator</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">&lt;conditional&gt;</span> <span class="pre">?</span> <span class="pre">&lt;if-true&gt;</span> <span class="pre">:</span> <span class="pre">&lt;if-false&gt;</span></code></p></td>
                    </tr>
                    <tr class="row-odd"><td><p>Assignment operators</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">=</span></code>, <code class="docutils literal notranslate"><span class="pre">|=</span></code>, <code class="docutils literal notranslate"><span class="pre">^=</span></code>, <code class="docutils literal notranslate"><span class="pre">&amp;=</span></code>, <code class="docutils literal notranslate"><span class="pre">&lt;&lt;=</span></code>,
                    <code class="docutils literal notranslate"><span class="pre">&gt;&gt;=</span></code>, <code class="docutils literal notranslate"><span class="pre">+=</span></code>, <code class="docutils literal notranslate"><span class="pre">-=</span></code>, <code class="docutils literal notranslate"><span class="pre">*=</span></code>, <code class="docutils literal notranslate"><span class="pre">/=</span></code>,
                    <code class="docutils literal notranslate"><span class="pre">%=</span></code></p></td>
                    </tr>
                    <tr class="row-even"><td><p><em>15</em></p></td>
                    <td><p>Comma operator</p></td>
                    <td><p><code class="docutils literal notranslate"><span class="pre">,</span></code></p></td>
                    </tr>
                    </tbody>
                    </table>
                    </section>

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
