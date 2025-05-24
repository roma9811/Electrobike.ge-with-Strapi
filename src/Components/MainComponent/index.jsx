 import React, { useState } from 'react';
import './Main.css';
import { Button, Modal, Box, Typography, Fade } from '@mui/material';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion } from "framer-motion";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { useNavigate } from 'react-router-dom';


import test1 from "../../Assets/test1.webp";
import test2 from "../../Assets/test2.webp";
import test3 from "../../Assets/test3.webp";
import test4 from "../../Assets/test4.webp";
import test5 from "../../Assets/test5.webp"; 
import Trending from "../../Assets/trending.png";
import Models from "../../Assets/models.png";
import Bike from "../../Assets/bike.png";
import Strip from "../../Assets/strip.png";
import EKX1 from "../../Assets/ekx21-1.png";
import EKX2 from "../../Assets/ekx21-2.png";
import EKX4 from "../../Assets/ekx21-4.png";
import EKX5 from "../../Assets/ekx21-5.png";
import EKX6 from "../../Assets/ekx21-6.png";

export const MainComponent = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate(); 


  const texts = ["SEE ALL BIKES", "750W", "1000W", "2000W", "3000W"];
  const images = [test1, test2, test3, test4, test5];


  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const handleCarouselClick = (index) => {
    if (index === 0) {
      navigate('/catalog');
    } else {
      const wattValue = texts[index].replace('W', '');
      navigate('/catalog', { state: { wattFilter: wattValue } });
    }
  };

  return (
    <div className="Main">
      <div className="MainContainer">
        <div className='OurBikes'>
          <img src={Strip} alt="" width={60} />
          <h2>OUR BIKES</h2>
        </div>

        <div className="CarouselContainer">
          <div className='BikesCarousel'>
            <Carousel
              responsive={responsive}
              infinite
              autoPlay={false}
              keyBoardControl
              showDots={false}
              arrows
              containerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
            >
              {images.map((img, index) => (
                <div 
                  key={index} 
                  className="carousel-img-wrapper"
                  onClick={() => handleCarouselClick(index)} 
                >
                  <div className="image-overlay-wrapper">
                    <img src={img} alt={`bike-${index}`} className="carousel-img" />
                    <div className="image-text">{texts[index]}</div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="TrendningContainer">
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="TrendningBox">
            <div className="TrendingImage">
              <img src={Trending} alt="Trending" />
            </div>
            <div className='ModelsImage'>
              <img src={Models} alt="Models" />
            </div>
            <div className='BikeContainer'>
              <div className="BikeBox">
                <div className="BikeImage">
                  <img src={Bike} alt="Bike" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className='BikeTextContainer'>
            <div className='TextBox'>
              <div className='Bicycle'>
                <h2>Electric bicycle ELECTROBIKE</h2>
              </div>
              <div className='BikeName'>
                <p>EKX X21</p>
              </div>
            </div>
            <div className='StripContainer'>
              {[
                "The electric bicycle has a power output of 3000 watts.",
                "Charges in just 4-6 hours for more ride time.",
                "Reaching 100 km/h, it delivers impressive speed for quick and efficient rides."
              ].map((text, i) => (
                <div className="StripText" key={i}>
                  <motion.img
                    src={Strip}
                    alt=""
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                  />
                  <p>{text}</p>
                </div>
              ))}
              <div className='DiscoverBtn'>
                <Button variant="contained" onClick={handleOpen}>
                  Discover more
                </Button>
              </div>
              <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{ timeout: 800 }}
              >
                <Fade in={open}>
                  <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: { xs: '90%', sm: 860 },
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    boxShadow: 24,
                    p: 1,
                    maxHeight: '90vh',
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 3,
                  }}>
                    <Box sx={{ flex: 1 }}>
                      <ImageGallery
                        items={[
                          { original: EKX1, thumbnail: EKX1 },
                          { original: EKX2, thumbnail: EKX2 },
                          { original: EKX4, thumbnail: EKX4 },
                          { original: EKX5, thumbnail: EKX5 },
                          { original: EKX6, thumbnail: EKX6 },
                        ]}
                        showPlayButton={false}
                        showFullscreenButton={false}
                        showNav
                        showThumbnails
                      />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}>
                        EKX X21 – Product Details:
                      </Typography>

                      <Box sx={{ mt: 3 }}>
                        <Box
                          component="ul"
                          sx={{
                            listStyle: 'none',
                            p: 0,
                            fontSize: '16px',
                          }}
                          className="EkxInfo"
                        >
                          {[
                            'Motor power : 3000w',
                            'Charging time: 4-6 hours',
                            'Top speed: 100 km/h',
                            'Brake system: Hydraulic brake',
                            'Battery: 30AH',
                            'Turn: Shimano 7system',
                            'Tyres: Off-road 70/100-19'
                          ].map((item, i) => (
                            <li key={i} style={{ paddingLeft: '25px' }}>
                              {item}
                            </li>
                          ))}
                        </Box>
                      </Box>

                      <Button
                        variant="contained"
                        onClick={handleClose}
                        sx={{ mt: 4, display: 'block', mx: 'auto' }}
                        style={{ background: "black" }}
                      >
                        Close
                      </Button>
                    </Box>
                  </Box>
                </Fade>
              </Modal>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};