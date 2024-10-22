import React, { useState } from 'react'
import {
    Box,
    Grid,
    Card,
    Chip,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Slider from "react-slick";
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { IconButton } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import delivery from '../../assets/images/delivery.png'
import phone from '../../assets/images/phone.png'
import birds from '../../assets/images/birds.png'

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <IconButton
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                position: "absolute",
                top: " 235px",
                right: "9px",
                backgroundColor: "#E6E6E6",
                borderRadius: "0",
                height: "115px",
                color: "#000",
                width: "56px",
                borderTopLeftRadius: "5px",
                borderBottomLefttRadius: "5px"

            }}
            onClick={onClick}
        >
            <ArrowForwardIosIcon />
        </IconButton >
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <IconButton
            className={className}
            style={{
                ...style,
                display: "flex",
                alignItems: "center",
                justifyContent: "right",
                left: "9px",
                zIndex: 1,
                position: "absolute",
                backgroundColor: "#E6E6E6",
                borderRadius: "0",
                height: "115px",
                width: "56px",
                color: "#000",
                top: "235px",
                borderTopRightRadius: "5px",
                borderBottomRighttRadius: "5px"
            }}
            onClick={onClick}
        >
            <ArrowBackIosIcon />
        </IconButton>
    );
}

const ProductSlider = () => {
    const navigate = useNavigate();

    const [likes, setLikes] = useState<number[]>([])
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
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

    return (
        <div>
            <Slider {...settings}>
                {productList?.map((product: any, index: any) => (
                    <Grid item xs={12} sm={6} md={4} lg={2.4} key={index}>
                        <Card sx={{ position: 'relative', padding: 1, borderRadius: "8px", boxShadow: 2, border: "0.5px solid #D9D9D9", cursor: "pointer", margin: "20px 10px 20px 10px" }}
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
                                            padding: "11.5px",
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
            </Slider>
        </div>
    )
}

export default ProductSlider
