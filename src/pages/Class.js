import React, { Component } from 'react';
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
        this.state = {
            width: null,
            height: null,
            color: null,
            area: null,
        };
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

    makeARectangle = () => ReactDOM.render(this.makeAShape(
        new Rectangle("rectangle", this.state.width, this.state.height, this.state.color)
    ), document.getElementById('shapeArea'))

    makeATriangle = () => ReactDOM.render(this.makeAShape(
        new Triangle("triangle", this.state.width, this.state.height, this.state.color)
    ), document.getElementById('shapeArea'))

    makeACircle = () => ReactDOM.render(this.makeAShape(
        new Circle("circle", this.state.width, this.state.height, this.state.color)
    ), document.getElementById('shapeArea'))
    
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
            var styleValue = {}
            if(shapeInfo.type === "rectangle" || shapeInfo.type === "circle"){
                styleValue.width = shapeInfo.width + "px";
                styleValue.height = shapeInfo.height + "px";
                styleValue.backgroundColor = shapeInfo.color
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
        return React.createElement('span',
        {
            style: shapeStyle()
        }
        , null);
    }

    render(){
        return (
            <div>
                <div className="wrapper_tool">
                    <h3>Class & Object</h3>
                </div>
                <div>
                    <label>Width : </label><input type="number" id="input_set_width" placeholder="width" onChange={this.widthChange}></input>
                    <label>Height : </label><input type="number" id="input_set_height" placeholder="height" onChange={this.heightChange}></input>
                    <label>Color : </label><input type="text" id="input_set_color" placeholder="color" onChange={this.colorChange}></input>
                </div>
                <div>
                    <button onClick={this.makeARectangle}>Make a rectangle</button>
                    <button onClick={this.makeATriangle}>Make a triangle</button>
                    <button onClick={this.makeACircle}>Make a circle</button>
                </div>
                <div id="shapeArea"></div>
                <div>
                    <div>가로 : {this.state.width}</div>
                    <div>세로 : {this.state.height}</div>
                    <div>색상 : {this.state.color}</div>
                    <div>넓이 : {this.state.area}</div>
                </div>
            </div>
        );
    }
};

export default ClassTest;