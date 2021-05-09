import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function Portfolio() {
  return <Content />;
}

const Content = () => {
  return (
    <div>
      <p>Hiya!!</p>
      <p>
        I am Aditya, a budding Full Stack Developer based out of Bangalore,
        India. Currently, I am working with a startup in Bangalore as a Product
        Solutions Engineer. Currently my tech stack consits of{" "}
        <b style={{ color: "pink" }}>Google Firebase</b>,{" "}
        <b style={{ color: "pink" }}>BigQuery</b>,{" "}
        <b style={{ color: "pink" }}>MetaBase</b>,{" "}
        <b style={{ color: "pink" }}>Node</b>,{" "}
        <b style={{ color: "pink" }}>C++</b>, etc. My work involves playing with{" "}
        <b style={{ color: "pink" }}>JavaScript</b> in creative ways and coming
        up with scalabe solutions. I am also learning the MERN stack.
      </p>
      <p>
        {" "}
        Currently I am also working on an exciting personal project called
        <b style={{ color: "pink" }}> pZEROrn </b>. This project uses the
        complete MERN stack and pretty soon I'll be able to showcase my creation
        to the whole world. I am really excited for this project
      </p>

      <p>
        {" "}
        My hobbies include playing chess, taking part in various competitive
        programming contests, listening to rap, reading Nietzsche. Out of all
        the hobbies mentioned I love competitive programming the most. I treat
        it as an actual sport and that mindset has helped me develop my
        algorithmic skills to a great extent.
      </p>

      <p>
        Before working as a Dev - cum - Product Solutions Engineer and diving
        deep into comp sci, I worked for a Quant/Finance firm called{" "}
        <b style={{ color: "pink" }}>Futures First</b> as an Analyst. I
        developed algorithms that can trade in FX, US and UK interest rate
        markets with an efficiency of more than 60 pct. It was an amalgamation
        of software developing and good'ol statistics. But it was at Futures
        First where I realised that my true calling was tech. I wanted to build
        products that can have a lasting impact on people and change their lives
        for better. Soon I'll introduce my current project
        <b style={{ color: "pink" }}>pZEROrn</b> which I am really excited
        about.
      </p>
      <p>
        I've also worked at{" "}
        <b style={{ color: "pink" }}>DRDO - Defense Lab Jodhpur</b>, where I was
        a part of it's NRMA department. NRMA takes care of all the research
        related to <b style={{ color: "pink" }}>Nuclear Radiation</b>. During my
        time at DRDO, I worked under{" "}
        <b style={{ color: "pink" }}>Dr. D.K. Gupta (Sc. E)</b>. My research
        work involved building up apparatus to perform gamma ray spectroscopy
        and observe the performance of Amptek A350 chip to detect radioactive
        sources. I really enjoyed my time at DRDO, but one thing you must know
        about Jodhpur is that it gets very hot during the summers and sometimes
        it gets almost impossible to beat the heat. So just keep that lemonade
        with you all the time if you're in Jodhpur.
      </p>

      <p>
        {" "}
        I am always open for new and exciting opportunites and would love to
        connect with you if you have something exciting to share. You can reach
        out to me at my <a href="mailto:adist98@gmail.com">mail</a>.
      </p>
      <ul role="list">
        Places I've worked at in the past :
        <li data-icon="🦄">
          <a href="https://www.bsnl.co.in/">BSNL</a>
        </li>
        <li data-icon="🦄">
          <a href="https://www.drdo.gov.in/labs-and-establishments/defence-laboratory-dlj">
            DRDO - Defense Lab Jodhpur
          </a>
        </li>
        <li data-icon="🦄">
          <a href="https://code.tinker.ly/">Tinkerly</a>
        </li>
        <li data-icon="🦄">
          <a href="https://futuresfirst.com/">Futures First</a>
        </li>
      </ul>
      <p>
        <center className="foot">
          <a href="https://www.linkedin.com/in/ason98/">
            <img
              src="https://img.icons8.com/ios/452/linkedin.png"
              width="50"
              height="50"
              hspace="5"
              vspace="20"
            />
          </a>
          <a href="https://github.com/adist98">
            <img
              src="https://image.flaticon.com/icons/png/512/25/25231.png"
              width="50"
              height="50"
              vspace="20"
            />
          </a>
        </center>
      </p>
      <footer className="footer">
        <p>adist98 © 2021</p>
      </footer>
    </div>
  );
};

ReactDom.render(<Portfolio />, document.getElementById("root"));
