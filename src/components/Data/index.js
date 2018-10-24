import React from 'react';

const ModelPage = props => {
  const id = props.match.params.id;
  const data = props.data.find(it => it.id === id);
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.description}</p>
      <p>{data.id}</p>
    </div>
  );
};

export default ModelPage;
