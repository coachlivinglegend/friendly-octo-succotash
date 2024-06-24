import Cart from './Cart';

const Header = () => {
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 max-w-screen-2xl justify-between items-center'>
        <div className='mr-4 flex'>
          <nav className='flex items-center gap-4 text-sm lg:gap-6'>
            <a
              className='transition-colors hover:text-foreground/80 text-foreground'
              href='/docs'
            >
              Bayo Beckley
            </a>
          </nav>
        </div>
       
        <div className='cursor-pointer'>
          <Cart />
    
        </div>
      </div>
    </header>
  );
};

export default Header;
