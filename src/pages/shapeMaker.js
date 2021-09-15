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
        this.mouse = this.shapeFocus.bind(this)
        console.log(this.shiftStart)

        this.state = {
            color: "#000000",
            opacity: 100,
            shapes: [],
            tooltip: {
                tooltipOpacity: 0,
            },
            triggerForShapeStore: null,
        };
    }
    tooltipOn = (e) => {
        this.setState({
            tooltip: {
                tooltipOpacity: 1,
                left: e.clientX + 10,
                top: e.clientY + 10,
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
    
    shapeFocus = (e) => {
        e.stopPropagation();
        var focusedObj = e.target.parentNode.parentNode.getElementsByClassName("focus")
        if(focusedObj.length > 0){
            focusedObj[0].classList.remove("focus")
        }
        e.target.classList.add("focus")
        this.setState({
            width: e.target.getAttribute("width"),
            height: e.target.getAttribute("height"),
            color: e.target.getAttribute("color"),
            opacity : e.target.getAttribute("opacity")
        })
    }

    shapeFocusOut = (e) => {
        var focusedShape = e.target.getElementsByClassName("focus");
        if(focusedShape.length > 0){
            focusedShape[0].classList.remove("focus")
        }
    }
    
    shiftStart = (e) => {
        let pos = { left: 0, x: 0, top: 0, y: 0 }
        let eventTarget = e.target

        const mouseDownHandler = function(e){
            //mousedown
            var currentLeft = parseInt(window.getComputedStyle(e.target).getPropertyValue("left").replace("px",""));
            var currentTop = parseInt(window.getComputedStyle(e.target).getPropertyValue("top").replace("px",""))
            
            if(e.type === "touchstart"){
                pos = {
                    left: currentLeft,
                    top: currentTop,
                    x: e.changedTouches[0].clientX,
                    y: e.changedTouches[0].clientY,
                }
            }
            else if(e.type === "mousedown"){
                pos = {
                    left: currentLeft,
                    top: currentTop,
                    x: e.clientX,
                    y: e.clientY,
                }
            }

            
            document.addEventListener("mousemove", mouseMoveHandler)
            document.addEventListener("touchmove", mouseMoveHandler)
            document.addEventListener("mouseup", mouseUpHandler)
            document.addEventListener("touchend", mouseUpHandler)
        }
        
        const mouseMoveHandler = function(e){

            var eventClientX = e.type === "touchmove" ? e.changedTouches[0].clientX : e.clientX;
            var eventClientY = e.type === "touchmove" ? e.changedTouches[0].clientY : e.clientY;

            //mousemove
            const dx = eventClientX - pos.x
            const dy = eventClientY - pos.y

            eventTarget.style.left = (pos.left + dx) + "px";
            eventTarget.style.top = (pos.top + dy) + "px";

        }
        
        const mouseUpHandler = function() {
            //mouseup
            e.target.removeEventListener("mousedown", mouseDownHandler)
            e.target.removeEventListener("touchstart", mouseDownHandler)
            document.removeEventListener("mousemove", mouseMoveHandler)
            document.removeEventListener("touchmove", mouseMoveHandler)
            document.removeEventListener("mouseup", mouseUpHandler)
            document.removeEventListener("touchend", mouseUpHandler)

            e.target.classList.remove("focus")
        }
        
        e.target.addEventListener("mousedown", mouseDownHandler)
        e.target.addEventListener("touchstart", mouseDownHandler)
    }
    
    makeAShape(shapeInfo){
        if(this.state.width === null || this.state.width === undefined || this.state.width === ""){
            alert("Width를 입력하세요");
            document.getElementById("input_set_width").focus();
            return;
        }
        if(this.state.width === null || this.state.width === undefined || this.state.width === ""){
            alert("Height를 입력하세요");
            document.getElementById("input_set_height").focus();
            return;
        }
        if(this.state.width === null || this.state.width === undefined || this.state.width === ""){
            alert("Color를 입력하세요");
            document.getElementById("input_set_color").focus();
            return;
        }
        if(this.state.width === null || this.state.width === undefined || this.state.width === ""){
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
            area: shapeInfo.getShapeArea(),
            triggerForShapeStore: false,
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
            onClick: this.shapeFocus,
        }, null)
    }

    render(){
        return (
            <div class="wrapper_shapeMaker">
                {/* <div className="wrapper_tool">
                    <h3>Class & Object</h3>
                </div> */}
                <input type="checkbox" id="trigger_shapeStore" onClick="openShapeStore" checked={this.state.triggerForShapeStore} />
                <div className="shapeStore">
                    <div className="shapeSet">
                        <label>Width : </label><input type="number" id="input_set_width" placeholder="width(px)" onChange={this.widthChange} value={this.state.width}></input>
                    </div>
                    <div className="shapeSet">
                        <label>Height : </label><input type="number" id="input_set_height" placeholder="height(px)" onChange={this.heightChange} value={this.state.height}></input>
                    </div>
                    <div className="shapeSet">
                        <label>Color : </label><span>{this.state.color}</span><input type="color" id="input_set_color" onChange={this.colorChange} value={this.state.color}></input>
                    </div>
                    <div className="shapeSet">
                        <label>Opacity : </label><span>{this.state.opacity}</span><input type="range" id="input_set_opacity" defaultValue="100" onChange={this.opacityChange} value={this.state.opacity}></input>
                    </div>
                    <div className="shapeCreateBtns">
                        <button onClick={this.makeARectangle} className="btn_color_01">Make a rectangle</button>
                        <button onClick={this.makeATriangle} className="btn_color_01">Make a triangle</button>
                        <button onClick={this.makeACircle} className="btn_color_01">Make a circle</button>
                    </div>
                </div>
                <span id="shapeSheet">
                    <div id="shapeArea" onClick={this.shapeFocusOut}>
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