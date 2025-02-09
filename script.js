document.getElementById("saveBtn").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    if (!name || !age || !email) {
        alert("Please fill all fields!");
        return;
    }

    var table = document.getElementById("studentTable");
    var row = table.insertRow();
    row.innerHTML = `
        <td class="border border-black px-2 py-1 text-center">${name}</td>
        <td class="border border-black px-2 py-1 text-center">${age}</td>
        <td class="border border-black px-2 py-1 text-center">${course}</td>
        <td class="border border-black px-2 py-1 text-center">${gender}</td>
        <td class="border border-black px-2 py-1 text-center">${email}</td>
        <td class="border border-black px-2 py-1 text-center">
            <button class="bg-red-500 text-white px-2 py-1 rounded deleteBtn">Delete</button>
        </td>
    `;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("email").value = "";

    row.querySelector(".deleteBtn").addEventListener("click", function() {
        this.parentElement.parentElement.remove();
    });
});
