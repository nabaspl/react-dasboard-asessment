import React, { useState } from 'react';
import MainWrapper from '../../components/main/wrapper/mainWrapper';
import SideNav from '../../components/sideNav/sideNav';
import MainContents from '../../components/mainContent/mainContent';
import SideNavTop from '../../components/sideNavTop/sideNavTop';
import SideNavBody from '../../components/sideNavBody/sideNavBody';
import './style.css';
import {SideNavTopContent,SideNavBodyContent} from './components/sideNavContents/sideNavContent'

import {useSelector} from 'react-redux'


function Safe(){

    

        
        return  <MainWrapper>
                    <SideNav>
                        <SideNavTop>
                            <SideNavTopContent safesCount={0}/>
                        </SideNavTop>
                            
                        <SideNavBody>
                            <SideNavBodyContent itemLists={items}/>
                        </SideNavBody>
        
                    </SideNav>
                    <MainContents>
                       
                    </MainContents>
                    
                </MainWrapper>;
   
}



export default Safe;