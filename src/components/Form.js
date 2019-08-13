import React from 'react';

const Form = props => (
    <div>
        <form onSubmit={props.getWeather} className="form_block">
            <input type="text" name="city" placeholder="City..."/>
            <input type="text" name="country" placeholder="Country..."/>
            <button>Get Weather</button>
        </form>
    </div>
);
export default Form;

