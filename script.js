let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent() {
    let id = document.getElementById("studentId").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;

    if (id === "" || name === "" || email === "" || course === "") {
        alert("Please fill all fields");
        return;
    }

    let student = { id, name, email, course };
    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));

    clearForm();
    displayStudents();
}

function displayStudents() {
    let table = document.getElementById("studentTable");
    table.innerHTML = "";

    students.forEach((student, index) => {
        table.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>
                    <button class="delete-btn" onclick="deleteStudent(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
}

function deleteStudent(index) {
    students.splice(index, 1);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
}

function clearForm() {
    document.getElementById("studentId").value = "";
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
}

displayStudents();
