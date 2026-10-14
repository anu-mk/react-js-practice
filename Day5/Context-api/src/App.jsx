import Comp1 from './Comp1'
import UserContext from './UserContext';

const App = () => {
  let pass="anu@123"
  return (
    <UserContext.Provider value={pass}>
      <h1>Hey i am app component</h1>
      <Comp1/>

    </UserContext.Provider>
  )
}


export default App