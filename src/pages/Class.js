import React, { Component } from 'react';

class Shape{
    constructor(type, width, height){
        this.type = type;
        this.width = width;
        this.height = height;
        this.getShapeArea = this.getShapeArea.bind(this)
    }
    getShapeArea(width, height){
        return width * height;
    }
}
class Rectangle extends Shape{
        
}
class Triangle extends Shape{
    getShapeArea(width, height){
        return (width * height) / 2;
    }
}

var shape_1 = new Rectangle("rectangle", 30, 30)
var shape_2 = new Triangle("triangle", 30, 30)

class ClassTest extends Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    
    render(){
        console.log(shape_1)
        console.log(shape_1.getShapeArea())
        console.log(shape_2)
        return (
            <div>
                <div className="wrapper_tool">
                    <h3>Class & Object</h3>
                </div>
            </div>
        );
    }
};

export default ClassTest;