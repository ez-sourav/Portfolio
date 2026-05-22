import React from 'react'

const About = () => {
  return (
    <section
      id='about'
      className='py-10 px-4 sm:px-6 lg:px-8'
    >
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 lg:gap-16 items-center'>

        {/* Left Side */}
        <div className='reveal text-center md:text-left'>

          <div className="w-25 h-1 bg-linear-to-r from-orange-500 to-transparent mb-4 mx-auto md:mx-0"></div>

          <h2 className='text-3xl sm:text-4xl font-medium mb-6'>
            About Me
          </h2>

          <p className="text-gray-400 leading-relaxed mb-6 text-base sm:text-lg">
            I am a passionate full stack developer and BCA student
            focused on building responsive and user-friendly web applications.
          </p>

          <p className="text-gray-400 leading-relaxed mb-10 text-base sm:text-lg">
            I enjoy learning modern technologies and creating clean,
            scalable digital experiences with React, Node.js, and MongoDB.
          </p>

          <div className='flex justify-center md:justify-start gap-10 sm:gap-14'>

            <div>
              <h3 className='text-3xl sm:text-4xl font-bold text-orange-500 mb-1'>
                2+
              </h3>

              <p className='text-gray-500 text-sm sm:text-base'>
                Years Coding
              </p>
            </div>

            <div>
              <h3 className='text-3xl sm:text-4xl font-bold text-orange-500 mb-1'>
                10+
              </h3>

              <p className='text-gray-500 text-sm sm:text-base'>
                Projects
              </p>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className='reveal  delay-200 flex justify-center md:justify-end'>

          <div className='relative group'>

            <img
              src="/coding-image.jpg"
              alt="Coding"
              className="w-full max-w-125 rounded-2xl border border-orange-500/20 object-cover shadow-lg transition duration-500 group-hover:scale-[1.02]"
            />

            {/* Glow */}
            <div className='absolute inset-0 rounded-2xl bg-orange-500/5 opacity-0 group-hover:opacity-100 transition duration-500'></div>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About