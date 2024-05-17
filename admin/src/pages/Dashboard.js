import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import axios from 'axios';
import ImageForm from '../components/ImageForm';
import ImageList from '../components/ImageList';
import Pagination from '../components/Pagination';

const url = 'http://localhost:5000' ; 

const Dashboard = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 9;

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const res = await axios.get(`${url}/api/images`);
      setImages(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteImage = async (id) => {
    try {
      await axios.delete(`${url}/api/image/${id}`);
      fetchImages();
    } catch (error) {
      console.error(error);
    }
  };

  const editImage = async (image) => {
    const newName = prompt('Enter new name:', image.name);
    const newSize = prompt('Enter new size:', image.size);
    const newYear = prompt('Enter new year:', image.year);
    
    if (newName && newSize && newYear) {
      try {
        await axios.put(`${url}/api/image/${image._id}`, {
          name: newName,
          size: newSize,
          year: newYear,
        });
        fetchImages();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Admin Dashboard</Typography>
      <ImageForm fetchImages={fetchImages} />
      <ImageList images={currentImages} deleteImage={deleteImage} editImage={editImage} />
      <Pagination totalImages={images.length} imagesPerPage={imagesPerPage} paginate={paginate} />
    </Container>
  );
};

export default Dashboard;
