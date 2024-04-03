const setTablesFullWidth = (): void => getAllTables().forEach(table => table.style.width = table.parentElement.clientWidth - 20 + "px");
const loadStyles = (): void => loadTableStyles();
const fillEmptyCells = () => {
	const nbsp = "\xa0";
	getAllTableData().forEach(cell => { if (cell.innerText === "") cell.innerText = nbsp; });
}
const addResponsiveToAllTables = (): void => {
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

const getAllTables = (): NodeListOf<HTMLTableElement> => document.querySelectorAll("table");
const getAllTableHeadersFromTable = (table: HTMLTableElement): NodeListOf<HTMLTableCellElement> => table.querySelectorAll("th");
const getAllTableRowsFromTable = (table: HTMLTableElement): NodeListOf<HTMLTableRowElement> => table.querySelectorAll("tr");

const getAllTextFromTableHeaders = (tableHeaderArr: NodeListOf<HTMLTableCellElement>): string[] => {
	const tableHeaderTextArr = [];
	tableHeaderArr.forEach(th => tableHeaderTextArr.push(th.innerText));
	return tableHeaderTextArr;
};

const getAllTableDataFromTableRows = (tableRow: HTMLTableRowElement): NodeListOf<HTMLTableCellElement> => tableRow.querySelectorAll("td");

const getStyleAttributesAndRewrite = (cell: HTMLTableCellElement): void => {
	const styleAttr = cell.getAttribute("style").split(": ")[1].split(";")[0];
	if (styleAttr) cell.setAttribute("data-text-align", styleAttr);
	cell.setAttribute("style", "");
};


const loadTableStyles = (): void => {
	const cells = [...getAllTableData(), ...getAllTableHeaders()];
	cells.forEach(cell => {
		const textAlign = cell.dataset.textAlign;
		if (textAlign) cell.setAttribute("class", "text-align-" + textAlign);
	});

};

const getAllTableData = (): NodeListOf<HTMLTableCellElement> => document.querySelectorAll("td");
const getAllTableHeaders = (): NodeListOf<HTMLTableCellElement> => document.querySelectorAll("th");

addResponsiveToAllTables();
setTablesFullWidth();
loadStyles();
fillEmptyCells();

// if window is resized, reload the styles
onresize = (event) => {
	setTablesFullWidth();
};