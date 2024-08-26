import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faBriefcase,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h1>About Me</h1>
      <ul className="about-list">
        <li>
          <strong>Name:</strong> Hariprakash A
        </li>
        <li>
          <strong>Position:</strong> QA Engineer
        </li>
        <li>
          <FontAwesomeIcon icon={faBriefcase} /> <strong>Working at:</strong>{" "}
          Amazon
        </li>
        <li>
          <FontAwesomeIcon icon={faEnvelope} /> <strong>Email:</strong>{" "}
          <a href="mailto:hariprakashva@gmail.com">hariprakashva@gmail.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} /> <strong>Phone:</strong>{" "}
          <a href="tel:+916379506357">+91 6379506357</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faUserTie} /> <strong>Portfolio:</strong>{" "}
          <a href="https://hariprakash.netlify.app/">
            https://hariprakash.netlify.app/
          </a>
        </li>
      </ul>

      <h1>About This Project</h1>
      <p>
        This project is a React-based web application designed for dynamic
        segment management. The core architecture ensures scalability,
        maintainability, and smooth integration with backend services.
      </p>
      <ul className="project-list">
        <li>
          <strong>Architecture:</strong> Built with reusable and modular
          components like Header, Footer, Popup and SchemaList, aligning with
          React's component-driven model.
        </li>
        <li>
          <strong>State Management:</strong> Managed with React hooks useState
          and useEffect for a predictable and dynamic UI.
        </li>
        <li>
          <strong>React Router:</strong> Ensures smooth SPA navigation.
        </li>
        <li>
          <strong>Data Submission:</strong> Handles segment and schema data,
          submitting it as JSON to a remote endpoint.
        </li>
        <li>
          <strong>Responsive Design:</strong> CSS ensures a clean and responsive
          interface for all devices.
        </li>
        <li>
          <strong>Dynamic Schema Management:</strong> Allows adding, removing,
          and updating schema selections dynamically.
        </li>
      </ul>
    </section>
  );
};

export default About;
