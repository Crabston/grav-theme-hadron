const setTablesFullWidth = () => getAllTables().forEach(table => table.style.width = table.parentElement.clientWidth - 20 + "px");
const loadStyles = () => loadTableStyles();
const fillEmptyCells = () => {
    const nbsp = "\xa0";
    getAllTableData().forEach(cell => { if (cell.innerText === "")
        cell.innerText = nbsp; });
};
const addResponsiveToAllTables = () => {
    const tables = getAllTables();
    tables.forEach(table => {
        const tableHeaders = getAllTableHeadersFromTable(table);
        const tableHeaderTexts = getAllTextFromTableHeaders(tableHeaders);
        const tableRows = getAllTableRowsFromTable(table);
        const cells = [...getAllTableData(), ...getAllTableHeaders()];
        cells.forEach(cell => getStyleAttributesAndRewrite(cell));
        tableRows.forEach(tr => getAllTableDataFromTableRows(tr).forEach((td, i) => td.setAttribute("data-label", tableHeaderTexts[i])));
    });
};
const getAllTables = () => document.querySelectorAll("table");
const getAllTableHeadersFromTable = (table) => table.querySelectorAll("th");
const getAllTableRowsFromTable = (table) => table.querySelectorAll("tr");
const getAllTextFromTableHeaders = (tableHeaderArr) => {
    const tableHeaderTextArr = [];
    tableHeaderArr.forEach(th => tableHeaderTextArr.push(th.innerText));
    return tableHeaderTextArr;
};
const getAllTableDataFromTableRows = (tableRow) => tableRow.querySelectorAll("td");
const getStyleAttributesAndRewrite = (cell) => {
    const styleAttr = cell.getAttribute("style").split(": ")[1].split(";")[0];
    if (styleAttr)
        cell.setAttribute("data-text-align", styleAttr);
    cell.setAttribute("style", "");
};
const loadTableStyles = () => {
    const cells = [...getAllTableData(), ...getAllTableHeaders()];
    cells.forEach(cell => {
        const textAlign = cell.dataset.textAlign;
        if (textAlign)
            cell.setAttribute("class", "text-align-" + textAlign);
    });
};
const getAllTableData = () => document.querySelectorAll("td");
const getAllTableHeaders = () => document.querySelectorAll("th");
addResponsiveToAllTables();
setTablesFullWidth();
loadStyles();
fillEmptyCells();
onresize = (event) => {
    setTablesFullWidth();
};
