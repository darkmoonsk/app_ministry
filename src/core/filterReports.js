export default function filterReports(reports, year) {
    if(year === "all") {
        return reports.sort(comparePerMonth)
            .sort(comparePerYear)
            .reverse();
    } else {
        return reports.filter((report) => report.year === year)
            .sort(comparePerMonth)
            .reverse();
    }
}

const monthToNumber = {
    "Janeiro": 1,
    "Fevereiro": 2,
    "Março": 3,
    "Abril": 4,
    "Maio": 5,
    "Junho": 6,
    "Julho": 7,
    "Agosto": 8,
    "Setembro": 9,
    "Outubro": 10,
    "Novembro": 11,
    "Dezembro": 12,
}

function comparePerMonth(a, b) {
    const monthA = monthToNumber[a.month];
    const monthB = monthToNumber[b.month];

    return monthA - monthB;
}

function comparePerYear(a, b) {
    return a.year - b.year;
}