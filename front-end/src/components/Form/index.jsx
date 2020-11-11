import React, { useState } from 'react';
import { render } from 'react-dom';
import vest from 'vest';
import Form, { User } from './components/Form';
import Input from './components/Input';
import validate from './validate';
import './style.scss';

/**
 * This is a simple example for a React form using vest
 * I tried to keep the react part as simple as possible
 * to keep the focus on the vest part.
 * 
 * You can play around and enhance it further by adding validation for
 * for dirty fields only, async validations and more.
 */

const App = () => {
  const [values, setValues] = useState({});
  const [res, setRes] = useState(vest.get('NewUser'));

  const handleChange = ({ target: { name, value }}) => {
    const nextFormState = {
      ...values,
      [name]: value
    }

    setValues(nextFormState);

    if (res.hasErrors(name)) {
      setRes(validate(nextFormState, name))
    }
  }


  // In this example we only validate on blur, so validation isn't triggered while typing
  const handleBlur = ({ target: { name, value }}) => {
    setRes(validate(values, name));
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      setRes(validate(values))
  };

  return (
  
    <Form onSubmit={handleSubmit}>
      <Input name="First name"
        value={values.firstname}
        errors={res.getErrors('firstname')}
        onBlur={handleBlur}
        onChange={handleChange}/>
      <Input name="Last Name"
        errors={res.getErrors('lastname')}
        warnings={res.getWarnings('password')}
        value={values.lastname}
        onBlur={handleBlur}
        onChange={handleChange}/>
      <Input name="Email Address"
        errors={res.getErrors('email')}
        value={values.confirm}
        onBlur={handleBlur}
        onChange={handleChange}/>
         <Input name="Zip Code"
        errors={res.getErrors('zipcode')}
        value={values.confirm}
        onBlur={handleBlur}
        onChange={handleChange}/>
    </Form>
  );
}

render(<App />, document.getElementById('root'));