import React, { useState, useEffect } from "react";
import { Container, Row, Button } from "react-bootstrap";
import resumeImage from './resume.png';  // Import the image directly if it's in the `src` folder
import resumePdf from './resume.pdf';  // Import the PDF file directly

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <Container fluid className="resume-section">
      {/* Download Button still links to the PDF */}
      <Button
        variant="primary"
        href={resumePdf}  // Linking to the PDF file for download
        target="_blank"
        style={{ maxWidth: "250px" }}
      >
        &nbsp;Download Resume
      </Button>

      <Row className="resume">
        {/* Display resume as an image */}
        <img
          src={resumeImage}  // This will show the image instead of the PDF
          alt="Resume"
          style={{
            width: "100%",
            maxWidth: width > 786 ? "900px" : "100%",  // Adjust image width based on screen size
            display: "block",
            margin: "0 auto",
          }}
        />
      </Row>
    </Container>
  );
}

export default Resume;
