import React from 'react';

const FilesPage = props => {
  const id = props.match.params.id;
  const file = props.files.find(it => it.id === id);
  return (
    <div>
      <p>
        {file.directory}
        {file.name}
      </p>
      <p>{file.id}</p>
    </div>
  );
};

export default FilesPage;
