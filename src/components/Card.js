import React from 'react';
import img from '../assets/Prestige-worldwide.jpg.png';
import img2 from '../assets/PintsnPixels.png'

export default function Card(props) {
  const cardStyle = {
    width: '18rem',
  };

  

  // Helper function that generates a random width for our placeholder images
  const randomWidth = () => {
    const number = Math.random() * (300 - 200) + 200;
    return number.toString().split('.')[0];
  };

  return (
    <div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={img}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Music Forum</h5>
          <p className="card-text">A music forum to read and post bands, fans, and concerts</p>
          <a href="https://prestiges-worldwide-project.herokuapp.com/" className="btn btn-primary">
            Have a look
          </a>
          
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={img2}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">Pints n Pixels</h5>
          <p className="card-text">Got a favorite bar? Want to explore new pubs? Pints and Pixels will point you in the right direction</p>
          <a href="https://chriscondreay.github.io/Project_1/?#" className="btn btn-primary">
            Have a look
          </a>
          
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <img
          className="card-img-top"
          src={`http://placecorgi.com/${randomWidth()}`}
          alt="Card cap"
        />
        <div className="card-body">
          <h5 className="card-title">TBD</h5>
          <p className="card-text">Coming Soon</p>
          <a href="https://prestiges-worldwide-project.herokuapp.com/" className="btn btn-primary">
            Have a look
          </a>
          
        </div>
      </div>
    </div>
  );
}