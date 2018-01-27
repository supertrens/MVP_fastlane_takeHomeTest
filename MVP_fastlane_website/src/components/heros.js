import React from "react";

const Heros = () => (
  <main>
    <section className="section-heros">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Our Heros</h2>
      </div>
      <div className="row">
        <div className="col-1-of-4">
          <div className="heros-box">
            <i className="heros-box__icon icon-basic-world" />
            <h3 className="heading-tertiary u-margin-bottom-small">Ono Jiro</h3>
            <p className="heros-box__text">
              "All I want to do is make better sushi." <br />
            </p>
            <p className="heros-box__text">
              "I'll continue to climb, trying to reach the top... but nobody
              knows where the top is."
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="heros-box">
            <i className="heros-box__icon icon-basic-gunsight" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Kobe Bryant
            </h3>
            <p className="heros-box__text">
              "Talents alone won't get it done."
            </p>
            <p className="heros-box__text">
              Kobe woke up earlier and trained harder even as the best players
              in NBA. This is the kind of intensity that we admire, and we work
              insanely hard to achieve greatness.
            </p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="heros-box">
            <i className="heros-box__icon icon-basic-cup" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              {" "}
              Iwata Satoru
            </h3>
            <p className="heros-box__text">
              "On my Business card, I am a corporate president. In my mind, I am
              a game developer. But in my heart , I am a Gamer"<br />
              -satoru Iwata 1959-2015
            </p>
            <p className="heros-box__text">:egendary programmer and gamer!</p>
          </div>
        </div>

        <div className="col-1-of-4">
          <div className="heros-box">
            <i className="heros-box__icon icon-basic-compass" />
            <h3 className="heading-tertiary u-margin-bottom-small">
              Steve Job
            </h3>
            <p className="heros-box__text">
              "Your time is limited, so don't waste it living someone else's
              life. Don't be trapped by dogma - which is living with the results
              of other people's thinking. Don't let the noise of others'
              opinions drown out your own inner voice."
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default Heros;
