// VERZIJA U KOJOJ NE RADI POSTAVLJANJE PODATAKA U SINGLE "OKVIR"

// $.ajax('https://randomuser.me/api/?results=20')
//     .done(function (korisnici) {
//         console.log(korisnici);

// for (i = 0; i <= korisnici.results.length; i++) {

//     $("#okvir").append("<div class=blah></div>");
//     $(".blah").append("<h1>" + korisnici.results[i].name.first + " " + korisnici.results[i].name.last + "</h1>"),
//     $(".blah").append("<p>" + korisnici.results[i].email + "</p>"),
//     $(".blah").append("<p>" + korisnici.results[i].phone + "</p>")
//     $(".blah").append(`<img src="${korisnici.results[i].picture.medium}">`)

// };

// ISPRAVNA VERZIJA

// $.ajax('https://randomuser.me/api/?results=20')
//     .done(function (korisnici) {
//         console.log(korisnici);


// for (i = 0; i < korisnici.results.length; i++) {
//     $mika = $("<div class=blah></div>");
//     $mika.append("<h1>" + korisnici.results[i].name.title + " " + korisnici.results[i].name.first + " " +        korisnici.results[i].name.last + "</h1>"),
//     $mika.append("<p>" + korisnici.results[i].email + "</p>"),
//     $mika.append("<p>" + korisnici.results[i].phone + "</p>")
//     $mika.append(`<img src="${korisnici.results[i].picture.medium}">`)

//     $("#okvir").append($mika);
// };
// })






