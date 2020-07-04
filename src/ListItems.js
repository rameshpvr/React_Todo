import React from 'react'
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props) {
    const itemlist = props.itemlist;
    const deleteItem = props.deleteItem;
    const OnEditChange = props.OnEditChange;
    // const list = itemlist.map((item) => 
    // {
    //     return <div key={item.key}>
    //     <p>{item.text}</p>
    //     </div>  
    // });
    return (
        <FlipMove duration={300} easing="ease-in-out">
            {
                itemlist.map((item) => {
                    return(
                        <div key={item.key} className="list">
                          <p>
                            <input type="text" id={item.key} value={item.text} onChange={(event) => OnEditChange(event.target.value,item.key)} />
                            <span>
                                <FontAwesomeIcon className="faicons" icon="trash" onClick={() => deleteItem(item.key)} />
                            </span>
                          </p>
                          
                        </div>
                    )
                })
            }
        </FlipMove>
    )
}

export default ListItems
