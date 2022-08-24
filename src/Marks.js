let result = [];
let students = [{ name: "Sham", sub: { math: 95, eng: 90, science: 99 } }, { name: "Peter", sub: { math: 80, eng: 70, science: 60 } }, { name: "Bob", sub: { math: 70, eng: 75, science: 95 } }];

students.forEach(student => {
    result.push({
        name: student.name,
        marks: Object.values(student.sub).reduce((a, b, c) => (a + b + c)/3)
    })
});

console.log(result)