var isTouch = window.DocumentTouch && document instanceof DocumentTouch;
function scrollHeader() {
    var zvalue = $(document).scrollTop();
    if (zvalue > 75)
        $("#header").addClass("scrolled");
    else
        $("#header").removeClass("scrolled");
}
function parallaxBackground() {
    $('.parallax').css('background-positionY', ($(window).scrollTop() * 0.3) + 'px');
}
jQuery(document).ready(function ($) {
    scrollHeader();
    if (!isTouch) {
        $(document).scroll(function () {
            scrollHeader();
            parallaxBackground();
        });
    }
    ;
    $(document).on({
        'touchmove': function (e) {
            scrollHeader();
        }
    });
    $('#to-start').click(function () {
        var start_y = $('#start').position().top;
        var header_offset = 45;
        window.scroll({ top: start_y - header_offset, left: 0, behavior: 'smooth' });
        return false;
    });
    $('#to-top').click(function () {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
        return false;
    });
    $('#toggle').click(function () {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
        $('body').toggleClass('mobile-nav-open');
    });
    $(".tree").treemenu({ delay: 300 });
});
document.querySelectorAll('oembed[url]').forEach(element => {
    const anchor = document.createElement('a');
    anchor.setAttribute('href', element.getAttribute('url'));
    anchor.className = 'embedly-card';
    anchor.dataset.cardAlign = 'left';
    anchor.dataset.cardControls = 0;
    element.appendChild(anchor);
});
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
