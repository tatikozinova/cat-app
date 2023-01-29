import { useState } from 'react';
import { data } from './data';
import './App.css';

function App() {
 const[cat, setCat] = useState(0);
 const{catBreed, image, description}=data[cat];
 

 const[showMore, setShowMore]=useState(false);
  const[showText, setShowText]=useState(false);

 const showTextClick=(element)=>{
  element.showMore=!element.showMore
  setShowText(!showText)
 }

 const previousCat=()=>{
  setCat((cat=>{
    cat --;
    if(cat<0) {
      return data.length -1;
    }
    return cat;
  }))
 }

const nextCat=()=>{
  setCat((cat=>{
    cat ++;
    if(cat>data.length -1){
      cat=0
    }
    return cat;
  }))
}

return (<div>


  <div className='container'>
    <img src={image} width="300px" alt="kitty"/>
  </div>

  

  <div className='container'>
    <h2>{catBreed}</h2>
  </div>

  <div className='container'>
    <h2>{description}</h2>
  </div>

  <div className='container'>
      <p>{showMore ? description : description.substring(0,40)+'...'}<button onClick={()=>showTextClick(element)}>{showMore ? 'Show less' : 'Show more'}</button></p>
    </div>


  <div className='btn container'>
    <button onClick={previousCat}>Previous</button>
    <button onClick={nextCat}>Next</button>
  </div>
</div>)

}

export default App;
