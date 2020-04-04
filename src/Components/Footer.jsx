import React, { PureComponent } from 'react';
import {Icon, Segment, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom';


class Footer extends PureComponent {

  render() {
    return (

    <Segment id="footer">
     <Button href="https://youtu.be/qzQDJL2lFHw" circular color='youtube' icon='youtube' />
     <Button href="https://www.linkedin.com/in/saimi1992/" circular color='linkedin' icon='linkedin' />
     <Button href="https://github.com/saimaar/threadIt-Frontend" circular color="black" icon='github' />
    </Segment>
    );
  }

}

export default Footer;
