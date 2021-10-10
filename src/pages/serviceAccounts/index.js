import React, { Component } from 'react';
import MainWrapper from '../../components/main/wrapper/mainWrapper';
import SideNav from '../../components/sideNav/sideNav';
import MainContents from '../../components/mainContent/mainContent';
import {useLocation} from "react-router-dom";
function ServiceAccount(){
    const useQuery =()=> {
        return new URLSearchParams(useLocation().search);
    }
    let query = useQuery();
    let pageName=query.get("name");
    
        return  <MainWrapper>
                    <SideNav>
                        <p>{pageName}</p>
                    </SideNav>
                    <MainContents>
                    </MainContents>
                </MainWrapper>;
    
}
 
export default ServiceAccount;