import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react'


const Maincontent = ({data}) => {

    const [size, setSize] = useState("laptop");
  

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 1200) {
      setSize("laptop");
    } else if (width <= 380) {
      setSize("mobile");
    } else {
      setSize("laptop");
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  

  return (
    <div>
      {size==="laptop" ? 
      <>
        {data.map((e, i) => (
        <div
          key={e.id}
          style={{
            display: 'flex',
            flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              margin: '30px',
            }}
          >
            <h2 style={{
                fontFamily:"Inter, sans-serif",
                fontStyle:"normal",
                fontWeight:"500",
                fontSize:"43px",
                lineHeight:"56px",
                color:"#ff3a2d",
                textAlign:"start"
            }}>{e.title}</h2>
            <p style={{
                fontFamily:"Roboto, sans-serif",
                fontStyle:"normal",
                fontWeight:"400",
                fontSize:"20px",
                lineHeight:"1.6",
                color:"#000000",
                textAlign:"start",
            }}>{e.detail}</p>
            <button
              style={{
                backgroundColor: '#FF3A2D',
                padding: '10px 10px',
                borderRadius:"5px",
                marginRight:"85%",
                color: 'white',
                border: 'none',
              }}
            >
              Read More
            </button>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img src={e.img} alt={e.title} style={{ maxWidth: '100%' }} />
          </div>
        </div>
      ))}      
      </> :
      <>
      {data.map((e, i) => (
        <div
          key={e.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src={e.img} alt={e.title} style={{ maxWidth: '100%' }} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <h2 style={{
                fontFamily:"Inter, sans-serif",
                fontStyle:"normal",
                fontWeight:"500",
                fontSize:"43px",
                lineHeight:"1.6",
                color:"#ff3a2d",
                textAlign:"start"
            }}>{e.title}</h2>
            <p style={{
                fontFamily:"Roboto, sans-serif",
                fontStyle:"normal",
                fontWeight:"400",
                fontSize:"20px",
                lineHeight:"1.6",
                color:"#000000",
                textAlign:"start",
            }}>{e.detail}</p>
            <button
              style={{
                backgroundColor: '#FF3A2D',
                padding: '10px',
                borderRadius:"5px",
                marginRight:"50%",
                color: 'white',
                border: 'none',
              }}
            >
              Read More
            </button>
          </div>
        </div>
      ))}
      </>
      }
    </div>  
  )
}

export default Maincontent
