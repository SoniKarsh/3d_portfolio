import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>
            {/* 
                sm:block hidden -> sm is for small if small devices then block else hidden
            */}
            Have a project in mind? <br className='sm:block hidden' />
            Let’s build something together!
        </p>
        <Link to='/contact' className='btn'>
            Contact
        </Link>
    </section>
  )
}

export default CTA