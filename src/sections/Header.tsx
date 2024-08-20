import LogoIcon from '@/assets/logo.svg'




export const Header = () => {
  return <header className="py-4 border-b border-white/15 md:border-none max-w-2xl mx-auto">
    <div className="container">
      <div className="flex justify-between items-center md:border border-white/15 md:p-2.5 rounded-xl">
        <div>
          <div className='border h-10 w-10 rounded-lg inline-flex justify-center items-center border-white/15'>
          <LogoIcon className="h-8 w-8" />
          </div>
        </div>
        <div className="hidden md:block">
          <nav className="flex gap-8 text-sm">
            <a className="text-white/70 hover:text-white transition" href='#'>Features</a>
            <a className="text-white/70 hover:text-white transition" href='#'>Developers</a>
          </nav>
        </div>
        <div className="flex gap-4 items-center">
          <button className="relative border py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
            <div className="absolute inset-0">
            <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            <div className="absolute inset-0 shadow[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
            </div>
           
            
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </div>
  </header>
};


export default Header;