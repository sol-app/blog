import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <nav className="navbar navbar-expand-lg shadow-xl py-2 bg-gray-50 relative flex items-center w-full justify-between mb-8">
          <div className="px-6">    
            <div className="navbar-collapse collapse grow items-center" id="navbarSupportedContentX">
            <ul className="navbar-nav mr-auto flex flex-row">
              <li className="nav-item">
                <Link href='/'>
                  <a><h3 className="block pr-2 lg:px-2 py-2 text-black hover:text-gray-700 mr-5 text-xl border border-gray-300 rounded-lg font-bold">SOL-BLOG</h3></a>
                </Link>
              </li> 
              <li className="nav-item">
                <Link href='/resume'>
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Resume</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='/about'>
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">About</a>
                </Link>
              </li>     
              <li className="nav-item">
                <Link href='/erc'>
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">ERC</a>
                </Link>
              </li>        
              <li className="nav-item">
                <Link href='https://github.com/mosi-sol'>
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Github</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href='https://www.linkedin.com/in/moslem-abbasi/'>
                <a className="nav-link block pr-2 lg:px-2 py-2 text-gray-600">Linkedin</a>
                </Link>
              </li>
            </ul>
            </div>	
          </div>
        </nav>
      <main className='container mx-auto flex-1 w-full my-4'>{children}</main>
      <footer className='text-center lg:text-left mt-8 bg-gradient-to-b from-gray-200 to-white'>
        <div className='text-black text-center p-4'>© 2017-2023 &nbsp;|&nbsp; Mosi-sol</div>        
        <div class="bg-gray-300 mt-3 mx-auto p-3 text-center text-sm font-sm">
          <p>use this blog for your project <code class="bg-gray-700 text-white px-3 rounded">npx create-next-app@latest nextjs-blog --use-npm --example "https://github.com/sol-app/blog"</code></p>
        </div>
      </footer>
    </div>
  );
}
