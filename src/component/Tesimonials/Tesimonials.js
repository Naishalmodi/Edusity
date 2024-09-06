import React, { useRef } from 'react'
import './Tesimonials.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';

const Tesimonials = () => {

const slider = useRef();
let tx = 0;

const slideForward = ()=>{
    if(tx > -50)
    {
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0)
    {
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='tesimonials'>
        <img className='next-btn' onClick={slideForward} src={next_icon} alt=''/>
        <img className='back-btn' onClick={slideBackward} src={back_icon} alt=''/>
        <div className='slider'>
            <ul ref={slider}>
                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_1} alt=''/>
                            <div>
                                <h3>Naishal Modi</h3>
                                <span>Newyork, USA</span>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_2} alt=''/>
                            <div>
                                <h3>Krupesh Modi</h3>
                                <span>Colorado, USA</span>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </li>

                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_3} alt=''/>
                            <div>
                                <h3>Aniket Bhatti</h3>
                                <span>California, USA</span>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </li>


                <li>
                    <div className='slide'>
                        <div className='user-info'>
                            <img src={user_4} alt=''/>
                            <div>
                                <h3>Shashank Joshi</h3>
                                <span>
                                    Alabama, USA
                                </span>
                            </div>
                        </div>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Tesimonials;