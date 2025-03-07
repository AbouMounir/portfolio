export default function FormGroup({label,isRequiered,value, setValue,inputName}) {
    
    return (
        <div className="w-full flex flex-col gap-2">
            <label htmlFor=""> {label} {isRequiered ? <span className="text-red-500">*</span> : ''} </label>
            <input className="w-full p-3 border-2 rounded-md focus:outline-0 focus:border-blue-500" name={inputName} value={value} onChange={setValue} type="text" placeholder={label} />
        </div>
    )
}