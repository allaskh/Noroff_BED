class Shape{
    draw(){console.log("I am just a shape.");
    }
}
class Rectangle extends Shape{
    draw(){
        console.log("I have four sides and 90 degrees angle between each of them.");
    }
}
class Circle extends Shape{
    draw(){
        console.log("I have just one line and no angles!");
    }
}
class Square extends Shape{
    draw(){
        console.log("I have four equal sides and 90 degrees angle between each of them.");
    }
}
class ShapeFactory{
    createShape(type){
        switch (type){
        case 'circle':
            return new Circle();
        case 'rectangle':
            return new Rectangle();
        case 'square':
            return new Square();
        }
    }
}
const myShapeFactory = new ShapeFactory;
myShapeFactory.createShape('square').draw();
myShapeFactory.createShape('circle').draw();
