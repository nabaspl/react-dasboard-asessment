import React, { useState,useEffect } from 'react';
import MainWrapper from '../../components/main/wrapper/mainWrapper';
import SideNav from '../../components/sideNav/sideNav';
import MainContents from '../../components/mainContent/mainContent';
import SideNavTop from '../../components/sideNavTop/sideNavTop';
import SideNavBody from '../../components/sideNavBody/sideNavBody';
import './style.css';
import {SideNavTopContent,SideNavBodyContent} from './components/sideNavContents/sideNavContent'
import {MainContentHead,MainContentBody} from './components/mainContent/mainContent'


import { useSelector } from "react-redux";
function Safe(){
    const safes = useSelector((state) => state.SafeReducer.safes);
    const activeSafeId = useSelector((state) => state.SafeReducer.activeSafe);
    let secrets,currentSafe,safe;
    if(activeSafeId){
        currentSafe = safes.filter((safe) => safe.safeId == activeSafeId);
        safe=currentSafe.length?currentSafe[0]:[];
        secrets =safe?safe.secrets:[];
    }
    
        
        return  <MainWrapper>
                    <SideNav>
                        <SideNavTop>
                            <SideNavTopContent safesCount={safes.lenght}/>
                        </SideNavTop>
                            
                        <SideNavBody>
                            <SideNavBodyContent/>
                        </SideNavBody>
        
                    </SideNav>
                    <MainContents>
                       <MainContentHead safe={safe}/>
                       <MainContentBody safe={safe} secrets={secrets}/>
                    </MainContents>
                    
                </MainWrapper>;
   
}



export default Safe;