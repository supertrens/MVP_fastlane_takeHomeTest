import React from "react";
import TeamItem from "./team_item";

const Team = () => {
  /* //LEADERSHIP TEAM */
  const leadership= [
    { name: "Tiwen Lin", title: "Founder & CEO" },
    { name: "Chiayu Wu", title: "Co-founder & COO" }
  ];

  /* //ENGINEERING TEAM */
  const engineering = [
    { name: "Philip Chen", title: "Software Engineer, Full-Stack" },
    { name: "Peihsuan Chang", title: "Software Engineer, Full-Stack" }
  ];

  /* //PRODUCT TEAM */
  const product = [{ name: "Wanchen Huang", title: "Product Manager" }];

  return <main>
      <section className="section-team">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Our Team</h2>
        </div>
        <div className="row">
          {/* //Leadership */}
          <TeamItem teamTitle="Leadership" teamMember={leadership} teamNumber="1" />

          {/* //ENGINEERING */}
          <TeamItem teamTitle="Engineering" teamMember={engineering} teamNumber="2" />

          {/* //PRODUCT */}
          <TeamItem teamTitle="Product" teamMember={product} teamNumber="3" />
        </div>
      </section>
    </main>;
};

export default Team;
