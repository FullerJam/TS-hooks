import { Container } from "reactstrap"
//context imports
import { useState } from 'react'
import UserContext, {UserState} from './Services/userStore'
//context imports end
import UseStateComponent from "./Components/UseStateComponent"
import UseEffectComponent from "./Components/UseEffectComponent"
import UseContextComponent from "./Components/UseContextComponent"

const App = () => {
  const [users] = useState<UserState>({
    firstName:"James",
    lastName:"Fuller"
  })
  return (
    <UserContext.Provider value={users}>
      <Container>
        <div className="m-5">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h4>Typescript react hooks</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <UseStateComponent />
            </div>
            <div className="col-4">
              <UseEffectComponent />
            </div>
            <div className="col-4">
              <UseContextComponent/>
            </div>
          </div>
        </div>
      </Container>
    </UserContext.Provider>
  )
}

export default App
