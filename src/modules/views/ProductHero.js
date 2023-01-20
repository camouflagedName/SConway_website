import * as React from 'react';
import Button from '../components/Button';
//import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage = require('../../assets/preview.png');

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundColor: '#000000',
        backgroundPosition: 'center',
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none', width: '100vw', height: 'auto' }}
        src={backgroundImage}
        alt="background"
      />
      {/*
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your Sundays
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Enjoy secret offers up to -70% off the best luxury hotels every Sunday.
      </Typography>
    */}
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href=""
        sx={{ minWidth: 200 }}
      >
        Learn More
      </Button>
      {/*
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
      */}


    </ProductHeroLayout>
  );
}
