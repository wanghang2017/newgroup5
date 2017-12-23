import React from 'react';
export default class MainMenu extends React.Component{
    constructor(props){
        super(props);
        this.state={
            title:['手机 电话卡','笔记本','电视 盒子','路由器 智能硬件','移动电源 电池 插线板','耳机 音响','保护套 贴膜','线材 支架 存储卡','箱包 服饰 鞋 眼睛','米兔 生活周边'],
            detail:[{key:0,state:true,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'},{img:require("../../img/mix2-80.png"),  name:'小米Mix 2'},{img:require("../../img/xm6_80.png"),  name:'小米6'}]},
                {key:1,state:false,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'},{img:require("../../img/mix2-80.png"),  name:'小米Mix 2'},{img:require("../../img/xm6_80.png"),  name:'小米6'}]},
                {key:2,state:false,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'},{img:require("../../img/mix2-80.png"),  name:'小米Mix 2'},{img:require("../../img/xm6_80.png"),  name:'小米6'},{img:require("../../img/80pc-5x.png"),  name:'小米5X'}]},
                {key:2,state:false,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'},{img:require("../../img/mix2-80.png"),  name:'小米Mix 2'},{img:require("../../img/xm6_80.png"),  name:'小米6'},{img:require("../../img/80pc-5x.png"),  name:'小米5X'}]},
                {key:2,state:false,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'},{img:require("../../img/mix2-80.png"),  name:'小米Mix 2'}]},
                {key:2,state:false,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'},{img:require("../../img/mix2-80.png"),  name:'小米Mix 2'},{img:require("../../img/xm6_80.png"),  name:'小米6'},{img:require("../../img/80pc-5x.png"),  name:'小米5X'}]},
                {key:3,state:false,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'}]},
                {key:4,state:false,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'}]},
                {key:5,state:false,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'}]},
                {key:6,state:false,list:[{img:require('../../img/note3-80-2.png'), name:'小米note 3'}]}
            ],
            width:265,
        }
    }

    handleMouseOver=(event)=>{
        let cur = event.target;
        if(cur.tagName==="LI"){
            let newKey = parseFloat(cur.getAttribute('data-key')),
                detail = this.state.detail,
                width = 265;
            cur.classList.add('select');
            this.refs.MainMenuRightBox.style.display="block";
            detail.map((item,key)=>{
                if(key===newKey){
                    item.state=true;
                    width = width*(item.list.length);
                    width = width>=992?992:width;
                }else{
                    item.state=false;
                }
                return item;
            });
            this.setState({
                title:this.state.title,
                detail:detail,
                width:width
            });
        }
    };
    handleMouseOut=(event)=>{
        let cur = event.target;
        if(cur.tagName==="LI"){
            cur.classList.remove('select');
            this.refs.MainMenuRightBox.style.display="none";
        }
    };
    render(){
        return (<div className="MainMenuBox">
            <ul className="MainMenuLeftBox" onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                {
                    this.state.title.map(function (item,key) {
                        return <li key={key} data-key={key}>{item}</li>
                    })
                }
            </ul>
            <div className="MainMenuRightBox clearfix" ref="MainMenuRightBox" style={{width:this.state.width+"px"}}>
                {this.state.detail.map((item,index)=>{
                    if(item.state===true){
                        return item.list.map((inner,key)=> {
                            return <ul key={key} style={{width:this.state.width/item.list.length+'px'}}><li className="MainMenuRightSlide">
                                <a href="#">
                                    <img src={inner.img} alt=""/>
                                    <span className="">{inner.name}</span>
                                </a>

                            </li></ul>
                        });

                    }
                })}
            </div>
        </div>)
    }
}