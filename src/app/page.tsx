import Book from '@/components/Book';
import Header from '@/components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <Header />
      <div className='container'>
        <div className='mx-auto md:max-w-[66%]'>
          <section className='mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-8 md:pb-4 lg:py-12 lg:pb-10'>
            {/* <div className='h-60 text-center'>some content can go here</div> */}
            <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] hidden md:block'>
              Some Content Can go here
            </h1>
            <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] md:hidden'>
              Lorem ipsum
            </h1>
            <span
              className='max-w-[750px] text-center text-lg font-light text-foreground'
              data-br=':rvr:'
              data-brr='1'
              style={{
                display: 'inline-block',
                verticalAlign: 'top',
                textDecoration: 'inherit',
                maxWidth: '494px',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s.
            </span>
          </section>
          <section>
            <div className='bg-background/95 md:py-4 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
              <form>
                <div className='relative'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    className='lucide lucide-search absolute left-2 top-4 h-4 w-4 text-muted-foreground'
                  >
                    <circle cx='11' cy='11' r='8'></circle>
                    <path d='m21 21-4.3-4.3'></path>
                  </svg>
                  <input
                    className='flex h-12 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pl-8'
                    placeholder='Search for a product'
                  />
                </div>
              </form>
            </div>
          </section>
          <section className='my-3 flex justify-between flex-wrap gap-5'>
            <Book />
            <Book />
            <Book />
          </section>
        </div>
      </div>
    </main>
  );
}
