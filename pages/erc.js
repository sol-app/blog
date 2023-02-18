import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';

export default function Home({ posts }) {
    return (
        
        <Head>
          <title>Sol Blog | ERC</title>   
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="solidity standards: eip, erc. erc165, erc20, erc721, erc1155." key="desc"/>
          <meta property="og:title" content="solidity standards: erc, eip" />
          <meta property="og:description" content=""solidity standards: erc, eip"" />
        </Head>
        
        <section className=''>
        
        <div className="w-full mx-auto md:prose-lg px-8 mb-1">

            <div className='mx-auto w-full mb-12 rounded bg-gradient-to-t from-gray-300 to-gray-500 font-bold text-2xl p-2 shadow-2xl text-center'>
            <h2 className='backdrop-blur-sm bg-white/30'>Ethereum Improvement Proposals : <span className='text-white'>EIP</span></h2>
            <p className='text-sky-500'>ERC 165 &middot; ERC 20 &middot; ERC 721 &middot; ERC 1155</p>
            </div>
            
            <div id='erc165' className="my-12 px-4 w-full shadow-2xl border border-gray-300 rounded-xl">
                <h2 className="font-bold">
                    <span className="block text-sm text-gray-500">eip-165 </span>
                    <span className="block">ERC 165</span>
                </h2>
                <small className="text-sky-500"># ERC-165: Standard Interface Detection</small> 
                <p className='text-gray-500'>
                Creates a standard method to publish and detect what interfaces a smart contract implements.
                <br />
                For some “standard interfaces” like the ERC-20 token interface, it is sometimes useful to query whether a contract supports the interface and if yes, which version of the interface, in order to adapt the way in which the contract is to be interacted with. Specifically for ERC-20, a version identifier has already been proposed. This proposal standardizes the concept of interfaces and standardizes the identification (naming) of interfaces.
                </p>
                <ul className='text-sm'>
                    <li className='inline text-sky-600 font-bold'>Authors: </li>
                    <li className='inline'> Christian Reitwießner</li>
                    <li className='inline'>- Nick Johnson</li>
                    <li className='inline'>- Fabian Vogelsteller</li>
                    <li className='inline'>- Jordi Baylina</li>
                    <li className='inline'>- Konrad Feldmeier</li>
                    <li className='inline'>- William Entriken</li>
                </ul>
                <p className='text-sm text-red-600'><b>Requires</b>: EIP-214</p>
                <div className='h-0.5 w-full my-2 bg-gray-300 rounded-xl'></div>
                <h4 className='font-bold'>Basic structure</h4>
                <p className='bg-gray-800 text-white p-4 rounded-lg'>
                <span className='text-cyan-400'>function supportsInterface</span>(bytes4 interfaceID) <span className='text-cyan-400'>external view returns</span> (bool);
                </p>
                <h4 className='text-sm m-4 p-4'>
                    <a className='p-2 text-blue-600 font-bold' href='https://eips.ethereum.org/EIPS/eip-165'>reference</a>
                </h4>
            </div>
            
            <div id='erc20' className="mb-12 px-4 w-full shadow-2xl border border-gray-300 rounded-xl">
                <h2 className="font-bold">
                    <span className="block text-sm text-gray-500">eip-20 </span>
                    <span className="block">ERC 20</span>
                </h2>
                <small className="text-sky-500"># ERC-20: Token Standard</small> 
                <p className='text-gray-500'>
                A standard interface for tokens. 
                <br />
                A standard interface allows any tokens on Ethereum to be re-used by other applications: from wallets to decentralized exchanges.
                </p>
                <ul className='text-sm'>
                    <li className='inline text-sky-600 font-bold'>Authors: </li>
                    <li className='inline'> Fabian Vogelsteller</li>
                    <li className='inline'>- Vitalik Buterin</li>
                </ul>
                {/* <p className='text-sm text-red-600'><b>Requires</b>: EIP-214</p> */}
                <div className='h-0.5 w-full my-2 bg-gray-300 rounded-xl'></div>
                <h4 className='font-bold'>Basic structure</h4>
                <p className='bg-gray-800 text-white p-4 rounded-lg text-base'>
                function totalSupply() constant returns (uint256 totalSupply); <br />
                function balanceOf<span className='text-orange-400'>(address _owner)</span> constant returns (uint256 balance); <br />
                function transfer<span className='text-orange-400'>(address _to, uint256 _value)</span> returns (bool success); <br />
                function transferFrom<span className='text-orange-400'>(address _from, address _to, uint256 _value)</span> returns (bool success); <br />
                function approve<span className='text-orange-400'>(address _spender, uint256 _value)</span> returns (bool success); <br />
                function allowance<span className='text-orange-400'>(address _owner, address _spender)</span> constant returns (uint256 remaining); <br />
                <br />
                event Transfer<span className='text-orange-400'>(address indexed _from, address indexed _to, uint256 _value)</span>; <br />
                event Approval<span className='text-orange-400'>(address indexed _owner, address indexed _spender, uint256 _value)</span>; <br />
                </p>
                <small className='bg-orange-600 text-white p-2 rounded'>'constant' keyword scope in function has been depricated. in the inerface using external scope.</small>
                <h4 className='text-sm m-4 p-4'>
                    <a className='p-2 text-blue-600 font-bold' href='https://eips.ethereum.org/EIPS/eip-20'>reference</a>
                </h4>
            </div>
            
            <div id='erc721' className="mb-12 px-4 w-full shadow-2xl border border-gray-300 rounded-xl">
                <h2 className="font-bold">
                    <span className="block text-sm text-gray-500">eip-721 </span>
                    <span className="block">ERC 721</span>
                </h2>
                <small className="text-sky-500"># ERC-721: Token Standard</small> 
                <p className='text-gray-500'>
                A standard interface for non-fungible tokens, also known as deeds. 
                <br />
                A standard interface allows wallet/broker/auction applications to work with any NFT on Ethereum. We provide for simple ERC-721 smart contracts as well as contracts that track an arbitrarily large number of NFTs. Additional applications are discussed below.
                <br />
                This standard is inspired by the ERC-20 token standard and builds on two years of experience since EIP-20 was created. EIP-20 is insufficient for tracking NFTs because each asset is distinct (non-fungible) whereas each of a quantity of tokens is identical (fungible).
                <br />
                Differences between this standard and EIP-20 are examined below.
                </p>
                <ul className='text-sm'>
                    <li className='inline text-sky-600 font-bold'>Authors: </li>
                    <li className='inline'> William Entriken</li>
                    <li className='inline'>- Dieter Shirley</li>
                    <li className='inline'>- Jacob Evans</li>
                    <li className='inline'>- Nastassia Sachs</li> 
                </ul>
                <p className='text-sm text-red-600'><b>Requires</b>: EIP-165</p>
                <div className='h-0.5 w-full my-2 bg-gray-300 rounded-xl'></div>
                <h4 className='font-bold'>Basic structure</h4>
                <p className='bg-gray-800 text-white p-4 rounded-lg text-base'>
                function balanceOf<span className='text-orange-400'>(address _owner)</span> external view returns (uint256);<br />
                function ownerOf<span className='text-orange-400'>(uint256 _tokenId)</span> external view returns (address);<br />
                function safeTransferFrom<span className='text-orange-400'>(address _from, address _to, uint256 _tokenId, bytes data)</span> external payable;<br />
                function safeTransferFrom<span className='text-orange-400'>(address _from, address _to, uint256 _tokenId)</span> external payable;<br />
                function transferFrom<span className='text-orange-400'>(address _from, address _to, uint256 _tokenId)</span> external payable;<br />
                function approve<span className='text-orange-400'>(address _approved, uint256 _tokenId)</span> external payable;<br />
                function setApprovalForAll<span className='text-orange-400'>(address _operator, bool _approved)</span> external;<br />
                function getApproved<span className='text-orange-400'>(uint256 _tokenId)</span> external view returns (address);<br />
                function isApprovedForAll<span className='text-orange-400'>(address _owner, address _operator)</span> external view returns (bool);<br />
                <br />
                event Transfer<span className='text-orange-400'>(address indexed _from, address indexed _to, uint256 indexed _tokenId)</span>;<br />
                event Approval<span className='text-orange-400'>(address indexed _owner, address indexed _approved, uint256 indexed _tokenId)</span>;<br />
                event ApprovalForAll<span className='text-orange-400'>(address indexed _owner, address indexed _operator, bool _approved)</span>;
                </p>
                <h4 className='text-sm m-4 p-4'>
                    <a className='p-2 text-blue-600 font-bold' href='https://eips.ethereum.org/EIPS/eip-721'>reference</a>
                </h4>
            </div>
            
            <div id='erc1155' className="mb-12 px-4 w-full shadow-2xl border border-gray-300 rounded-xl">
                <h2 className="font-bold">
                    <span className="block text-sm text-gray-500">eip-1155 </span>
                    <span className="block">ERC 1155</span>
                </h2>
                <small className="text-sky-500"># ERC-1155: Multi Token Standard</small> 
                <p className='text-gray-500'>
                A standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens).
                <br />
                Tokens standards like ERC-20 and ERC-721 require a separate contract to be deployed for each token type or collection. This places a lot of redundant bytecode on the Ethereum blockchain and limits certain functionality by the nature of separating each token contract into its own permissioned address. With the rise of blockchain games and platforms like Enjin Coin, game developers may be creating thousands of token types, and a new type of token standard is needed to support them. However, ERC-1155 is not specific to games and many other applications can benefit from this flexibility.
                <br />
                New functionality is possible with this design such as transferring multiple token types at once, saving on transaction costs. Trading (escrow / atomic swaps) of multiple tokens can be built on top of this standard and it removes the need to “approve” individual token contracts separately. It is also easy to describe and mix multiple fungible or non-fungible token types in a single contract.
                </p>
                <ul className='text-sm'>
                    <li className='inline text-sky-600 font-bold'>Authors: </li>
                    <li className='inline'> Witek Radomski</li>
                    <li className='inline'>- Andrew Cooke</li>
                    <li className='inline'>- Philippe Castonguay</li>
                    <li className='inline'>- James Therien</li>
                    <li className='inline'>- Eric Binet</li>
                    <li className='inline'>- Ronan Sandford</li>
                </ul>
                <p className='text-sm text-red-600'><b>Requires</b>: EIP-165</p>
                <div className='h-0.5 w-full my-2 bg-gray-300 rounded-xl'></div>
                <h4 className='font-bold'>Basic structure</h4>
                <p className='bg-gray-800 text-white p-4 rounded-lg text-base'>                
                function safeTransferFrom<span className='text-orange-400'>(address _from, address _to, uint256 _id, uint256 _value, bytes calldata _data)</span> external;<br />
                function safeBatchTransferFrom<span className='text-orange-400'>(address _from, address _to, uint256[] calldata _ids, uint256[] calldata _values, bytes calldata _data)</span> external;<br />
                function balanceOf<span className='text-orange-400'>(address _owner, uint256 _id)</span> external view returns (uint256);<br />
                function balanceOfBatch<span className='text-orange-400'>(address[] calldata _owners, uint256[] calldata _ids)</span> external view returns (uint256[] memory);<br />
                function setApprovalForAll<span className='text-orange-400'>(address _operator, bool _approved)</span> external;<br />
                function isApprovedForAll<span className='text-orange-400'>(address _owner, address _operator)</span> external view returns (bool);<br /><br />

                event TransferSingle<span className='text-orange-400'>(address indexed _operator, address indexed _from, address indexed _to, uint256 _id, uint256 _value)</span>;<br />
                event TransferBatch<span className='text-orange-400'>(address indexed _operator, address indexed _from, address indexed _to, uint256[] _ids, uint256[] _values)</span>;<br />
                event ApprovalForAll<span className='text-orange-400'>(address indexed _owner, address indexed _operator, bool _approved)</span>;<br />
                event URI<span className='text-orange-400'>(string _value, uint256 indexed _id)</span>;
                </p>
                <h4 className='text-sm m-4 p-4'>
                    <a className='p-2 text-blue-600 font-bold' href='https://eips.ethereum.org/EIPS/eip-1155'>reference</a>
                </h4>
            </div>

        </div>

        <ul className='fixed left-2 bottom-12 backdrop-blur-sm w-1/10 shadow-lg font-bold'>
            <li className='shadow-lg'><a href='#erc165' className='text-orange-700 hover:text-black p-2'>ERC 165</a></li>
            <li className='shadow-lg'><a href='#erc20' className='text-orange-700 hover:text-black p-2'>ERC 20</a></li>
            <li className='shadow-lg'><a href='#erc721' className='text-orange-700 hover:text-black p-2'>ERC 721</a></li>
            <li className='shadow-lg'><a href='#erc1155' className='text-orange-700 hover:text-black p-2'>ERC 1155</a></li>
        </ul>
        
        </section>

    );
}
