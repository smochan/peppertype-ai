import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="body">
      <div className="leftSection">
        <img src="https://uploads-ssl.webflow.com/6036972e08af561b470b4831/6135c64b57cf212f2aa106f1_Peppertype-logo-dark-horizontal.svg" className="logo" alt="logo" width="225"/>
        <p className="greeting">Hi Siva &#128075;</p>
        <h1 className="welcome">Welcome to Peppertype.ai</h1>
        <p className="description">Congratulations on taking your first step towards creating content, the modern way!</p>
        <p className="description">Help us tailor an amazing experience for you by answering these three questions</p>
        <div className="buttons">
          <button className="skip">Skip for now</button>
          <button className="continue">Continue</button>
        </div>
        <p className="demo">Get most out of it - <a href="https://www.peppertype.ai/" className="redirect">Book a live demo</a></p>
      </div>
      <div className="rightSection">
        <p className="click">A few clicks away from an awesome writing experience</p>
        <div className="design">
          <div className="oval one" >
          </div>
          <div className="oval two" >
          </div>
          <p className="ovalContent"><strong> 50K+ </strong> Peppertypers <br />trust us with their content</p>
        </div>
        <button className="help"><img src="/questionCircle.svg" alt="question mark"></img> Need Help?</button>
      </div>
    </div>
  );
};

export default App;
