import React from 'react';

const ModelPage = props => {
  const id = props.match.params.id;
  const model = props.models.find(it => it.id === id);
  return (
    <div>
      <p>{model.name}</p>
      <p>{model.description}</p>
      <p>{model.id}</p>
    </div>
  );
};

export default ModelPage;
