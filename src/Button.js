import React from 'react';
import './Button.css';
class Button extends React.Component {
	state = { 
			label: 'Submit Button'	
	};
  render() {
        return (
            <button className="style-button">{this.state.label}
            </button>
					)
    }
}

export default Button;