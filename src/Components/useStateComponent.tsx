import { useState } from "react";
import { CardBody, CardFooter, CardHeader } from "reactstrap"

const useStateComponent = () => {
    const [array, setArray] = useState<number[]>([]);
    const [name, setName] = useState<string | null>(null);
    return (
        <div>
            <CardHeader>
                useState Demo
              </CardHeader>
            <CardBody className="bg-light">
                <div className="row my-3 justify-content-center">
                    <button onClick={() => setArray([...array, array.length + 1])}>
                        Add to array
                    </button>
                </div>
                <div className="row justify-content-center my-3">
                    <button onClick={() => setName("Brian")}>
                        Set Name
                    </button>
                </div>
            </CardBody>
            <CardFooter>
                <div className="row">
                    <h5>setArray results below</h5>
                </div>
                <div className="row">
                    <p>{JSON.stringify(array).split(",").join(" ")}</p>
                </div>
                <div className="row">
                    <h5>
                        setName Results below
                    </h5>
                </div>
                <div className="row">
                    {JSON.stringify(name)}
                </div>
            </CardFooter>
        </div>
    )
}

export default useStateComponent;