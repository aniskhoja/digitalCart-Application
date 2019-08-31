import React, { Component } from 'react';
import Counter from './counter.jsx';

class Counters extends Component {
    
    render() { 
        
        return (
            <div>
                <button onClick={this.props.onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {this.props.counters.map(a => 
                <Counter 
                key= {a.id}
                onDelete={this.props.onDelete}
                onIncrement={this.props.onIncrement}
                counter = {a}
                />
                )}
            
            </div>
            
         );
    }
}
 
export default Counters;