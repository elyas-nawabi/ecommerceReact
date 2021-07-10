import React,{Component} from 'react';
import { MenuItem } from '../menu-item/menu-item.component';
import './directory.styles.css';

class Directory extends React.Component{
constructor(){
    super();
    this.state = {
       sections :  [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
          color: 'red'
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
          color: 'dodgerBlue'

        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
          color: '#ffbc00'

        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
          color: 'tomato'

        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
          color: 'pink'
          
        }
      ]
    };     
}
    render(){
        return(
            <div className="directory-menu">
               {this.state.sections.map(({id,imageUrl,title,color,size}) => (
                <MenuItem id={id} title={title} 
                imageUrl={imageUrl} color={color}
                size={size}
                />
               ))
               }
            </div>
            );
        }
}
export default Directory;