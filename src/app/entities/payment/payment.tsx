import React from 'react';
import { Box, Button, Typography, Grid, Card, CardContent, TextField, Chip, Divider } from '@mui/material';
import ArrowDownwardSharpIcon from '@mui/icons-material/ArrowDownwardSharp';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import offer from '../../assets/images/offer.png'
import phone from '../../assets/images/phone2.png'
import delivery from '../../assets/images/delivery 2.png'

const Payment = () => {
    return (
        <Box sx={{ my: 2 }}>
            <Header />
            <Box sx={{ padding: '20px', margin: '0 50px' }}>
                <Typography sx={{ fontSize: "36px", fontWeight: "600", margin: "15px 0" }}>Cart <span style={{ fontSize: "22px", color: "#6A6A6A" }}>(1 Item)</span></Typography>
                <Grid container spacing={4}>
                    {/* Left Section - Cart Details */}
                    <Grid item xs={12} md={8}>
                        {/* Offer Section */}
                        <Box sx={{ marginBottom: '20px' }}>
                            <img src={offer} alt={offer} height={"100%"} width={"100%"} />
                        </Box>

                        {/* Cart Item */}
                        <Card>
                            <CardContent>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <img src={phone} alt={phone} height={"100%"} width={"100%"} />
                                    </Grid>
                                    <Grid item xs={9} sx={{ display: "flex", justifyContent: "space-between", }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                                                Samsung Galaxy S24 Ultra Dual SIM Titanium Gray 12GB RAM
                                                256GB 5G
                                            </Typography>
                                            <Typography variant="body1" color="#6D6D6D" sx={{ fontSize: "14px", fontWeight: "400" }}>
                                                Order in the next32 m
                                            </Typography>
                                            <Typography variant="body2" color="green">
                                                Get it Tomorrow
                                            </Typography>
                                            <Chip label="1 year warranty" variant="outlined" color="primary" />
                                            <Typography variant="body2" color="error" sx={{ marginTop: '10px' }}>
                                                This item cannot be exchanged or returned.
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                                <Typography variant="h5" sx={{ marginRight: '10px' }}>
                                                    ₹4,299
                                                </Typography>
                                                <Typography variant="body2" sx={{ textDecoration: 'line-through', marginRight: '10px' }}>
                                                    ₹4,999
                                                </Typography>
                                                <Typography variant="body2" color="green">
                                                    14% off
                                                </Typography>
                                            </Box>
                                            <Box sx={{ marginTop: '10px' }}>
                                                <TextField
                                                    label="Quantity"
                                                    type="number"
                                                    defaultValue="1"
                                                    InputProps={{ inputProps: { min: 1 } }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box sx={{ marginRight: "10px" }}>
                                            <Typography variant="h6" color="#1E1E1E" fontWeight="bold" fontSize={"18px"}>
                                                ₹4299
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

                                                <Typography fontWeight="400" color="#B3B3B3" sx={{ textDecoration: 'line-through' }} fontSize={"16px"}>
                                                    ₹4999
                                                </Typography>

                                                <Typography variant="body2" color="#009951" fontWeight="400" fontSize={"16px"}>
                                                    <ArrowDownwardSharpIcon />  14%
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography color="#1E1E1E" sx={{ fontWeight: "bold", display: "flex", alignItems: "flex-start", fontSize: "14px" }}>
                                                    <img src={delivery} alt="Free Delivery" height={20} width={20} style={{ marginRight: "5px" }} /> Free Delivery
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Right Section - Order Summary */}
                    <Grid item xs={12} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6">Order Summary</Typography>
                                <Divider sx={{ marginBottom: '10px' }} />

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <Typography>Subtotal (1 item)</Typography>
                                    <Typography>₹1,29,999</Typography>
                                </Box>

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                                    <Typography>Shipping Fee</Typography>
                                    <Typography>FREE</Typography>
                                </Box>

                                <Divider sx={{ marginBottom: '10px' }} />

                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                                    <Typography variant="h6">Total</Typography>
                                    <Typography variant="h6">₹1,29,999</Typography>
                                </Box>

                                {/* Coupon Code Input */}
                                <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                                    <TextField label="Coupon Code" fullWidth />
                                    <Button variant="contained" sx={{ marginLeft: '10px', backgroundColor: 'yellow', color: 'black' }}>
                                        Apply
                                    </Button>
                                </Box>

                                {/* Checkout Button */}
                                <Button variant="contained" color="primary" fullWidth>
                                    CHECKOUT
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Savings Information */}
                        <Box sx={{ marginTop: '20px', textAlign: 'center' }}>
                            <Typography variant="body2" color="green">
                                You will save ₹19,089 on this order
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </Box >
    );
};

export default Payment;
