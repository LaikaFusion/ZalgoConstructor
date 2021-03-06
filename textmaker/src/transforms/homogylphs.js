
//taken from https://github.com/reinderien/mimic/blob/master/mimic/__init__.py may play with the values
const data ={' ': ['\u00A0','\u2000','\u2001','\u2002','\u2003','\u2004','\u2005','\u2006','\u2007','\u2008','\u2009','\u200A','\u202F','\u205F'],
'!': ['\uFF01','\u01C3','\u2D51','\uFE15','\uFE57'],
'"':['\uFF02'],
'#':['\uFF03','\uFE5F'],
'$':['\uFF04','\uFE69'],
'%':['\uFF05','\u066A','\u2052','\uFE6A'],
'&':['\uFF06','\uFE60'],
"'": ['\uFF07','\u02B9','\u0374'],
'(':['\uFF08','\uFE59'],
')':['\uFF09','\uFE5A'],
'*':['\uFF0A','\u22C6','\uFE61'],
'+':['\uFF0B','\u16ED','\uFE62'],
',':['\uFF0C','\u02CF','\u16E7','\u201A'],
'-':['\uFF0D','\u02D7','\u2212','\u23BC','\u2574','\uFE63'],
'.':['\uFF0E','\u2024'],
'/':['\uFF0F','\u1735','\u2044','\u2215','\u29F8'],
// '0':['\u2070','\u2080','\u24EA','\uFF10','\u1C50'],
// '1':['\u00B9','\u2081','\u2460','\uFF11'],
'2':['\u14BF'],
'3':['\u01B7','\u2128'],
'4':['\u13CE'],
'5':['\u2075','\u2085','\u2464','\uFF15'],
'6':['\u13EE'],
// '7':['\u2077','\u2087','\u2466','\uFF17'],
// '8':['\u2078','\u2088','\u2467','\uFF18'],
'9':['\u13ED'],
':':['\uFF1A','\u02D0','\u02F8','\u0589','\u1361','\u16EC','\u205A','\u2236','\u2806','\uFE13','\uFE55'],
';':['\uFF1B','\u037E','\uFE14','\uFE54'],
'<':['\uFF1C','\u02C2','\u2039','\u227A','\u276E','\u2D66','\uFE64'],
'=':['\uFF1D','\u2550','\u268C','\uFE66'],
'>':['\uFF1E','\u02C3','\u203A','\u227B','\u276F','\uFE65'],
'?':['\uFF1F','\uFE16','\uFE56'],
'@':['\uFF20','\uFE6B'],
'A':['\u0391','\u0410','\u13AA'],
'B':['\u0392','\u0412','\u13F4','\u15F7','\u2C82'],
'C':['\u03F9','\u0421','\u13DF','\u216D','\u2CA4'],
'D':['\u13A0','\u15EA','\u216E'],
'E':['\u0395','\u0415','\u13AC'],
'F':['\u15B4'],
'G':['\u050C','\u13C0'],
'H':['\u0397','\u041D','\u12D8','\u13BB','\u157C','\u2C8E'],
'I':['\u0399','\u0406','\u2160'],
'J':['\u0408','\u13AB','\u148D'],
'K':['\u039A','\u13E6','\u16D5','\u212A','\u2C94'],
'L':['\u13DE','\u14AA','\u216C'],
'M':['\u039C','\u03FA','\u041C','\u13B7','\u216F'],
'N':['\u039D','\u2C9A'],
'O':['\u039F','\u041E','\u2C9E'],
'P':['\u03A1','\u0420','\u13E2','\u2CA2'],
'Q':['\u051A','\u2D55'],
'R':['\u13A1','\u13D2','\u1587'],
'S':['\u0405','\u13DA'],
'T':['\u03A4','\u0422','\u13A2'],
// 'U':['\u1D41','\u24CA','\uFF35'],
'V':['\u13D9','\u2164'],
'W':['\u13B3','\u13D4'],
'X':['\u03A7','\u0425','\u2169','\u2CAC'],
'Y':['\u03A5','\u2CA8'],
'Z':['\u0396','\u13C3'],
'[':['\uFF3B'],
'\\':['\uFF3C','\u2216','\u29F5','\u29F9','\uFE68'],
']':['\uFF3D'],
'^':['\uFF3E','\u02C4','\u02C6','\u1DBA','\u2303'],
'_':['\uFF3F','\u02CD','\u268A'],
'`':['\uFF40','\u02CB','\u1FEF','\u2035'],
'a':['\u0251','\u0430'],
// 'b':['\u1D47','\u24D1','\uFF42'],
'c':['\u03F2','\u0441','\u217D'],
'd':['\u0501','\u217E'],
'e':['\u0435','\u1971'],
// 'f':['\u1DA0','\u24D5','\uFF46'],
'g':['\u0261'],
'h':['\u04BB'],
'i':['\u0456','\u2170'],
'j':['\u03F3','\u0458'],
// 'k':['\u1D4F','\u24DA','\uFF4B'],
'l':['\u217C'],
'm':['\u217F'],
'n':['\u1952'],
'o':['\u03BF','\u043E','\u0D20','\u2C9F'],
'p':['\u0440','\u2CA3'],
// 'r':['\u02B3','\u1D63','\u24E1','\uFF52'],
's':['\u0455'],
// 't':['\u1D57','\u24E3','\uFF54'],
'u':['\u1959','\u222A'],
'v':['\u1D20','\u2174','\u2228','\u22C1'],
'w':['\u1D21'],
'x':['\u0445','\u2179','\u2CAD'],
'y':['\u0443','\u1EFF'],
'z':['\u1D22'],
'{':['\uFF5B','\uFE5B'],
'|':['\uFF5C','\u01C0','\u16C1','\u239C','\u239F','\u23A2','\u23A5','\u23AA','\u23AE','\uFFE8'],
'}':['\uFF5D','\uFE5C'],
'~':['\uFF5E','\u02DC','\u2053','\u223C']}


 const gylphTransform=(str)=>{
  const splitStr = str.split('');
  return splitStr.map((e,i)=>{
    if(Math.random() > .75 && data.hasOwnProperty(e)){
      return  data[e][Math.floor(Math.random()*data[e].length)]
    }
    return e
  }).join('');
}

module.exports={data,gylphTransform}

