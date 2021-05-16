import { Container } from "reactstrap"
import UseStateComponent from "./Components/useStateComponent"
import UseEffectComponent from "./Components/useEffectComponent"

const App = () => {
  return (
    <Container>
      <div className="m-5">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h4>Typescript react hooks</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <UseStateComponent/>
          </div>
          <div className="col-4">
            <UseEffectComponent/>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </Container>
  )
}

export default App
