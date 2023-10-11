function Header() {
  return <header className="header flex h-16 border-b-[1px] border-[#E5E7EB]">
    <div name='logo' className='absolute left-0'>
      <div className='mt-4 ml-20'>
        LOGO
      </div>
    </div>
    <div className='absolute right-0 text-lg text-[#1F2937]'>
      <div name='navigation' className='mt-4 flex mr-10'>
        <div name='nav-1' className='px-4'>
          <a href=''>Documentation</a>
        </div>
        <div name='nav-2' className='px-4'>
          <a href=''>About</a>
        </div>
        <div name='nav-3' className='px-4'>
          <a href='' className='bg-[#131886] text-white border-8 border-x-[14px] rounded-lg border-[#131886]'>
            Login
          </a>
        </div>
      </div>
    </div>
  </header>;
}

export default Header;