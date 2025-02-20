import React from 'react'

const About = () => {
  return (
    <>
    <div className='flex flex-wrap gap-2 sm:gap-x-6 items-center and justify-center'>
      <h1 className='text-4xl font-bold leading-none tracking-tight' >We Love</h1>
      <div className='stats bg-primary shadow'>
          <div className="stat">
            <div className='stat-title text-primary-content text-4xl font-bold tracking-widest'>
              Comfy
            </div>
          </div>
      </div>
    </div>
    <p className='mt-6 text-lg leading-8 max-w-2xl mx-auto'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus ut omnis nesciunt quibusdam tempora reiciendis repudiandae optio, unde dicta magni repellendus quia, corporis nam. Quisquam sit optio fugit commodi rem tempora molestiae quia consequatur ipsum aliquid, ad, ab nobis consectetur?
    </p>
    </>
  )
}

export default About