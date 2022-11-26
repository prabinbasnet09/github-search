import React, {Fragment} from 'react';
import spinner from './spinner.gif';

//In arrow functions, we can directly return the values without using the return keyword
const Spinner = () => <Fragment>       
        <img src= {spinner} alt="Loading" style={{width: '50px', height: '50px', margin: 'auto', marginTop: '50px',  display: 'block'}}></img>
        </Fragment>

export default Spinner;