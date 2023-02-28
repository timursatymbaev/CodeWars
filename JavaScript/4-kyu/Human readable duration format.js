function formatDuration(seconds) {
  if (seconds === 0) {
    return "now";
  }

  const year = Math.floor(seconds / (60 * 60 * 24 * 365));
  seconds -= year * 60 * 60 * 24 * 365;
  const day = Math.floor(seconds / (60 * 60 * 24));
  seconds -= day * 60 * 60 * 24;
  const hour = Math.floor(seconds / (60 * 60));
  seconds -= hour * 60 * 60;
  const minute = Math.floor(seconds / 60);
  seconds -= minute * 60;

  const parts = [];
  if (year > 0) {
    parts.push(year + " year" + (year > 1 ? "s" : ""));
  }
  if (day > 0) {
    parts.push(day + " day" + (day > 1 ? "s" : ""));
  }
  if (hour > 0) {
    parts.push(hour + " hour" + (hour > 1 ? "s" : ""));
  }
  if (minute > 0) {
    parts.push(minute + " minute" + (minute > 1 ? "s" : ""));
  }
  if (seconds > 0) {
    parts.push(seconds + " second" + (seconds > 1 ? "s" : ""));
  }

  let result = "";
  for (let i = 0; i < parts.length; i++) {
    if (i === 0) {
      result = parts[i];
    } else if (i === parts.length - 1) {
      result += " and " + parts[i];
    } else {
      result += ", " + parts[i];
    }
  }

  return result;
}
