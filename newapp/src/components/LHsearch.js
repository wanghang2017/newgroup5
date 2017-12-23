import React from 'react';
export default class LHsearch extends React.Component{
    constructor(props){
        super(props);
        this.state={
            content:[{
                name:'小米手机6',
                num:'24'
            },{
                name:'小米手机6',
                num:'24'
            },{
                name:'小米手机6',
                num:'24'
            },{
                name:'小米手机6',
                num:'24'
            },{
                name:'小米手机6',
                num:'24'
            },{
                name:'小米手机6',
                num:'24'
            },{
                name:'小米手机6',
                num:'24'
            },{
                name:'小米手机6',
                num:'24'
            },{
                name:'小米手机6',
                num:'24'
            },{
                name:'小米手机6',
                num:'24'
            }]
        }
    }
    handleFocus = (event)=>{
        event.preventDefault();
        let{LHsearch,LHSbtn,LHSinner,LHSdown} =this.refs;
        LHSdown.style.display="block";
        // LHSdown.style.opacity=1;
        LHsearch.style.border="1px solid #ff6700";
        LHSbtn.style.borderColor="#ff6700";
        LHSdown.style.borderColor="#ff6700";
        LHSinner.style.opacity=0;
    };
    handleBlur = (event)=>{
        event.preventDefault();
        let{LHsearch,LHStext,LHSbtn,LHSinner,LHSdown} =this.refs;
        console.dir(LHStext);
        LHSdown.style.display="none";
        // LHSdown.style.display=0;
        LHsearch.style.border="1px solid #e0e0e0";
        LHSbtn.style.borderColor="#e0e0e0";
        LHSdown.style.borderColor="#e0e0e0";
        LHSinner.style.opacity=1;
    };
    render(){
        return (
            <div className="LHsearch" ref="LHsearch">
                <input type="text" ref="LHStext" className="LHStext" onFocus={this.handleFocus} onBlur={this.handleBlur}/>
                <input type="button" ref="LHSbtn" className="LHSbtn" />
                <div className="LHSinner" ref="LHSinner"><a href="#">红米5 新品</a><a href="#">小米note3</a></div>
                <div className="LHSdown" ref="LHSdown">
                    <ul className="LHSwrapper" >
                        {this.state.content.map(function (item,index) {
                            return <li className="LHSslide" key={index}>
                                <a href="#">
                                    {item.name}
                                    <span>约有{item.num}件</span>
                                </a>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}