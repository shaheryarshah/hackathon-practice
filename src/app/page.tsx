import Category from "./Components/category"
import Hero from "./Components/hero"
import Bestselling from "./Components/bestseling"
import { Exploreproduct } from "./Components/exploreproduct"
export default function Home () {
  return (<div>
<div>
<Hero/>
   </div>
   <div>
    <Category/>
   </div>
   <div>
    <Bestselling/>
   </div>
   <div>
    <Exploreproduct/>
   </div>


  
   </div> 
  )
}