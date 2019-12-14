const express = require('express');
const path = require('path');
const app = express();


const index = require('./routes/index');
const about = require('./routes/about');
const contactus = require('./routes/ContactUs');
const Features = require('./routes/Features');
const signup = require('./routes/signup');
const products = require('./routes/products');
const error404 = require('./routes/404error');

//const games = require('./routes/games')

//const bodyparser = require('body-parser');
//var urlEncode = bodyparser.urlencoded({ extended: false });
app.use(express.static(path.join(__dirname, 'assets')))
app.use(express.static(path.join(__dirname)))

/*
gamesLsit = [{
        id: 1,
        name: "game1",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 11.24,
        type: "pc"


    },
    {
        id: 2,
        name: "game2",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 11.24,
        type: "pc"
    },
    {
        id: 3,
        name: "game3",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 11.24,
        type: "ps"

    },
    {
        id: 4,
        name: "game3",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 11.24,
        type: "xbox"

    },
    {
        id: 5,
        name: "game3",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 11.24,
        type: "xbox"

    },
    {
        id: 6,
        name: "game3",
        smalldis: "any discription",
        dis: "is a first-person shooter video game franchise published by Activision. Starting out in 2003, it first focused on games set in World War II, but over time, the series has seen games set in modern times, the midst of the Cold War, futuristic worlds, and outer space. The games were first developed by Infinity Ward, then also by Treyarch and Sledgehammer Games. Several spin-off and handheld games were made by other developers. The most recent title, Call of Duty: Modern Warfare, was released on October 25, 2019. The series originally focused on the World War II setting, with Infinity Ward developing the first (2003) and second (2005) titles in the series and Treyarch developing the third (2006). Call of Duty 4: Modern Warfare (2007) introduced a new, modern setting, and proved to be the breakthrough title for the series, creating the Modern Warfare sub-series. The game's legacy also influenced the creation of a remastered version, released in 2016. Two other entries, Modern Warfare 2 (2009) and 3 (2011), were made. The sub-series received a soft-reboot with Modern Warfare in 2019. Infinity Ward have also developed two games outside of the Modern Warfare sub-series, Ghosts (2013) and Infinite Warfare (2016). Treyarch made one last World War II-based game, World at War (2008)",
        price: 11.24,
        type: "xbox"

    },

]

function getGames(str) {
    let games = []
    for (var i = 0; i < gamesLsit.length; i++) {
        if (str == (gamesLsit[i].type).toLowerCase() || str == (gamesLsit[i].name).toLowerCase())
            games.push(gamesLsit[i])
    }
    return games;
}
*/
app.set('view engine', 'ejs')
app.set('views', 'views')



app.use(index);
app.use(about);
app.use(products);
app.use(signup);
app.use(Features);
app.use(contactus);
//app.use(games);
app.use(error404);


/*
app.get("/games", (req, res, next) => {
    res.render('games', { games: gamesLsit })
})

app.get("/games/:type", (req, res, next) => {
    let type = req.params.type;

    res.render('games', { games: getGames(type) })
})



app.get("/game/:id", (req, res, next) => {
    let id = req.params.id
    let product;
    for (var i = 0; i < gamesLsit.length; i++) {
        if (gamesLsit[i].id == id) {
            product = gamesLsit[i]
            break;
        }
    }
    res.render("products", { product: product })
})

app.post("/addAccount", urlEncode, (req, res, next) => {
    response = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }
    console.log(response)
})
app.get("/search", (req, res, next) => {

    let type = req.query['search']

    res.redirect("/games/" + (type.toLowerCase()))

})

*/

app.listen(3000, (err) => {
    console.log(err)
    console.log('server listen on port 3000')

})