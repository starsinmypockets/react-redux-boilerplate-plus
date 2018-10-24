import React from 'react';

class ModelPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpadte(prevProps) {
    if (this.props.id !== prevProps.id) {
      console.log(this.props.id);
    }
  }

  render() {
    console.log(this.props);
    const id = this.props.match.params.id;
    const model = this.props.models.find(it => it.id === id);
    console.log(model);
    return (
      <div>
        <p>{model.name}</p>
        <p>{model.description}</p>
        <p>{model.id}</p>
      </div>
    );
  }
}

export default ModelPage;
