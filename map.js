
const tvshows = [
     {name:'Breakbad', ano: 2008},
     {name:'Peakyblinders', ano: 2019},
     {name:'StrangerThings', ano: 2018},
     {name:'How i met you mother', ano: 2005},
     {name:'Friends', ano: 1999}
]

const nomeSeries = tvshows.map( ({name}) => name )

console.table(nomeSeries)