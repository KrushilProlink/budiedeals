import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '20px' }}>
      <Grid container spacing={4}>
        {/* About Column */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">About</Typography>
          <Link href="#" color="inherit">Contact Us</Link><br/>
          <Link href="#" color="inherit">About Us</Link><br/>
          <Link href="#" color="inherit">Careers</Link><br/>
          <Link href="#" color="inherit">BuddieDeals Stories</Link><br/>
          <Link href="#" color="inherit">Press and Corporate Information</Link>
        </Grid>

        {/* Group Companies Column */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Group Companies</Typography>
          <Link href="#" color="inherit">Nibor AI</Link><br/>
          <Link href="#" color="inherit">Wave Technologies</Link><br/>
          <Link href="#" color="inherit">David Group</Link><br/>
          <Link href="#" color="inherit">Eleve International</Link><br/>
          <Link href="#" color="inherit">Plux Info Service</Link><br/>
          <Link href="#" color="inherit">Bulk Buys</Link><br/>
          <Link href="#" color="inherit">Drop App</Link>
        </Grid>

        {/* Help Column */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Help</Typography>
          <Link href="#" color="inherit">Payments</Link><br/>
          <Link href="#" color="inherit">Shipping</Link><br/>
          <Link href="#" color="inherit">Cancellation & Returns</Link><br/>
          <Link href="#" color="inherit">FAQ</Link><br/>
          <Link href="#" color="inherit">Report Infringement</Link>
        </Grid>

        {/* Consumer Policy Column */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Consumer Policy</Typography>
          <Link href="#" color="inherit">Cancellation & Returns</Link><br/>
          <Link href="#" color="inherit">Terms of Use</Link><br/>
          <Link href="#" color="inherit">Security</Link><br/>
          <Link href="#" color="inherit">Privacy</Link><br/>
          <Link href="#" color="inherit">Sitemap</Link><br/>
          <Link href="#" color="inherit">Grievance Redressal</Link><br/>
          <Link href="#" color="inherit">EPR Compliance</Link>
        </Grid>

        

        {/* Registered Office Address Column */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">Registered Office Address</Typography>
          <Typography variant="body2">
            Buddies on Internet Pvt Ltd<br/>
            30-G Keybit Business Park, Datatray Road,<br/>
            Desai Business Park,<br/>
            Opp: BSNL Telephone Exchange,<br/>
            Gadang - 582103 Karnataka (India)
          </Typography>
          
          {/* Social Media Icons */}
          <Box sx={{ marginTop: '20px' }}>
            <Typography variant="h6">Social</Typography>
            <Box>
              <Link href="https://instagram.com" color="inherit" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" width="12" style={{ marginRight: '10px' }} />
              </Link>
              <Link href="https://facebook.com" color="inherit" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Facebook_icon.svg" alt="Facebook" width="12" style={{ marginRight: '10px' }} />
              </Link>
              <Link href="https://twitter.com" color="inherit" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/en/6/60/Twitter_Logo_as_of_2021.svg" alt="Twitter" width="12" style={{ marginRight: '10px' }} />
              </Link>
              <Link href="https://youtube.com" color="inherit" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="YouTube" width="12" style={{ marginRight: '10px' }} />
              </Link>
              <Link href="https://linkedin.com" color="inherit" target="_blank">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn" width="12" />
              </Link>
            </Box>
          </Box>
        </Grid>

        {/* App Download Column */}
        <Grid item xs={12} sm={6} md={2}>
          <Typography variant="h6">For Better Experience Download Our App</Typography>
          <Box>
            <img src="https://www.citypng.com/public/uploads/preview/black-get-it-on-google-play-button-transparent-background-704081694709487krdarjsdic.png" alt="Google Play" width="80" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" width="120" />
          </Box>
          <Typography variant="h6" sx={{ marginTop: '20px' }}>Our Partners</Typography>
          <Box>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Windows" width="20" style={{ marginRight: '10px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" width="20" style={{ marginRight: '10px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Facebook_icon.svg" alt="Meta" width="20" style={{ marginRight: '10px' }} />
            <img src="https://razorpay.com/assets/razorpay-glyph.svg" alt="Razorpay" width="20"  />
          </Box>
        </Grid>
      </Grid>

      {/* Horizontal Divider */}
      <Box sx={{ borderBottom: '1px solid #fff', margin: '20px 0' }} />

      {/* Footer Bottom Links */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={2}>
          <Link href="#" color="inherit">Onboard Your Brand</Link>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Link href="#" color="inherit">Advertise</Link>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Link href="#" color="inherit">Gift Cards</Link>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Link href="#" color="inherit">Help Center</Link>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="body2">@2022-2024 BUDDIEDEALS.COM</Typography>
        </Grid>

        {/* Payment Logos */}
        <Grid item xs={12} sm={2}>
          <Box>
            <img src="https://www.npci.org.in/PDF/npci/upi/logos/upi-logo.svg" alt="UPI" width="10" style={{ marginRight: '10px' }} />
            <img src="https://www.npci.org.in/PDF/npci/rupay/logos/rupay-logo.svg" alt="Rupay" width="10" style={{ marginRight: '10px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.svg" alt="Visa" width="10" style={{ marginRight: '10px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/1/13/Font_Awesome_5_solid_money-bill-alt.svg" alt="Cash on Delivery" width="10" style={{ marginRight: '10px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Bank_icon.svg" alt="Net Banking" width="10" style={{ marginRight: '10px' }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/EMI_option.svg" alt="Easy EMI" width="10" />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
