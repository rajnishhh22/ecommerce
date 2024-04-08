import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField'; // Import TextField component

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-commerce App
          </Typography>
          {/* Add Search Bar */}
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              label="Search"
              size="small"
              sx={{ marginRight: '10px' }}
            />
            <Button color="inherit" onClick={handleLoginToggle}>
              {isLoggedIn ? 'Logout' : 'Login'}
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}> {/* Add margin from the top */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.gizbot.com/img/2022/11/moto-edge-40-pro-1668758458.jpg"
                  alt="Product Image"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    moto edge 40 neo
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    8 GB RAM | 128 GB ROM
                    16.64 cm (6.55 inch) Full HD+ Display
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://www.livemint.com/lm-img/img/2024/04/02/600x338/realme_12x_1711433336768_1712033547458.jpg"
                  alt="Product Image"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    realme 12 x 5g
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    8 GB RAM | 128 GB ROM
                    16.64 cm (6.55 inch) Full HD+ Display
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iphone13_design_09142021_big.jpg.slideshow-xlarge_2x.jpg"
                  alt="Product Image"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Apple Iphone 15 Pro
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    3000MAH Super Amoled Display 12MP Dual Camera 
                    128GB (6.6 inch) display
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          {/* Add 3 more products below */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://img.global.news.samsung.com/in/wp-content/uploads/2022/02/S22_Ultra_Banner_3000x2000.jpg"
                  alt="Product Image"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    samsung galaxy s12 Ultra
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  8 GB RAM | 128 GB ROM
                  15.49 cm (6.1 inch) Full HD+ Display
                  50MP + 12MP + 10MP | 10MP Front Camera

                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://jubileepost.in/en/wp-content/uploads/2021/03/POCO-X3-Pro-1.jpg"
                  alt="Product Image"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    POCO X3 Pro
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  6 GB RAM | 128 GB ROM | Expandable Upto 1 TB
                  16.94 cm (6.67 inch) Full HD+ Display
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/REALMEC53TEASER.JPG"
                  alt="Product Image"
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  realme C53
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  6 GB RAM | 128 GB ROM | Expandable Upto 2 TB
                  17.12 cm (6.74 inch) HD Display
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
