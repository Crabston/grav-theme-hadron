class Table {

	private table: HTMLTableElement;

	constructor(table: HTMLTableElement) {
		this.table = table;

		const cells = [...this.getAllTableDataCells(), ...this.getAllTableHeaderCells()];
		cells.forEach(cell => this.getStyleAttributesAndRewrite(cell));

		const tableHeaders = this.table.querySelectorAll("th");
		const tableHeaderTexts = this.getAllTextFromTableHeaders();

		const tableRows = this.table.querySelectorAll("tr");
		tableRows.forEach(tr => tr.querySelectorAll("td").forEach((td, i) => td.setAttribute("data-label", tableHeaderTexts[i])));

		this.loadTableStyles();
		this.fillEmptyCells();
	}

	private getAllTableDataCells() {
		return this.table.querySelectorAll("td");
	}

	private getAllTableHeaderCells() {
		return this.table.querySelectorAll("th");
	}

	private fillEmptyCells() {
		const NBSP = "\xa0";
		this.getAllTableDataCells().forEach(cell => { if (cell.innerText === "") cell.innerText = NBSP; });
	}

	private loadTableStyles() {
		const cells = [...this.getAllTableDataCells(), ...this.getAllTableHeaderCells()];
		cells.forEach(cell => {
			const textAlign = cell.dataset.textAlign;
			if (textAlign) cell.setAttribute("class", "text-align-" + textAlign);
		});
	}

	private getAllTextFromTableHeaders() {
		const tableHeaderTextArr = [];
		this.getAllTableHeaderCells().forEach(th => tableHeaderTextArr.push(th.innerText));
		return tableHeaderTextArr;
	}

	private getStyleAttributesAndRewrite(cell: HTMLTableCellElement) {
		const styleAttr = cell.getAttribute("style").split(": ")[1].split(";")[0];
		if (styleAttr) cell.setAttribute("data-text-align", styleAttr);
		cell.setAttribute("style", "");
	}

}

const addResponsiveToAllTables = (): void => {
	const tables = document.querySelectorAll(".table-responsive table") as NodeListOf<HTMLTableElement>;
	tables.forEach(table => {
		new Table(table);
	});
};

addResponsiveToAllTables();
