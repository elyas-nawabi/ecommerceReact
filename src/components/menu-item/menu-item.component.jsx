import React from 'react';
import './menu-item.style.css';
import { withRouter } from 'react-router-dom';
const MenuItem = ({title,imageUrl,color,size, history,linkUrl, match}) => {
    return(
           <div
           style={{backgroundImage:`url(${imageUrl})`}}
        //    style={{backgroundColor:`${color}`}}

           className={`${size} menu-item`}
           onClick={() => history.push(`${match.url}${linkUrl}`)}
           >
               <div className='background-image'
                style={{backgroundColor:`${color}`}}               
               />
               <div className='content'>
                  <h1 className='title'>{title}</h1>
                  <span className='subtitle'>SHOP NOW</span>
               </div>
            </div>
)
};
export default withRouter(MenuItem)