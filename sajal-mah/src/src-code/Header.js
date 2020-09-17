import React from 'react';
import '../App.css';

function Header()
{
return(
        <div>
        <h1>
        Sajal Maheshwari
        </h1>
        <p>CEO and Founder of OWSA</p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/maheshwari-sajal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit LinkedIn Profile!
        </a>
        </div>
    );
}

export default Header;