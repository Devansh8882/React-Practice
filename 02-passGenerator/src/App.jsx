import { useState , useCallback, useEffect} from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(6);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password, setPassword] = useState("");
  const [copyPass, setCopyPass] = useState("");
  const [IsPressed, setIsPressed] = useState(false);

  const copypassFunction = () => {

    console.log("clicked on copy button ");
    console.log(copyPass);
    
    window.navigator.clipboard.writeText(copyPass);
    
  }
  const generatePassword = useCallback(()=> {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    


    if(number) str = str + "1234567890"; 

    if(character) str = str + "~!@#$%^&*[]{}`?" ; 

    // console.log(str);
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
      // console.log(pass);
      
    }
    
    setPassword(pass);
    setCopyPass(pass);

  } ,[length,number,character]);

  // react through error if we not use hook named use effect as react handel function defination by itself i.e. the control is in hte hands of react.

  useEffect(()=>{
    generatePassword()
  },[length,number,character,generatePassword]);

  return (
   <>
   <div className='w-full shadow-md max-w-md bg-gray-600 center mx-auto my-30 rounded-4xl py-4 px-8 text-orange-400 text-center '> 
      <div className='text-white   text-center text-lg font-bold'>Password Generator</div>
    <div className=' flex rounded-lg shadow  overflow-hidden mb-4'>
      <input type="text" 
      placeholder='password' 
      className=' bg-white outline-none w-full py-1 px-3' 
      value={password} 
      readOnly/>
    <button className={`transition-colors  ${ IsPressed ? 'bg-red-500' : 'bg-blue-500'} text-white px-3 py-2 outline-none  shrink-0`}  onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}  onMouseLeave={() => setIsPressed(false)} onClick={copypassFunction}>copy</button></div>
   <div className='flex items-center gap-x-1'> 
    <input className='w-20 cursor-pointer' type="range" min={6} max={18} 
    value={length}
    onChange={(e)=>{setLength(e.target.value)}}
    /> <span className='m-1.5'>{length}</span>
    <input type="checkbox" defaultChecked={character} name="character" id="char" value = "true" onChange={() => setCharacter((prev) => !prev)}/> <span className='w-full mt-1.5'>Add Character's</span> 
    <input type="checkbox" defaultChecked ={number} name="number" id="num" value = "true" onChange={() => setNumber((prev) => !prev)} /> <span className='w-full mt-1.5' >Add Number's </span>
    </div>
    </div>
    </>
  )
}
  
export default App


// ignore the error the code is perfectly fine.