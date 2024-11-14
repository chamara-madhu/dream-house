document.addEventListener("DOMContentLoaded", function () {
  const dataTable = document.getElementById("appointment-table-body");

  const arr = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  if (arr.length) {
    // Iterate over each item in the array
    arr.forEach((item) => {
      // Create a new row
      const row = document.createElement("tr");

      // Assuming each item is an object with properties you want to display in table columns
      for (const key in item) {
        const cell = document.createElement("td");
        cell.textContent = item[key];
        row.appendChild(cell);
      }

      // Append the row to the table body
      dataTable.appendChild(row);
    });
  } else {
    // Append the row to the table body
    dataTable.innerHTML = "<tr><td colspan='4'>No records</td></tr>";
  }
});
