let seatingChart = [
    ["A1", "A2", "A3", "A4"],
    ["B1", "B2", "B3", "B4"],
    ["C1", "C2", "C3", "C4"]];
for (let row = 0; row < seatingChart.length; row++) {
    // Column by column in each row
    for (let col = 0; col < seatingChart[row].length; col++) {
        console.log("Checking seat: " + seatingChart[row][col]);
    }
}