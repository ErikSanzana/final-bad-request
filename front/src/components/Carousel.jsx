import Carousel from 'react-bootstrap/Carousel';

function Carrucel() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
        <img src="https://iili.io/JX1IGcu.jpg"  className= 'carousel-image'/>
        <Carousel.Caption >
          <div>
          <h3 className='text1'>Linea Infantil</h3>
          <p className='textp1'>Tenemos diferentes figuras.</p></div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src="https://iili.io/JX1IM8b.jpg" className='carousel-image'/>
        <Carousel.Caption>
          <h3 className='text1'>Linea Tradicional</h3>
          <p className='textp1'>Busca el que más te guste.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
      <img src="https://iili.io/JX1IXAx.jpg" className='carousel-image'/>
        <Carousel.Caption>
          <h3 className='text1'>Para Regalar</h3>
          <p className='textp1'>
            En ese momento especial.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <img src="https://iili.io/JX1I0P9.jpg" className='carousel-image'/>
        <Carousel.Caption>
          <h3 className='text1'>Para Regalar</h3>
          <p className='textp1'>
            En ese momento especial.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  )
  }
export default Carrucel;
