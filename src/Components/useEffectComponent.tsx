import { useState, useEffect } from 'react';
import { CardBody, CardFooter, CardHeader } from "reactstrap"


const UseEffectComponent = () => {
    const [value, setValue] = useState(1);

    useEffect(() => {
       const timer = window.setInterval(() => {
            setValue((v)=> v + 1);
        }, 1000)
        return () => window.clearInterval(timer)
    }, [])


    return (
        <div>
            <CardHeader>
                useEffect Demo
            </CardHeader>
            <CardBody className="bg-light">
                <div className="row my-3 justify-content-center">

                </div>
            </CardBody>
            <CardFooter>
                <div className="row">
                    <h5>Timer</h5>
                </div>
                <div className="row">
                    {value}
                </div>
            </CardFooter>
        </div>
    )
}

export default UseEffectComponent