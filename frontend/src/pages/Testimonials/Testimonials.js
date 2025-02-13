import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import './Testimonials.scss';
import KeyFeatures from "../../components/KeyFeatures/KeyFeatures";
import CommonBanner from "../../components/CommonBanner/CommonBanner";
import BannerTicker from "../../components/bannerticker/bannerticker";
import Reusebanner from "../../components/ReuseBanner/Reusebanner";
import { Link } from "react-router";

const Testimonials = () => {
  const [show, setShow] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Data for the cards
  const stakeholders = [
    {
      name: "Gurmeet Singh",
      description: "Farmer from Punjab",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis magna ut lectus aliquet consequat. Nulla libero augue, ullamcorper et efficitur lacinia, eleifend eget.",
      image: process.env.PUBLIC_URL + "/images/person-img.png",
      videoUrl: "videos/video1.webm", 
    },
    {
      name: "Anita Sharma",
      description: "Entrepreneur from Delhi",
      text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta gravida at eget metus.",
      image: process.env.PUBLIC_URL + "/images/person-img.png",
      videoUrl: "videos/video1.webm", 
    },
    {
      name: "Rajesh Khanna",
      description: "Teacher from Mumbai",
      text: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Nullam id dolor id nibh ultricies vehicula ut id elit.",
      image: process.env.PUBLIC_URL + "/images/person-img.png",
      videoUrl: "videos/video1.webm", 
    },
  ];

  const handleShow = (index) => {
    setSelectedCard(stakeholders[index]);
    setShow(true);
  };

  const handleClose = () => {
    setSelectedCard(null);
    setShow(false);
  };
  const sliderImages = [
    { url: 'images/testsgrp.webp', alt: 'Technituber' },
    { url: 'images/farmergroup.webp', alt: 'Technituber' },

  ];
  return (
    <div className="Testimonials" data-testid="Testimonials">
      <Reusebanner pageTitle="Testimonials" titleImage="images/testimoniallogo.png"  sliderImages={sliderImages}/>

      {/* <BannerTicker /> */}

      <section class="testimonials position-relative">
        <img src={process.env.PUBLIC_URL + 'images/tree-bg-2.png'} />
        <div class="fullwidth mx-auto">
          
          <h1 class="d-green mb-0">Testimonials</h1>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra risus vitae quam tristique, at pellentesque tortor fermentum. Integer convalli</p> */}
        </div>
      </section>

      <section class="our-partners fullwidth mx-auto">
        <h1 class="d-green text-center">our partners</h1>
        <div class="mt-5 row">
          <div class="card testimonial-card p-4 text-center col-lg-4">
            <div class="card-body">
              <img src={process.env.PUBLIC_URL + 'images/quoteVector.png'} class="quoteicon" />
              <p class="testimonial-text">
              As a chips manufacturer, sourcing quality raw materials is critical for us. Technico’s chip-grade potatoes consistently meet our high standards for dry matter content and storability, ensuring we deliver superior products to our customers.
              </p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + 'images/image-icon.png'} class="profile-placeholder" />
              {/* <h5 class="testimonial-name">Ankit Jain</h5> */}
              {/* <p class="testimonial-role">Investor Paradigm Liaison</p> */}
            </div>
          </div>
          <div class="card testimonial-card p-4 text-center col-lg-4">
            <div class="card-body">
              <img src={process.env.PUBLIC_URL + 'images/quoteVector.png'} class="quoteicon" />
              <p class="testimonial-text">
              Technico Agri Sciences has set a benchmark in the seed potato industry. Their innovative approach, collaborations with global breeders, and dedication to quality have strengthened India’s agricultural landscape and empowered farmers nationwide.
              </p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + 'images/image-icon.png'} class="profile-placeholder" />
              {/* <h5 class="testimonial-name">Dr. Meera Gupta</h5> */}
              {/* <p class="testimonial-role">Investor Paradigm Liaison</p> */}
            </div>
          </div>
          <div class="card testimonial-card p-4 text-center col-lg-4">
            <div class="card-body">
              <img src={process.env.PUBLIC_URL + 'images/quoteVector.png'} class="quoteicon" />
              <p class="testimonial-text">
              Technico’s seed potatoes have transformed my farming experience. The higher yields and virus-free quality seed have significantly increased my profits. Their support and commitment to delivering premium seeds make them a trusted partner for every season.
              </p>
            </div>
            <div>
              <img src={process.env.PUBLIC_URL + 'images/image-icon.png'} class="profile-placeholder" />
              {/* <h5 class="testimonial-name">Rajesh Kumar</h5> */}
              {/* <p class="testimonial-role">Investor Paradigm Liaison</p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="stakeholders fullwidth mx-auto d-none">
        <h1 className="d-green text-center">
          our Stake Holder
        </h1>
        <div className="mt-5 row">
          {stakeholders.map((stakeholder, index) => (
            <div
              key={index}
              className="card stakeholder-card p-4 text-start col-lg-4"
            >
              <img
                src={stakeholder.image}
                className="card-img-top"
                alt={`${stakeholder.name}'s image`}
                onClick={() => handleShow(index)}
                style={{ cursor: "pointer" }}
              />
              <div className="card-body">
                <i className="fa fa-quote-left quote-icon" aria-hidden="true"></i>
                <p className="card-text">{stakeholder.text}</p>
                <h5 className="card-title">{stakeholder.name}</h5>
                <p className="card-text">{stakeholder.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for video playback */}
        {selectedCard && (
          <Modal show={show} onHide={handleClose} centered size="xl">
            <Modal.Header closeButton>
              <Modal.Title>{selectedCard.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>{selectedCard.description}</p>
              <video width="100%" controls autoPlay>
                <source src={selectedCard.videoUrl} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </section>

      <section class="testimonial-best fullwidth position-relative mx-auto row justify-content-center justify-content-xxl-end">
        <img class="col-lg-6" src={process.env.PUBLIC_URL + 'images/production.jpg'} />
        <div class="col-lg-6">
          <ul><li class="l-green">About Us</li></ul>
          <h1 class="d-green">We Always Make <br />The Best</h1>
          {/* <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</p> */}
          <Link class="btn grad-btn" to="/contact-us">Contact Us</Link>
        </div>
      </section>

      <KeyFeatures />




    </div>
  )
};



export default Testimonials;
