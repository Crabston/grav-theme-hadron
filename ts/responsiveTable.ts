class ResponsiveTable {
	private table: HTMLTableElement;

	constructor(table: HTMLTableElement) {
		this.table = table;

		const cells = [
			...this.getDataCells(),
			...this.getHeaderCells(),
		];
		cells.forEach(cell => this.rewriteStyleAttribute(cell));

		this.getRows()
			.forEach(tr => tr.querySelectorAll("td")
				.forEach((td, i) => td.setAttribute("data-label", (this.getTextFromTableHeaders())[i])));

		this.loadTableStyles();
		this.fillEmptyCells();
	}

	private getRows(): NodeListOf<HTMLTableRowElement> {
		return this.table.querySelectorAll("tr");
	}

	private getDataCells(): NodeListOf<HTMLTableCellElement> {
		return this.table.querySelectorAll("td");
	}

	private getHeaderCells(): NodeListOf<HTMLTableCellElement> {
		return this.table.querySelectorAll("th");
	}

	private getTextFromTableHeaders(): string[] {
		const tableHeaderTextArr = [];
		this.getHeaderCells().forEach(th => tableHeaderTextArr.push(th.innerText));
		return tableHeaderTextArr;
	}

	private rewriteStyleAttribute(cell: HTMLTableCellElement): void {
		const styleAttr = cell.getAttribute("style").split(": ")[1].split(";")[0];
		if (styleAttr) cell.setAttribute("data-text-align", styleAttr);
		cell.setAttribute("style", "");
	}

	private loadTableStyles(): void {
		const cells = [...this.getDataCells(), ...this.getHeaderCells()];
		cells.forEach(cell => {
			const textAlign = cell.dataset.textAlign;
			if (textAlign) cell.setAttribute("class", "text-align-" + textAlign);
		});
	}

	private fillEmptyCells(): void {
		const NBSP = "\xa0";
		this.getDataCells().forEach(cell => { if (cell.innerText === "") cell.innerText = NBSP; });
	}
}

(function makeTablesResponsive() {
	const selector = ".table-responsive table";
	const tables = document.querySelectorAll(selector) as NodeListOf<HTMLTableElement>;
	tables.forEach(table => new ResponsiveTable(table));
})();
