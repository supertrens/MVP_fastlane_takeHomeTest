import React from "react";
import Link from "gatsby-link";
import ServicesPictures from "./services_pictures";
import ServicesNotes from "./services_notes";

const Services = () => (
  <main>
    <section className="section-services">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Our Services</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <ServicesNotes />
          <Link className="btn-text">Learn more</Link>
        </div>
        <div className="col-1-of-2">
          <ServicesPictures />
        </div>
      </div>
    </section>
  </main>
);

export default Services;
