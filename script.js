// Data for both groups
const groupData = {
    group1: [
        { name: 'SIC', credits: 4, total: 125 },
        { name: 'CST', credits: 3, total: 100 },
        { name: 'CST lab', credits: 1, total: 25 },
        { name: 'ESE', credits: 2, total: 100 },
        { name: 'ESE lab', credits: 1, total: 25 },
        { name: 'CGD', credits: 2, total: 100 },
        { name: 'CGD lab', credits: 1, total: 25 },
        { name: 'OOPC', credits: 2, total: 100 },
        { name: 'OOPC lab', credits: 1, total: 25 },
        { name: 'IIDTL', credits: 2, total: 25 },
        { name: 'Soft skills', credits: 1, total: 25 }
    ],
    group2: [
        { name: 'SIC', credits: 4, total: 125 },
        { name: 'QP', credits: 3, total: 100 },
        { name: 'QP lab', credits: 1, total: 25 },
        { name: 'MFR', credits: 2, total: 100 },
        { name: 'MFR lab', credits: 1, total: 25 },
        { name: 'IEEE', credits: 2, total: 100 },
        { name: 'IEEE lab', credits: 1, total: 25 },
        { name: 'OOPC', credits: 2, total: 100 },
        { name: 'OOPC lab', credits: 1, total: 25 },
        { name: 'FAB lab', credits: 2, total: 25 },
        { name: 'IKS', credits: 1, total: 25 }
    ]
};

const tbody = document.getElementById('courses-tbody');
const group1Btn = document.getElementById('group1-btn');
const group2Btn = document.getElementById('group2-btn');

function populateTable(group) {
    tbody.innerHTML = '';
    groupData[group].forEach((course, idx) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${course.name}</td>
            <td>${course.credits}</td>
            <td>${course.total}</td>
            <td><input type="number" min="0" max="${course.total}" class="marks-input" data-row="${idx}" /></td>
        `;
        tbody.appendChild(row);
    });
}

// Initial load
let currentGroup = 'group1';
populateTable(currentGroup);

group1Btn.addEventListener('click', () => {
    if (currentGroup !== 'group1') {
        currentGroup = 'group1';
        group1Btn.classList.add('active');
        group2Btn.classList.remove('active');
        populateTable('group1');
    }
});

group2Btn.addEventListener('click', () => {
    if (currentGroup !== 'group2') {
        currentGroup = 'group2';
        group2Btn.classList.add('active');
        group1Btn.classList.remove('active');
        populateTable('group2');
    }
});

function getGradePoint(percentage) {
    if (percentage >= 90) return 10;
    if (percentage >= 80) return 9;
    if (percentage >= 70) return 8;
    if (percentage >= 60) return 7;
    if (percentage >= 50) return 6;
    if (percentage >= 45) return 5;
    if (percentage >= 40) return 4;
    return 0;
}

const calculateBtn = document.getElementById('calculate-btn');
const sgpaResult = document.getElementById('sgpa-result');

calculateBtn.addEventListener('click', () => {
    const rows = document.querySelectorAll('.marks-input');
    let totalCredits = 0;
    let weightedSum = 0;
    let hasInput = false;
    rows.forEach((input, idx) => {
        const marks = parseFloat(input.value);
        const course = groupData[currentGroup][idx];
        if (!isNaN(marks) && marks >= 0 && marks <= course.total) {
            hasInput = true;
            const percentage = (marks / course.total) * 100;
            const gradePoint = getGradePoint(percentage);
            weightedSum += gradePoint * course.credits;
            totalCredits += course.credits;
        } else {
            // If any field is empty or invalid, treat as 0
            weightedSum += 0;
            totalCredits += course.credits;
        }
    });
    if (!hasInput) {
        sgpaResult.textContent = '_____';
        return;
    }
    const sgpa = weightedSum / totalCredits;
    sgpaResult.textContent = sgpa.toFixed(2);
});
