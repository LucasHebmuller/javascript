function calculateGPA() {
    const grades = document.querySelectorAll('.grade');
    let total = 0;
    let count = 0;

    grades.forEach(grade => {
        const value = grade.value.trim().toUpperCase();
        if (value) {
            let gradePoint;
            switch (value) {
                case 'A': gradePoint = 4.0; break;
                case 'A-': gradePoint = 3.7; break;
                case 'B+': gradePoint = 3.3; break;
                case 'B': gradePoint = 3.0; break;
                case 'B-': gradePoint = 2.7; break;
                case 'C+': gradePoint = 2.3; break;
                case 'C': gradePoint = 2.0; break;
                case 'C-': gradePoint = 1.7; break;
                case 'D+': gradePoint = 1.3; break;
                case 'D': gradePoint = 1.0; break;
                case 'F': gradePoint = 0.0; break;
                default: gradePoint = NaN; break;
            }
            if (!isNaN(gradePoint)) {
                total += gradePoint;
                count++;
            }
        }
    });

    const gpa = total / count;
    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
}
