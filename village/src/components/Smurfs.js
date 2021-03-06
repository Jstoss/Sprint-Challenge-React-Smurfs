import React, { Component } from 'react';
import Smurf from './Smurf';

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <h3>Who would you like to visit?</h3>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
                <Smurf
                  {...smurf}
                  deleteASmurf={this.props.deleteASmurf}
                  edit={this.props.edit}
                  key={smurf.id}
                />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
