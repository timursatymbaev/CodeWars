DNAStrand = dna => dna.replace(/A|T|G|C/g, match => match === 'A' ? 'T' : match === 'T' ? 'A' : match === 'G' ? 'C' : 'G')
