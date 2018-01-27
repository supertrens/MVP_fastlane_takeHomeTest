import React from 'react'
import Link from 'gatsby-link'

const SecondPage = () => (
  <section className="grid-test">
    <div className="row">
      <div className="col-1-of-2"> ol-1-of-2</div>
      <div className="col-1-of-2"> ol-1-of-2</div>
    </div>

    <div className="row">
      <div className="col-1-of-3"> ol-1-of-3</div>
      <div className="col-1-of-3"> ol-1-of-3</div>
      <div className="col-1-of-3"> ol-1-of-3</div>
    </div>

    <div className="row">
      <div className="col-1-of-3"> ol-1-of-3</div>
      <div className="col-2-of-3"> ol-3-of-3</div>
    </div>
  </section>
  // <section className="grid-test">
  //   <h1>MVP Fastlane</h1>
  //       <h2>Our Team</h2>
  //       <div>
  //         <section>
  //           <h3>Leadership</h3>
  //           <div>
  //             <h4>Tiwen Lin</h4>
  //             Founder &amp; CEO
  //           </div>
  //           <div>
  //             <h4>Chiayu Wu</h4>
  //             Co-founder
  //           </div>
  //         </section>
  //         <section>
  //           <h3>Engineering</h3>
  //           <div>
  //             <h4>Philip Chen</h4>
  //             Software Engineer, Full-Stack
  //           </div>
  //           <div>
  //             <h4>Peihsuan Chang</h4>
  //             Software Engineer, Full-Stack
  //           </div>
  //         </section>
  //         <section>
  //           <h3>Product</h3>
  //           <div>
  //             <h4>Wanchen Huang</h4>
  //             Product Manager
  //           </div>
  //         </section>
  //       </div>
  //   <Link to="/">Go back to the homepage</Link>
  // </section>
);

export default SecondPage
