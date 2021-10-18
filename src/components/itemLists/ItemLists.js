import react,{useState} from 'react';
import './style.css';
import iconDelete from '../../assets/images/icon_delete_inactive.svg'
import iconEdit from '../../assets/images/icon_edit_active.svg'
import icon_folder from '../../assets/images/icon_folder.svg'
import { useSelector } from 'react-redux';
export default function ItemsList(props){
    const activeSafeId = useSelector((state) => state.SafeReducer.activeSafe);
    const handleEdit = id => {
        props.handelOnEdit(id);
      };    
      const handleDelete = id => {
        props.handelOnDelete(id);
      }; 
      const liClicked  = id =>{
        
        props.LiClickHandler(id);
      }
      
return <div className="list-group">
     
      <ul id={props.id}  className="list-ul safe-lists">
                    {props.items.map((item,i) => (
                            <li key={i} className={`${activeSafeId==item._id?'active':''}`} onClick={()=>liClicked(item._id)}>
                                <div className="item-wrapper">
                                    <img src={props.itemIcon}/>
                                    <div className="about-item">
                                        <span className="safe-name">{item.name}</span>
                                        <span className="safe-last-updated-info">{item.date}</span>
                                    </div>
                                    <div className="actions">
                                        <span className="action-icon-container"  onClick={()=>handleEdit(item._id)}>
                                            <img src={iconEdit}/>
                                        </span>
                                        <span className="action-icon-container"  onClick={()=>handleDelete(item._id)}>
                                            <img src={iconDelete} />
                                        </span>                                       
                                    </div>
                                </div>
                            </li>
                    ))}
      </ul>
    </div>
}

export function FolderList(props){

        
      const handleDelete = i => {
        props.handelOnDelete(i);
      }; 
return <div className="list-group">
      
      <ul id={props.id}  className="list-ul">
                    {props.items.map((item,i) => (
                            <li key={i} className="">
                                <div className="item-wrapper">
                                    <img src={icon_folder}/>
                                    <div className="about-item">
                                        <span className="safe-name">{item}</span>
                                    </div>
                                    <div className="actions-folder">
                                        <span className="action-icon-container" onClick={()=>handleDelete(item)}>
                                            <img src={iconDelete} />
                                        </span>                                       
                                    </div>
                                </div>
                            </li>
                    ))}
      </ul>
    </div>
}