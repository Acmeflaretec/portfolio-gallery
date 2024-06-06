import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from '@mui/material'; 
import './project.css';
import { content } from "../Content";

const Projects = () => {
  const { Projects } = content;
  const [activeCategory, setActiveCategory] = useState(1);
  const [images, setImages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageDetails, setImageDetails] = useState({ name: '', size: '', year: '' });
  const [currentPage, setCurrentPage] = useState(1); 
  const imagesPerPage = 9;
  

  const url = 'https://backend.acmeflare.in'; 

  useEffect(() => {
    fetchImages();
  }, [activeCategory]);

  const fetchImages = async () => {
    try {
      console.log("activeCategory",activeCategory);  
      const res = await axios.get(`${url}/api/images?imageType=${activeCategory}`);
      setImages(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = (imageSrc, name, size, year) => {
    setSelectedImage(imageSrc);
    setImageDetails({ name, size, year });
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedImage('');
    setImageDetails({ name: '', size: '', year: '' });
  };

  // Logic to paginate images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  // Change page
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // Change category
  const handleCategoryChange = (category) => {
    // console.log("category",category);
    setActiveCategory(category);
    setCurrentPage(1); // Reset pagination when changing category
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>

          <ul className="uk-navbar-nav">
            <li>
              <button className={activeCategory === 1 ? "active1" : ""} onClick={() => handleCategoryChange(1)}>GALLERY A</button>
            </li>
            <li>
              <button className={activeCategory === 2 ? "active1" : ""} onClick={() => handleCategoryChange(2)}>GALLERY B</button>
            </li>
          </ul>
        </div>
        <div className="main-content">
          <ul className="img-gallery-container">
            {currentImages?.length>0 ?(currentImages.map((image, index) => (
              <li key={index} onClick={() => openModal(`${url}/${image.imageUrl}`, image.name, image.size, image.year)}>
                <img src={`${url}/${image.imageUrl}`} alt="" className={currentImages.length >2 ? "img-gal" : "img-gal2"} />
                <div className="float-gallery-content">
                  <div className="content">
                    <span className="highlight uk-block">{image.name}</span>
                    <div className='sortDetails'>
                      <span>{image.size}</span>
                      <span>{image.year}</span>
                    </div>
                  </div>
                </div>
              </li>
            ))) : <p style={{color:'red'}}>images not uploaded</p>}
          </ul>
        </div>

        {isOpen && (
          <div className="modal" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <span className="close-button" onClick={closeModal}>&times;</span>
              <img src={selectedImage} alt="Selected" />
              
               <div className="content">
                      <span><strong >Name:</strong>{imageDetails.name}</span>
                      <div className='sortDetails'>
                        <span><strong>Size:</strong>{imageDetails.size}</span>
                        <span><strong>Year:</strong>{imageDetails.year}</span>
                      </div>
                    </div>
            </div>
          </div>
        )}
      </div>
      <Pagination
        count={Math.ceil(images.length / imagesPerPage)} // Total number of pages
        page={currentPage}
        onChange={handlePageChange}
        sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}
      />
    </section>
  );
};

export default Projects;
