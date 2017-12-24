import React,{Component} from 'react';
import CarOfShopping from './CarOfShopping';
 class Header extends Component{
     render(){
         return (
             <div className="Header">
                 <div className="container">
                     <div className="HeaderLeft">
                         <a href="#">小米商城</a>
                         <span className="sep">|</span>
                         <a href="#">MIUI</a>
                         <span className="sep">|</span>
                         <a href="#">IoT</a>
                         <span className="sep">|</span>
                         <a href="#">云服务</a>
                         <span className="sep">|</span>
                         <a href="#">水滴</a>
                         <span className="sep">|</span>
                         <a href="#">金融</a>
                         <span className="sep">|</span>
                         <a href="#">有品</a>
                         <span className="sep">|</span>
                         <a href="#">Select Region</a>
                     </div>
                     <CarOfShopping/>
                     <div className="HeaderRight">
                         <a href="#">登陆</a>
                         <span className="sep">|</span>
                         <a href="#">注册</a>
                         <span className="sep">|</span>
                         <a href="#">消息通知</a>
                     </div>
                 </div>

             </div>
         )
     }

}
export default Header;


