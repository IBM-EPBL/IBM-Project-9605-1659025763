const form = document.getElementById("details-form");

form.addEventListener("submit", (e) => {
  const detail = {};
  detail.name = form.name.value;
  detail.mail = form.mail.value;
  detail.password = form.password.value;
  detail.gender = document.querySelector("input:checked").value;
  detail.state = form.state.value;
  console.dir(form.elements);
  generateTable(detail);
  e.preventDefault();
});

function generateTable(obj) {
  const table = document.createElement("table");
  table.style.cssText = `
    border: 1px solid red;
  `;
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  th.innerText = "Attribute";
  tr.appendChild(th);
  thead.appendChild(tr);
  const th2 = document.createElement("th");
  th2.innerText = "Value";
  tr.appendChild(th2);
  thead.appendChild(tr);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  const entries = Object.entries(obj).map((entry) => getRow(entry));
  entries.forEach((entry) => tbody.appendChild(entry));
  table.appendChild(tbody);
  document.body.innerText = "";
  document.body.appendChild(table);
}

function getRow(entry) {
  const [key, val] = entry;
  const tr = document.createElement("tr");
  const attribute = document.createElement("td");
  attribute.innerText = key;
  tr.appendChild(attribute);
  const value = document.createElement("td");
  value.innerText = val;
  tr.appendChild(value);
  return tr;
}
