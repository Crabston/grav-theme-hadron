class ResponsiveTable {
    constructor(table) {
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
    getRows() {
        return this.table.querySelectorAll("tr");
    }
    getDataCells() {
        return this.table.querySelectorAll("td");
    }
    getHeaderCells() {
        return this.table.querySelectorAll("th");
    }
    getTextFromTableHeaders() {
        const tableHeaderTextArr = [];
        this.getHeaderCells().forEach(th => tableHeaderTextArr.push(th.innerText));
        return tableHeaderTextArr;
    }
    rewriteStyleAttribute(cell) {
        const styleAttr = cell.getAttribute("style").split(": ")[1].split(";")[0];
        if (styleAttr)
            cell.setAttribute("data-text-align", styleAttr);
        cell.setAttribute("style", "");
    }
    loadTableStyles() {
        const cells = [...this.getDataCells(), ...this.getHeaderCells()];
        cells.forEach(cell => {
            const textAlign = cell.dataset.textAlign;
            if (textAlign)
                cell.setAttribute("class", "text-align-" + textAlign);
        });
    }
    fillEmptyCells() {
        const NBSP = "\xa0";
        this.getDataCells().forEach(cell => { if (cell.innerText === "")
            cell.innerText = NBSP; });
    }
}
(function makeTablesResponsive() {
    const selector = ".table-responsive table";
    const tables = document.querySelectorAll(selector);
    tables.forEach(table => new ResponsiveTable(table));
})();
