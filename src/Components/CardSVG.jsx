import React from 'react'

const CardSVG = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 420" width = "300" height = "420">
          <defs>
            <pattern id="cardPattern" patternUnits="userSpaceOnUse" width="300" height="420">
              <rect width="300" height="420" fill="#1729db"/>
              
              {/* <!-- Outer border --> */}
              <rect x="10" y="10" width="280" height="400" stroke="white" stroke-width="5" fill="none"/>
              
              {/* <!-- Inner border --> */}
              <rect x="30" y="30" width="240" height="360" stroke="white" stroke-width="2" fill="none"/>
              
              {/* <!-- Abstract patterns --> */}
              <path d="M50 50 Q150 0 250 50 T450 50" stroke="white" stroke-width="1.5" fill="none"/>
              <path d="M50 370 Q150 420 250 370 T450 370" stroke="white" stroke-width="1.5" fill="none"/>
              
              <path d="M30 210 C100 160, 200 260, 270 210" stroke="white" stroke-width="1.5" fill="none"/>
              <path d="M30 210 C100 260, 200 160, 270 210" stroke="white" stroke-width="1.5" fill="none"/>
              
              {/* <!-- Diamond shapes --> */}
              <path d="M150 30 L170 50 L150 70 L130 50 Z" stroke="white" stroke-width="1.5" fill="none"/>
              <path d="M150 350 L170 370 L150 390 L130 370 Z" stroke="white" stroke-width="1.5" fill="none"/>
              
              {/* <!-- Decorative circles --> */}
              <circle cx="50" cy="50" r="15" stroke="white" stroke-width="1.5" fill="none"/>
              <circle cx="250" cy="50" r="15" stroke="white" stroke-width="1.5" fill="none"/>
              <circle cx="50" cy="370" r="15" stroke="white" stroke-width="1.5" fill="none"/>
              <circle cx="250" cy="370" r="15" stroke="white" stroke-width="1.5" fill="none"/>
              
              {/* <!-- Central design with L --> */}
              <circle cx="150" cy="210" r="80" stroke="white" stroke-width="3" fill="none"/>
              <circle cx="150" cy="210" r="60" stroke="white" stroke-width="2" fill="none"/>
              <text x="150" y="240" font-family="Arial, sans-serif" font-size="80" fill="white" text-anchor="middle">L</text>
              
              {/* <!-- Additional abstract lines --> */}
              <path d="M30 105 Q150 125 270 105" stroke="white" stroke-width="1.5" fill="none"/>
              <path d="M30 315 Q150 295 270 315" stroke="white" stroke-width="1.5" fill="none"/>
              
              <path d="M75 30 V390" stroke="white" stroke-width="1" fill="none" stroke-dasharray="5,5"/>
              <path d="M225 30 V390" stroke="white" stroke-width="1" fill="none" stroke-dasharray="5,5"/>
              
              {/* <!-- Corner embellishments --> */}
              <path d="M10 10 L40 10 L40 40" stroke="white" stroke-width="2" fill="none"/>
              <path d="M260 10 L290 10 L290 40" stroke="white" stroke-width="2" fill="none"/>
              <path d="M10 410 L40 410 L40 380" stroke="white" stroke-width="2" fill="none"/>
              <path d="M260 410 L290 410 L290 380" stroke="white" stroke-width="2" fill="none"/>
            </pattern>
          </defs>
          <rect width="300" height="420" fill="url(#cardPattern)"/>
        </svg>
    </div>
  )
}

export default CardSVG