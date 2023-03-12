function stat(results) {
  if (!results) return "";

  // Convert the string of results into an array of seconds
  const seconds = results.split(", ").map(time => {
    const [h, m, s] = time.split("|").map(num => parseInt(num));
    return h * 3600 + m * 60 + s;
  });

  // Calculate range
  const rangeSeconds = Math.max(...seconds) - Math.min(...seconds);
  const range = formatTime(rangeSeconds);

  // Calculate average
  const sumSeconds = seconds.reduce((acc, cur) => acc + cur, 0);
  const averageSeconds = Math.floor(sumSeconds / seconds.length);
  const average = formatTime(averageSeconds);

  // Calculate median
  seconds.sort((a, b) => a - b);
  const mid = Math.floor(seconds.length / 2);
  const medianSeconds = seconds.length % 2 === 0
    ? Math.floor((seconds[mid - 1] + seconds[mid]) / 2)
    : seconds[mid];
  const median = formatTime(medianSeconds);

  return `Range: ${range} Average: ${average} Median: ${median}`;
}

function formatTime(seconds) {
  const h = Math.floor(seconds / 3600).toString().padStart(2, "0");
  const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${h}|${m}|${s}`;
}
