
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
                            <li key={i} className={`${activeSafeId===item._id?'active':''}`} onClick={()=>liClicked(item._id)}>
                                <div className="item-wrapper">
                                    <img className="safe-icon-img" src={props.itemIcon} alt="safe icon"/>
                                    <div className="about-item">
                                        <span className="safe-name">{item.name}</span>
                                        <span className="safe-last-updated-info">{item.date}</span>
                                    </div>
                                    <div className="actions">
                                        <span className="action-icon-container"  onClick={()=>handleEdit(item._id)}>
                                            <img src={iconEdit} alt="edit"/>
                                        </span>
                                        <span className="action-icon-container"  onClick={()=>handleDelete(item._id)}>
                                            <img src={iconDelete} alt="delete"/>
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
      
      <ul id={props.id}  className="list-ul folder-list">
                    {props.items.map((item,i) => (
                            <li key={i} className="">
                                <div className="item-wrapper">
                                    <img src={icon_folder} alt="folder-iocn"/>
                                    <div className="about-item">
                                        <span className="safe-name">{item}</span>
                                    </div>
                                    <div className="actions-folder">
                                        <span className="action-icon-container" onClick={()=>handleDelete(item)}>
                                            <img src={iconDelete} alt="delete" />
                                        </span>                                       
                                    </div>
                                </div>
                            </li>
                    ))}
      </ul>
    </div>
}