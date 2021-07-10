import React from 'react';
import './menu-item.style.css';

export const MenuItem = ({title,imageUrl,color,size}) => {
    return(
           <div
           style={{backgroundImage:`url(${imageUrl})`}}
        //    style={{backgroundColor:`${color}`}}

           className={`${size} menu-item`}>
               <div className='background-image'
                style={{backgroundColor:`${color}`}}               
               />
               <div className='content'>
                  <h1 className='title'>{title}</h1>
                  <span className='subtitle'>SHOP NOW</span>
               </div>
            </div>
)
}