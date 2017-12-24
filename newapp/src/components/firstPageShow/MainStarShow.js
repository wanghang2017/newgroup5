import React from 'react';
export default class MainStarShow extends React.Component{
    /*
    * auto: 是否支持自动轮播
    * autoDuring:自动轮播的单位时间
    * wrapper:外层盒子的样式
    * cotainer:里层盒子的样式类
    * hasFocus:是否有焦点
    * hasArrow:是否有左右箭头
    * slides:[] 有多少个就生成多少个slide
    * */
    constructor(props){
        super(props);
        // this.state={}
        let {auto,autoDuring} = props.params;
        this.auto = auto;
        this.autoDuring = autoDuring;
        this.autoTimer = null;
        this.state={
            index:0
        }
    }

    handleOnClick = ()=>{

    };
    //=>轮播
    change=()=>{
        let index = this.state.index;
        index++;
        console.log(index);
        if(index>this.state.content.length){
            this.refs.WHcontainer.style.transition="left 0s";
            this.setState({content:this.state.content,index:0});
            setTimeout(()=>{
                this.setState({content:this.state.content,index:1},function () {
                    this.refs.WHcontainer.style.transition="left 1s";
                });
            },1);
            return;
        }
        this.setState({content:this.state.content,index:index});
    };
    //=>(根据是否轮播判断是否绑定  停止轮播和继续轮播)
    //=>停止轮播
    handleMouseEnter=()=>{
        clearInterval(this.autoTimer);
    };
    //=>继续轮播
    handleMouseLeave=()=>{
        this.autoTimer = setInterval(this.change,this.autoDuring);
    };
    componentWillMount(){
        //=>获取数据
    }
    componentDidMount(){
        //=>自动轮播
        // this.autoTimer=setInterval(this.change,this.autoDuring);
        if(this.auto){
            this.autoTimer =  setInterval(
                this.change
            ,this.autoDuring);
        }
    }
    render(){
        let left = 1226*this.state.index+"px";
        return (<div className="WHwrapper">
            <ul className="WHcontainer" ref="WHcontainer">
                <li className="WHslide" style={{background:"red"}}>1</li>
                <li className="WHslide" style={{background:"blue"}}>2</li>
            </ul>
        </div>)
    }
}