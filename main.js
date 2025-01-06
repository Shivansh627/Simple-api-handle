async function getData() {
  try {
    const response = await fetch("http://localhost:8000/");

    const data = await response.json();

    const tbd = document.querySelector("tbody");

    data.forEach((user) => {
      const row = document.createElement("tr");

      const nameCell = document.createElement("td");
      nameCell.textContent = user.name;

      const addCell = document.createElement("td");
      addCell.textContent = user.address;

      row.appendChild(nameCell);
      row.appendChild(addCell);

      tbd.appendChild(row);
    });
  } catch (error) {
    console.log(error);
  }
}

getData();

async function postData() {
  const name = document.getElementById("nme").value;
  const address = document.getElementById("add").value;

  let data = {
    name: name,
    address: address,
  };
  try {
    await fetch("http://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    console.log(result);

    getData();
  } catch (error) {
    console.log(error);
  }
}
