

function Button({label , borderColor, bgColor, TextColor, borderSize}){
    
return(
    <button className={`border 
        ${borderColor ? borderColor : "border-blue-400"}
     ${bgColor ? bgColor : "bg-white"}
      ${TextColor ? TextColor : "text-black"}
       ${borderSize ? borderSize : "border-0"} 
       bg-white border-blue-400 rounded-md p-1 px-4 m-4`}>{label}</button>
)
}


export default Button;