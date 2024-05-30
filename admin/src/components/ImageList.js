import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const url = 'backend.acmeflare.in' ; 
const ImageList = ({ images, deleteImage, editImage }) => {
  return (
    <Grid container spacing={3} sx={{ mt: 3 }}>
      {images?.length > 0 ?(images.map((image) => (
        <Grid item xs={12} sm={6} md={4} key={image._id}>
          <Card>
            <CardMedia component="img" height="240" src={`${url}/${image.imageUrl}`} alt={image.name} />
            <CardContent>
              <Typography variant="h6">{image.name}</Typography>
              <Typography variant="body2">Size: {image.size}</Typography>
              <Typography variant="body2">Year: {image.year}</Typography>
              <Typography variant="body2">Type: {image.imageType === 1 ? 'Hornbill' : 'Nature Series'}</Typography>
              <Button variant="contained" color="secondary" onClick={() => deleteImage(image._id)}>Delete</Button>
              <Button variant="contained" color="primary" onClick={() => editImage(image)}>Edit</Button>
            </CardContent>
          </Card>
        </Grid>
      ))) : <p style={{color:'red'}}>images not uploaded</p>}
    </Grid>
  );
};

export default ImageList;
