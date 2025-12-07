import * as utils from "./utils.js";

async function getStats() {
    const clients = await utils.fetchStats("clientes/count");
    const sales = await utils.fetchStats("ventas");
    const employees = await utils.fetchStats("empleados/count");

    const data = [
        { title: "Miembros:", value: clients[0]["num"] },
        { title: "Total ventas:", value: sales[0]["ventas"] },
        { title: "Numero de Empleados:", value: employees[0]["num"] },
    ];

    return data;
}

(async function initialRender() {
    const container = document.querySelector(".content");
    const stats = createStats(await getStats());
    container.appendChild(stats);
})();

(function setRedirectEvents() {
    const navButtons = document.querySelectorAll(".menu-child");
    const container = document.querySelector(".content");

    for (let i = 0; i < navButtons.length; i++) {
        const btn = navButtons[i];

        btn.addEventListener("click", async (e) => {
            utils.clearContainer(container);
            if (btn.classList.contains("home")) {
                const stats = createStats(await getStats());
                container.appendChild(stats);
            } else {
                await buildContent(
                    container,
                    e.target.id,
                    e.target.textContent
                );
            }
        });
    }
})();

async function buildContent(container, targetId, targetTxt) {
    const crudButtons = createCRUDbuttons();
    const result = await utils.fetchTableRows(targetId);
    const table = createTable(targetTxt, result, targetId);
    const createDialog = createDialogForm(
        result,
        "Crear",
        "Crear Fila",
        targetId
    );
    const updateDialog = createDialogForm(
        result,
        "Editar",
        "Editar Fila",
        targetId
    );
    const deleteDialog = createDialogForm(
        [{ id: "" }],
        "Borrar",
        "Borrar Fila"
    );
    createDialog.className = "create-dialog";
    updateDialog.className = "update-dialog";
    deleteDialog.className = "delete-dialog";

    container.appendChild(crudButtons);
    container.appendChild(table);
    container.appendChild(createDialog);
    container.appendChild(updateDialog);
    container.appendChild(deleteDialog);

    setCreateEvent();
    setEditEvent();
    setDeleteEvent();
}

async function reRender(targetId, targetTxt) {
    const container = document.querySelector(".content");
    utils.clearContainer(container);
    await buildContent(container, targetId, targetTxt);
}

function setCreateEvent() {
    const createButton = document.querySelector("#crear");
    createButton.addEventListener("click", (e) => {
        const dialog = document.querySelector(".create-dialog");
        dialog.showModal();
        setCloseModalEvent("create-dialog");

        const form = document.querySelector(".create-dialog>form");
        const table = document.querySelector("table");
        const tableName = table.getAttribute("data-table");

        setCreateFormEvent(form, tableName);
    });
}

function setEditEvent() {
    const createButton = document.querySelector("#editar");
    createButton.addEventListener("click", (e) => {
        const dialog = document.querySelector(".update-dialog");
        dialog.showModal();
        setCloseModalEvent("update-dialog");
        const form = document.querySelector(".update-dialog>form");
        const table = document.querySelector("table");
        const tableName = table.getAttribute("data-table");

        setUpdateFormEvent(form, tableName);
    });
}

function setDeleteEvent() {
    const createButton = document.querySelector("#borrar");
    createButton.addEventListener("click", (e) => {
        const dialog = document.querySelector(".delete-dialog");
        dialog.showModal();
        setCloseModalEvent("delete-dialog");

        const form = document.querySelector(".delete-dialog>form");
        const table = document.querySelector("table");
        const tableName = table.getAttribute("data-table");
        setDeleteFormEvent(form, tableName);
    });
}

function setCreateFormEvent(form, tableName) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const reqBody = getRequestBody(form);
        try {
            await utils.fetchInsertEndpoint(tableName, reqBody);
        } catch (error) {
            alert(error);
        }

        await reRender(tableName, `${tableName}s`);
    });
}

