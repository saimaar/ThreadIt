import React, { Component } from 'react';
import { Segment, Image, Divider } from 'semantic-ui-react'
import wed1 from './images/wed1.jpg'
import wed2 from './images/wed3.jpg'




class Wedding extends Component {

  render() {
    const src = 'https://react.semantic-ui.com/images/wireframe/image-text.png'
    return (
      <Segment className ="wed-look">

        <h1 className="look-book">Wedding Look Book</h1>
        <h2>We can create any look for you! Book an apointment now!</h2>
        <Image src={wed1} size='xlarge' centered />

        <p className="wed1-ptag">
            Wedding is the biggest moment of our lives!
            It surely comes with a lot stress, planning etc etc.....
            Let us help you with your wedding dress. Customize and pick any desgin
            from our collection.
        </p>

    <Image className="wed3-img" src={wed2} size='large' left />
    <p className="wed2-ptag">
      While earlier this was a smaller store,
      we have now completely revamped it to make a super
      swanky store for your bridal needs.
      Apart from lehengas, they also have some nice jacket silhouettes,
      and a lot of Eastern and Western inspired outfits.
      They are pretty afforable.

    </p>

    <p className="wed3-ptag">
      Each and every detail are handcrafted by our amazing workers! It takes 3 to 6
      months to create a perfect bridal look. Be it Summer, Winter or Spring Wedding,
      we are here to help you design your special wedding dress.
    </p>

    <p className="wed4-ptag">
      Email us at threadit@gmail.com<br/>
      Contact : 222-999-3333
    </p>
  </Segment>
    );
  }

}

export default Wedding;
