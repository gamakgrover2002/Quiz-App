export type QuestionsData = {
  id: number;
  category: string;
  question: string;
  answer: string;
  options: string[];
};

export const categories: string[] = [
  "Any Category",
  "Technology",
  "Science",
  "Mathematics",
  "Geography",
  "History",
  "Literature",
  "Physics",
  "Chemistry",
  "Biology",
];

export const data: QuestionsData[] = [
  {
    id: 1,
    category: "Technology",
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language",
      "Hyper Text Markup Language",
      "Hyperlinks Text Mark Language",
    ],
  },
  {
    id: 2,
    category: "Technology",
    question: "What is the function of CSS in web development?",
    answer: "Styling and layout of web pages",
    options: [
      "Connecting databases",
      "Styling and layout of web pages",
      "Server-side scripting",
      "Data encryption",
    ],
  },
  {
    id: 3,
    category: "Science",
    question: "What planet is known as the Red Planet?",
    answer: "Mars",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
  },
  {
    id: 4,
    category: "Mathematics",
    question: "What is the value of Pi (π) up to two decimal points?",
    answer: "3.14",
    options: ["3.12", "3.15", "3.14", "3.16"],
  },
  {
    id: 5,
    category: "Geography",
    question: "What is the largest ocean on Earth?",
    answer: "Pacific Ocean",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
    ],
  },
  {
    id: 6,
    category: "History",
    question: "Who was the first President of the United States?",
    answer: "George Washington",
    options: [
      "Abraham Lincoln",
      "George Washington",
      "Thomas Jefferson",
      "John Adams",
    ],
  },
  {
    id: 7,
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "J.K. Rowling",
      "Jane Austen",
    ],
  },
  {
    id: 8,
    category: "Physics",
    question: "What is the unit of electrical resistance?",
    answer: "Ohm",
    options: ["Watt", "Volt", "Ohm", "Ampere"],
  },
  {
    id: 9,
    category: "Chemistry",
    question: "What is the chemical symbol for water?",
    answer: "H2O",
    options: ["H2O", "O2", "CO2", "H2"],
  },
  {
    id: 10,
    category: "Biology",
    question: "What is the powerhouse of the cell?",
    answer: "Mitochondria",
    options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
  },
  {
    id: 11,
    category: "Technology",
    question: "Which company developed the Android operating system?",
    answer: "Google",
    options: ["Apple", "Google", "Microsoft", "Amazon"],
  },
  {
    id: 12,
    category: "Technology",
    question: "What does CPU stand for?",
    answer: "Central Processing Unit",
    options: [
      "Central Processing Unit",
      "Central Programming Unit",
      "Computer Processing Unit",
      "Core Processing Unit",
    ],
  },
  {
    id: 13,
    category: "Science",
    question: "What is the main gas found in the air we breathe?",
    answer: "Nitrogen",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
  },
  {
    id: 14,
    category: "Science",
    question: "Which scientist proposed the theory of general relativity?",
    answer: "Albert Einstein",
    options: [
      "Isaac Newton",
      "Nikola Tesla",
      "Albert Einstein",
      "Galileo Galilei",
    ],
  },
  {
    id: 15,
    category: "Mathematics",
    question: "What is 12 squared?",
    answer: "144",
    options: ["132", "144", "156", "164"],
  },
  {
    id: 16,
    category: "Mathematics",
    question: "What is the formula to find the area of a circle?",
    answer: "πr²",
    options: ["2πr", "πr²", "πd", "2πr²"],
  },
  {
    id: 17,
    category: "Geography",
    question: "Which country is the largest by land area?",
    answer: "Russia",
    options: ["Canada", "United States", "China", "Russia"],
  },
  {
    id: 18,
    category: "Geography",
    question: "Which desert is the largest in the world?",
    answer: "Sahara Desert",
    options: [
      "Gobi Desert",
      "Kalahari Desert",
      "Sahara Desert",
      "Arabian Desert",
    ],
  },
  {
    id: 19,
    category: "History",
    question: "Who was known as the 'Iron Lady'?",
    answer: "Margaret Thatcher",
    options: [
      "Queen Victoria",
      "Angela Merkel",
      "Margaret Thatcher",
      "Indira Gandhi",
    ],
  },
  {
    id: 20,
    category: "History",
    question: "In which year did the Titanic sink?",
    answer: "1912",
    options: ["1905", "1912", "1920", "1935"],
  },
  {
    id: 21,
    category: "Literature",
    question: "Who is the author of 'The Great Gatsby'?",
    answer: "F. Scott Fitzgerald",
    options: [
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
      "John Steinbeck",
      "Mark Twain",
    ],
  },
  {
    id: 22,
    category: "Literature",
    question: "Which novel begins with 'Call me Ishmael'?",
    answer: "Moby-Dick",
    options: [
      "The Catcher in the Rye",
      "Moby-Dick",
      "Pride and Prejudice",
      "Jane Eyre",
    ],
  },
  {
    id: 23,
    category: "Physics",
    question: "What is the speed of light in a vacuum?",
    answer: "299,792,458 m/s",
    options: [
      "3,000,000 m/s",
      "299,792,458 m/s",
      "300,000 m/s",
      "30,000,000 m/s",
    ],
  },
  {
    id: 24,
    category: "Physics",
    question: "What particle has a negative charge?",
    answer: "Electron",
    options: ["Proton", "Neutron", "Electron", "Photon"],
  },
  {
    id: 25,
    category: "Chemistry",
    question: "What is the atomic number of Hydrogen?",
    answer: "1",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 26,
    category: "Chemistry",
    question: "What is the most abundant gas in Earth's atmosphere?",
    answer: "Nitrogen",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
  },
  {
    id: 27,
    category: "Biology",
    question: "What is the basic unit of life?",
    answer: "Cell",
    options: ["Atom", "Organ", "Cell", "Organism"],
  },
  {
    id: 28,
    category: "Biology",
    question: "What is the largest organ in the human body?",
    answer: "Skin",
    options: ["Heart", "Liver", "Lungs", "Skin"],
  },
];
