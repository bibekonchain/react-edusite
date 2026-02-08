import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {
  const slider = useRef(null)
  const tx = useRef(0)

  const isMobile = () => window.innerWidth <= 768

  const slideForward = () => {
    const step = isMobile() ? 25 : 25   // keep same step, but mobile uses different widths in CSS
    const minTx = isMobile() ? -75 : -50

    if (tx.current > minTx) {
      tx.current -= step
      slider.current.style.transform = `translateX(${tx.current}%)`
    }
  }

  const slideBackward = () => {
    const step = isMobile() ? 25 : 25

    if (tx.current < 0) {
      tx.current += step
      slider.current.style.transform = `translateX(${tx.current}%)`
    }
  }

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />

      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="Eva Jackson" />
                <div>
                  <h3>Eva Jackson</h3>
                  <span>Chitwan, Nepal</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iste tenetur
                neque repudiandae ullam nobis commodi?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="Eva Jackson" />
                <div>
                  <h3>Eva Jackson</h3>
                  <span>Chitwan, Nepal</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iste tenetur
                neque repudiandae ullam nobis commodi?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="Eva Jackson" />
                <div>
                  <h3>Eva Jackson</h3>
                  <span>Chitwan, Nepal</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iste tenetur
                neque repudiandae ullam nobis commodi?
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="Eva Jackson" />
                <div>
                  <h3>Eva Jackson</h3>
                  <span>Chitwan, Nepal</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, iste tenetur
                neque repudiandae ullam nobis commodi?
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
