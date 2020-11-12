eslint-disable no-eval;
import React from 'react';

//import any files that we need to include here

export default function HomePage (){

return (
<Container>
<div>
<h1 style={{fontSize:30 }}>hello, welcome to the community.</h1>
</div>
<div>
    <span></span>
</div>
<div>
<Button variant="primary" size="lg" active>
    Volunteer 
  </Button>{' '}
  <Button variant="primary" size="lg" active>
    Organization
  </Button>

<h3> Sign up button here...</h3>
<Signup/> 

<h3> Sign in button here...</h3>
<Signin/>

</div>
</Container>
)
}
