import {Fragment} from 'react'
// import Shelbycar from './Components/shelbycar'         //1st way to import the Component
import { Shelbycar } from './Components/Shelbycar'        //2nd way to export the Component


function App() {
  return (
    //Either you can use <Fragment> or <>
    <>
      <Shelbycar/>
    </>
  )
}
export default App


