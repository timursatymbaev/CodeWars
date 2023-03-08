function array(str) {
  const parts = str.split(",");
  if (parts.length <= 2) {
    return null;
  }
  return parts.slice(1, -1).join(" ");
}
