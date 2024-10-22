import React, { useState } from 'react'
import { Grid, Typography, Table, TableBody, TableCell, TableRow, Box, Divider, Avatar, Button, Card, Rating, Link, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import VerifiedIcon from "@mui/icons-material/Verified";
import { styled } from '@mui/material/styles';
import ProductSlider from './productSlider';
import mobile from '../../assets/images/img22.png'
import ankerlogo from '../../assets/images/LogoAnker.png'
import adapter from '../../assets/images/adapter.png'
import cabal from '../../assets/images/cabal.png'
import './products.css'


const ProductContent = () => {
    const [showFullOverview, setShowFullOverview] = useState(false);
    const [visibleReviews, setVisibleReviews] = useState(1)

    const phoneDetails = {
        highlights: [
            "Galaxy AI: Put PC-like power in your pocket, Galaxy Z Fold5. Now super-charged with Galaxy AI on foldables.",
            "Design: Thinner and lighter - with a pocket-worthy silhouette, and an even brighter, awe-inspiring fold-out screen.",
            "Durability: Durable, reliable and built to last. Meet our slim and innovative foldable.",
            "Gaming Performance: Powerful gaming with the fastest processor on a Samsung foldable. Enjoy silky-smooth gaming at high speeds.",
            "Battery: Our battery ensures all-day enjoyment. It's not just a massive battery, but also leverages an efficient display.",
            "Camera: Meet Fold5's most powerful camera system yet, topped with an upgraded NPU, mind-blowing specs and ProVision Engine.",
            "Super HDR: It lights things up. Super HDR puts the right emphasis on details to pop and impress, even before you take the picture.",
            "Large Screen: Fold open a mobile gaming beast with a massive screen made better with the vision booster’s powerful brightness."
        ],
        specifications: [
            { key: 'Expandable Memory Type', value: 'No Expandable Memory' },
            { key: 'Secondary Camera Resolution', value: '12 + 50 MP' },
            { key: 'Charging Type', value: 'Type-C' },
            { key: 'SIM Count', value: 'Dual SIM' },
            { key: 'RAM Size', value: '12 GB' },
            { key: 'Battery Size', value: '4400 mAh' },
            { key: 'Internal Memory', value: '1 TB' },
            { key: 'Version', value: 'Middle East Version' },
            { key: 'Screen Size', value: '7.6 in' },
            { key: 'SIM Type', value: 'Nano SIM' },
            { key: 'Display Resolution', value: '1812x2176' }
        ],
        overviewText: `SAMSUNG Galaxy Z Fold5, AI-Powered, 12GB RAM, 1TB Storage, 50MP Camera, Android Smartphone with 
        incredible durability and Super HDR display. Featuring the fastest processor on a Samsung foldable, it's a powerhouse 
        for gaming, multimedia, and day-to-day use.
        SAMSUNG Galaxy Z Fold5, AI-Powered, 12GB RAM, 1TB Storage, 50MP Camera, Android Smartphone with 
        incredible durability and Super HDR display. Featuring the fastest processor on a Samsung foldable, it's a powerhouse 
        for gaming, multimedia, and day-to-day use.
        SAMSUNG Galaxy Z Fold5, AI-Powered, 12GB RAM, 1TB Storage, 50MP Camera, Android Smartphone with 
        incredible durability and Super HDR display. Featuring the fastest processor on a Samsung foldable, it's a powerhouse 
        for gaming, multimedia, and day-to-day use.`


    };
    const reviews = [
        { name: "Megha", location: "Pune", review: "Upgraded from Pixel 4A to Pixel 9. Fantastic upgrade, improved camera, solid built quality, no heating issue, amazing photo editing software and much longer battery life than my previous one.", rating: 4.5, timeAgo: "8 months ago", helpful: 1 },
        { name: "Amit", location: "Mumbai", review: "Pixel 9 is amazing, the battery life and screen are superb!", rating: 4.0, timeAgo: "5 months ago", helpful: 2 },
        { name: "Sara", location: "Delhi", review: "Camera is great, but I had some software glitches.", rating: 3.5, timeAgo: "1 month ago", helpful: 0 },
        { name: "John", location: "Bangalore", review: "Best phone I've used, worth the price.", rating: 5.0, timeAgo: "2 weeks ago", helpful: 5 },
        // More reviews can be added here
    ];
    const StyledTableRow = styled(TableRow)(({ theme }: any) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    const showMoreReviews = () => {
        setVisibleReviews(prev => prev + 2); // Show 2 more reviews
    };
    const toggleOverview = () => {
        setShowFullOverview((prev) => !prev);
    };

    return (
        <Box>

            <div style={{ backgroundColor: "#fff", margin: "10px 0", padding: "20px", paddingBottom: "10px", boxShadow: showFullOverview ? "none" : "rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset" }}>
                <Grid container
                    spacing={4}
                    style={{
                        height: showFullOverview ? "100%" : "635px",
                        overflow: showFullOverview ? "auto" : "hidden",
                        transition: "height 0.5s ease",

                    }}>
                    < Grid item xs={12} md={12} sx={{ borderBottom: "1px solid #DADCE3" }}>
                        <Typography sx={{ fontSize: "24px" }} >
                            Overview
                        </Typography>
                    </Grid>

                    {/* Highlights Section */}
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontSize: "15px", color: "#404553" }} >
                            Highlights
                        </Typography>
                        <div>
                            <ul>
                                {phoneDetails.highlights.map((highlight, index) => (
                                    <li key={index} style={{ marginBottom: '10px' }}>
                                        <Typography sx={{ fontSize: "14px", color: "#7E859B" }} >
                                            {highlight}</Typography>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                            <Typography sx={{ fontSize: "15px", color: "#404553" }} >
                                Overview</Typography>
                            <Typography sx={{ fontSize: "14px", color: "#7E859B", marginTop: "10px" }} >
                                {phoneDetails.overviewText}
                            </Typography>
                        </div>
                    </Grid>

                    {/* Specifications Section */}
                    <Grid item xs={12} md={6}>
                        <Typography sx={{ fontSize: "15px", color: "#404553" }} >

                            Specifications
                        </Typography>
                        <div>
                            <Table>
                                <TableBody>
                                    {phoneDetails.specifications.map((spec, index) => (
                                        <StyledTableRow key={index} >
                                            <TableCell style={{ fontWeight: 'bold' }}>{spec.key}</TableCell>
                                            <TableCell>{spec.value}</TableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </Grid>

                    {/* View Full Overview Button */}
                </Grid >
                <Grid item xs={12} textAlign={"center"} sx={{ margin: "10px 0" }}>
                    <Link onClick={toggleOverview} style={{ color: "#404553", fontSize: "14px" }}>
                        {showFullOverview ? "Hide Overview" : "View Full Overview"}
                    </Link>
                </Grid>
            </div>

            <Box sx={{ padding: 3, backgroundColor: "#fff", margin: "30px 0" }}>
                {/* Rating Section */}
                <Grid container spacing={2}>
                    {/* Overall Rating */}
                    <Grid item xs={12} md={12} sx={{ borderBottom: "1px solid #DADCE3", padding: "10px 0", }}>
                        <Typography sx={{ fontSize: "24px" }} fontWeight="bold">Product Ratings & Reviews</Typography>
                    </Grid>
                    <Grid item xs={12} md={3} sx={{ borderRight: "1px solid #DADCE3", paddingBottom: "10px" }}>
                        <Typography sx={{ fontSize: "15px", color: "#404553", marginBottom: "10px" }} >
                            Overall Rating
                        </Typography>
                        <Typography sx={{ fontSize: "32px", color: "#404553" }} fontWeight="bold">5.0</Typography>
                        <span style={{ margin: "5px 0" }}>
                            <Rating
                                name="text-feedback"
                                // value={5}
                                readOnly
                                precision={1}
                                emptyIcon={<StarIcon style={{ opacity: 0.55, fontSize: "15px", padding: "0 5px" }} fontSize="inherit" />}
                            />
                        </span>
                        <Typography sx={{ fontSize: "#7E859B", color: "#7E859B" }}>Based on 1 rating</Typography>

                        {[5, 4, 3, 2, 1].map((rating) => (
                            <Grid container key={rating} alignItems="center">
                                <Grid item xs={2}>
                                    <Typography>{rating} ★</Typography>
                                </Grid>
                                <Grid item xs={8}>
                                    <Box sx={{ height: 6, backgroundColor: "#eee", borderRadius: 3 }}>
                                        {rating === 5 && (
                                            <Box
                                                sx={{
                                                    width: "100%",
                                                    height: "100%",
                                                    backgroundColor: "green",
                                                    borderRadius: 3,
                                                }}
                                            />
                                        )}
                                    </Box>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography>{rating === 5 ? "100%" : "0%"}</Typography>
                                </Grid>
                            </Grid>
                        ))}
                    </Grid>

                    <Grid item xs={12} md={9} sx={{ paddingBottom: "10px" }}>
                        <Grid container spacing={4}>
                            {/* How to Review Section */}
                            <Grid item xs={12} md={6}>
                                <Typography fontWeight="bold">How do I review this product?</Typography>
                                <Typography variant="body2">
                                    If you recently purchased this product from noon, you can go to your Orders page and click on the Submit Review button.
                                </Typography>
                            </Grid>

                            {/* Where reviews come from */}
                            <Grid item xs={12} md={6}>
                                <Typography fontWeight="bold">Where do the reviews come from?</Typography>
                                <Typography variant="body2">
                                    Our reviews are from noon customers who purchased the product and submitted a review.
                                </Typography>
                            </Grid>
                            {/* Reviews Section */}
                            <div style={{
                                margin: "10px",
                                height: "auto", // Adjust height as per your needs
                                overflow: "hidden"
                            }}>
                                <Divider flexItem sx={{ backgroundColor: "#F3F4F8", mt: 1, mx: 1 }} />

                                {/* Review Item */}
                                {reviews.slice(0, visibleReviews).map((review, index) => (
                                    <Grid container spacing={2} key={index} style={{ marginLeft: "20px", marginTop: "20px" }}>
                                        <Grid item xs={12} md={1}>
                                            <Avatar alt={review.name} sx={{ bgcolor: "green" }}>{review.name.charAt(0)}</Avatar>
                                        </Grid>
                                        <Grid item xs={12} md={11}>
                                            <Rating value={review.rating} readOnly precision={0.5} />
                                            <Typography fontWeight="bold">Excellent</Typography>
                                            <Typography>{review.review}</Typography>
                                            <Grid container alignItems="center" sx={{ marginTop: 1 }}>
                                                <Typography variant="body2">{`${review.name}..., ${review.location}`}</Typography>
                                                <VerifiedIcon fontSize="small" color="primary" sx={{ marginLeft: 1 }} />
                                                <Typography variant="body2" sx={{ marginLeft: 1 }}>Verified Purchase</Typography>
                                                <Typography variant="body2" sx={{ marginLeft: 2 }}>{review.timeAgo}</Typography>
                                            </Grid>
                                            <Grid container spacing={1} alignItems="center" sx={{ marginTop: 1 }}>
                                                <IconButton size="small">
                                                    <ThumbUpIcon fontSize="small" />
                                                </IconButton>
                                                <Typography variant="body2">{`Helpful for ${review.helpful}`}</Typography>
                                                <IconButton size="small">
                                                    <ThumbDownIcon fontSize="small" />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                        <Divider flexItem sx={{ mt: 1, mx: 1 }} />
                                    </Grid>
                                ))}
                            </div>
                            {/* Show More Reviews Button */}
                            {visibleReviews < reviews.length && (
                                <Grid item xs={12} sx={{ textAlign: 'left', marginTop: 2 }}>
                                    <div onClick={showMoreReviews} style={{ cursor: "pointer", textDecoration: "underline" }}>
                                        View All 20 reviews
                                    </div>
                                </Grid>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ padding: 3, backgroundColor: "#fff", margin: "30px 0" }}>
                <Box sx={{ padding: "10px 0" }}>
                    <Typography sx={{ fontSize: "24px" }} fontWeight="bold">Product Features</Typography>
                </Box>
                <img src={mobile} alt="Free Delivery" height={"100%"} width={"100%"} style={{ marginRight: "5px" }} />
            </Box>
            <Box sx={{ backgroundColor: "#fff", marginTop: "50px", padding: "20px" }}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
                    <Grid item xs={2}>
                        <Card sx={{ maxWidth: 150, textAlign: 'center', boxShadow: 'none', padding: 2, backgroundColor: "#00000005" }}>
                            <img src={ankerlogo} alt="logo" height="60px" width="60px" />
                            <Typography sx={{ fontSize: "13px", fontWeight: "700", paddingTop: "8px" }}>Charge fast, live more</Typography>
                            <Button size="small" variant="text" sx={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                Shop Now <ChevronRightIcon />
                            </Button>
                        </Card>
                    </Grid>
                    <Grid item xs={5}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={5}>
                                <div style={{ padding: "25px", backgroundColor: "#00000005", marginLeft: "40px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                                    <img src={adapter} alt="logo" height="110px" width="110px" />
                                </div>
                            </Grid>
                            <Grid item xs={7}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                    <Typography sx={{ fontSize: "13px", fontWeight: "700", paddingTop: "8px" }}>USB C Plug ,737 Charger GaNPrime 120W, PPS 3-Port Fast
                                        Wall Charger For MacBook Pro/Air, iPad Pro, Galaxy S22/S…</Typography>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                        <Typography sx={{ fontSize: "13px", fontWeight: "700", paddingTop: "8px" }}>700</Typography>
                                        <Typography sx={{ fontSize: "13px", fontWeight: "700", paddingTop: "8px" }}>4.4 <StarIcon style={{ fontSize: "12px", color: "#82AE04" }} /> (11)</Typography>

                                    </div>
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={5}>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid item xs={5}>
                                <div style={{ padding: "25px", backgroundColor: "#00000005", marginLeft: "40px", display: "flex", justifyContent: "center", alignItems: "center", }}>
                                    <img src={cabal} alt="logo" height="110px" width="110px" />
                                </div>
                            </Grid>
                            <Grid item xs={7}>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
                                    <Typography sx={{ fontSize: "13px", fontWeight: "700", paddingTop: "8px" }}>317 Charger with Charging cable Black</Typography>
                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
                                        <Typography sx={{ fontSize: "13px", fontWeight: "700", paddingTop: "8px" }}>799</Typography>
                                        <Typography sx={{ fontSize: "13px", fontWeight: "700", paddingTop: "8px" }}>4.3<StarIcon style={{ fontSize: "12px", color: "#82AE04" }} /> (8)</Typography>

                                    </div>
                                </div>
                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Typography variant="caption" color="text.secondary">
                    Sponsored
                </Typography>
            </Box>

            <div style={{ backgroundColor: "#fff", padding: "20px", margin: "20px 0" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "400" }}>Recently Viewed</Typography>
                <ProductSlider />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "20px", margin: "20px 0" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "400" }}>Customers Also Viewed</Typography>
                <ProductSlider />
            </div>
            <div style={{ backgroundColor: "#fff", padding: "20px", margin: "20px 0" }}>
                <Typography sx={{ fontSize: "24px", fontWeight: "400" }}>Products Related to This</Typography>
                <ProductSlider />
            </div>
        </Box >

    )
}

export default ProductContent
