import * as utils from "./utils.js";

const sampleData = [
    { title: "Miembros:", value: "100" },
    { title: "Numero de membresías vendidas:", value: "110" },
    { title: "Total ventas:", value: "15000" },
    { title: "Numero de Empleados:", value: "6" },
];

(function initialRender() {
    const container = document.querySelector(".content");
    const stats = createStats(sampleData);
    container.appendChild(stats);
})();

(function setRedirectEvents() {
    const navButtons = document.querySelectorAll(".menu-child");
    const container = document.querySelector(".content");

    for (let i = 0; i < navButtons.length; i++) {
        const btn = navButtons[i];

        btn.addEventListener("click", (e) => {
            utils.clearContainer(container);
            if (btn.classList.contains("home")) {
                const stats = createStats(sampleData);
                container.appendChild(stats);
            } else {
                //placeholder
                const table = createTable(e.target.textContent);
                container.appendChild(table);
            }
        });
    }
})();

function createTable(data) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const caption = document.createElement("caption");

    caption.textContent = data;

    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

function createTableHeadings(data) {
    for (let key of Object.keys(data)) {
        console.log(key);
    }
}

function createStats(stats) {
    const statsCntr = document.createElement("div");
    statsCntr.className = "stats";

    const statContainers = stats.map((stat) => {
        const statContainer = document.createElement("div");
        statContainer.className = "stat-container";

        const titleP = document.createElement("p");
        titleP.className = "stat-title";
        titleP.textContent = stat.title;

        const valueP = document.createElement("p");
        valueP.className = "stat-value";
        valueP.textContent = stat.value;

        statContainer.appendChild(titleP);
        statContainer.appendChild(valueP);

        return statContainer;
    });

    statContainers.forEach((statCntr) => {
        statsCntr.appendChild(statCntr);
    });

    return statsCntr;
}

const testBody = {
    nombre: "Haziel",
    apellido: "Ortiz",
    telefono: "555-123-4567",
    email: "haziel.perez@example.com",
    fechaRegistro: "2025-01-01",
    estatus: "Activo",
    idMembresia: 2,
};
