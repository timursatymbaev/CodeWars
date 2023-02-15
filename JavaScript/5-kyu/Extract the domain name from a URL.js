function domainName(url) {
  const regex = /^(?:https?:\/\/)?(?:www\.)?([^\/.]+)/;
  const match = url.match(regex);

  const domain = match ? match[1] : null;

  if (domain) {
    const suffixes = ['.com', '.net', '.org', '.edu', '.gov', '.int', '.mil'];
    for (const suffix of suffixes) {
      if (domain.endsWith(suffix)) {
        return domain.slice(0, -suffix.length);
      }
    }
    if (domain.startsWith('www.')) {
      return domain.slice(4);
    }
    const parts = domain.split('.');
    if (parts.length > 1) {
      const lastPart = parts[parts.length - 1];
      if (lastPart.length === 2) {
        parts.splice(parts.length - 1, 1);
      }
    }
    return parts.join('.');
  }

  return null;
}
