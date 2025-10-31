import React from 'react'
import { logoIconsList } from '../constracts'


const LogoIcon = ({icon})=>{
      const [error, setError] = React.useState(false);
    return(
        <div className="flex-none flex-center marquee-item">
            <img src={icon.imgPath} alt={icon.name}  onError={() => {
          setError(true);
        }} />
        </div>
    )
}

const LogoSection = () => {
    
    console.log("logo",logoIconsList.imgPath);
  return (
    <div className='md:my-20 my-10 relative'> 
    <div className="gradient-edge"/>
    <div className="gradient-edge"/>
    <div className='marquee h-52'>
        <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon)=>{
                <LogoIcon key={icon.name} icon={icon}/>
            })}
             {logoIconsList.map((icon)=>{
                <LogoIcon key={icon.name} icon={icon}/>
            })}
            </div>
        </div>

    </div>

      
    
  )
}

export default LogoSection
