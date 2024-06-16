const students = [
    {
        student1: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student2: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    },
    {
        student3: {
            subject1: 44,
            subject2: 56,
            subject3: 87,
            subject4: 97,
            subject5: 37
        }
    }
];

const output = students.map(studentObj => {
    // Extracting the student name (key) from the student object
    const studentName = Object.keys(studentObj)[0];
    // Extracting the scores object for the student
    const scores = studentObj[studentName];
    // Calculating the average score using reduce
    const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);
    const averageScore = totalScore / Object.keys(scores).length;
    // Creating an object with the student's name and average score
    return {
        [studentName]: {
            average: averageScore
        }
    };
});

console.log(output);
