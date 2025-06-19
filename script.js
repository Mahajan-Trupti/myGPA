// Data for both groups
const groupData = {
    group1: [
        { name: 'SIC', credits: 4, total: 125 },
        { name: 'CST', credits: 2, total: 100 },
        { name: 'CST lab', credits: 1, total: 25 },
        { name: 'CGD', credits: 2, total: 100 },
        { name: 'CGD lab', credits: 1, total: 25 },
        { name: 'OOPC', credits: 2, total: 100 },
        { name: 'OOPC lab', credits: 1, total: 25 },
        { name: 'IIDTL', credits: 1, total: 50 },
        { name: 'ESE', credits: 2, total: 100 },
        { name: 'soft skills', credits: 2, total: 50 },
        { name: 'nptel', credits: 1, total: 25 },
        { name: 'cca', credits: 1, total: 25 }
    ],
    group2: [
        { name: 'SIC', credits: 4, total: 125 },
        { name: 'QP', credits: 2, total: 100 },
        { name: 'QP lab', credits: 1, total: 25 },
        { name: 'MFR', credits: 2, total: 100 },
        { name: 'MFR lab', credits: 1, total: 25 },
        { name: 'IEEE', credits: 2, total: 100 },
        { name: 'IEEE lab', credits: 1, total: 25 },
        { name: 'OOPC', credits: 2, total: 100 },
        { name: 'OOPC lab', credits: 1, total: 25 },
        { name: 'FAB lab', credits: 1, total: 25 },
        { name: 'IKS', credits: 2, total: 50 },
        { name: 'CCA', credits: 1, total: 25 }
    ]
};

const tbody = document.getElementById('courses-tbody');
const group1Btn = document.getElementById('group1-btn');
const group2Btn = document.getElementById('group2-btn');

// Define which columns are enabled for each course in group2
const group2InputMap = [
    // SIC
    { insem: true, endsem: true, atnd: true, cie: true, tw: true },
    // QP
    { insem: true, endsem: true, atnd: true, cie: true, tw: false },
    // QP lab
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // MFR
    { insem: true, endsem: true, atnd: true, cie: true, tw: false },
    // MFR lab
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // IEEE
    { insem: true, endsem: true, atnd: true, cie: true, tw: false },
    // IEEE lab
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // OOPC
    { insem: true, endsem: true, atnd: true, cie: true, tw: false },
    // OOPC lab
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // FAB lab
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // IKS
    { insem: false, endsem: false, atnd: true, cie: true, tw: true },
    // CCA
    { insem: false, endsem: false, atnd: false, cie: false, tw: true }
];

// Define which columns are enabled for each course in group1
const group1InputMap = [
    // SIC
    { insem: true, endsem: true, atnd: true, cie: true, tw: true },
    // CST
    { insem: true, endsem: true, atnd: true, cie: true, tw: false },
    // CST lab
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // CGD
    { insem: true, endsem: true, atnd: true, cie: true, tw: false },
    // CGD lab
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // OOPC
    { insem: true, endsem: true, atnd: true, cie: true, tw: false },
    // OOPC lab
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // IIDTL
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // ESE
    { insem: true, endsem: true, atnd: true, cie: true, tw: false },
    // soft skills
    { insem: false, endsem: false, atnd: true, cie: true, tw: true },
    // nptel
    { insem: false, endsem: false, atnd: false, cie: false, tw: true },
    // cca
    { insem: false, endsem: false, atnd: false, cie: false, tw: true }
];

