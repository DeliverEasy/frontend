import React, {Component} from 'react';
import './styles.scss';

class Input extends Component {
  render() {
    return(
      <div>
        <input className="input" name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.onChange}/>
      </div>
    );
  }
}

export default Input;
