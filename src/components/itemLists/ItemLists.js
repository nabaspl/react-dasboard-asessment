import react from 'react';
import './style.css';

export default function ItemsList(props){
return <div className="list-group">
      
      <ul id={props.id}  className="list-ul">
                    {props.items.map((item,i) => (
                            <li key={i}>
                                <div className="item-wrapper">
                                    <img src={props.itemIcon}/>
                                    <div className="about-item">
                                        <span className="safe-name">{item.safeName}</span>
                                        <span className="safe-last-updated-info">Last updated: 2 days ago • USER SAFE</span>
                                    </div>
                                </div>
                            </li>
                    ))}
      </ul>
    </div>
}