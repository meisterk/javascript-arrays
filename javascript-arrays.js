const data = [
    { vorname: "Carla",  nachname: "Bein", alter: 19 },
    { vorname: "Anna",   nachname: "Copf", alter: 18 },
    { vorname: "Dieter", nachname: "Darm", alter: 20 },
    { vorname: "Berta",  nachname: "Arm",  alter: 20 }
];

// klassisch mit Schleife
for(let i = 0; i < data.length; i++){
   // console.log(data[i].vorname);
}

dataVorname = data.sort((e,f) => e.vorname-f.vorname);


// filter()
gefiltert = data.filter( person => person.alter > 18);

gefiltert.forEach(person => {
    console.log(person.vorname);
});

// map()
gemappt = data.map( person => person.alter + 1);
gemappt.forEach(alter => {
    console.log(alter);
});

// reduce
zahl = data.reduce(element => element +1);
console.log(zahl);

