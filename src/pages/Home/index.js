import styles from './styles.module.css'
import React from 'react'

export default function Home() {
  return (
    <div className='page'>
      <br/>
      <h1>Knit Software</h1>
      <br/>
      <section className='row'>
        <div className='col-6 px-5'>
          <p>CONNECTING COMMUNITIES, BUILDING DREAMS</p>
          <h2>Let's Knit the Future!</h2>
          <p>Join Us in Weaving a Future Where Technology Unites Us All</p>
          <p>
          At Knit Software, we're more than just a tech company; we're a community builder. With every line of code, we stitch together stronger connections, fostering an environment where businesses and communities thrive hand-in-hand.

          Our mission is to empower underrepresented groups in the tech space, bring innovative solutions to the forefront, and help your business tap into the heart of diverse communities. From creating dynamic web applications to transforming ideas into digital fantasies, we're dedicated to making technology accessible and impactful for all.

          Let's knit the future together, creating spaces where every voice is heard, and every dream can take shape. Get in touch with us today, and let's start crafting a world of endless possibilities, one digital thread at a time.
          </p>
          <button>GET IN TOUCH</button>
        </div>
        <div className='col-6'>
          <img src='https://test.knitsoftware.com/homepageImg.png' className='img-fluid' alt='' />
        </div>
      </section>
      <br/>
      <section className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
          <div className='row'>
            <h4 className='text-center'>Software means investing smartly in technology that drives real, impactful change</h4>
          </div>
          <div className='row'>
            <div className='col-5'></div>
            <div className='col-2'><button className='btn btn-secondary p-2'>Learn more</button></div>
            <div className='col-5'></div>
          </div>
        </div>
        <div className='col-2'></div>
      </section>
      <br/>
      <section className='row'>
        <div className='col-6'>
          <img src='https://test.knitsoftware.com/homepageSecondImg.png' className='img-fluid' alt='' />
        </div>
        <div className='col-6 px-5'>
          <p>MAKE YOUR BUSINESS FUTURE-READY</p>
          <h2>Digitize to Thrive</h2>
          <p>Join Us in Weaving a Future Where Technology Unites Us All</p>
          <p>
          In today's rapidly evolving digital landscape, the importance of embracing technology cannot be overstated. A single digital product holds the potential not just to innovate but to redefine industry standards, making digital integration no longer optional but essential for survival and success. For companies looking to navigate this shift, Knit Software emerges as a critical ally. We understand that investing in IT is not just about adopting new technologies; it's about strategically integrating digital solutions that resonate with your core business values and objectives. At Knit Software, we specialize in crafting bespoke digital products that not only meet the immediate needs of your business but also lay a robust foundation for future innovation. In a time when digital transformation can dictate the performance and longevity of your organization, partnering with Knit's objectives.
          </p>
          <button>OUR SOLUTIONS</button>
        </div>
      </section>
    </div>
  )
}
