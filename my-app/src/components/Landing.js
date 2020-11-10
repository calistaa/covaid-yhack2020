import Rreact from 'react';
import { Jumbotron, Button } from 'reactstrap';

const Jumbotron = () => {
    return (
        <div>
            <Jumbotron>
                <h1 classname="display-3">hello, welcome to our community!</h1>
                <p className = "lead"> I am a: </p>
                <p classname = "lead">
                    <Button color = "primary">Volunteer</Button>
                </p>
                <p classname = "lead">
                    <Button color = "primary">Organization</Button>
                </p>
            </Jumbotron>
        </div>
    )
}
