class rectangle{
    constructor(height , width){
        this.width= width;
        this.height= height;
    }

    area(){
        const area= this.height * this.width
        return area;
    }
    color(){
        console.log('THE rectangle is of color ${this.color}')
    }
}

const rect = new rectangle(8,4)
const area = rect.area();
console.log(area)