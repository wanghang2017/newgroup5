import React from'react';
export default class MainLBT extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:[{src:require('../../img/xmad_151325786593_PlIVg.jpg'), url:"#"},{src:require('../../img/xmad_15039951895346_BYpul.jpg'), url:"#"},{src:require('../../img/xmad_15128963940496_dTEbu.jpg'), url:"#"},{src:require('../../img/xmad_15130880786619_gqrmF.jpg'), url:"#"},{src:require('../../img/xmad_15131652928627_awzRZ.jpg'), url:"#"}],
            index:1,
        };

    }
    /*
    * 后期可以通过props进行轮播图组件的优化，提高适配性
    * */
    componentWillMount(){
        //=>获取数据
    }
    componentDidMount(){
        //=>自动轮播
        this.autoTimer=setInterval(this.change,3000);
    }
    //=>轮播
    change=()=>{
        let index = this.state.index;
        index++;
        /*
        * setState（）首先会存起来
        * */
        if(index>this.state.content.length){
            this.refs.MLBTcontainer.style.transition="left 0s";
            this.setState({content:this.state.content,index:0});
            setTimeout(()=>{
                this.setState({content:this.state.content,index:1},function () {
                    this.refs.MLBTcontainer.style.transition="left 1s";
                });
            },1);
           return;
        }
        this.setState({content:this.state.content,index:index});
    };
    //=>左右点击事件
    handleClick=()=>{
        console.log("hah");
        let index = this.state.index;
        index--;
        if(index<0){
            this.refs.MLBTcontainer.style.transition="left 0s";
            this.setState({content:this.state.content,index:5});
            setTimeout(()=>{
                this.setState({content:this.state.content,index:4},function () {
                    this.refs.MLBTcontainer.style.transition="left 1s";
                });
            },1);
            return;
        }

        this.setState({content:this.state.content,index:index});
    };
    //=>停止轮播
    handleMouseEnter=()=>{
        clearInterval(this.autoTimer);
    };
    //=>继续轮播
    handleMouseLeave=()=>{
        this.autoTimer = setInterval(this.change,3000);
    };
    render(){
        let left = -1226*this.state.index+'px';
        let newIndex = this.state.index===5?0:this.state.index;
        return (
                <div className="MLBTwrapper" ref="MLBTwrapper" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <ul className="MLBTcontainer" ref="MLBTcontainer" style={{left:left}}>

                        {
                            this.state.content.map((item,index)=>{
                                return <li className="MLBTslide" key={index}>
                                    <a href={item.url}>
                                        <img src={item.src} alt=""/>
                                    </a>
                                </li>
                            })
                        }
                        {
                            <li className="MLBTslide">
                                <a href={this.state.content[0].url}>
                                    <img src={this.state.content[0].src} alt=""/>
                                </a>
                            </li>
                        }

                        {/*<li className="MLBTslide">
                            <a href="#">
                                <img src={} alt=""/>
                            </a>
                        </li>
                        <li className="MLBTslide">
                            <a href="#">
                                <img src={} alt=""/>
                            </a>
                        </li>
                        <li className="MLBTslide">
                            <a href="#">
                                <img src={} alt=""/>
                            </a>
                        </li>
                        <li className="MLBTslide">
                            <a href="#">
                                <img src={} alt=""/>
                            </a>
                        </li>
                        <li className="MLBTslide">
                            <a href="#">
                                <img src={require('../../img/xmad_151325786593_PlIVg.jpg')} alt=""/>
                            </a>
                        </li>*/}
                    </ul>
                    <div className="MLBTfocusBox">
                        <ul>
                            {
                                this.state.content.map((item,index)=>{
                                    return <li key={index}><a href="javascript:;" className={newIndex===index?"select":""}> </a></li>;
                                })
                            }


                            {/*<li><a href="javascript:;"> </a></li>
                            <li><a href="javascript:;"> </a></li>
                            <li><a href="javascript:;"> </a></li>
                            <li><a href="javascript:;"> </a></li>*/}
                        </ul>
                    </div>
                    <div className="MLBTarrowLeft" onClick={this.handleClick}><a href="javascript:;"><i></i></a></div>
                    <div className="MLBTarrowRight" onClick={this.change}><a href="javascript:;"><i></i></a></div>
                </div>

        )
    }
}