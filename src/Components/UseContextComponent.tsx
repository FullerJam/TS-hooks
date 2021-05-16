import UserContext from '../Services/userStore'
import { useContext, useState } from 'react'
import { CardBody, CardFooter, CardHeader } from "reactstrap"

const UseContextComponent = () => {
    const users = useContext(UserContext);
    return (
        <div>
            <CardHeader>
                useContext Demo
            </CardHeader>
            <CardBody className="bg-light">
                <div className="row my-3">
                    <div className="col-12">
                        {users.firstName}
                    </div>
                </div>
            </CardBody>
            <CardFooter>
                <div className="row">
                    <div className="col-12">
                        {users.lastName}
                    </div>
                </div>
            </CardFooter>
        </div>
    )
}

export default UseContextComponent