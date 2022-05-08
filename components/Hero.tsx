const Hero = () => {
  return (
    // <!-- Hero Section Start-->
    <section id='home' className='pt-36'>
      <div className='container'>
        <div className='flex flax-wrap'>
          <div className='w-full self-center px-4 lg:w-1/2'>
            <h1 className='text-base font-semibold text-primary mb-1 md:text-xl'>Hello, I'm <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>Suryaning Mentari</span></h1>
            <h2 className='font-medium text-secondary text-lg mb-5 lg:text-2xl'>SOA Developer & <span className='text-dark'>Automation Tester</span> </h2>
            <p className='font-medium text-secondary mb-10 leading-relaxed'>Person who like to code and <span className="text-dark font-bold">addicted to learn</span></p>
            <a href="#" className='text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out'>Contact Me</a>
          </div>
          <div className='w-full self-end px-4 lg:w-1/2'>
           <div className='relative mt-10 lg:mt-9 lg:right-0'>
             <img src="aning.png" alt="Suryaning Mentari" className='max-w-full mx-auto'/>
             <span className='absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2 md:scale-125'>
              <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#A855F7" d="M40.7,-45.3C56.4,-35.3,75.3,-26,77.3,-13.7C79.4,-1.5,64.6,13.7,54.4,31.5C44.2,49.3,38.5,69.8,26.1,76.3C13.7,82.8,-5.5,75.3,-16.6,63.5C-27.7,51.7,-30.8,35.6,-39.1,22.1C-47.4,8.7,-60.9,-2.2,-63.6,-15.5C-66.4,-28.7,-58.4,-44.4,-46,-55C-33.6,-65.6,-16.8,-71.1,-2.1,-68.6C12.5,-66,25,-55.3,40.7,-45.3Z" transform="translate(100 100)" />
              </svg>
             </span>
           </div>
          </div>
        </div>
      </div>
    </section>
    // <!-- End Hero Section-->
  )
}

export default Hero
