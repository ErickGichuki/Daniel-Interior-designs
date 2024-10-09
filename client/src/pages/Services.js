import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaintBrush,
  faCouch,
  faLightbulb,
  faExpandArrowsAlt,
  faComment,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-6 mt-4">
          We offer the following services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg p-6 text-center rounded-lg hover-move-icon">
            <FontAwesomeIcon
              icon={faPaintBrush}
              className="text-4xl text-blue-600 mb-2 icon"
            />
            <h3 className="text-xl font-semibold mb-2">Marble Painting</h3>
            <p className="text-md">
              Our marble painting services offer a luxurious and timeless finish
              that enhances the aesthetic appeal of your space. We use high
              quality materials and expert techniques to achieve stunning
              result.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg hover-move-icon text-center">
            <FontAwesomeIcon
              icon={faCouch}
              className="text-4xl text-green-600 mb-2 icon"
            />
            <h3 className="text-xl font-semibold mb-2">
              Custom Furniture Design
            </h3>
            <p className="text-md">
              We provide bespoke furniture design services tailored to your
              unique needs and preferences. Our designs focus on functionality
              and style, ensuring your furniture complements your space
              perfectly.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover-move-icon">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="text-4xl text-yellow-600 mb-2 icon"
            />
            <h3 className="text-xl font-semibold mb-2">Lighting Solutions</h3>
            <p className="text-md">
              Our lighting solutions are designed to create the perfect ambiance
              for your space. We offer a range of options from subtle accent
              lighting to dramatic features, all tailored to enhance your
              interior.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover-move-icon">
            <FontAwesomeIcon
              icon={faExpandArrowsAlt}
              className="text-4xl text-red-600 mb-2 icon"
            />
            <h3 className="text-xl font-semibold mb-2">Space Optimization</h3>
            <p className="text-md">
              We specialize in optimizing your space to maximize functionality
              and aesthetics. Our approach includes smart furniture arrangement,
              efficient storage solutions, and creative use of color and
              lighting.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover-move-icon">
            <FontAwesomeIcon
              icon={faComment}
              className="text-4xl text-purple-600 mb-2 icon"
            />
            <h3 className="text-xl font-semibold mb-2">
              Interior Design Consultation
            </h3>
            <p className="text-md">
              We provide personalized advice and recommendations to help you
              achieve your ideal interior design. We consider your style
              preferences, needs, and budget to create a design plan that works
              for you.
            </p>
          </div>

          <div className="bg-white shadow-lg p-6 rounded-lg text-center hover-move-icon">
            <FontAwesomeIcon
              icon={faPalette}
              className="text-4xl text-teal-600 mb-2 icon"
            />
            <h3 className="text-xl font-semibold mb-2">
              Color Palette Consulting
            </h3>
            <p className="text-md">
              Get expert guidance on selecting the perfect color scheme for your
              space, enhancing its atmosphere and visual appeal with carefully
              chosen hues and combinations.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Services;
