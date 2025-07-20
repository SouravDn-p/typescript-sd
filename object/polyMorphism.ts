class person {
    takeAction() {
        console.log("Person is taking action");
    }
}

class student_2 extends person {
    takeAction() {
        console.log("Student is studying");
    }
}   

class developer extends person {
    takeAction() {
        console.log("Developer is coding");
    }
}

function performAction(p: person) {
    p.takeAction();
}   

const p1 = new student_2();
const p2 = new developer();     
const p3 = new person();

performAction(p1); // Student is studying
performAction(p2); // Developer is coding   
performAction(p3); // Person is taking action