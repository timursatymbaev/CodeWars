function ipToInt32(ip) {
  let octets = ip.split(".");
  let int32 = 0;
  
  for (let i = 0; i < octets.length; i++) {
    int32 += parseInt(octets[i]) << (8 * (3 - i));
  }
  
  return int32 >>> 0; // convert to unsigned 32-bit int
}
