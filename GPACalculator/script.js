let semesterCount = 1;
let courseCount = [4]; // An array to keep track of courses in each semester

function addCourse(button) {
    const semesterIndex = Array.from(document.querySelectorAll('.add-course')).indexOf(button);
    courseCount[semesterIndex]++;
    
    const form = button.closest('.gpa-form');
    const newCourseDiv = document.createElement('div');
    newCourseDiv.classList.add('course');
    
    const newLabel = document.createElement('label');
    newLabel.setAttribute('for', `course${courseCount[semesterIndex]}`);
    newLabel.textContent = `Course ${courseCount[semesterIndex]} Grade:`;
    
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('id', `course${courseCount[semesterIndex]}`);
    newInput.classList.add('grade');
    newInput.required = true;
    newInput.addEventListener('input', () => calculateGPA(form));
    
    newCourseDiv.appendChild(newLabel);
    newCourseDiv.appendChild(newInput);
    form.insertBefore(newCourseDiv, button);
}

function addSemester() {
    semesterCount++;
    courseCount.push(4); // Initialize the course count for the new semester

    const semesterContainer = document.getElementById('semester-container');
    
    const newSemesterDiv = document.createElement('div');
    newSemesterDiv.classList.add('semester');
    
    const newHeader = document.createElement('h2');
    newHeader.textContent = `Semester ${semesterCount}`;
    
    const newForm = document.createElement('form');
    newForm.classList.add('gpa-form');
    
    for (let i = 1; i <= 4; i++) {
        const newCourseDiv = document.createElement('div');
        newCourseDiv.classList.add('course');
        
        const newLabel = document.createElement('label');
        newLabel.setAttribute('for', `course${i}`);
        newLabel.textContent = `Course ${i} Grade:`;
        
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('id', `course${i}`);
        newInput.classList.add('grade');
        newInput.required = true;
        newInput.addEventListener('input', () => calculateGPA(newForm));
        
        newCourseDiv.appendChild(newLabel);
        newCourseDiv.appendChild(newInput);
        newForm.appendChild(newCourseDiv);
    }
    
    const addCourseButton = document.createElement('button');
    addCourseButton.type = 'button';
    addCourseButton.classList.add('add-course');
    addCourseButton.textContent = 'Add Course';
    addCourseButton.setAttribute('onclick', 'addCourse(this)');
    
    const resultDiv = document.createElement('div');
    resultDiv.classList.add('result');
    
    newForm.appendChild(addCourseButton);
    newForm.appendChild(resultDiv);
    
    newSemesterDiv.appendChild(newHeader);
    newSemesterDiv.appendChild(newForm);
    
    semesterContainer.appendChild(newSemesterDiv);
    
    // Add event listeners to the initial course inputs
    newForm.querySelectorAll('.grade').forEach(input => {
        input.addEventListener('input', () => calculateGPA(newForm));
    });
}

function calculateGPA(form) {
    const grades = form.querySelectorAll('.grade');
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
    form.querySelector('.result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
    calculateOverallGPA();
}

function calculateOverallGPA() {
    const allGrades = document.querySelectorAll('.grade');
    let total = 0;
    let count = 0;

    allGrades.forEach(grade => {
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

    const overallGpa = total / count;
    document.getElementById('overall-result').textContent = `Your Overall GPA is: ${overallGpa.toFixed(2)}`;
}

// Initial setup: add event listeners to existing course inputs
document.querySelectorAll('.grade').forEach(input => {
    input.addEventListener('input', () => calculateGPA(input.closest('.gpa-form')));
});
