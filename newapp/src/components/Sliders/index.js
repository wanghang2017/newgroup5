import React, {Component} from 'react';
import {render} from 'react-dom';

import SliderItem from './SliderItem';

class Sliders extends Component{
    constructor(){
        super();
        this.state = {
            left: 0,
            index: 0,
        };
        this.timer = null;
    }

    componentDidMount(){
        this.aotuPlay();
    }

    componentWillUnmount(){
        this.timer && clearInterval(this.timer);
    }

    aotuPlay = () => {
        const {duration,width,content} = this.props;
        let length = content.length;
        let { index } = this.state;
        this.timer = setInterval(()=>{
            index++;
            if(index >= length){
                index = 0;
            }
            let left = -index * width;
            this.setState({left,index});

        },duration);
    };

    render(){
        return(
            <div className="sliders-wrapper container" style={{width: this.props.width+'px',height: this.props.height+'px'}}>
                <div className="content" style={{left: this.state.left,width:this.props.width*this.props.content.length+'px'}}>
                    {
                        this.props.content.map((item,index)=>(
                            <SliderItem data={item} key={index}/>
                        ))
                    }

                </div>

            </div>
        )
    }
}
export  default  Sliders;