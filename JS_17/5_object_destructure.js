
//Object Destructuring

const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
}

const{courseInstructor} = course

console.log(courseInstructor);         //hitesh


const{courseName : Name} = course

console.log(Name);                    //js in hindi