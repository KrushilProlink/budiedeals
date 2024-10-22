

import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  Grid,
  Card,
  Chip,
  CardContent,
  CardMedia,
  Typography,
  Slider,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
  Paper,
  InputBase,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import SearchIcon from '@mui/icons-material/Search';
import Header from 'app/entities/Header/Header';
import birds from '../../assets/images/birds.png'
import phone from '../../assets/images/phone.png'
import delivery from '../../assets/images/delivery.png'
import './products.css'
import Footer from '../Footer/Footer';

const Products = () => {
  const MIN = 2;
  const MAX = 5;
  const navigate = useNavigate();
  const productsFound = 12235;
  const [likes, setLikes] = useState<number[]>([])
  const [priceRange, setPriceRange] = useState([0, 38000]);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [rating, setRating] = useState<number>(MIN);

  const categories = [
    "Electronics & Mobiles",
    "Books",
    "Home & Kitchen",
    "Beauty & Fragrance",
    "Fashion",
    "Health & Nutrition",
    "Toys & Games",
    "Automotive",
  ];

  const brands = ['Apple', 'Samsung', 'OnePlus', 'Realme', 'OPPO', 'vivo', 'Nothing', 'Tecno', 'Motorola'];
  const sales = ['Back to School Deal', 'Deal', 'Mega Deal', 'Flash Sale'];
  const arrivals = ['Last 7 Days', 'Last 30 Days', 'Last 60 Days'];
  const network = ['5G', '4G', '5G+4G'];
  const processor = ['Dimmensity', 'MideaTek', 'Exynos', 'Bionic', "SnapDragon", 'All'];
  const mobileInternalStorage = ['64 GB', '128 GB', '256 GB', '512 GB', "1TB & More"];
  const ramType = ['4 GB', '6 GB', '8GB', '12 GB', "Expandable & More"];
  const batteryType = ['2600 mAh & Above', '4000 mAh & Above', '5000 mAh & Above', '6000 mAh & Above'];
  const colors = Array(7).fill({ name: 'MULTICOLOR', count: 5458 });

  const productList = [
    {
      id: 1,
      name: "AirPods Pro",
      price: 4299,
      originalPrice: 5000,
      discount: 14,
      imageUrl: phone,
      deliveryDate: "4 Aug",
      like: true,
      status: "trending",
      color: ['#1E1E1E', '#C00F0C', '#FF7A00', '#4962F2']
    },
    {
      id: 2,
      name: "IPhone 15 Pro",
      price: 4999,
      originalPrice: 5000,
      discount: 0,
      imageUrl: birds,
      deliveryDate: "4 Aug",
      like: false,
      status: "bestSeller",
      color: ['#1E1E1E', '#C00F0C', '#FF7A00', '#4962F2']
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 4299,
      originalPrice: 5000,
      discount: 14,
      imageUrl: phone,
      deliveryDate: "4 Aug",
      like: false,
      status: "",
      color: ['#1E1E1E', '#C00F0C', '#FF7A00', '#4962F2']
    },
    {
      id: 4,
      name: "IPhone 15 Pro",
      price: 4299,
      originalPrice: 5000,
      discount: 14,
      imageUrl: birds,
      deliveryDate: "4 Aug",
      like: true,
      status: "trending",
      color: ['#1E1E1E', '#C00F0C', '#FF7A00', '#4962F2']
    },
    {
      id: 5,
      name: "AirPods Pro",
      price: 4999,
      originalPrice: 5000,
      discount: 0,
      imageUrl: phone,
      deliveryDate: "4 Aug",
      like: true,
      status: "",
      color: ['#1E1E1E', '#C00F0C', '#FF7A00', '#4962F2']
    },
    {
      id: 6,
      name: "IPhone 15 Pro",
      price: 4299,
      originalPrice: 5000,
      discount: 14,
      imageUrl: birds,
      deliveryDate: "4 Aug",
      like: true,
      status: "bestSeller",
      color: ['#1E1E1E', '#C00F0C', '#FF7A00', '#4962F2']
    },
  ];

  const handleSliderChange = (event: any, newValue: any) => {
    setPriceRange(newValue);
  };

  const handleRatingSliderChange = (_: Event, newValue: any) => {
    setRating(newValue);
  };

  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (e: any) => {
    setCheckedItems({ ...checkedItems, [e.target.name]: e.target.checked });
  };

  const handleToggle = (category: any) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  }

  return (
    <Grid>
      <Header />
      <Box sx={{ display: 'flex', backgroundColor: "#F7F7FA" }}>

        <Box sx={{ width: '20%', padding: 2, backgroundColor: "#fff" }}>
          <div className="filter-container">
            <Typography variant="h6" className="filter-header">Filters</Typography>          
            <Typography sx={{ padding: "10px 0 10px  16px", fontSize: "15px", fontWeight: "400" }}>PICK A CATEGORY</Typography>           
            <AccordionDetails className="category-group">
              {categories?.map((category, index) => (
                <div
                  key={index}
                  className="category-item"
                  onClick={() => handleToggle(category)}
                >
                  <Typography >
                    <span style={{
                      marginRight: "10px",

                      fontWeight: "500",
                      cursor: "pointer",
                      color: "#00000099",
                      border: "1px solid #000",
                    }} >{expandedCategory === category
                      ?
                      <span  ><RemoveIcon style={{ width: "13px", height: "13px" }} /></span>
                      : <span  ><AddIcon style={{ width: "13px", height: "13px" }} /></span>
                      }
                    </span>
                    <span style={{ fontSize: "18px" }}>{category}</span>
                  </Typography>
                  {expandedCategory === category && (
                    <div className="category-content">
                      <Typography >Sample content for {category}</Typography>
                    </div>
                  )}
                </div>
              ))}
            </AccordionDetails>
            {/* Brands */}
            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Brands</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Paper
                  component="form"
                  sx={{
                    display: 'flex', alignItems: 'center', width: 300, mb: 3, border: "1px solid #000",
                    borderBottom: "3px solid #000", borderRight: "3px solid #000", borderRadius: "6px"
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search...' }}
                  />
                  <IconButton type="button" sx={{
                    p: '6px 12px', backgroundColor: "#000000", borderRadius: "6px", color: "#fff", margin: "2px", '&:hover': {
                      backgroundColor: '#000000', color: "#fff"
                    },
                  }} aria-label="search">
                    <SearchIcon />
                  </IconButton>

                </Paper>
                <div className="checkbox-group">
                  {brands?.map((item) => (
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "18px", fontWeight: "500" }}>
                        <Checkbox name={item} onChange={handleCheckboxChange} style={{ padding: "5px" }} />
                        {item}
                      </span>
                      <span>(5458)</span>
                    </span>
                  ))
                  }

                </div>
              </AccordionDetails>
            </Accordion>

            <Accordion defaultExpanded>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Price</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Selected price range
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 1, fontSize: "14px", fontWeight: "700" }}>
                  ₹{priceRange?.[0]} - ₹{priceRange?.[1]}+
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {productsFound} products found
                </Typography>


                <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center', alignItems: 'flex-end', width: "100%" }}>
                  <Box sx={{ border: "1px solid #000000", backgroundColor: '#FFEB00', width: '18%', borderTopLeftRadius: "2px", borderTopRightRadius: "2px", height: '90px' }} />
                  <Box sx={{ border: "1px solid #000000", backgroundColor: '#FFEB00', width: '18%', borderTopLeftRadius: "2px", borderTopRightRadius: "2px", height: '70px' }} />
                  <Box sx={{ border: "1px solid #000000", backgroundColor: '#FFEB00', width: '18%', borderTopLeftRadius: "2px", borderTopRightRadius: "2px", height: '50px' }} />
                </Box>

                {/* Slider */}
                <Slider
                  value={priceRange}
                  onChange={handleSliderChange}
                  min={0}
                  max={38000}
                  valueLabelDisplay="auto"
                  sx={{
                    mt: 2,
                    color: '#FFEB00',
                    '& .MuiSlider-thumb': {
                      backgroundColor: '#000',
                    },
                    '& .MuiSlider-rail': {
                      backgroundColor: '#000',
                    },
                  }}
                />

                {/* Go Button */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button
                    variant="contained"
                    sx={{
                      mt: 2,
                      backgroundColor: '#FFEB00',
                      padding: "8px 40px",
                      color: '#000',
                      border: '1px solid #000',
                      boxShadow: '2px 2px 0px #000',
                      '&:hover': {
                        backgroundColor: '#FFD700',
                      },
                    }}
                  >
                    GO
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Selected Price Range */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Sale</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="checkbox-group">
                  {sales?.map((item) => (
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "18px", fontWeight: "500" }}>
                        <Checkbox name={item} onChange={handleCheckboxChange} style={{ padding: "5px" }} />
                        {item}
                      </span>
                      <span>(5458)</span>
                    </span>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>

            {/* rating */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Ratings</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box sx={{ width: 250 }}>
                  <Slider
                    step={1}
                    value={rating}
                    valueLabelDisplay="auto"
                    min={MIN}
                    max={MAX}
                    onChange={handleRatingSliderChange}
                    sx={{
                      color: '#FFEB00',
                      '& .MuiSlider-thumb': {
                        backgroundColor: '#000',
                        border: '2px solid #FFEB00',
                      },
                      '& .MuiSlider-rail': {
                        backgroundColor: '#000',
                      },
                    }}
                  />

                  {/* Star Rating Labels */}
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                      variant="body2"
                      onClick={() => setRating(MIN)}
                      sx={{ cursor: 'pointer' }}
                    >
                      {MIN} Stars
                    </Typography>
                    <Typography
                      variant="body2"
                      onClick={() => setRating(MAX)}
                      sx={{ cursor: 'pointer' }}
                    >
                      {MAX} Stars
                    </Typography>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* arrivals */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>New Arrivals</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="checkbox-group">
                  {arrivals?.map((item) => (
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "18px", fontWeight: "500" }}>
                        <Checkbox name={item} onChange={handleCheckboxChange} style={{ padding: "5px" }} />
                        {item}
                      </span>
                      <span>(5458)</span>
                    </span>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Headphone */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Audio Headphone Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="checkbox-group">
                  <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontSize: "18px", fontWeight: "500" }}>
                      <Checkbox name="In-Ear" onChange={handleCheckboxChange} style={{ padding: "5px" }} />
                      In-Ear
                    </span>
                    <span>(5458)</span>
                  </span>
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Color */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Colour</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid container spacing={2}>
                  {colors.map((item: any, index: any) => (
                    <Grid item key={index} xs={6}>
                      <Box
                        sx={{
                          width: 140,
                          border: '1px solid #ccc',
                          borderRadius: 1,
                          boxShadow: 1,
                          textAlign: 'center',
                          display: "flex",
                          padding: "4px",
                          alignItems: "center"
                        }}
                      >
                        <Box
                          sx={{
                            height: 33,
                            width: 33,
                            background: 'linear-gradient(to right, red, orange, yellow, green, blue, violet)',
                            borderRadius: '4px 4px 0 0',
                          }}
                        />
                        <span style={{ textAlign: 'left', marginLeft: 5 }}>
                          <Typography sx={{ fontSize: "13px", fontWeight: "500" }}>
                            {item.name}
                          </Typography>
                          <Typography sx={{ fontSize: "12px", fontWeight: "400", color: "#00000099" }}>({item.count})</Typography>
                        </span>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </AccordionDetails>
            </Accordion>

            {/* Network */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Network Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="checkbox-group">
                  {network?.map((item) => (
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "18px", fontWeight: "500" }}>
                        <Checkbox name={item} onChange={handleCheckboxChange} style={{ padding: "5px" }} />
                        {item}
                      </span>
                      <span>(5458)</span>
                    </span>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Processor Type */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Processor Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="checkbox-group">
                  {processor?.map((item) => (
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "18px", fontWeight: "500" }}>
                        <Checkbox name={item} onChange={handleCheckboxChange} style={{ padding: "5px" }} />
                        {item}
                      </span>
                      <span>(5458)</span>
                    </span>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Mobile Internal Storage */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Mobile Internal Storage</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="checkbox-group">
                  {mobileInternalStorage?.map((item) => (
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "18px", fontWeight: "500" }}>
                        <Checkbox name={item} onChange={handleCheckboxChange} style={{ padding: "5px" }} />
                        {item}
                      </span>
                      <span>(5458)</span>
                    </span>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Ram Type */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Ram Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="checkbox-group">
                  {ramType?.map((item) => (
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "18px", fontWeight: "500" }}>
                        <Checkbox name={item} onChange={handleCheckboxChange} style={{ padding: "5px" }} />
                        {item}
                      </span>
                      <span>(5458)</span>
                    </span>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>

            {/* Battery Type */}
            <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ fontSize: "22px", fontWeight: "bold" }}>Battery Type</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className="checkbox-group">
                  {batteryType?.map((item) => (
                    <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "18px", fontWeight: "500" }}>
                        <Checkbox name={item} onChange={handleCheckboxChange} style={{ padding: "5px" }} />
                        {item}
                      </span>
                      <span>(5458)</span>
                    </span>
                  ))}
                </div>
              </AccordionDetails>
            </Accordion>

          </div>
        </Box>
        {/* Product Grid */}
        <Box sx={{ flexGrow: 1, padding: 4, border: "1px solid #D9D9D9", backgroundColor: "#fff", margin: 3 }}>
          <Box sx={{ mb: 3 }}>
            <Typography variant='h6' sx={{ fontSize: "24px", fontWeight: "500" }}>Showing 1 - 40 of 76,711 results for “nothing”</Typography>
            <Box sx={{ display: "flex", margin: "15px 0" }}>
              <Box className="filter-chip">
                Sort by <ExpandMoreIcon />
              </Box>
              <Box className="filter-chip" >
                <FilterAltOutlinedIcon /> Filter
              </Box>
              <Box className="filter-chip">
                Brand <ExpandMoreIcon />
              </Box>
              <Box className="filter-chip">
                Discount <ExpandMoreIcon />
              </Box>
              <Box className="filter-chip" >
                Reviewed <ExpandMoreIcon />
              </Box>
            </Box>
          </Box>
          <Grid container spacing={2}>
            {productList?.map((product: any, index: any) => (
              <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                <Card sx={{ position: 'relative', padding: 1, borderRadius: "8px", boxShadow: 3, border: "0.5px solid #D9D9D9", cursor: "pointer" }}
                  onClick={() => navigate(`/productDetails/${product?.id}`)}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      width="240"
                      image={product?.imageUrl}
                      alt={product?.name}
                      sx={{ borderRadius: 2 }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 2,
                        left: 2,
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        paddingRight: "10px",
                      }}
                    >
                      {product?.status && (
                        <Chip
                          label={product?.status}
                          size="small"
                          sx={{
                            fontWeight: 'bold',
                            padding: "18px 16px",
                            backgroundColor: "#14AE5C",
                            color: "#fff",
                            borderRadius: "100px",
                            textTransform: "capitalize",
                          }}
                        />
                      )}
                    </Box>
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 2,
                        right: 2,
                      }}
                      onClick={() => {
                        if (likes.includes(index)) {
                          setLikes(likes.filter(like => like !== index));
                        } else {
                          setLikes([...likes, index]);
                        }
                      }}
                    >
                      {likes.includes(index) ? (
                        <FavoriteIcon style={{ color: "#ff0000" }} />
                      ) : (
                        <FavoriteBorderIcon />
                      )}
                    </Box>

                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "#FFEB00",
                          padding: "12px",
                          borderRadius: "6px",
                          textAlign: "center",
                          boxShadow: 'rgb(255 255 255) 0px 1px 4px'
                        }}
                      >
                        <AddIcon />
                      </Box>
                    </Box>
                  </Box>
                  <CardContent style={{ paddingBottom: "10px " }}>
                    <Typography variant="body1" fontWeight="bold" color="#1E1E1E" fontSize={"18px"}>
                      {product?.name}
                    </Typography>
                    <Typography fontWeight="400" color="#757575" gutterBottom fontSize={"16px"}>
                      256gb storage
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="h6" color="#1E1E1E" fontWeight="bold" fontSize={"18px"}>
                        ₹{product?.price}
                      </Typography>

                      {product?.discount > 0 && (
                        <Typography fontWeight="400" color="#B3B3B3" sx={{ textDecoration: 'line-through' }} fontSize={"16px"}>
                          ₹{product?.originalPrice}
                        </Typography>
                      )}
                      {product?.discount > 0 && (
                        <Typography variant="body2" color="#009951" fontWeight="400" fontSize={"16px"}>
                          {product?.discount}% Off
                        </Typography>
                      )}
                    </Box>
                    <Typography variant="body2" color="#009951" sx={{ marginTop: 1 }} fontWeight="400" fontSize={"16px"}>
                      Save extra with UPI offers
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      {product?.color?.map((item: any) => (
                        <Box sx={{ height: "20px", width: "20px", borderRadius: "50%", backgroundColor: item, margin: "10px 6px", border: "1px solid #D9D9D9" }}></Box>
                      ))}
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                      <Box>
                        <Typography color="#1E1E1E" sx={{ fontWeight: "bold", display: "flex", alignItems: "flex-start", fontSize: "14px" }}>
                          <img src={delivery} alt="Free Delivery" height={20} width={20} style={{ marginRight: "5px" }} /> Free Delivery - {product?.deliveryDate}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      <Footer />
    </Grid >
  );
};

export default Products;
