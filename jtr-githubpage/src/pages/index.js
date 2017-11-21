import React from 'react';
import Link from 'gatsby-link';

import FontAwesome from 'react-fontawesome';
import '../sass/style.scss';


const IndexPage = () => {
  return(
  <div>
    <main className="page-container">

      {/* <!-- Main jumbotron--> */}
      <header className="superheader super-fill centered github-profile-bg">
        <div className='container'>
          <h1>github.com/JTRiddick</h1>
        </div>
        <div className="container">
          <h2>My Profile Name Is Also My Real Name</h2>
          <p><span>Would you say I'm a huge scrub?</span></p>
          <p><span>Trick question, I write JavaScript.</span></p>
        </div>
        <div className="container">

          <a href="#who">
              {/* <i className="fa fa-chevron-circle-down fa-5x"></i> */}
              <FontAwesome name='chevron-circle-down'
                size='5x'
              />
          </a>

        </div>
      </header>

      <section className= "container group block block-one" >
        <div>
          <p>Efficiency and progress</p>
        </div>
      </section>

    </main>

  </div>)
}
export default IndexPage;
