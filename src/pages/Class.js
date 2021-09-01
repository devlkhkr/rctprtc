import React, { Component } from 'react';
import reactDom from 'react-dom';
import ReactDOM from "react-dom";

class Shape{
    constructor(type, width, height, color){
        this.type = type;
        this.width = width;
        this.height = height;
        this.color = color;
        this.getShapeArea = this.getShapeArea.bind(this)
    }
    getShapeArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape{
        
}
class Triangle extends Shape{
    getShapeArea(){
        return this.width * this.height / 2;
    }
}
class Circle extends Shape{
    getShapeArea(){
        return ((this.width / 2) * (this.height / 2)) * Math.PI;
    }
}

class ClassTest extends Component{
    constructor(props){
        super(props);
        
        this.makeAShape = this.makeAShape.bind(this)
        this.makeARectangle = this.makeARectangle.bind(this)
        this.makeATriangle = this.makeATriangle.bind(this)
        this.makeACircle = this.makeACircle.bind(this)
        this.tooltipOn = this.tooltipOn.bind(this)
        this.state = {
            width: null,
            height: null,
            color: null,
            area: null,
            shapes: [],
            tooltip: {
                opacity: 1,
                left: 0,
                top: 0,
                shapeWidth: null,
                shapeHeight: null,
                shapeColor: null,
            }
        };
    }
    tooltipOn = (e) => {
        this.setState({
            tooltip: {
                opacity: 1,
                shapeWidth: e.target.getAttribute("width"),
                shapeHeight: e.target.getAttribute("height"),
                shapeColor: e.target.getAttribute("color"), 
            }
        })
    }

    tooltipOff = (e) => {
    
    }

    widthChange = (e) => {
        this.setState({
            width: e.target.value
        })
    }
    heightChange = (e) => {
        this.setState({
            height: e.target.value
        })
    }
    colorChange = (e) => {
        this.setState({
            color: e.target.value
        })
    }

    makeARectangle = () => {
        this.state.shapes.push(this.makeAShape(new Rectangle("rectangle", this.state.width, this.state.height, this.state.color)));
        reactDom.render(this.state.shapes,document.getElementById("shapeArea"))
    }
    makeATriangle = () => {
        this.state.shapes.push(this.makeAShape(new Triangle("triangle", this.state.width, this.state.height, this.state.color)));
        reactDom.render(this.state.shapes,document.getElementById("shapeArea"))
    }
    makeACircle = () => {
        this.state.shapes.push(this.makeAShape(new Circle("circle", this.state.width, this.state.height, this.state.color)));
        reactDom.render(this.state.shapes,document.getElementById("shapeArea"))
    }    
    
    makeAShape(shapeInfo){
        if(this.state.width == null){
            alert("Width를 입력하세요");
            document.getElementById("input_set_width").focus();
            return;
        }
        if(this.state.height == null){
            alert("Height를 입력하세요");
            document.getElementById("input_set_height").focus();
            return;
        }
        if(this.state.color == null){
            alert("Color를 입력하세요");
            document.getElementById("input_set_color").focus();
            return;
        }
        function shapeStyle(){
            var styleValue = {left: 0, top: 0}
            if(shapeInfo.type === "rectangle" || shapeInfo.type === "circle"){
                styleValue.width = shapeInfo.width + "px";
                styleValue.height = shapeInfo.height + "px";
                styleValue.backgroundColor = shapeInfo.color;
            }
            if(shapeInfo.type === "circle"){
                styleValue.borderRadius = "100%";
            }
            if(shapeInfo.type === "triangle"){
                styleValue.borderTop = shapeInfo.height + "px solid none"
                styleValue.borderBottom = shapeInfo.height + "px solid " + shapeInfo.color
                styleValue.borderRight = shapeInfo.width * 1/2 + "px solid transparent"
                styleValue.borderLeft = shapeInfo.width * 1/2 + "px solid transparent"
            }
            return styleValue
        }
        this.setState({
            area: shapeInfo.getShapeArea()
        })
        return React.createElement("span", {
            style: shapeStyle(),
            width: this.state.width,
            height: this.state.height,
            color: this.state.color,
            onMouseOver: this.tooltipOn,
            onMouseOut: this.tooltipOff,
        }, null)
    }

    render(){
        return (
            <div>
                <div className="wrapper_tool">
                    <h3>Class & Object</h3>
                </div>
                <div className="shapeStore">
                    <div className="shapeSet">
                        <label>Width : </label><input type="number" id="input_set_width" placeholder="width" onChange={this.widthChange}></input>
                    </div>
                    <div className="shapeSet">
                        <label>Height : </label><input type="number" id="input_set_height" placeholder="height" onChange={this.heightChange}></input>
                    </div>
                    <div className="shapeSet">
                        <label>Color : </label><input type="text" id="input_set_color" placeholder="color" onChange={this.colorChange}></input>
                    </div>
                    <div className="shapeCreateBtns">
                        <button onClick={this.makeARectangle} className="btn_color_01">Make a rectangle</button>
                        <button onClick={this.makeATriangle} className="btn_color_01">Make a triangle</button>
                        <button onClick={this.makeACircle} className="btn_color_01">Make a circle</button>
                    </div>
                    <ul className="shapeInfo">
                        <li>가로 : {this.state.width}</li>
                        <li>세로 : {this.state.height}</li>
                        <li>색상 : {this.state.color}</li>
                        <li>넓이 : {this.state.area}</li>
                    </ul>
                </div>
                <span id="shapeSheet">
                    <div id="shapeArea"></div>
                    <span id="tooltip" style={
                            {
                                opacity: this.state.tooltip.opacity,
                                left: this.state.tooltip.left,
                                top: this.state.tooltip.top
                            }
                        }>
                            width: {this.state.tooltip.shapeWidth}
                            height: {this.state.tooltip.shapeHeight}
                            color: {this.state.tooltip.shapeColor}
                    </span>
                </span>
            </div>
        );
    }
};

export default ClassTest;