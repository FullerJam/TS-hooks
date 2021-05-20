import { Container } from "reactstrap"
//context imports
import { useState } from 'react'
import UserContext, {UserState} from './Services/userStore'
//context imports end
import UseStateComponent from "./Components/UseStateComponent"
import UseEffectComponent from "./Components/UseEffectComponent"
import UseContextComponent from "./Components/UseContextComponent"
import UseCustomHookComponent from "./Components/UseCustomHookComponent"

const App = () => {
  const [users, setUsers] = useState<UserState>({
    firstName:"James",
    lastName:"Fuller"
  })
  return (
    <UserContext.Provider value={users}>
      <Container>
        <div className="m-5">
          <div className="row">
            <div className="col-12 text-center">
              <h4>Typescript react hooks</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 my-4 my-md-0">
              <UseStateComponent />
            </div>
            <div className="col-md-4 my-4 my-md-0">
              <UseEffectComponent />
            </div>
            <div className="col-md-4 my-4 my-md-0">
              <UseContextComponent/>
            </div>
          </div>
          <div className="row my-md-5">
            <div className="col-md-4 my-4 my-md-0">
              <UseCustomHookComponent/>
            </div>
            <div className="col-md-4 my-4 my-md-0"></div>
            <div className="col-md-4 my-4 my-md-0"></div>
          </div>
        </div>
      </Container>
    </UserContext.Provider>
  )
}

export default App
