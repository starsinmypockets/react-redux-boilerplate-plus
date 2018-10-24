import React from 'react';


const files = props => {
  const id = props.match.params.id
  return <p>File {id} page here</p>;
};

export default files;
