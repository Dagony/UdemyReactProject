import React, {Component} from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from "../../../hoc/Aux";
import PropTypes from 'prop-types';

class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p> {this.props.children}</p>
                <input type={"text"} onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default WithClass(Person, classes.Person);
