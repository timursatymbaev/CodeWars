function meeting(s) {
  const names = s.split(";");

  const formattedNames = names.map(name => {
    const [first, last] = name.toUpperCase().split(":");
    return { first, last };
  });

  formattedNames.sort((a, b) => {
    if (a.last < b.last) {
      return -1;
    } else if (a.last > b.last) {
      return 1;
    } else {
      if (a.first < b.first) {
        return -1;
      } else if (a.first > b.first) {
        return 1;
      } else {
        return 0;
      }
    }
  });

  const formattedString = formattedNames.map(name => {
    return `(${name.last}, ${name.first})`;
  }).join("");

  return formattedString;
}
