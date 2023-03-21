import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return (
      <Carousel varient="dark" keyboard="true" touch="true" pause="hover">
        <Carousel.Item interval={1000}>
          <as>
            <div className="caro-material">
              <img src="/main-pic.png" className='main-pic' alt=""  />
              <p className="caro-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quibusdam.</p>
            </div>            
          </as>
        </Carousel.Item>
        
        <Carousel.Item interval={1000}>
          <as>
            <div className="caro-material">
              <img src="/main-pic.png" className='main-pic' alt=""  />
              <p className="caro-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quibusdam.</p>
            </div>            
          </as>
        </Carousel.Item>
        
        <Carousel.Item interval={1000}>
          <as>
            <div className="caro-material">
              <img src="/main-pic.png" className='main-pic' alt=""  />
              <p className="caro-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, quibusdam.</p>
            </div>            
          </as>
        </Carousel.Item>
        
      </Carousel>
      //   <Carousel >
      //   <Carousel.Item interval={1000}>
      //     <img
      //       className="d-block w-100"
      //       src="/main-pic.png"
      //       alt="First slide"
      //     />
      //     <Carousel.Caption>
      //       <h3>First slide label</h3>
      //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="/main-pic.png"
      //       alt="Second slide"
      //     />

      //     <Carousel.Caption>
      //       <h3>Second slide label</h3>
      //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      //   <Carousel.Item>
      //     <img
      //       className="d-block w-100"
      //       src="/main-pic.png"
      //       alt="Third slide"
      //     />

      //     <Carousel.Caption>
      //       <h3>Third slide label</h3>
      //       <p>
      //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
      //       </p>
      //     </Carousel.Caption>
      //   </Carousel.Item>
      // </Carousel>
    );
}
 
export default CarouselHome;
//-----------------------------------------------------------
