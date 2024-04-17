const fillEmptyCells = (table) => {
    const NBSP = "\xa0";
    getAllTableDataCells(table).forEach(cell => { if (cell.innerText === "")
        cell.innerText = NBSP; });
};
const loadTableStyles = (table) => {
    const cells = [...getAllTableDataCells(table), ...getAllTableHeaderCells(table)];
    cells.forEach(cell => {
        const textAlign = cell.dataset.textAlign;
        if (textAlign)
            cell.setAttribute("class", "text-align-" + textAlign);
    });
};
const addResponsiveToAllTables = () => {
    const tables = document.querySelectorAll(".table-responsive table");
    tables.forEach(table => {
        const cells = [
            ...getAllTableDataCells(table),
            ...getAllTableHeaderCells(table),
        ];
        cells.forEach(cell => getStyleAttributesAndRewrite(cell));
        const tableHeaders = table.querySelectorAll("th");
        const tableHeaderTexts = getAllTextFromTableHeaders(tableHeaders);
        const tableRows = table.querySelectorAll("tr");
        tableRows
            .forEach(tr => tr.querySelectorAll("td")
            .forEach((td, i) => td.setAttribute("data-label", tableHeaderTexts[i])));
        loadTableStyles(table);
        fillEmptyCells(table);
    });
};
const getAllTextFromTableHeaders = (tableHeaderArr) => {
    const tableHeaderTextArr = [];
    tableHeaderArr.forEach(th => tableHeaderTextArr.push(th.innerText));
    return tableHeaderTextArr;
};
const getStyleAttributesAndRewrite = (cell) => {
    const styleAttr = cell.getAttribute("style").split(": ")[1].split(";")[0];
    if (styleAttr)
        cell.setAttribute("data-text-align", styleAttr);
    cell.setAttribute("style", "");
};
const getAllTableDataCells = (table) => table.querySelectorAll("td");
const getAllTableHeaderCells = (table) => table.querySelectorAll("th");
addResponsiveToAllTables();
