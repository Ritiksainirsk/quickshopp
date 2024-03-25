import React from 'react'
import './NewsLetter.css'

export default function NewsLetter() {
  return (
    <div>
        <div className="news_letter">
            <h1>Get Exclusive offers on your email</h1>
            <p>Subsribe to our newsletter and stay updated</p>
            <div>
                <input type="text" placeholder='Your email id' />
                <button  type="button" >Subsribe</button>
            </div>
        </div>
    </div>
  )
}
