function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "student" && pass === "1234") {
        document.getElementById("loginBox").classList.add("d-none");
        document.getElementById("paymentBox").classList.remove("d-none");
    } else {
        alert("Invalid Login");
    }
}

function payNow() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let dept = document.getElementById("dept").value;
    let fee = document.getElementById("feeType").value;

    if (name === "" || roll === "" || dept === "") {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("loading").classList.remove("d-none");

    setTimeout(() => {
        document.getElementById("loading").classList.add("d-none");

        document.getElementById("receipt").classList.remove("d-none");
        document.getElementById("receipt").innerHTML = `
            <h5>Payment Receipt</h5>
            <p><b>Name:</b> ${name}</p>
            <p><b>Roll No:</b> ${roll}</p>
            <p><b>Department:</b> ${dept}</p>
            <p><b>Amount Paid:</b> Rs ${fee}</p>
            <p><b>Status:</b> Successful</p>
        `;
    }, 2000);
}
