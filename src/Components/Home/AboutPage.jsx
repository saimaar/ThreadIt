import React, { Component } from 'react';
import { Segment, Image } from 'semantic-ui-react'
import w1 from './images/w1.jpg'
import sustain from './images/sustainable-apparel.png'

class AboutPage extends Component {

  render() {
    const src = 'https://react.semantic-ui.com/images/wireframe/image-text.png'
    return (
  <Segment className="about-page">
    <Image src={w1} size='xlarge' floated='left' />
    <h1 className="about-header">Our Belief</h1>
    <p >
      We believe in creating beautiful tomorrows for our crafts, people and planet. We look towards the future,
      practicing and building processes that are <b>Sustainable</b>, innovative and environmentally conscious.
    </p>
    <Image src={sustain} size='large' floated='right' />
    <h1 className="about-header">Fair Wage</h1>
    <p>
      After the <b>Rana Plaza incident</b>, which took place on 24th April 2014,
      We took the initative to enroll our workers in the <br/>
       <b>Fair Wage Program.</b>
    </p>
    <h1 className="about-header">Women Empowerment</h1>
    <p>
      We train, underprivileged women to work with us! We also recruit women from various organization
      such <b>Acid Survivors, Health for Women and many more!</b>
    </p>
  </Segment>
    );
  }

}

export default AboutPage;
