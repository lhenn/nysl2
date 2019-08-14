const initState = {
  games: [{
      "date": "9/01",
      "time": "9:30 am",
      "location": "AJ Katzenmaier",
      "team": "U1 Tigers",
      "opponent": "Larkspur Lions"
    },
    {
      "date": "9/01",
      "time": "9:30 am",
      "location": "AJ Katzenmaier",
      "team": "U4 Giants",
      "opponent": "SR Galaxy"
    },
    {
      "date": "9/01",
      "time": "1:00 pm",
      "location": "Greenbay",
      "team": "U3 Tornadoes",
      "opponent": "Larkspur Heat"
    },
    {
      "date": "9/01",
      "time": "1:00 pm",
      "location": "Greenbay",
      "team": "U2 Banana Slugs",
      "opponent": "CM Storm"
    },
    {
      "date": "9/08",
      "time": "9:30 am",
      "location": "Howard A Yeager",
      "team": "U5 Heat",
      "opponent": "Novato Express"
    },
    {
      "date": "9/08",
      "time": "9:30 am",
      "location": "Howard A Yeager",
      "team": "U6 Warriors",
      "opponent": "Tiburon Cyclones"
    },
    {
      "date": "9/08",
      "time": "1:00 pm",
      "location": "Marjorie P Hart",
      "team": "U6 Warriors",
      "opponent": "Larkspur Rams"
    },
    {
      "date": "9/08",
      "time": "1:00 pm",
      "location": "Marjorie P Hart",
      "team": "U1 Tigers",
      "opponent": "CM Quakes"
    },
    {
      "date": "9/15",
      "time": "9:30 am",
      "location": "Noble",
      "team": "U2 Banana Slugs",
      "opponent": "SR Giants"
    },
    {
      "date": "9/15",
      "time": "9:30 am",
      "location": "Noble",
      "team": "U4 Giants",
      "opponent": "CM Condors"
    },
    {
      "date": "9/15",
      "time": "1:00 pm",
      "location": "AJ Katzenmaier",
      "team": "U3 Tornadoes",
      "opponent": "Tiburon Jethawks"
    },
    {
      "date": "9/15",
      "time": "1:00 pm",
      "location": "AJ Katzenmaier",
      "team": "U5 Heat",
      "opponent": "CM Quakes"
    },
    {
      "date": "9/22",
      "time": "9:30 am",
      "location": "Saint James",
      "team": "U1 Tigers",
      "opponent": "Larkspur Cubs"
    },
    {
      "date": "9/22",
      "time": "9:30 am",
      "location": "Saint James",
      "team": "U3 Tornadoes",
      "opponent": "CM Dolphins"
    },
    {
      "date": "9/22",
      "time": "1:00 pm",
      "location": "Howard A Yeager",
      "team": "U2 Banana Slugs",
      "opponent": "Larkspur Cubs"
    },
    {
      "date": "9/22",
      "time": "1:00 pm",
      "location": "Howard A Yeager",
      "team": "U6 Warriors",
      "opponent": "Novato Red Hawks"
    },
    {
      "date": "9/29",
      "time": "9:30 am",
      "location": "Greenbay",
      "team": "U4 Giants",
      "opponent": "Novato Falcons"
    },
    {
      "date": "9/29",
      "time": "9:30 am",
      "location": "Greenbay",
      "team": "U5 Heat",
      "opponent": "SR Sockers Ducks"
    },
    {
      "date": "9/29",
      "time": "1:00 pm",
      "location": "N/A",
      "team": " -- ",
      "opponent": "--"
    },
    {
      "date": "9/29",
      "time": "1:00 pm",
      "location": "N/A",
      "team": " -- ",
      "opponent": " -- "
    },
    {
      "date": "10/06",
      "time": "9:30 am",
      "location": "Marjorie P Hart",
      "team": "U2 Banana Slugs",
      "opponent": "Tiburon Hawks"
    },
    {
      "date": "10/06",
      "time": "9:30 am",
      "location": "Marjorie P Hart",
      "team": "U5 Heat",
      "opponent": "Larkspur Sockers"
    },
    {
      "date": "10/06",
      "time": "1:00 pm",
      "location": "Saint James",
      "team": "U1 Tigers",
      "opponent": "Novato Ports"
    },
    {
      "date": "10/06",
      "time": "1:00 pm",
      "location": "Saint James",
      "team": "U6 Warriors",
      "opponent": "CM Spiders"
    },
    {
      "date": "10/20",
      "time": "9:30 am",
      "location": "Noble",
      "team": "U6 Warriors",
      "opponent": "SR Eagles"
    },
    {
      "date": "10/20",
      "time": "9:30 am",
      "location": "Noble",
      "team": "U3 Tornadoes",
      "opponent": "Novato Chargers"
    },
    {
      "date": "10/20",
      "time": "1:00 pm",
      "location": "Marjorie P Hart",
      "team": "U2 Banana Slugs",
      "opponent": "Novato Typhoon"
    },
    {
      "date": "10/20",
      "time": "1:00 pm",
      "location": "Marjorie P Hart",
      "team": "U4 Giants",
      "opponent": "Tiburon Redwoods"
    },
    {
      "date": "10/27",
      "time": "9:30 am",
      "location": "AJ Katzenmaier",
      "team": "U3 Tornadoes",
      "opponent": "SR Sparks"
    },
    {
      "date": "10/27",
      "time": "9:30 am",
      "location": "AJ Katzenmaier",
      "team": "U1 Tigers",
      "opponent": "Tiburon Sharks"
    },
    {
      "date": "10/27",
      "time": "1:00 pm",
      "location": "Howard A Yeager",
      "team": "U5 Heat",
      "opponent": "Tiburon Barracudas"
    },
    {
      "date": "10/27",
      "time": "1:00 pm",
      "location": "Howard A Yeager",
      "team": "U6 Warriors",
      "opponent": "Larkspur Bears"
    }],
  filteredGames: [],
  locations: [],
  teams: [{
    "name": "Tigers",
    "division": "U1"
  },
  {
    "name": "Banana Slugs",
    "division": "U2"
  },
  {
    "name": "Tornadoes",
    "division": "U3"
  },
  {
    "name": "Giants",
    "division": "U4"
  },
  {
    "name": "Heat",
    "division": "U5"
  },
  {
    "name": "Warriors",
    "division": "U6"
  }],
  opponents: [],
}

const rootReducer = (state = initState, action) => {
  return state;
}

export default rootReducer;
