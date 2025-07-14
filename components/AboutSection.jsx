import React from "react";
import AboutImg from "../assets/images/portrat_sig-2.png";
import ViewMyWorkBtn from "./ViewMyWorkBtn";

function AboutSection() {
  return (
    <div className="bg-dark text-light py-5" id="about">
      <div className="container">
        <div className="flex-column-reverse flex-md-row row">
          <div className="col-md-6 mt-5 mt-md-0 d-flex flex-column justify-content-center align-items-center">
            <img className="img-fluid  " src={AboutImg} alt="about img" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h2 className="mb-5">Über Mich</h2>
            <p className="text-start">
              Hallo, ich bin Dorian Dorrenbach und meine Leidenschaft gilt der
              Informatik – besonders dem Bereich Frontend- und Webentwicklung.
              Ich liebe es, digitale Oberflächen zu gestalten, die nicht nur gut
              aussehen, sondern auch intuitiv funktionieren. Für mich ist
              Programmieren nicht nur ein Beruf, sondern eine kreative
              Möglichkeit, Ideen zum Leben zu erwecken und Menschen durch gute
              Usability zu begeistern.
            </p>
            <p className="text-start mb-5">
              Als Medieninformatiker bin ich die Schnittstelle zwischen Technik
              und Gestaltung. Sei es das Gestalten digitaler Medien oder das
              Entwickeln von Softwarelösungen.
            </p>
            <ViewMyWorkBtn />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
