import React from 'react';
import Button from './components/Button';
import Modal from './components/Modal';

// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182
export default function App(props) {

  const [ isModalOpen, setModal ] = React.useState(false);

  return (
    <React.Fragment>
      <Button onClick={() => setModal(true)}>
        Open Modal
      </Button>
      <h1>Hello, Foo!</h1>
      {isModalOpen && (
        <Modal>
          <h1>Hello, Bar!</h1>
          <Button onClick={() => setModal(false)}>
            Close Modal
          </Button>
        </Modal>
      )}
    </React.Fragment>
  );
}
