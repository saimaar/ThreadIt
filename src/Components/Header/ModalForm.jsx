import React, { Component } from 'react';
import { Button, Header, Image, Modal, Container, List} from 'semantic-ui-react'
import UserForm from './UserForm'


class ModalForm extends Component {

  render() {
    return (
      <Modal trigger={<Button>login/register</Button>}>
          <Modal.Description>
            <Header>Hey Guest!</Header>
            <UserForm  handleLogin={this.props.handleLogin}/>
          </Modal.Description>
      </Modal>
    );
  }

}

export default ModalForm;
