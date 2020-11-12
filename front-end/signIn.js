// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import UserForm from './components/Form/index.jsx'

// const NotApp = () => {
//   const [values, setValues] = useState({});
//   const [res,setRes] = useState(vest.get('NewUser'));

//   const handleChange = ({ target: { name, value }}) => {
//     const nextFormState = {
//       ...values,
//       [name]: value
//     }
    
//     setValues(nextFormState);

//     if (res.hasErrors(name)) {
//       setRes(validate(nextFormState, name))
//     }
//   }

//   return(
//     <UserForm
//     cancel={this.cancel}
//     errors={errors}
//     submit={this.submit}
//     passwordErrors={confirmed}
//     submitButtonText="Sign In"
//     elements ={() => (
//       <React.Fragment>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Control
//           type="email"
//           name="email"
//           value={email}
//           placeholder="name@example.com"
//           onChange={this.change}
//           />

//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Control
//           type="password"
//           name="password"
//           value={password}
//           placeholder="password"
//           onChange={this.change}
//           />
//         </Form.Group>
//       </React.Fragment>
//     )}
//     />
//   );
  

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// //reportWebVitals()
// }
