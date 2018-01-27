import React from "react";
import Link from "gatsby-link";
import AI from "../img/ai.jpg";

const Services = () => (
  <main>
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Our Services</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="description">
            <h3 className="heading-tertiary  u-margin-bottom-small">
              From Idea to Launch
            </h3>
            <p className="paragraph">
              We design and build MVPs really really fast. Give us an idea and
              we will turn that into real products in usually 6 weeks.
            </p>
            <p>
              You can then validate your innovative ideas with REAL users and
              customers, collect REAL feed-backs, and make smart decisions on
              what your next step should be.
            </p>
          </div>

          <div className="description">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Hire software engineering teams in Taiwan
            </h3>
            <p className="paragraph">
              Interviewing for months and can't find any qualified engineers?
            </p>
            <p>
              We have a software research lab in Taiwan that only hires the very
              best in the country. So if your hyper growth startup needs to
              expand fast, we can help hire and establish a team in Taiwan
              really fast.
            </p>
            <p>
              Since we hire only the very best, this team can not only finish
              well-defined tasks competently, but also solve difficult problems
              creatively.
            </p>
          </div>
          <Link className="btn-text">Learn more</Link>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src={AI}
              alt="Mobile Development"
              className="composition__photo composition__photo--p1"
            />
            <img
              src=""
              alt=""
              className="composition__photo composition__photo--p2"
            />
            <img
              src=""
              alt=""
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Services;
