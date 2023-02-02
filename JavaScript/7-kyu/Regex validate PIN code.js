validatePIN = pin => (!/^\d{4}(\d{2})?$/.test(pin)) ? false : true
