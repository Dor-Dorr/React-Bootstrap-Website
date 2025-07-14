import React from "react";

function EducationSection() {
  return (
    <section id="resume" className="bg-dark text-light resume">
      <div class="container aos-init aos-animate" data-aos="fade-up">
        <br></br>
        <div class="section-title">
          <h2>Resume</h2>
          <br></br>
        </div>

        <div class="row">
          <div class="col-lg-6">
            <div class="resume-item pb-0">
              <h4>BACHELOR OF SCIENCE (B.SC.)</h4>
              <h5>2017 - 2023</h5>
              <p>
                <em>TH-Köln, Medieninformatik - Gummersbach</em>
              </p>
              <p>
                Thema: Simulation zur effektiven Lichtgestaltung einer
                Personenbeleuchtung anhand Unity
              </p>
            </div>
            <br></br>

            <div class="resume-item">
              <h4>STUDIUM DER MEDIENINFORMATIK</h4>
              <h5>2017 - 2023</h5>
              <p>
                <em>TH-Köln, Medieninformatik - Gummersbach</em>
              </p>
              <p>
                Schwerpunkt: Medienbasierte Produktion (TV), IT-Prozesse &
                Systeme
              </p>
            </div>
            <br></br>
            <div class="resume-item">
              <h4>INFORMATIONSTECHNISCHER ASSISTENT</h4>
              <h5>2014 - 2017</h5>
              <p>
                <em>Berufskolleg, Informatik - Bergisch Gladbach</em>
              </p>
              <p>Ausbildung zum Informationstechnischen Assistenten.</p>
            </div>
          </div>

          <br></br>

          <div class="col-lg-6">
            <div class="resume-item">
              <h4>PRAKTIKA</h4>
              <h5>2016 - 2016</h5>
              <p>
                <em>Menten, Web Design - Bergisch Gladbach</em>
              </p>
              <p>Praktikum als Frontend-Entwickler</p>
            </div>

            <br></br>

            <div class="resume-item">
              <h4>ZERTIFIKAT</h4>
              <h5>2015 - 2015</h5>
              <p>
                <em>FHDW, Informatik - Bergisch Gladbach</em>
              </p>
              <p>APP zum Themenbereich „Rohstoff Wasser“ entwickelt</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
    </section>
  );
}

export default EducationSection;