function populateTable(group) {
    tbody.innerHTML = '';
    if (group === 'group2') {
        groupData[group].forEach((course, idx) => {
            const map = group2InputMap[idx];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${course.name}</td>
                <td>${course.credits}</td>
                <td>${course.total}</td>
                <td>${map.insem ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"insem\" data-row=\"${idx}\" />` : '❌'}</td>
                <td>${map.endsem ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"endsem\" data-row=\"${idx}\" />` : '❌'}</td>
                <td>${map.atnd ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"atnd\" data-row=\"${idx}\" />` : '❌'}</td>
                <td>${map.cie ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"cie\" data-row=\"${idx}\" />` : '❌'}</td>
                <td>${map.tw ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"tw\" data-row=\"${idx}\" />` : '❌'}</td>
            `;
            tbody.appendChild(row);
        });
        document.querySelector('thead tr').innerHTML = `
            <th>COURSE NAME</th>
            <th>CREDITS</th>
            <th>TOTAL MARKS</th>
            <th>INSEM\n(out of 30)</th>
            <th>ENDSEM\n(out of 70)</th>
            <th>ATND</th>
            <th>CIE</th>
            <th>TW</th>
        `;
    } else if (group === 'group1') {
        groupData[group].forEach((course, idx) => {
            const map = group1InputMap[idx];
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${course.name}</td>
                <td>${course.credits}</td>
                <td>${course.total}</td>
                <td>${map.insem ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"insem\" data-row=\"${idx}\" />` : '❌'}</td>
                <td>${map.endsem ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"endsem\" data-row=\"${idx}\" />` : '❌'}</td>
                <td>${map.atnd ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"atnd\" data-row=\"${idx}\" />` : '❌'}</td>
                <td>${map.cie ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"cie\" data-row=\"${idx}\" />` : '❌'}</td>
                <td>${map.tw ? `<input type=\"number\" min=\"0\" class=\"marks-input\" data-type=\"tw\" data-row=\"${idx}\" />` : '❌'}</td>
            `;
            tbody.appendChild(row);
        });
        document.querySelector('thead tr').innerHTML = `
            <th>COURSE NAME</th>
            <th>CREDITS</th>
            <th>TOTAL MARKS</th>
            <th>INSEM\n(out of 30)</th>
            <th>ENDSEM\n(out of 70)</th>
            <th>ATND</th>
            <th>CIE</th>
            <th>TW</th>
        `;
    }
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
    let totalCredits = 0;
    let weightedSum = 0;
    let hasInput = false;
    if (currentGroup === 'group2') {
        groupData.group2.forEach((course, idx) => {
            const map = group2InputMap[idx];
            if (!map.insem && !map.endsem && !map.atnd && !map.cie && !map.tw) return;
            // Convert insem and endsem if present
            let insem = 0, endsem = 0;
            if (map.insem) {
                const raw = parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="insem"]`)?.value) || 0;
                insem = (raw / 30) * 20; // Convert from 30 to 20
            }
            if (map.endsem) {
                const raw = parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="endsem"]`)?.value) || 0;
                endsem = (raw / 70) * 60; // Convert from 70 to 60
            }
            const atnd = map.atnd ? parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="atnd"]`)?.value) || 0 : 0;
            const cie = map.cie ? parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="cie"]`)?.value) || 0 : 0;
            const tw = map.tw ? parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="tw"]`)?.value) || 0 : 0;
            const marks = insem + endsem + atnd + cie + tw;
            if (marks > 0) hasInput = true;
            const percentage = (marks / course.total) * 100;
            const gradePoint = getGradePoint(percentage);
            weightedSum += gradePoint * course.credits;
            totalCredits += course.credits;
        });
    } else {
        groupData.group1.forEach((course, idx) => {
            const map = group1InputMap[idx];
            if (!map.insem && !map.endsem && !map.atnd && !map.cie && !map.tw) return;
            // Convert insem and endsem if present
            let insem = 0, endsem = 0;
            if (map.insem) {
                const raw = parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="insem"]`)?.value) || 0;
                insem = (raw / 30) * 20; // Convert from 30 to 20
            }
            if (map.endsem) {
                const raw = parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="endsem"]`)?.value) || 0;
                endsem = (raw / 70) * 60; // Convert from 70 to 60
            }
            const atnd = map.atnd ? parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="atnd"]`)?.value) || 0 : 0;
            const cie = map.cie ? parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="cie"]`)?.value) || 0 : 0;
            const tw = map.tw ? parseFloat(document.querySelector(`input[data-row="${idx}"][data-type="tw"]`)?.value) || 0 : 0;
            const marks = insem + endsem + atnd + cie + tw;
            if (marks > 0) hasInput = true;
            const percentage = (marks / course.total) * 100;
            const gradePoint = getGradePoint(percentage);
            weightedSum += gradePoint * course.credits;
            totalCredits += course.credits;
        });
    }
    if (!hasInput) {
        sgpaResult.textContent = '_____';
        return;
    }
    const sgpa = weightedSum / totalCredits;
    sgpaResult.textContent = sgpa.toFixed(2);
});
