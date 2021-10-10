import React, { Component } from 'react';
import MainWrapper from '../../components/main/wrapper/mainWrapper';
import SideNav from '../../components/sideNav/sideNav';
import MainContents from '../../components/mainContent/mainContent';
import {useLocation} from "react-router-dom";

function Vault(){
    const useQuery =()=> {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let pageName=query.get("name");
    let age=query.get("age");
    let address=query.get("address");
    
        return  <MainWrapper>
                    <SideNav></SideNav>
                    <MainContents>
                        <h1>{pageName}</h1>
                        {age}
                        {address}
                    </MainContents>
                </MainWrapper>;
    
}
 
export default Vault;