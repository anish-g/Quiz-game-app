const questions = [
  {
    question:
      "Virgin Trains, Virgin Atlantic and Virgin Racing, are all companies owned by which famous entrepreneur?   ",
    answers: ["Alan Sugar", "Richard Branson", "Donald Trump", "Bill Gates"],
    correct: "Richard Branson",
    questionId: "099099"
  },
  {
    question:
      'Where is the train station "Llanfair­pwllgwyngyll­gogery­chwyrn­drobwll­llan­tysilio­gogo­goch"?',
    answers: ["Wales", "Moldova", "Czech Republic", "Denmark"],
    correct: "Wales",
    questionId: "183452"
  },
  {
    question:
      "Which company did Valve cooperate with in the creation of the Vive?",
    answers: ["Oculus", "Google", "HTC", "Razer"],
    correct: "HTC",
    questionId: "267908"
  },
  {
    question: "What's the name of Batman's  parents?",
    answers: [
      "Thomas & Martha",
      "Joey & Jackie",
      "Jason & Sarah",
      "Todd & Mira"
    ],
    correct: "Thomas & Martha",
    questionId: "333247"
  },
  {
    question: "What is the most common surname Wales?",
    answers: ["Williams", "Davies", "Evans", "Jones"],
    correct: "Jones",
    questionId: "496293"
  },
  {
    question:
      "What was the name of the WWF professional wrestling tag team made up of the wrestlers Ax and Smash?",
    answers: [
      "The Dream Team",
      "Demolition",
      "The Bushwhackers",
      "The British Bulldogs"
    ],
    correct: "Demolition",
    questionId: "588909"
  },
  {
    question:
      'What name represents the letter "M" in the NATO phonetic alphabet?',
    answers: ["Matthew", "Mike", "Mark", "Max"],
    correct: "Mike",
    questionId: "648452"
  },
  {
    question: "What is the first book of the Old Testament?",
    answers: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correct: "Genesis",
    questionId: "786649"
  },
  {
    question:
      "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    answers: ["Sword", "Pen", "Cellphone", "Key"],
    correct: "Key",
    questionId: "839754"
  },
  {
    question:
      "Which best selling toy of 1983 caused hysteria, resulting in riots breaking out in stores?",
    answers: [
      "Cabbage Patch Kids",
      "Transformers",
      "Care Bears",
      "Rubik’s Cube"
    ],
    correct: "Cabbage Patch Kids",
    questionId: "98390"
  },
  {
    question: "What does a funambulist walk on?",
    answers: ["Broken Glass", "Balls", "A Tight Rope", "The Moon"],
    correct: "A Tight Rope",
    questionId: "1071006"
  },
  {
    question: "In past times, what would a gentleman keep in his fob pocket?",
    answers: ["Money", "Watch", "Keys", "Notebook"],
    correct: "Watch",
    questionId: "1174154"
  },
  {
    question: "Area 51 is located in which US state?",
    answers: ["Nevada", "Arizona", "New Mexico", "Utah"],
    correct: "Nevada",
    questionId: "1226535"
  },
  {
    question: "How would one say goodbye in Spanish?",
    answers: ["Hola", "Adiós", "Au Revoir", "Salir"],
    correct: "Adiós",
    questionId: "1310938"
  },
  {
    question: "What is the largest organ of the human body?",
    answers: ["Heart", "large Intestine", "Liver", "Skin"],
    correct: "Skin",
    questionId: "1436873"
  },
  {
    question: "Which sign of the zodiac is represented by the Crab?",
    answers: ["Libra", "Cancer", "Virgo", "Sagittarius"],
    correct: "Cancer",
    questionId: "1515110"
  },
  {
    question: "On a dartboard, what number is directly opposite No. 1?",
    answers: ["20", "19", "12", "15"],
    correct: "19",
    questionId: "1642728"
  },
  {
    question:
      "What does the 'S' stand for in the abbreviation SIM, as in SIM card? ",
    answers: ["Subscriber", "Single", "Secure", "Solid"],
    correct: "Subscriber",
    questionId: "1747256"
  },
  {
    question:
      "What word represents the letter 'T' in the NATO phonetic alphabet?",
    answers: ["Target","Tango" , "Taxi", "Turkey"],
    correct: "Tango",
    questionId: "1822532"
  },
  {
    question: "Which American president appears on a one dollar bill?",
    answers: [
      "Thomas Jefferson",
      "Abraham Lincoln",
      "George Washington",
      "Benjamin Franklin"
    ],
    correct: "George Washington",
    questionId: "195075"
  },
  {
    question: 'What is "dabbing"?',
    answers: ["A medical procedure", "A sport", "A language", "A dance"],
    correct: "A dance",
    questionId: "2019778"
  },
  {
    question: "What is the name of the Jewish New Year?",
    answers: ["Rosh Hashanah", "Elul", "New Year", "Succoss"],
    correct: "Rosh Hashanah",
    questionId: "2134343"
  },
  {
    question: "Which one of the following rhythm games was made by Harmonix?",
    answers: [
      "Meat Beat Mania",
      "Rock Band",
      "Guitar Hero Live",
      "Dance Dance Revolution"
    ],
    correct: "Rock Band",
    questionId: "2210799"
  },
  {
    question:
      "What type of animal was Harambe, who was shot after a child fell into it's enclosure at the Cincinnati Zoo?",
    answers: ["Tiger", "Panda", "Gorilla", "Crocodile"],
    correct: "Gorilla",
    questionId: "2379831"
  },
  {
    question: "Red Vines is a brand of what type of candy?",
    answers: ["Lollipop", "Chocolate", "Bubblegum", "Licorice"],
    correct: "Licorice",
    questionId: "2426418"
  },
  {
    question: "What is the nickname of the US state of California?",
    answers: ["Golden State", "Sunshine State", "Bay State", "Treasure State"],
    correct: "Golden State",
    questionId: "2510086"
  },
  {
    question: "What is on display in the Madame Tussaud's museum in London?",
    answers: [
      "Designer clothing",
      "Wax sculptures",
      "Unreleased film reels",
      "Vintage cars"
    ],
    correct: "Wax sculptures",
    questionId: "2685745"
  },
  {
    question:
      "What was the nickname given to the Hughes H-4 Hercules, a heavy transport flying boat which achieved flight in 1947?",
    answers: ["Noah's Ark", "Fat Man", "Spruce Goose", "Trojan Horse"],
    correct: "Spruce Goose",
    questionId: "2796884"
  },
  {
    question: "Which of these colours is NOT featured in the logo for Google?",
    answers: ["Yellow", "Blue", "Green", "Pink"],
    correct: "Pink",
    questionId: "2838900"
  },
  {
    question: 'What is the French word for "hat"?',
    answers: ["Chapeau", "Bonnet", " Écharpe", " Casque"],
    correct: "Chapeau",
    questionId: "298060"
  },
  {
    question: "Five dollars is worth how many nickles?",
    answers: ["50", "100", "25", "69"],
    correct: "100",
    questionId: "3096579"
  },
  {
    question: "Who is depicted on the US hundred dollar bill?",
    answers: [
      "George Washington",
      "Abraham Lincoln",
      "Benjamin Franklin",
      "Thomas Jefferson"
    ],
    correct: "Benjamin Franklin",
    questionId: "3182461"
  },
  {
    question: "What do the letters in the GMT time zone stand for?",
    answers: [
      "Global Meridian Time",
      "General Median Time",
      "Glasgow Man Time",
      "Greenwich Mean Time"
    ],
    correct: "Greenwich Mean Time",
    questionId: "3239112"
  },
  {
    question: "Which one of these is not a typical European sword design?",
    answers: ["Scimitar", "Falchion", "Ulfberht", "Flamberge"],
    correct: "Scimitar",
    questionId: "3318503"
  },
  {
    question:
      'According to Sherlock Holmes, "If you eliminate the impossible, whatever remains, however improbable, must be the..."',
    answers: ["Answer", "Truth", "Cause", "Source"],
    correct: "Truth",
    questionId: "3410327"
  },
  {
    question: "What is the name of Poland in Polish?",
    answers: ["Pupcia", "Polszka", "Polska", "Póland"],
    correct: "Polska",
    questionId: "3542596"
  },
  {
    question: "The New York Times slogan is, “All the News That’s Fit to…”",
    answers: ["Digest", "Look", "Read", "Print"],
    correct: "Print",
    questionId: "3667517"
  },
  {
    question: "What do the letters of the fast food chain KFC stand for?",
    answers: [
      "Kentucky Fried Chicken",
      "Kentucky Fresh Cheese",
      "Kibbled Freaky Cow",
      "Kiwi Food Cut"
    ],
    correct: "Kentucky Fried Chicken",
    questionId: "3791672"
  },
  {
    question: "Which restaurant's mascot is a clown?",
    answers: ["Whataburger", "McDonald's", "Burger King", "Sonic"],
    correct: "McDonald's",
    questionId: "3893585"
  },
  {
    question: 'What color is the "Ex" in FedEx Ground?',
    answers: ["Red", "Light Blue", "Green", "Orange"],
    correct: "Green",
    questionId: "3913430"
  },
  {
    question: "How tall is the Burj Khalifa?",
    answers: ["2,717 ft", "2,546 ft", "3,024 ft", "2,722 ft"],
    correct: "2,722 ft",
    questionId: "4049121"
  },
  {
    question:
      "Which of the following card games revolves around numbers and basic math?",
    answers: ["Uno", "Go Fish", "Twister", "Munchkin"],
    correct: "Uno",
    questionId: "4150746"
  },
  {
    question:
      "What machine element is located in the center of fidget spinners?",
    answers: ["Axles", "Bearings", "Gears", "Belts"],
    correct: "Bearings",
    questionId: "4235063"
  },
  {
    question: "Which sign of the zodiac comes between Virgo and Scorpio?",
    answers: ["Gemini", "Taurus", "Libra", "Capricorn"],
    correct: "Libra",
    questionId: "4321002"
  },
  {
    question: "Which of the following presidents is not on Mount Rushmore?",
    answers: [
      "Theodore Roosevelt",
      "Abraham Lincoln",
      "Thomas Jefferson",
      "John F. Kennedy"
    ],
    correct: "John F. Kennedy",
    questionId: "4442286"
  },
  {
    question: "What is Tasmania?",
    answers: [
      "An Australian State",
      "A flavor of Ben and Jerry's ice-cream",
      "A Psychological Disorder",
      "The Name of a Warner Brothers Cartoon Character"
    ],
    correct: "An Australian State",
    questionId: "4564430"
  },
  {
    question: "What company developed the vocaloid Hatsune Miku?",
    answers: ["Sega", "Crypton Future Media", "Sony", "Yamaha Corporation"],
    correct: "Crypton Future Media",
    questionId: "4630606"
  },
  {
    question:
      "Which country, not including Japan, has the most people of japanese decent?",
    answers: ["China", "South Korea", "Brazil", "United States of America"],
    correct: "Brazil",
    questionId: "4795960"
  },
  {
    question: "Which candy is NOT made by Mars?",
    answers: ["M&M's", "Twix", "Snickers", "Almond Joy"],
    correct: "Almond Joy",
    questionId: "4811162"
  },
  {
    question: "In which fast food chain can you order a Jamocha Shake?",
    answers: ["Arby's", "McDonald's", "Burger King", "Wendy's"],
    correct: "Arby's",
    questionId: "4982981"
  }
]

export default questions;