import React from 'react';
import LHsearch from './LHsearch';
export default class LogHeader extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:['小米手机','红米','笔记本','电视','盒子','新品','路由器','智能硬件','服务','社区'],
            detail:[{key:0,state:true,list:[{img:require('../img/3205a.png'), isNew:true, name:'小米6', price:2299},{img:require("../img/3205a.png"), isNew:true, name:'小米6', price:2299}]},
                    {key:1,state:false,list:[{img:require("../img/3205a.png"), isNew:true, name:'红米5', price:999}]},
                    {key:2,state:false,list:[{img:require("../img/3205a.png"), isNew:true, name:'小米笔记本Air 13.3" 独显', price:5199}]},
                    {key:3,state:false,list:[{img:require("../img/3205a.png"), isNew:true, name:'小米电视6A 65英寸', price:4999}]},
                    {key:4,state:false,list:[{img:require("../img/3205a.png"), isNew:true, name:'小米盒子3增强版', price:449}]},
                    {key:6,state:false,list:[{img:require("../img/3205a.png"), isNew:true, name:'小米WIFI放大器 2', price:49}]},
                    {key:7,state:false,list:[{img:require("../img/3205a.png"), isNew:true, name:'米家压力IH电饭煲', price:999}]}
            ]
        }
    }

    handleMouseOver=(event)=>{
        if(event.target.tagName==="A"){
            // console.log(event.target);
            // console.log(event.target.parentNode);
            let newkey = parseFloat(event.target.getAttribute("data-key"));
            // console.log(newkey);
            let detail = this.state.detail;
            detail.map((item,key)=>{
                if(item.key===newkey){
                    this.refs.LHDcontainer.style.height="229px";
                    this.refs.LHDcontainer.style.boxShadow="0 3px 4px rgba(0,0,0,0.18)";
                    this.refs.LHDcontainer.style.borderTop="1px solid #e0e0e0";
                    item.state=true;
                }else{
                    item.state=false;
                }
                return item;
            });
            this.setState({
                content:this.state.content,
                detail:detail,
            });
        }
    };
    handleMouseOut=(event)=>{
        if(event.target.tagName==="A"){
            this.refs.LHDcontainer.style.height="0px";
            this.refs.LHDcontainer.style.boxShadow="";
            this.refs.LHDcontainer.style.borderTop="";
        }
    };
    render(){
        return (
            <div className="logHeader">
            <div className="container clearfix">
                <div className="LHlogo"><a href="#">小米官网</a></div>
                <div className="LHnav" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    {
                        this.state.content.map(function (item,key) {
                            return <a href="#" key={key} data-key={key}>{item}</a>
                        })
                    }
                </div>

                <LHsearch/>
            </div>
                <div className="LHDcontainer" ref="LHDcontainer">
            <ul className="container">
            {this.state.detail.map((item,index)=>{

                if(item.state===true){
                    // console.log(item);
                    return item.list.map((inner,key)=> {
                        // console.log(inner.img);
                        return <li key={key} className="LHDslide">
                            <a href="#" className={key===item.list.length-1?"LHDimgBox LHDnob":"LHDimgBox"}>
                                <img src={inner.img} alt=""/>
                            </a>
                            <a href="#" className="LHDTitle">{inner.name}</a>
                            <span className="LHDprice">{inner.price}元起</span>
                            <div className={inner.isNew?("flag "+"show"):"flag"}>新品</div>
                        </li>
                    });

                }
            })}

    </ul>
    </div>
            </div>
        )
    }
}