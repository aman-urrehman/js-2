const students = [
    {
        name: "Mithun",
        marks: 95,
    },
    {
        name: "Prabir",
        marks: 75,
    },
    {
        name: "Alka",
        marks: 92,
    },
    {
        name: "Shivam",
        marks: 70,
    },
    {
        name: "Farman",
        marks: 99,
    },
];
function checkResults(name){
    for (let i = 0; i < students.length; i++) {
        if(students[i].name === name){
            if(students[i].marks >= 90){
                console.log(`Congratulation ${name}! you have cleared the exam.`);
            }else {
                console.log("Sorry " + students[i].name + "! You have not cleared the exam.");
              }
              return;
        }
        
    }
    console.log("invalid user");
}
checkResults("Mithun");
checkResults("Prabir");
checkResults("Mihtun d");


