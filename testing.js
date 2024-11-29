// Function to write the Fibonacci series up to 10
function fibonacciSeries() {
    const series = [0, 1];
    for (let i = 2; i < 10; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return series;
}

console.log(fibonacciSeries());