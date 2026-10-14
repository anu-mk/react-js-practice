import { useContext } from 'react';
import UserContext from './UserContext'

const Comp3 = () => {
    let data=useContext(UserContext);
  return (
    <div>
        <h1>Hey i am component 3</h1>
        <p>confidential message {data}</p>
    </div>
  )
}

export default Comp3