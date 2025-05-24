 import { useState, useEffect } from 'react';
import axios from 'axios';
import {Modal,Box,Typography,Fade,Select,MenuItem,InputLabel, FormControl,} from '@mui/material';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './BikeCatalog.css';

const API_URL = 'https://ebike-strapi.onrender.com';



const BikeCatalog = ({ externalWattFilter }) => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState([]);
  const [wattFilter, setWattFilter] = useState('');
  const [motorFilter, setMotorFilter] = useState('');

  useEffect(() => {
    axios
      .get(`${API_URL}/api/bikes?populate=Images`)
      .then((response) => {
        setBikes(response.data.data);
        setFilteredBikes(response.data.data);
      })
      .catch((error) => {
        console.error('Ошибка при загрузке данных: ', error);
      });
  }, []);

  useEffect(() => {
    let filtered = bikes;
    const effectiveWattFilter =
      externalWattFilter !== undefined && externalWattFilter !== ''
        ? externalWattFilter
        : wattFilter;

    if (effectiveWattFilter) {
      filtered = filtered.filter((bike) => bike.watt === effectiveWattFilter);
    }

    if (motorFilter) {
      filtered = filtered.filter((bike) => bike.motor === motorFilter);
    }

    setFilteredBikes(filtered);
  }, [externalWattFilter, wattFilter, motorFilter, bikes]);

  const handleOpen = (bike) => {
    const imagesArray = Array.isArray(bike.Images)
      ? bike.Images.map((image) => ({
          original: image.url,
          thumbnail: image.formats?.thumbnail?.url || image.url,
        }))
      : [];

    setSelectedImages(imagesArray);
    setSelectedPrice(bike.price);
    setSelectedDescription(
      bike.description ? bike.description.split('\n') : ['No description available']
    );
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <div className="BikeCataLog">
      <div className="FiltrationContainer">
        <div className="BikesName">
          <h1>Bikes</h1>
        </div>

        <div className="FiltrationBox">
          <FormControl sx={{ minWidth: 120, marginRight: 2 }} size="small">
            <InputLabel
              id="watt-filter-label"
              sx={{ color: '#fff', '&.Mui-focused': { color: '#73933F' } }}
            >
              Watt
            </InputLabel>
            <Select
              labelId="watt-filter-label"
              value={wattFilter}
              label="Watt"
              onChange={(e) => setWattFilter(e.target.value)}
              sx={{
                backgroundColor: '#181818',
                color: '#fff',
                '.MuiSelect-icon': { color: '#fff' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#73933F' },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: '#181818',
                    color: '#fff',
                  },
                },
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="250">250W</MenuItem>
              <MenuItem value="500">500W</MenuItem>
              <MenuItem value="750">750W</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel
              id="motor-filter-label"
              sx={{ color: '#fff', '&.Mui-focused': { color: '#73933F' } }}
            >
              Motor
            </InputLabel>
            <Select
              labelId="motor-filter-label"
              value={motorFilter}
              label="Motor"
              onChange={(e) => setMotorFilter(e.target.value)}
              sx={{
                backgroundColor: '#181818',
                color: '#fff',
                '.MuiSelect-icon': { color: '#fff' },
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#444' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#666' },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: '#73933F' },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    bgcolor: '#181818',
                    color: '#fff',
                  },
                },
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="hub">Hub</MenuItem>
              <MenuItem value="mid">Mid-drive</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="grid" style={{ minHeight: '400px' }}>
        {filteredBikes.slice(0, 8).map((bike) => (
          <div key={bike.id} className="bike-item" onClick={() => handleOpen(bike)}>
            <div className="bike-overlay">
              <span>Discover more</span>
            </div>
            <h3 className="bike-name">{bike.name}</h3>
            {Array.isArray(bike.Images) && bike.Images.length > 0 && (
              <img src={bike.Images[0].url} alt={bike.name} className="bike-image" />
            )}
          </div>
        ))}
      </div>

      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box className="modal-box" sx={{ display: 'flex', gap: 2 }}>
            <Box className="carousel-box" sx={{ flex: 1 }}>
              <ImageGallery items={selectedImages} showThumbnails />
            </Box>
            <Box className="info-box" sx={{ flex: 1 }}>
              <Typography variant="h6" component="h2">
                Product Details
              </Typography>
              {selectedPrice && (
                <Typography variant="body1" sx={{ mt: 1 }}>
                  <strong>Price: </strong>${selectedPrice}
                </Typography>
              )}
              {selectedDescription.length > 0 && (
                <ul className="description-list" style={{ marginTop: '10px' }}>
                  {selectedDescription.map((item, index) => (
                    <li key={index} className="description-item">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BikeCatalog;
