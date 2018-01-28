import React from "react";

const TeamItem = ({ teamMember, teamTitle, teamNumber }) => {
  return (
    <div className="col-1-of-3">
      <div className="team">
        <div className="team__side team__side--front">
          <div className={`team__picture team__picture--${teamNumber}`} />

          <h3 className="team__heading">
            <span
              className={`team__heading-span team__heading-span--${teamNumber}`}
            >
              {teamTitle}
            </span>
          </h3>

          <div className="team__details">
            <ul>
              {teamMember.map((member, index) => (
                <li key={index}>
                  <h3>
                    <strong>{member.name}</strong>
                  </h3>
                  <p>{member.title}</p>
                </li>
              ))}
            </ul>
          </div>
          <div
            className={`team__side team__side--back  team__side--back-${teamNumber}`}
          >
            <p>Leadership Back</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TeamItem;
