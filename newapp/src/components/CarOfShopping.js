import React from 'react';
export default class CarOfShopping extends React.Component{
    constructor(props){
        super(props);
        let state = {};
    }
    handleMouseMove=()=>{
        let{CosDetail}=this.refs;
        // CosDetail.style.display="block";
        CosDetail.style.height=100+"px";
    };
    handleMouseLeave=()=>{
        let{CosDetail}=this.refs;
        // CosDetail.style.display="none";
        CosDetail.style.height=0;
    };
    render(){
        return (
            <div className="CosBox">
                <a href="#" onMouseOver={this.handleMouseMove} onMouseLeave={this.handleMouseLeave}>
                    <i></i>
                    购物车
                    <span>(0)</span>
                </a>
                <div className="CosDetail" ref="CosDetail">
                    购物车里还没有商品，赶紧选购吧
                </div>
            </div>
        )
    }
}