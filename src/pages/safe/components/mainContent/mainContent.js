import React from "react";
import BannnerImg  from '../../../../assets/images/bannerImage.svg'
import addFolderIcon  from '../../../../assets/images/addFolderIcon.svg'
import './style.css'
export function MainContentBody(){
        return <div className="panel">
            <div className="panel-head">
                <span>Secrets</span>
                <span><img src={addFolderIcon}/></span>
            </div>
            <div className="panel-body"></div>
        </div>;
}

export function MainContentHead(props){
    return <div className="main-header" style={{ backgroundImage: `url(${BannnerImg})` }}>
            <div className="banner-safe-info">
                <h1>{props.safe.safeName}</h1>
                <p>{props.safe.safeDescription}</p>
            </div>
    </div>;
}