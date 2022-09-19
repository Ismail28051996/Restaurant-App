import React from 'react'
import Restaurant, {restaurant} from './component/basics/Restaurant';

const App = () => {
  return (
    <> {/*Synthetic Sugar format*/}
    <Restaurant /> {/*way to Calling  component*/}
    {/* <h1>Hello World {5+50}</h1>In curly braces we can write javascript in JSX */}
    {/* <p>Awesome ReactJs</p> */}
  </>  
  )  
}

export default App;