function setUpdateFormEvent(form, tableName) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const reqBody = getRequestBody(form);
        const id = Object.keys(reqBody)[0];
        const fetchId = reqBody[id];
        try {
            await utils.fetchUpdateEndpoint(fetchId, tableName, reqBody);
        } catch (error) {
            alert(error);
        }

        await reRender(tableName, `${tableName}s`);
    });
}

function setDeleteFormEvent(form, tableName) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const reqBody = getRequestBody(form);
        try {
            await utils.fetchDeleteEndpoint(reqBody.id, tableName);
        } catch (error) {
            alert(
                "No se puede borrar por que la llave foranea hace referencia a otra tabla"
            );
        }

        await reRender(tableName, `${tableName}s`);
    });
}

function getRequestBody(form) {
    const formData = new FormData(form);
    const requestBody = {};
    for (const [key, value] of formData) {
        requestBody[key] = value;
    }

    return requestBody;
}

function setCloseModalEvent(dialogClassName) {
    const closeBtn = document.querySelector(
        `.${dialogClassName}>form>.close-button`
    );

    closeBtn.addEventListener("click", (e) => {
        const dialog = document.querySelector(`.${dialogClassName}`);
        dialog.close();
    });
}

function createDialogForm(data, btnText, legendText, tableName) {
    const dialog = document.createElement("dialog");
    const form = document.createElement("form");
    const legend = document.createElement("legend");
    legend.textContent = legendText;
    form.appendChild(legend);

    const dataObj = { ...data[0] };
    const keys = Object.keys(dataObj);
    for (let key of keys) {
        if (key === keys[0] && btnText === "Crear") {
            continue;
        }

        if (key === keys[5] && btnText === "Crear" && tableName === "Cliente") {
            continue;
        }

        if (
            key === keys[5] &&
            btnText === "Crear" &&
            tableName === "Empleado"
        ) {
            continue;
        }

        if (
            key === keys[6] &&
            btnText === "Crear" &&
            tableName === "Empleado"
        ) {
            continue;
        }

        if (key === keys[2] && btnText === "Crear" && tableName === "Pago") {
            continue;
        }

        if (key === keys[6] && btnText === "Crear" && tableName === "Cliente") {
            continue;
        }

        const label = document.createElement("label");
        label.textContent = key;
        label.setAttribute("for", key);

        const input = document.createElement("input");
        input.setAttribute("name", key);
        input.setAttribute("id", key);
        form.appendChild(label);
        form.appendChild(input);
    }

    const btn = document.createElement("button");
    const closeBtn = document.createElement("button");
    btn.setAttribute("type", "submit");
    btn.textContent = btnText;
    closeBtn.setAttribute("type", "button");
    closeBtn.className = "close-button";
    closeBtn.textContent = "Cancelar";
    form.appendChild(btn);
    form.appendChild(closeBtn);

    dialog.appendChild(form);
    return dialog;
}

function createCRUDbuttons() {
    const container = document.createElement("div");
    container.className = "crud-buttons-container";
    const btnTextContents = ["Crear", "Editar", "Borrar"];

    btnTextContents.forEach((txt) => {
        const btn = document.createElement("button");
        btn.className = "crud-button";
        btn.textContent = txt;
        btn.id = txt.toLowerCase();
        container.appendChild(btn);
    });

    return container;
}

function createTable(captionText, data, tableName) {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");
    const caption = document.createElement("caption");
    table.setAttribute("data-table", tableName);
    caption.textContent = captionText;

    thead.appendChild(createTableHeadings(data));

    data.forEach((item) => {
        tbody.appendChild(createTableRow(item));
    });

    table.appendChild(caption);
    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
}

function createTableHeadings(data) {
    const tr = document.createElement("tr");
    for (let key of Object.keys(data[0])) {
        const th = document.createElement("th");
        th.textContent = key;
        tr.appendChild(th);
    }

    return tr;
}

function createTableRow(data) {
    const tr = document.createElement("tr");
    for (let key of Object.keys(data)) {
        const value = data[key];
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
    }

    return tr;
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
