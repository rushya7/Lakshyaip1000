import React from "react";
import img1 from "../../assets/images/events/01.jpg";
import img2 from "../../assets/images/events/02.jpg";
import img3 from "../../assets/images/events/03.jpg";
import img4 from "../../assets/images/events/04.jpg";
import img5 from "../../assets/images/events/05.jpg";

import Header from "../layout/header";
import PageHeader from "../layout/pageheader";


const title = "Event Gallery";


// Event Gallery Data
const eventImages = [
  { id: 1, title: "Annual Tech Fest 2025", src: img1 },
  { id: 2, title: "Startup Pitch Day", src: img2 },
  { id: 3, title: "AI Conference", src: img3 },
  { id: 4, title: "Hackathon Finale", src: img4 },
  { id: 5, title: "Cultural Night", src: img5 },
];

const EventGallery = () => {
  

  return (
    <>
      <Header/>
     <PageHeader title={title} curPage={"Event Gallery"} />
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-white py-16 px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-14">
        <span className="text-sky-600 uppercase tracking-widest font-semibold">
          Our Events
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-2">
          📸 Event Gallery
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-lg">
          Relive the memories from our conferences, hackathons, cultural nights,
          and exciting tech events.  
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {eventImages.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition duration-300 transform hover:-translate-y-2"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={event.src}
                alt={event.title}
                className="w-full h-64 object-cover transform hover:scale-110 transition duration-500"
              />
            </div>

            {/* Title below image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-semibold text-lg mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-gray-500">
                A glimpse of our amazing event moments.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default EventGallery;
