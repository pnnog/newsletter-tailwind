
const TextField = ({label, type, getValue, value}) =>{
  const lowerLabel =  label.toLowerCase() 
 
  
  return(
    <div className='flex flex-col gap-2 w-full'>
      <label 
        htmlFor={lowerLabel} 
        className="text-gray-200 text-lg">
        {label}:
      </label>
      
      <input 
        required 
        type={type || 'text'} 
        id={lowerLabel} 
        name={lowerLabel} 
        placeholder={`Digite o ${lowerLabel}`}
        className="custom-input"
        onChange={(e)=> getValue(e.target.value)} value={value}/>
    </div>

  )
}

export default TextField