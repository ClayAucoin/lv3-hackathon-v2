//calculate profit
function findProfit() {
  let data = {}
  let tempProfit = [];
  for (let i = 0; i < data.length; i++) {
    const gross = Number(data[i].worldwide_gross);
    const budget = Number(data[i].budget);

    if (
      !isNaN(gross) &&
      !isNaN(budget) &&
      budget > 0 &&
      ((gross - budget) / budget) * 100 < 30
    ) {
      tempProfit.push(
        ((data[i].worldwide_gross - data[i].budget) / data[i].budget) * 100
      );
    }
    console.log(tempProfit);
  }
  setProfit(tempProfit)
}