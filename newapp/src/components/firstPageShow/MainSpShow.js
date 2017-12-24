import React from 'react';
export default class MainSpShow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            left:[{content:'选购手机',href:''},{content:'企业团购',href:''},{content:'F码通道',href:''},{content:'米粉卡',href:''},{content:'以旧换新',href:''},{content:'话费充值',href:''}],
            right:[
                {img:require('../../img/xmad_15133438301948_hebvN.jpg'),href:''},
                {img:require('../../img/xmad_15130875291593_NfXzw.jpg'),href:''},
                {img:require('../../img/xmad_15120441868462_gnUsB.jpg'),href:''}]
        };
    }
    handleMouseOver =  (event)=> {
        let target = event.target;
        if(target.tagName==="IMG"){
            target = target.parentNode.parentNode;
            // console.log(target);
        }
        if(target.tagName==='A'){
            target = target.parentNode;
        }
        if(target.tagName ==='LI'){
            // target.style.boxShadow='0 15px 30px rgba(0,0,0,0.1)';
        }
    };
    handleMouseOut =  (event)=> {
        let target = event.target;
        if(target.tagName==="IMG"){
            target = target.parentNode.parentNode;
            // console.log(target);
        }
        if(target.tagName==='A'){
            target = target.parentNode;
        }
        if(target.tagName ==='LI'){
            target.style.boxShadow='';
        }
    };
    render(){
        return (<div className="MainSpShow container">
            <div className="MainSpLeftBox">
                <ul >
                    {this.state.left.map((item,index)=>{
                        return <li key={index} >
                            <a href="#"><i>{item.content[0]}</i>{item.content}</a>
                        </li>
                    })}

                </ul>
            </div>
            <div className="MainSpRightBox">
                <ul onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    {
                        this.state.right.map((item,index)=>{
                            return <li key={index} style={index===0?{marginLeft:'0px'}:{}} >
                                <a href="#">
                                    <img src={item.img} alt=""/>
                                </a>
                            </li>
                        })
                    }
                </ul>

            </div>
        </div>);
    }
}