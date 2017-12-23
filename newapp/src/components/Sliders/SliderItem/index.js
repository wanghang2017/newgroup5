import React, {Component} from 'react';
import {render} from 'react-dom';

export default class SliderItem extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        const {data} = this.props;
        console.log(data);
        return(
            <a className="slider-item">
                <img src={data.src} alt=""/>
            </a>
        )
    }
}
