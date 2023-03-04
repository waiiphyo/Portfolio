import React from "react";
import Card from "react-bootstrap/Card";
import MovieIcon from "@mui/icons-material/Movie";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";
import { FaGuitar } from "react-icons/fa";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Wai Phyo </span>
            from <span className="purple"> Yangon, Myanmar.</span>
            <br />I am an engineer learning in <span className="purple">University of Computer Studies ( Maubin ) .</span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <MovieIcon /> Watching Movies
            </li>
            <li className="about-activity">
              <FaGuitar /> Playing Guitar
            </li>
            <li className="about-activity">
              <ScreenSearchDesktopIcon /> Researching about latest tech
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <br />
          <footer className="blockquote-footer"> WP</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
