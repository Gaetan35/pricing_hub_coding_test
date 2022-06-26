const csv = require("csv-parser");
const fs = require("fs");

const readCsvFile = (filename) =>
  new Promise((resolve, reject) => {
    const csvRows = [];
    fs.createReadStream(filename)
      .pipe(csv({ separator: ";" }))
      .on("data", (row) => {
        csvRows.push(row);
      })
      .on("end", () => {
        resolve(csvRows);
      });
  });

const formatData = async (filename) => {
  const csvRows = await readCsvFile(filename);
  const graphByCategory = {};
  const descendants = {};
  const rootLevelCategories = [];
  for (let row of csvRows) {
    const {
      niveau_1: level1Category,
      niveau_2: level2Category,
      niveau_3: level3Category,
      date,
      ventes: sales,
    } = row;

    const [dd, mm, yyyy] = date.split("/");
    const isoDate = `${yyyy}-${mm}-${dd}`;

    descendants[level1Category] = [
      ...new Set([...(descendants[level1Category] ?? []), level2Category]),
    ];
    descendants[level2Category] = [
      ...new Set([...(descendants[level2Category] ?? []), level3Category]),
    ];

    if (!rootLevelCategories.includes(level1Category)) {
      rootLevelCategories.push(level1Category);
    }

    for (let category of [level1Category, level2Category, level3Category]) {
      graphByCategory[category] = {
        ...graphByCategory[category],
        [isoDate]:
          parseFloat(sales) + (graphByCategory[category]?.[isoDate] ?? 0),
      };
    }
  }

  const formattedGraphByCategory = Object.fromEntries(
    Object.entries(graphByCategory).map(([category, values]) => [
      category,
      Object.entries(values).map(([date, sales]) => ({
        date,
        sales,
      })),
    ])
  );

  const formattedData = {
    descendants,
    graphByCategory: formattedGraphByCategory,
    rootLevelCategories,
  };

  fs.writeFileSync("src/formattedData.json", JSON.stringify(formattedData));
};

formatData("data.csv");
