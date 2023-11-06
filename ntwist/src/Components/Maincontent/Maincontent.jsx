import React, { useEffect, useState } from 'react'



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
            }}
          >
            <h2>{e.title}</h2>
            <p>{e.detail}</p>
            <button
              style={{
                backgroundColor: 'orange',
                padding: '10px',
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
            <h2>{e.title}</h2>
            <p>{e.detail}</p>
            <button
              style={{
                backgroundColor: 'orange',
                padding: '10px',
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
