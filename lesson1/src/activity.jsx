'use strict'
import React,{Component} from "react";
import ReactDOM from "react-dom";

class Activity extends Component{
    clickHandle(){
        alert('关于我们');
        console.log(ReactDOM.findDOMNode(this).style.backgroundColor='red');
    }
    render(){
        return (
            <div className="aboutus-content">
                <header onClick={this.clickHandle.bind(this)}>
                    <span className="title">关于我们</span>
                </header>
                <p>所售商品涵盖母婴用品、美容彩妆、营养保健、家居个护、国际轻奢等多个品类,消费者可直接在海外
                购上买到来自英国、美国、德国、荷兰、日本等22个国家和地区的海外正品。</p>
                <div className="m-entry">
                    <span><i></i>海外直采</span>
                    <span><i></i>自营正品</span>
                    <span><i></i>海关监管</span>
                    <span><i></i>无忧退货</span>
                </div>
                <p>原产地直采、保税区发货、海外直邮，品质有保障、海关监管、极速直达、国内售后。</p>
                <div className="copyright">
                    <em>Copyright@2014-2016</em>
                    <span>网络有限公司</span>
                </div>
            </div>
        )
    }
}

export default Activity;