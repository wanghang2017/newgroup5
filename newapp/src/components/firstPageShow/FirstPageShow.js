import React from 'react';
import MainLBT from './MainLBT';
import MainMenu from './MainMenu';
import MainSpShow from './MainSpShow';
import MainStarShow from './MainStarShow';
export default class FirstPageShow extends React.Component{
    render(){
        return(
            <div className="container MainContainer">
                <MainLBT/>
                <MainMenu/>
                <MainSpShow/>
                {/*<MainStarShow/>*/}
            </div>
        )
    }
}
