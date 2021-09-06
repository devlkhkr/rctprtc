import React, { Component } from 'react';

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
            color: "#000000",
            opacity: 100,
            shapes: [],
            tooltip: {
                tooltipOpacity: 0,
            }
        };
    }
    tooltipOn = (e) => {
        this.setState({
            tooltip: {
                tooltipOpacity: 1,
                left: e.clientX + 30,
                top: e.clientY + 30,
                shapeType: e.target.getAttribute("type"),
                shapeWidth: e.target.getAttribute("width"),
                shapeHeight: e.target.getAttribute("height"),
                shapeSize: e.target.getAttribute("area"),
                shapeColor: e.target.getAttribute("color"), 
                shapeOpacity: e.target.getAttribute("opacity"), 
            }
        })
    }

    tooltipOff = (e) => {
        this.setState({
            tooltip: {
                tooltipOpacity: 0,
                shapeType: null,
                shapeWidth: null,
                shapeHeight: null,
                shapeSize: null,
                shapeColor: null, 
                shapeOpacity: null, 
            }
        })
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
    opacityChange = (e) => {
        this.setState({
            opacity: e.target.value
        })
    }

    makeARectangle = () => {
        this.state.shapes.push(this.makeAShape(new Rectangle("rectangle", this.state.width, this.state.height, this.state.color)));
    }
    makeATriangle = () => {
        this.state.shapes.push(this.makeAShape(new Triangle("triangle", this.state.width, this.state.height, this.state.color)));
    }
    makeACircle = () => {
        this.state.shapes.push(this.makeAShape(new Circle("circle", this.state.width, this.state.height, this.state.color)));
    }
    
    shiftStart = (e) => {
        let pos = { left: 0, x: 0, top: 0, y: 0 }
        let eventTarget = e.target

        const mouseDownHandler = function(e){
           //mousedown
            
            var currentLeft = parseInt(window.getComputedStyle(e.target).getPropertyValue("left").replace("px",""));
            var currentTop = parseInt(window.getComputedStyle(e.target).getPropertyValue("top").replace("px",""))
            pos = {
                left: currentLeft,
                top: currentTop,
                x: e.clientX,
                y: e.clientY,
            }
            document.addEventListener("mousemove", mouseMoveHandler)
            document.addEventListener("mouseup", mouseUpHandler)
        }
        
        const mouseMoveHandler = function(e){
            //mousemove
            
            const dx = e.clientX - pos.x
            const dy = e.clientY - pos.y

            eventTarget.style.left = (pos.left + dx) + "px";
            eventTarget.style.top = (pos.top + dy) + "px";
        }
        
        const mouseUpHandler = function() {
            //mouseup
            
            e.target.removeEventListener("mousedown", mouseDownHandler)
            document.removeEventListener("mousemove", mouseMoveHandler)
            document.removeEventListener("mouseup", mouseUpHandler)
        }
        
        e.target.addEventListener("mousedown", mouseDownHandler)
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
        if(this.state.opacity == null){
            alert("Opacity를 입력하세요");
            document.getElementById("input_set_opacity").focus();
            return;
        }
        function shapeStyle(el){
            var styleValue = {left: 0, top: 0, opacity: el.state.opacity + "%"}
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
            isshape: "true",
            id: `shape${parseInt(this.state.shapes.length) + 1}`,
            type: shapeInfo.type,
            style: shapeStyle(this),
            width: this.state.width,
            height: this.state.height,
            area: shapeInfo.getShapeArea(),
            color: this.state.color,
            opacity: this.state.opacity,
            onMouseMove: this.tooltipOn,
            onMouseOut: this.tooltipOff,
            onMouseDown: this.shiftStart,
            onMouseUp: this.shiftEnd,
        }, null)
    }

    render(){
        return (
            <div className="userDragNone">
                <div className="wrapper_tool">
                    <h3>Shape maker</h3>
                </div>
                <div className="shapeStore">
                    <div className="shapeSet">
                        <label>Width : </label><input type="number" id="input_set_width" placeholder="width" onChange={this.widthChange}></input>
                    </div>
                    <div className="shapeSet">
                        <label>Height : </label><input type="number" id="input_set_height" placeholder="height" onChange={this.heightChange}></input>
                    </div>
                    <div className="shapeSet">
                        <label>Color : </label><input type="color" id="input_set_color" onChange={this.colorChange}></input>
                    </div>
                    <div className="shapeSet">
                        <label>Opacity : </label><input type="range" id="input_set_opacity" defaultValue="100" onChange={this.opacityChange}></input>
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
                        <li>불투명도 : {this.state.opacity}%</li>
                    </ul>
                </div>
                <span id="shapeSheet">
                    <div id="shapeArea">
                        {this.state.shapes.map(shape => (<span>{shape}</span>))}
                    </div>
                    <span id="tooltip" style={
                            {
                                opacity: this.state.tooltip.tooltipOpacity,
                                left: this.state.tooltip.left,
                                top: this.state.tooltip.top
                            }
                        }>
                            type: {this.state.tooltip.shapeType}<br />
                            width: {this.state.tooltip.shapeWidth}<br />
                            height: {this.state.tooltip.shapeHeight}<br />
                            area: {this.state.tooltip.shapeSize}<br />
                            color: {this.state.tooltip.shapeColor}<br />
                            opacity: {this.state.tooltip.shapeOpacity}
                    </span>
                </span>
            </div>
        );
    }
};

export default ClassTest;