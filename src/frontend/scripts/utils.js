export function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

export async function fetchTableRows(tableName) {
    try {
        const response = await fetch(
            `http://localhost:3000/getRows/${tableName}`
        );
        const data = await response.json();
        return data[0][0];
    } catch (error) {
        throw error;
    }
}

export async function fetchInsertEndpoint(tableName, tableCols) {
    try {
        const response = await fetch(
            `http://localhost:3000/insert/${tableName.toLowerCase()}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tableCols),
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function fetchUpdateEndpoint(id, tableName, tableCols) {
    try {
        const response = await fetch(
            `http://localhost:3000/update/${tableName.toLowerCase()}/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tableCols),
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}

export async function fetchDeleteEndpoint(id, tableName) {
    try {
        const response = await fetch(
            `http://localhost:3000/delete/${tableName.toLowerCase()}/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
