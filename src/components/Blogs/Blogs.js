import React from 'react';
import { Accordion } from 'react-bootstrap';


const Blogs = () => {
  return (
    <div className='w-75 m-5 shadow-lg p-5 bg-body rounded'>
      <Accordion> <h1 className='pb-4'>Question and Answer</h1>
        <Accordion.Item eventKey="0">
          <Accordion.Header> <span className='fs-5 fw-bold'>Question : What is a purpose of CONTEXT API ?</span>
          </Accordion.Header>
          <Accordion.Body>
            <span className='fw-bold'>Answer :</span>CONTEXT API which is the alternative to "prop drilling" or moving props from grandparent to child to parent,and so on.It is a react structure.React.createContext() returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header> <span className='fs-5 fw-bold'>Question : What is Semantic tag ?</span>
          </Accordion.Header>
          <Accordion.Body><span className='fw-bold'>Answer :</span>An element which describes its meaning to both the browser and the developer is called semantic tag.These tag describes the purpose of element accurately. Elements such as header ,footer and article are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.semantic elements also help search engines to read the page and find the required information faster.In HTML there are some semantic elements that can be used to define different parts of a web page.  
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;