import React from 'react';
import { Accordion } from 'react-bootstrap';


const Blogs = () => {
    return (
        <div className='w-75 m-5 shadow-lg p-5 bg-body rounded'>
           <Accordion> <h1>Question and Answer</h1>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Question : What is a purpose of context API</Accordion.Header>
    <Accordion.Body>
      <span className='fw-bold'>Answer :</span>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
        </div>
    );
};

export default Blogs;