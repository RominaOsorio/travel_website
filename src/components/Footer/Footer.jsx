import { useEffect } from 'react'
import './footer.scss'
import { FiSend, FiChevronRight } from 'react-icons/fi'
import { MdTravelExplore } from 'react-icons/md'
import { FaXTwitter, FaInstagram } from 'react-icons/fa6'
import { AiOutlineYoutube } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src='/assets/video2.mp4' loop autoPlay muted type='video/mp4' />
      </div>

      <div className='secContent container'>
        <div className='contacDiv flex'>
          <div data-aos='fade-up' className='text'>
            <small>Keep in touch</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos='fade-up' type='text' placeholder='Enter Email Address' />
            <button data-aos='fade-up' className='btn flex' type='submit'> Send
              <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdTravelExplore className='icon' /> Travel
              </a>
            </div>

            <div data-aos='fade-up' className='footerParagraph'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit placeat, incidunt eaque, sint iste at, impedit odio nemo quis rerum nulla mollitia voluptatum accusantium doloribus facere optio molestiae voluptates. Quos.
            </div>

            <div data-aos='fade-up' className='footerSocials flex'>
              <FaXTwitter className='icon' />
              <AiOutlineYoutube className='icon' />
              <FaInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>

          </div>
          <div className='footerLinks grid'>
            {/* Group One */}
            <div data-aos='fade-up' data-aos-duration='3000' className='linkGroup'>
              <span className='groupTitle'>
                Our agency
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Insurance
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Agency
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Tourism
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Payment
              </li>

            </div>

            {/* Group Two */}
            <div data-aos='fade-up' data-aos-duration='4000' className='linkGroup'>
              <span className='groupTitle'>
                Partners
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Booking
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Rentcars
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                HostelWorld
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Trivago
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>

            </div>

            {/* Group Three */}
            <div data-aos='fade-up' data-aos-duration='5000' className='linkGroup'>
              <span className='groupTitle'>
                Last minute
              </span>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                London
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Paris
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Europe
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Indonesia
              </li>

              <li className='footerList flex'>
                <FiChevronRight className='icon' />
                Oceania
              </li>

            </div>
          </div>

          <div className='footerDiv flex'>
            <small>Best travel website</small>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Footer
