import React, { useState } from "react";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    IconButton,
    Divider,
    Container,
    Box,
    Chip,
    Checkbox,
    Link,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Header from "app/entities/Header/Header";
import AddIcon from '@mui/icons-material/Add';
import SouthOutlinedIcon from '@mui/icons-material/SouthOutlined';
import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";
import phone from "../../assets/images/phone.png";
import bank from "../../assets/images/bank.png";
import speed from "../../assets/images/speed.png";
import lock from "../../assets/images/lock.png";
import money from "../../assets/images/money-bill-slash.png";
import delivery from "../../assets/images/delivery.png";
import more from "../../assets/images/more.png";
import white from "../../assets/images/white.png";
import pink from "../../assets/images/pink.png";
import navy from "../../assets/images/navy.png";
import tag from "../../assets/images/tag.png";
import sumsung from "../../assets/images/sumsung.png";
import statefarm from "../../assets/images/statefarm.png";
import arrow from "../../assets/images/arrow.gif";
import circle from "../../assets/images/gif.gif";
import mail from "../../assets/images/mail.png";
import info from "../../assets/images/info.png";
import ProductContent from './productContent'
import './products.css'
import Footer from "../Footer/Footer";

const ProductDetails = () => {
    const imageList = [
        {
            id: 2,
            img: img2,
        },
        {
            id: 3,
            img: img3,
        },
        {
            id: 4,
            img: img4,
        },
        {
            id: 5,
            img: img5,
        },
        {
            id: 1,
            img: img1,
        },
        {
            id: 6,
            img: img4,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedImage, setSelectedImage] = useState(phone);
    const [selectedMemory, setSelectedMemory] = useState('1TB');
    const [selectedColor, setSelectedColor] = useState('Navy');
    const imagesPerPage = 4;
    const totalImages = imageList?.length;
    const memoryOptions = ['512GB', '1TB', '2TB'];
    const mobileColor = [
        {
            name: "Navy",
            img: navy
        },
        {
            name: "Pink",
            img: pink
        },
        {
            name: "White",
            img: white
        },
    ]
    const handleNext = () => {
        if (currentIndex < totalImages - imagesPerPage) {
            setCurrentIndex((prevIndex: any) => prevIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prevIndex: any) => prevIndex - 1);
        }
    };

    const handleThumbnailClick = (img: any) => {
        setSelectedImage(img);
    };

    const handleMemorySelect = (memory: any) => {
        setSelectedMemory(memory);
    };

    const handleColorSelect = (color: any) => {
        setSelectedColor(color);
    };

    return (
        <div style={{ backgroundColor: "#F7F7FA" }}>
            <Header />
            <Container maxWidth="xl" >
                <Grid container sx={{ padding: 4, backgroundColor: "#fff", margin: "45px 0" }}>
                    <Grid item xs={12} sm={6} md={4}
                        style={{
                            position: "sticky",
                            top: "100px",
                            height: "560px"
                        }}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Grid container spacing={1}>
                                    <Grid item>
                                        {currentIndex > 0 && (
                                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", width: "85%" }}>
                                                <IconButton
                                                    onClick={handlePrev}
                                                    sx={{ margin: "10px 0" }}
                                                >
                                                    <img src={more} alt="more" style={{ height: "10px", width: "40px", transform: 'rotate(180deg)' }} />
                                                </IconButton>
                                            </Grid>
                                        )}
                                        <Grid item xs={12}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    overflow: "hidden",
                                                    height: "450px",
                                                    width: "90px",
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        display: "flex",
                                                        flexDirection: "column",
                                                        transform: `translateY(-${currentIndex * 150}px)`,
                                                        transition: "transform 0.5s ease-in-out",
                                                    }}
                                                >
                                                    {imageList?.map((item, index) => (
                                                        <CardMedia
                                                            key={index}
                                                            component="img"
                                                            image={item?.img}
                                                            alt={`Thumbnail ${index + 1}`}
                                                            sx={{
                                                                width: "76px",
                                                                height: "103px",
                                                                borderRadius: 2,
                                                                border:
                                                                    selectedImage === item?.img
                                                                        ? "2px solid #1976d2"
                                                                        : "1px solid #ddd",
                                                                margin: "6px 0",
                                                                cursor: "pointer",
                                                            }}
                                                            onClick={() => handleThumbnailClick(item?.img)}
                                                        />
                                                    ))}
                                                </Box>
                                            </Box>
                                        </Grid>
                                        {currentIndex < totalImages - imagesPerPage && (
                                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center", width: "85%" }}>
                                                <IconButton
                                                    onClick={handleNext}
                                                    sx={{ margin: "10px 0" }}
                                                >
                                                    <img src={more} alt="more" style={{ height: "10px", width: "40px" }} />
                                                </IconButton>
                                            </Grid>
                                        )}
                                    </Grid>

                                </Grid>
                            </Grid>
                            <Grid item xs={8} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                <CardMedia
                                    component="img"
                                    image={selectedImage}
                                    alt="Selected Image"
                                    sx={{ width: "100%", height: "auto", borderRadius: 2 }}
                                />
                            </Grid>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        mr: 2,
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
                                    Add to cart
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        mt: 2,
                                        backgroundColor: '#fff',
                                        padding: "8px 40px",
                                        color: '#000',
                                        border: '1px solid #000',
                                        boxShadow: '2px 2px 0px #000',
                                        '&:hover': {
                                            backgroundColor: '#FFD700',
                                        },
                                    }}
                                >
                                    Buy now
                                </Button>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4.7}>
                        <Box py={3} sx={{ borderRadius: "8px" }}>
                            <Box sx={{ display: "flex", backgroundColor: "#7462AD1F", borderRadius: "100px", alignItems: "center", marginBottom: "10px", width: "290px" }}>
                                <div
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        background: "linear-gradient(to right, #6A0DAD, #2E0854)",
                                        borderRadius: "50%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginRight: "5px"
                                    }}
                                >
                                    <img src={circle} alt="circle" style={{ height: "20px", width: "20px" }} />
                                </div>
                                <Typography sx={{ textTransform: "uppercase", paddingRight: 2, borderRight: "2px solid #7E859B", fontSize: "14.5px" }}>Samsung</Typography>
                                <Typography sx={{ color: "#382968", fontSize: "13px", marginLeft: 1, fontWeight: "700" }}>Visit the Store</Typography>
                                <img src={arrow} alt="arrow" style={{ transform: "rotate(270deg", height: "34px", width: "34px", marginLeft: "24px" }} />
                            </Box>
                            <Typography sx={{ color: "#1E1E1E", fontSize: "22px", fontWeight: "bold", marginBottom: "18px" }}>
                                Galaxy Z Fold 6 Single SIM + eSIM Navy 12GB RAM 1TB 5G
                            </Typography>
                            <Typography sx={{ color: "#757575", fontSize: "14px", fontWeight: "400" }}>
                                Model Number : SM-F956BDBHMEA
                            </Typography>

                            <Box display="flex" alignItems="center" mt={1} mb={3}>
                                <Chip
                                    className="starChip"
                                    icon={<StarIcon sx={{ color: "white !important", fontSize: "18px", paddingLeft: "2px" }} />}
                                    label="4.5"
                                    sx={{
                                        backgroundColor: "#4caf50",
                                        color: "white !important",
                                        fontWeight: "bold",
                                        borderRadius: "4px",
                                        mr: 1,
                                    }}
                                />
                                <Typography sx={{ color: "#757575", fontSize: "14px", fontWeight: "400" }}>
                                    12 ratings and 2 reviews
                                </Typography>
                            </Box>

                            <Box display="flex" alignItems="center">
                                <Typography variant="h4" sx={{ fontWeight: "bold", mr: 1, fontSize: "28px" }}>
                                    ₹4,299
                                </Typography>
                                <Typography
                                    color="#B3B3B3"
                                    sx={{ textDecoration: "line-through", fontSize: "28px", ml: 1 }}
                                >
                                    ₹4,999
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="#009951"
                                    fontWeight="bold"
                                    fontSize={"16px"}
                                    sx={{ ml: 1, fontSize: "28px" }}
                                >
                                    <SouthOutlinedIcon /> 15% Off
                                </Typography>
                            </Box>

                            <Typography sx={{ color: "#1E1E1E", mt: 1, fontSize: "16px" }}>
                                EMI from ₹1,368/month{" "}
                                <span style={{ color: "#3866DF", fontSize: "16px" }}>
                                    View Plans
                                </span>
                            </Typography>

                            <Typography sx={{ color: "#1976d2", my: 2, backgroundColor: "#FCFBF5", display: "flex", justifyContent: "space-between", p: 1.5 }}>
                                <span style={{ display: "flex", alignItems: "center" }}>
                                    <img src={bank} alt="bank" height="20px" width="20px" />
                                    <Typography sx={{ ml: 1, color: "#1E1E1E", fontSize: "16px", fontWeight: "400" }}>
                                        EMI from ₹1,368/month
                                    </Typography>
                                </span>
                                <span style={{ fontSize: "14px", color: "#FFC916", textDecoration: "underline" }}>
                                    View more details
                                </span>
                            </Typography>

                            <Box display="flex" alignItems="center" mb="10px">
                                <img src={delivery} alt="delivery" height="20px" width="20px" />
                                <Typography sx={{ ml: 1, color: "#1E1E1E", fontSize: "16px", fontWeight: "400" }}>
                                    Free Delivery
                                </Typography>
                            </Box>
                            <Typography sx={{ color: "#1E1E1E", fontSize: "14px", fontWeight: "400" }}>
                                Get it on 4 Aug
                            </Typography>
                            <Typography sx={{ color: "#757575", fontSize: "14px", fontWeight: "400" }}>
                                Order in 11h 14m
                            </Typography>

                            <Grid container spacing={1} style={{ boxShadow: "0px 4px 16px 0px #0000000A", alignItems: "center", margin: "20px 0", padding: "10px" }}>
                                <Grid item xs={3.6} textAlign="center" >
                                    <img src={speed} alt="speed" height="20px" width="20px" />
                                    <Typography sx={{ fontSize: "12px" }} display="block">
                                        7 Days Replacement/Repair
                                    </Typography>
                                </Grid>
                                <Divider orientation="vertical" flexItem sx={{ height: 40, mt: 1, mx: 1 }} />
                                <Grid item xs={3.6} textAlign="center" >
                                    <img src={money} alt="money" height="20px" width="20px" />
                                    <Typography sx={{ fontSize: "12px" }} display="block">
                                        No Cash on Delivery
                                    </Typography>
                                </Grid>
                                <Divider orientation="vertical" flexItem sx={{ height: 40, mt: 1, mx: 1 }} />
                                <Grid item xs={3.6} textAlign="center">
                                    <img src={lock} alt="lock" height="20px" width="20px" />
                                    <Typography sx={{ fontSize: "12px" }} display="block">
                                        Assured
                                    </Typography>
                                </Grid>
                            </Grid>

                            <div>
                                <Typography variant="h6" color="#7E859B" sx={{ fontSize: "14px" }}>Internal Memory: <span style={{ fontSize: "14px", color: "#000" }}>{selectedMemory}</span></Typography>
                                <Box display="flex" alignItems="center" mt={1}>
                                    {memoryOptions?.map((memory) => (
                                        <Button
                                            key={memory}
                                            style={{
                                                margin: '3px',
                                                padding: '8px',
                                                fontSize: "14px",
                                                border: '1px solid #ccc',
                                                borderRadius: '5px',
                                                backgroundColor: "#F5F5F5",
                                                color: "#1E1E1E",
                                                fontWeight: selectedMemory === memory ? 'bold' : 'normal',
                                                borderColor: selectedMemory === memory ? '#000' : '#ccc',
                                            }}
                                            onClick={() => handleMemorySelect(memory)}
                                        >
                                            {memory}
                                        </Button>
                                    ))}
                                </Box>

                                <Typography variant="h6" color="#7E859B" sx={{ fontSize: "14px" }} mt={2} >  Colour Name: <span style={{ fontSize: "14px", color: "#000" }}>{selectedColor}</span></Typography>

                                <Grid container spacing={2} mt={1}>
                                    {mobileColor.map((color) => (
                                        <Grid item key={color?.name}>
                                            <div
                                                style={{
                                                    border: '1px solid #ccc',
                                                    borderRadius: '5px',
                                                    padding: '5px',
                                                    cursor: 'pointer',
                                                    borderColor: selectedColor === color?.name ? '#000' : '#ccc'
                                                }}
                                                onClick={() => handleColorSelect(color?.name)}
                                            >
                                                <img src={color?.img} alt={color?.img} height="80px" width="60px" />
                                            </div>
                                        </Grid>
                                    ))}
                                </Grid>

                                <div style={{ padding: '20px', backgroundColor: '#F5F5F5', marginTop: '20px' }}>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "16px", fontWeight: "400" }}>Frequently Bought Together</Typography>
                                    <Grid container spacing={2} mt={2} sx={{ margin: "5px 0" }}>
                                        <Grid item xs={5} sx={{ backgroundColor: "#fff", padding: "3px" }}>
                                            <span style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                                                <Checkbox
                                                    checked
                                                // onChange={() => handleCheckChange()}
                                                />
                                                <img src={navy} alt={"Samsung Galaxy Z Fold 6 Single SIM"} height="90px" width="100px" />
                                            </span>
                                            <span style={{ textAlign: "center" }}>
                                                <Typography variant="body1">₹84,299</Typography>
                                                <Typography variant="body2">Samsung Galaxy Z Fold 6 Single SIM</Typography>
                                            </span>

                                        </Grid>
                                        <Grid item xs={1.5} sx={{ backgroundColor: "#fff", display: "flex", alignItems: "center", padding: 0 }} >
                                            <AddIcon />
                                        </Grid>
                                        <Grid item xs={5} sx={{ backgroundColor: "#fff", padding: "3px" }}>

                                            <span style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }}>
                                                <Checkbox
                                                    checked
                                                // onChange={() => handleCheckChange()}
                                                />
                                                <img src={phone} alt={"Samsung Galaxy Z Fold 6 case"} height="100px" width="100px" />
                                            </span>
                                            <span style={{ textAlign: "center" }}>
                                                <Typography variant="body1">₹4,299</Typography>
                                                <Typography variant="body2">Samsung Galaxy Z Fold 6 case</Typography>
                                            </span>
                                        </Grid>

                                    </Grid>
                                    <Button
                                        fullWidth
                                        sx={{
                                            mt: 2,
                                            fontSize: "14px",
                                            backgroundColor: '#fff',
                                            padding: "8px 40px",
                                            color: '#000',
                                            border: '1px solid #000',
                                            boxShadow: '2px 2px 0px #000',
                                        }}
                                    >
                                        buy 2 together for ₹86,299
                                    </Button>
                                </div>
                            </div>
                            <div style={{ padding: '20px', backgroundColor: '#F5F5F5', marginTop: '20px' }}>
                                <div>
                                    <Typography sx={{ color: "#1E1E1E", fontSize: "16px", fontWeight: "400" }}>Protect Your Product</Typography>
                                    <Typography sx={{ fontSize: "14px", fontWeight: "400", color: "#757575" }}>Get Coverage against accidental damage, water damage and many more</Typography>
                                </div>
                                <Card style={{ margin: "15px 0" }}>
                                    <CardContent>
                                        <Grid container >
                                            <Grid item xs={12} sm={4}>
                                                <img
                                                    src={statefarm}
                                                    alt="StateFarm"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={8}>
                                                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Typography variant="h6" gutterBottom style={{ fontSize: "16px", fontWeight: "400" }}>
                                                        Complete Mobile Protection
                                                    </Typography>
                                                    <Button style={{ backgroundColor: "#F8E000", padding: "5px  8px ", color: "#000", fontSize: "12px", textTransform: "capitalize", marginLeft: "4px" }}>
                                                        Add Plan
                                                    </Button>
                                                </span>
                                                <Typography variant="body2" color="#757575" sx={{ fontSize: "12px", margin: "5px,0" }}>
                                                    Get brand authorised repairs for all phone damages with free pickup and drop. If we can't repair it, we will replace it!
                                                </Typography>
                                                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                                                    <Typography variant="body1" color="#1E1E1E" style={{ fontSize: "16px" }}>
                                                        ₹599
                                                    </Typography>
                                                    <Typography variant="h6" color="#B3B3B3" style={{ fontSize: "16px", padding: "0 5px" }}>₹400</Typography>
                                                    <Typography variant="body2" color="#009951" style={{ fontSize: "16px" }}>
                                                        15% Off
                                                    </Typography>
                                                </div>
                                            </Grid>
                                        </Grid>


                                    </CardContent>
                                </Card>
                                <Card style={{ margin: "15px 0" }}>
                                    <CardContent>
                                        <Grid container >
                                            <Grid item xs={12} sm={4}>
                                                <img
                                                    src={statefarm}
                                                    alt="StateFarm"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={8}>
                                                <span style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                                    <Typography variant="h6" gutterBottom style={{ fontSize: "16px", fontWeight: "400" }}>
                                                        Complete Mobile Protection
                                                    </Typography>
                                                    <Button style={{ backgroundColor: "#F8E000", padding: "5px  8px ", color: "#000", fontSize: "12px", textTransform: "capitalize", marginLeft: "4px" }}>
                                                        Add Plan
                                                    </Button>
                                                </span>
                                                <Typography variant="body2" color="#757575" sx={{ fontSize: "12px", margin: "5px,0" }}>
                                                    Get brand authorised repairs for all phone damages with free pickup and drop. If we can't repair it, we will replace it!
                                                </Typography>
                                                <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
                                                    <Typography variant="body1" color="#1E1E1E" style={{ fontSize: "16px" }}>
                                                        ₹599
                                                    </Typography>
                                                    <Typography variant="h6" color="#B3B3B3" style={{ fontSize: "16px", padding: "0 5px" }}>₹400</Typography>
                                                    <Typography variant="body2" color="#009951" style={{ fontSize: "16px" }}>
                                                        15% Off
                                                    </Typography>
                                                </div>
                                            </Grid>
                                        </Grid>


                                    </CardContent>
                                </Card>
                            </div>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} md={3.3}>                       
                        <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', borderRadius: '8px' }}>
                            {/* Warranty Section */}
                            <Box display="flex" alignItems="center" mb={2}>
                                <Box display="flex" alignItems="center">
                                    <img src={tag} alt="tag" height="25px" width="25px" />
                                    <Typography variant="body2" style={{ marginLeft: '4px' }}>1 year warranty</Typography>
                                </Box>
                                <Link href="#" underline="hover" variant="body2" style={{ color: '#007bff', paddingLeft: "5px" }}>
                                    Learn more
                                </Link>
                            </Box>

                            {/* Samsung Brand Banner */}
                            <Card style={{ marginBottom: '16px', }}>
                                <CardContent style={{ padding: '6px' }}>
                                    <Grid container style={{ backgroundColor: '#fff' }}>

                                        <Grid item xs={3.5}> <img src={sumsung} alt="sumsung" height="40px" width="80px" /> </Grid>
                                        <Grid item xs={8.5}>
                                            <Typography variant="h6" style={{ fontWeight: 'bold', fontSize: "11px" }}>New Model Launch & Damage Proof</Typography>
                                            <Link href="#" variant="body2" style={{ color: '#007bff' }}>
                                                Shop samsung
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>

                            {/* Product Card */}
                            <Card >
                                <Box sx={{ backgroundColor: "#00000005", display: "flex", justifyContent: "center", alignItems: "center", padding: "15px" }}>
                                    <img src={img1} alt="sumsung" height="130px" width="220px" />
                                </Box>
                                <div style={{ padding: ' 10px' }}>
                                    <Typography variant="body1" color="#404553" style={{ fontWeight: 'bold', fontSize: "11px" }}>
                                        Galaxy Z Fold 6 Back Cover
                                    </Typography>
                                    <Typography style={{ fontSize: "16px" }} color="#1E1E1E">
                                        ₹4,500
                                    </Typography>
                                </div>

                            </Card>

                            {/* Sponsored Text */}
                            <Box textAlign="right" mt={1}>
                                <Typography variant="caption" color="textSecondary">
                                    Sponsored
                                </Typography>
                            </Box>
                        </div>
                    </Grid>
                </Grid>
                <Box>
                    <ProductContent />
                </Box>
            </Container >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "40px" }}>
                <div>
                    <Typography sx={{ color: "#313131", fontSize: "14px", fontWeight: "600" }}>
                        We’re Always Here To Help
                    </Typography>
                    <Typography sx={{ color: "#5C5C5C", fontSize: "12px", fontWeight: "400" }}>
                        Reach out to us through any of these support channels
                    </Typography>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                            <img src={info} height={"30px"} width={"30px"} alt="info" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <Typography sx={{ color: "#7E7E7E", fontSize: "12px", fontWeight: "400" }}>
                                Customer Happiness center
                            </Typography>
                            <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: "600" }}>
                                help.buddiedeals.com
                            </Typography>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "20px" }}>
                        <div>
                            <img src={mail} height={"30px"} width={"30px"} alt="mail" />
                        </div>
                        <div style={{ marginLeft: "10px" }}>
                            <Typography sx={{ color: "#7E7E7E", fontSize: "12px", fontWeight: "400" }}>
                                Email support
                            </Typography>
                            <Typography sx={{ color: "#000000", fontSize: "14px", fontWeight: "600" }}>
                                care@buddiedeals.com
                            </Typography>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >
    );
};

export default ProductDetails;
