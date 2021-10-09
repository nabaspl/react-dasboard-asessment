import react from 'react';
import './style.css';
import iconDelete from '../../assets/images/icon_delete_inactive.svg'
import iconEdit from '../../assets/images/icon_edit_active.svg'

export default function ItemsList(props){

    const handleEdit = id => {
        props.handelOnEdit(id);
      };    
      const handleDelete = id => {
        props.handelOnDelete(id);
      }; 
return <div className="list-group">
      
      <ul id={props.id}  className="list-ul">
                    {props.items.map((item,i) => (
                            <li key={i} className={`${props.isSelected}`}>
                                <div className="item-wrapper">
                                    <img src={props.itemIcon}/>
                                    <div className="about-item">
                                        <span className="safe-name">{item.safeName}</span>
                                        <span className="safe-last-updated-info">Last updated: 2 days ago • USER SAFE</span>
                                    </div>
                                    <div className="actions">
                                        <span className="action-icon-container">
                                            <img src={iconEdit} onClick={()=>handleEdit(item.safeId)}/>
                                        </span>
                                        <span className="action-icon-container">
                                            <img src={iconDelete} onClick={()=>handleDelete(item.safeId)}/>
                                        </span>                                       
                                    </div>
                                </div>
                            </li>
                    ))}
      </ul>
    </div>
}