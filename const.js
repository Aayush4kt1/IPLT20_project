const Teams = [
  {
    name: "mi",
    full_name: "Mumbai indians",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Logooutline/MIoutline.png",
  },
  {
    name: "rcb",
    full_name: "Royal Challenger Banglore",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Logooutline/RCBoutline.png",
  },
  {
    name: "gt",
    full_name: "Gujurat Titans",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Logooutline/GToutline.png",
  },
  {
    name: "csk",
    full_name: "Chennai Super Kings",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
  },
  {
    name: "pbks",
    full_name: "Punjab Kings",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
  },
  {
    name: "rr",
    full_name: "Rajasthan Royals",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Logooutline/RRoutline.png",
  },
  {
    name: "dc",
    full_name: "Delhi Capitals",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
  },
  {
    name: "lsg",
    full_name: "Lucknow Super Gaints",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
  },

];


const TeamDetails = {
  mi: {
    full_name: "Mumbai indians",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Logooutline/MIoutline.png",
    top_batsman: "Rohit Sharma",
    top_bowler: "Jasprit Bumrah",
    won: 5,
  },
  rcb: {
    full_name: "Royal Challenger Bangalore",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Royal_Challengers_Bangalore_2020.svg/1200px-Royal_Challengers_Bangalore_2020.svg.png",
    top_batsman: "Virat Kohli",
    top_bowler: "Mohammad Siraj",
    won: 0,
  },
  csk: {
    full_name: "Chennai Super King",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Logooutline/CSKoutline.png",
    top_batsman: "MS Dhoni",
    top_bowler: "Deepak Chahar",
    won: 5,
  },
  pbks: {
    full_name: "Punjab Kings",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Logooutline/PBKSoutline.png",
    top_batsman: "Shikar Dhawan",
    top_bowler: "Arshdeep Singh",
    won: 0,
  },
  gt: {
    full_name: "Gujrat Titans",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Logooutline/GToutline.png",
    top_batsman: "Shubhman gill",
    top_bowler: "Mohammad Shami",
    won: 1,
  },
  lsg: {
    full_name: "Lucknow Super Gaints",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Logooutline/LSGoutline.png",
    top_batsman: "Kl Rahul",
    top_bowler: "Ravi Bishnoi",
    won: 0,
  },
  dc: {
    full_name: "Delhi Capitals",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
    top_batsman: "David Warner",
    top_bowler: "Kuldeep Yadav",
    won: 0,
  },
  rr: {
    full_name: "Rajasthan Royals",
    img: "https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/LogoOutline/DCoutline.png",
    top_batsman: "Jos Butler",
    top_bowler: "Yuzvendra Chahal",
    won: 1,
  },


};

const PlayerDetails = [
  {
    id: 1,
    playerName: "Virat Kohli",
    description: "Batter",
    price: "15 Crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 2,
    playerName: "Glenn Maxwell",
    description: "All-Rounder",
    price: "11 Crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 3,
    playerName: "Mohammad Siraj",
    description: "Bowler",
    price: "7 Crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 4,
    playerName: "Faf Du Plessis (c)",
    description: "Batter",
    price: "7 crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 5,
    playerName: "Harshal Patel",
    description: "Bowler",
    price: "10.75 crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 6,
    playerName: "Wanindu Hasaranga",
    description: "Bowler",
    price: "10.75 crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 7,
    playerName: "Dinesh Karthik",
    description: "Batter/Wicket-keeper",
    price: "5.5 crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 8,
    playerName: "Shahbaz Ahemad",
    description: "All-Rounder",
    price: "2.4 crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 9,
    playerName: "Anuj Rawat",
    description: "Batter/Wicket-keeper",
    price: "3.4 crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 10,
    playerName: "Akash Deep",
    description: "Bowler",
    price: "20 lakh",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 11,
    playerName: "Josh Hazlewood",
    description: "Bowler",
    price: "7.75 crore",
    from: "rcb",
    isPlaying: true,
  },
  {
    id: 12,
    playerName: "Mahipal Lomror",
    description: "All-Rounder",
    price: "95 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 13,
    playerName: "Finn Allen",
    description: "Batter/Wicket-keeper",
    price: "80 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 14,
    playerName: "Suyash Prabhudessai",
    description: "Batter",
    price: "30 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 15,
    playerName: "Karn Sharma",
    description: "Batter",
    price: "50 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 16,
    playerName: "Siddharth Kaul",
    description: "Batter",
    price: "75 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 17,
    playerName: "David Willey",
    description: "Bowler",
    price: "2 crore",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 18,
    playerName: "Rajan Kumar",
    description: "Bowler",
    price: "70 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 19,
    playerName: "Avinash Singh",
    description: "Bowler",
    price: "60 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 20,
    playerName: "Sonu Yadav",
    description: "All-Rounder",
    price: "20 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 21,
    playerName: "Wayne Parnell",
    description: "All-Rounder",
    price: "75 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 22,
    playerName: "Vijaykumar Vyashak",
    description: "Bowler",
    price: "20 lakh",
    from: "rcb",
    isPlaying: false,
  },
  {
    id: 23,
    playerName: "Abhishek Porel",
    description: "Batter/Wicket-keeper",
    price: "20 lakh",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 24,
    playerName: "Axar Patel",
    description: "All-Rounder",
    price: "9 crore",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 25,
    playerName: "Prithvi Shaw",
    description: "Batter",
    price: "7.5 crore",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 26,
    playerName: "Anrich Nortje",
    description: "Bowler",
    price: "6.5 crore",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 27,
    playerName: "David Warner (c)",
    description: "Batter",
    price: "6.25 crore",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 28,
    playerName: "Mitchell Marsh",
    description: "All-Rounder",
    price: "6.5 crore",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 29,
    playerName: "Sarfaraz Khan",
    description: "Batter",
    price: "20 lakh",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 30,
    playerName: "Priyam Garg",
    description: "Batter",
    price: "20 lakh",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 31,
    playerName: "Mustafizur Rahman",
    description: "Bowler",
    price: "2 crore",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 32,
    playerName: "Kuldeep Yadav",
    description: "Bowler",
    price: "2 crore",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 33,
    playerName: "Khaleel Ahmed",
    description: "Bowler",
    price: "5.25 crore",
    from: "dc",
    isPlaying: true,
  },
  {
    id: 34,
    playerName: "Chetan Sakariya",
    description: "Bowler",
    price: "4.2 crore",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 35,
    playerName: "Lalit Yadav",
    description: "All-Rounder",
    price: "65 lakh",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 36,
    playerName: "Ripal Patel",
    description: "All-Rounder",
    price: "20 lakh",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 37,
    playerName: "Yash Dhull",
    description: "Batter",
    price: "50 lakh",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 38,
    playerName: "Rovman Powell",
    description: "Batter",
    price: "2.8 crore",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 39,
    playerName: "Pravin Dubey",
    description: "Bowler",
    price: "50 lakh",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 40,
    playerName: "Lungi Ngidi",
    description: "Bowler",
    price: "50 lakh",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 41,
    playerName: "Vicky Ostwal",
    description: "All-Rounder",
    price: "20 lakh",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 42,
    playerName: "Aman Khan",
    description: "All-Rounder",
    price: "20 lakh",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 43,
    playerName: "Phil Salt",
    description: "Wicket-keeper",
    price: "2 crore",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 44,
    playerName: "Ishant Sharma",
    description: "Bowler",
    price: "50 lakh",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 45,
    playerName: "Mukesh Kumar",
    description: "Bowler",
    price: "5.5 crore",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 46,
    playerName: "Manish Pandey",
    description: "Batter",
    price: "2.4 crore",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 47,
    playerName: "Rilee Rossouw",
    description: "Batter",
    price: "4.6 crore",
    from: "dc",
    isPlaying: false,
  },
  {
    id: 48,
    playerName: "Hardik Pandya (c)",
    description: "All-Rounder",
    price: "15 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 49,
    playerName: "Shubman Gill",
    description: "Batter",
    price: "7 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 50,
    playerName: "David Miller",
    description: "Batter",
    price: "3 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 51,
    playerName: "Abhinav Manohar",
    description: "Batter",
    price: "2.6 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 52,
    playerName: "Sai Sudharsan",
    description: "Batter",
    price: "20 lakh",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 53,
    playerName: "Wriddhiman Saha",
    description: "Batter/Wicket-keeper",
    price: "1.9 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 54,
    playerName: "Matthew Wade",
    description: "Batter/Wicket-keeper",
    price: "2.4 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 55,
    playerName: "Rashid Khan",
    description: "Bowler",
    price: "15 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 56,
    playerName: "Rahul Tewatia",
    description: "All-Rounder",
    price: "9 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 57,
    playerName: "Vijay Shankar",
    description: "All-Rounder",
    price: "1.4 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 58,
    playerName: "Mohammed Shami",
    description: "Bowler",
    price: "6.25 crore",
    from: "gt",
    isPlaying: true,
  },
  {
    id: 59,
    playerName: "Alzarri Joseph",
    description: "Bowler",
    price: "2.4 crore",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 60,
    playerName: "Yash Dayal",
    description: "Bowler",
    price: "3.2 crore",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 61,
    playerName: "Pradeep Sangwan",
    description: "Bowler",
    price: "20 lakh",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 62,
    playerName: "Darshan Nalkande",
    description: "All-Rounder",
    price: "20 lakh",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 63,
    playerName: "Jayant Yadav",
    description: "All-Rounder",
    price: "1.7 crore",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 64,
    playerName: "R Sai Kishore",
    description: "Bowler",
    price: "3 crore",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 65,
    playerName: "Noor Ahmad",
    description: "Bowler",
    price: "30 lakh",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 66,
    playerName: "Kane Williamson",
    description: "Batter",
    price: "2 crore",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 67,
    playerName: "Odean Smith",
    description: "All-Rounder",
    price: "50 lakh",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 68,
    playerName: "KS Bharat",
    description: "Wicket-keeper",
    price: "1.2 crore",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 69,
    playerName: "Shivam Mavi",
    description: "All-Rounder",
    price: "6 crore",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 70,
    playerName: "Urvil Patel",
    description: "Wicket-keeper",
    price: "20 lakh",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 71,
    playerName: "Joshua Little",
    description: "Bowler",
    price: "4.4 crore",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 72,
    playerName: "Mohit Sharma",
    description: "Bowler",
    price: "50 lakh",
    from: "gt",
    isPlaying: false,
  },
  {
    id: 73,
    playerName: "Nitish Rana (c)",
    description: "Batter",
    price: "8 crore",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 74,
    playerName: "Venkatesh Iyer",
    description: "All-Rounder",
    price: "8 crore",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 75,
    playerName: "Andre Russell",
    description: "All-Rounder",
    price: "12 crore",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 76,
    playerName: "Sunil Narine",
    description: "All-Rounder",
    price: "6 crore",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 77,
    playerName: "Umesh Yadav",
    description: "Bowler",
    price: "2 crore",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 78,
    playerName: "Tim Southee",
    description: "Bowler",
    price: "1.5 crore",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 79,
    playerName: "Harshit Rana",
    description: "Bowler",
    price: "20 lakh",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 80,
    playerName: "Varun Chakravarthy",
    description: "Bowler",
    price: "8 crore",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 81,
    playerName: "Anukul Roy",
    description: "All-Rounder",
    price: "20 lakh",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 82,
    playerName: "Rinku Singh",
    description: "Batter",
    price: "55 lakh",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 83,
    playerName: "Rahmanullah Gurbaz",
    description: "Batter/Wicket-keeper",
    price: "50 lakh",
    from: "kkr",
    isPlaying: true,
  },
  {
    id: 84,
    playerName: "Shardul Thakur",
    description: "Bowler",
    price: "10.75 crore",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 85,
    playerName: "Lockie Ferguson",
    description: "Bowler",
    price: "10 crore",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 86,
    playerName: "N Jagadeesan",
    description: "Batter",
    price: "90 lakh",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 87,
    playerName: "Vaibhav Arora",
    description: "Bowler",
    price: "60 lakh",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 88,
    playerName: "Suyash Sharma",
    description: "Bowler",
    price: "20 lakh",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 89,
    playerName: "David Wiese",
    description: "All-Rounder",
    price: "1 crore",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 90,
    playerName: "Kulwant Khejroliya",
    description: "Bowler",
    price: "20 lakh",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 91,
    playerName: "Mandeep Singh",
    description: "Batter",
    price: "50 lakh",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 92,
    playerName: "Jason Roy",
    description: "Batter",
    price: "2.8 crore",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 93,
    playerName: "Aarya Desai",
    description: "Batter",
    price: "20 lakh",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 94,
    playerName: "Johnson Charles",
    description: "Batter/Wicket-keeper",
    price: "50 Lakh",
    from: "kkr",
    isPlaying: false,
  },
  {
    id: 95,
    playerName: "KL Rahul (c)",
    description: "Batter",
    price: "15 crore",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 96,
    playerName: "Marcus Stoinis",
    description: "All-Rounder",
    price: "11 crore",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 97,
    playerName: "Ravi Bishnoi",
    description: "Bowler",
    price: "4 crore",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 98,
    playerName: "Quinton De Kock",
    description: "Batter/Wicket-keeper",
    price: "6.75 crore",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 99,
    playerName: "Deepak Hooda",
    description: "All-Rounder",
    price: "5.75 crore",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 100,
    playerName: "Krunal Pandya",
    description: "All-Rounder",
    price: "8.25 crore",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 101,
    playerName: "Avesh Khan",
    description: "Bowler",
    price: "10 crore",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 102,
    playerName: "Mark Wood",
    description: "Bowler",
    price: "7.5 crore",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 103,
    playerName: "K Gowtham",
    description: "All-Rounder",
    price: "90 lakh",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 104,
    playerName: "Manan Vohra",
    description: "Batter",
    price: "20 lakh",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 105,
    playerName: "Mohsin Khan",
    description: "Bowler",
    price: "20 lakh",
    from: "lsg",
    isPlaying: true,
  },
  {
    id: 106,
    playerName: "Ayush Badoni",
    description: "All-Rounder",
    price: "20 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 107,
    playerName: "Kyle Mayers",
    description: "All-Rounder",
    price: "50 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 108,
    playerName: "Karan Sharma",
    description: "All-Rounder",
    price: "20 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 109,
    playerName: "Mayank Yadav",
    description: "Bowler",
    price: "20 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 110,
    playerName: "Nicholas Pooran",
    description: "Wicket-keeper",
    price: "16 crore",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 111,
    playerName: "Jaydev Unadkat",
    description: "Bowler",
    price: "50 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 112,
    playerName: "Yash Thakur",
    description: "Bowler",
    price: "45 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 113,
    playerName: "Romario Shepherd",
    description: "All-Rounder",
    price: "50 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 114,
    playerName: "Daniel Sams",
    description: "All-Rounder",
    price: "75 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 115,
    playerName: "Amit Mishra",
    description: "Bowler",
    price: "50 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 116,
    playerName: "Prerak Mankad",
    description: "All-Rounder",
    price: "20 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 117,
    playerName: "Swapnil Singh",
    description: "Bowler",
    price: "20 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 118,
    playerName: "Naveen ul Haq",
    description: "Bowler",
    price: "50 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 119,
    playerName: "Yudhvir Charak",
    description: "All-Rounder",
    price: "20 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 120,
    playerName: "Suryansh Shedge",
    description: "Batter",
    price: "20 lakh",
    from: "lsg",
    isPlaying: false,
  },
  {
    id: 121,
    playerName: "Rohit Sharma (c)",
    description: "Batter",
    price: "16 crore",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 122,
    playerName: "Sandeep Warrier",
    description: "Bowler",
    price: "20 lakh",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 123,
    playerName: "Suryakumar Yadav",
    description: "Batter",
    price: "8 crore",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 124,
    playerName: "Ishan Kishan",
    description: "Batter",
    price: "15.25 crore",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 125,
    playerName: "Dewald Brevis",
    description: "Batter",
    price: "3 crore",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 126,
    playerName: "Tilak Varma",
    description: "Batter",
    price: "1.7 crore",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 127,
    playerName: "Tim David",
    description: "All-Rounder",
    price: "8.25 crore",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 128,
    playerName: "Mohd Arshad Khan",
    description: "Batter",
    price: "20 lakh",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 129,
    playerName: "Ramandeep Singh",
    description: "Batter",
    price: "20 lakh",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 130,
    playerName: "Hrithik Shokeen",
    description: "All-Rounder",
    price: "20 lakh",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 131,
    playerName: "Arjun Tendulkar",
    description: "Bowler",
    price: "30 lakh",
    from: "mi",
    isPlaying: true,
  },
  {
    id: 132,
    playerName: "Tristan Stubbs",
    description: "Batter",
    price: "20 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 133,
    playerName: "Kumar Kartikeya",
    description: "Bowler",
    price: "20 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 134,
    playerName: "Jason Behrendorff",
    description: "Bowler",
    price: "75 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 135,
    playerName: "Akash Madhwal",
    description: "Bowler",
    price: "20 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 136,
    playerName: "Cameron Green",
    description: "All-Rounder",
    price: "17.5 crore",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 137,
    playerName: "Riley Meredith",
    description: "Bowler",
    price: "1.5 crore",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 138,
    playerName: "Piyush Chawla",
    description: "All-Rounder",
    price: "50 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 139,
    playerName: "Duan Jansen",
    description: "Bowler",
    price: "20 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 140,
    playerName: "Vishnu Vinod",
    description: "Wicket-keeper",
    price: "20 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 141,
    playerName: "Shams Mulani",
    description: "All-Rounder",
    price: "20 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 142,
    playerName: "Nehal Wadhera",
    description: "All-Rounder",
    price: "20 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 143,
    playerName: "Raghav Goyal",
    description: "Bowler",
    price: "20 lakh",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 144,
    playerName: "Jofra Archer",
    description: "Bowler",
    price: "2 Crore",
    from: "mi",
    isPlaying: false,
  },
  {
    id: 145,
    playerName: "Arshdeep Singh",
    description: "Bowler",
    price: "4 crore",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 146,
    playerName: "Shikhar Dhawan (c)",
    description: "Batter",
    price: "8.25 crore",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 147,
    playerName: "Kagiso Rabada",
    description: "Bowler",
    price: "9.25 crore",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 148,
    playerName: "Matthew Short",
    description: "All-Rounder",
    price: "20 lakh",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 149,
    playerName: "Shahrukh Khan",
    description: "All-Rounder",
    price: "9 crore",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 150,
    playerName: "Harpreet Brar",
    description: "Batter",
    price: "3.8 crore",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 151,
    playerName: "Prabhsimran Singh",
    description: "Batter/Wicket-keeper",
    price: "60 lakh",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 152,
    playerName: "Jitesh Sharma",
    description: "Batter/Wicket-keeper",
    price: "20 lakh",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 153,
    playerName: "Rahul Chahar",
    description: "Bowler",
    price: "5.25 crore",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 154,
    playerName: "Liam Livingstone",
    description: "All-Rounder",
    price: "11.5 crore",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 155,
    playerName: "Gurnoor Singh",
    description: "All-Rounder",
    price: "20 lakh",
    from: "pbks",
    isPlaying: true,
  },
  {
    id: 156,
    playerName: "Rishi Dhawan",
    description: "All-Rounder",
    price: "55 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 157,
    playerName: "Baltej Dhanda",
    description: "All-Rounder",
    price: "20 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 158,
    playerName: "Nathan Ellis",
    description: "Bowler",
    price: "75 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 159,
    playerName: "Atharva Taide",
    description: "All-Rounder",
    price: "20 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 160,
    playerName: "Bhanuka Rajapaksa",
    description: "Batter",
    price: "50 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 161,
    playerName: "Sam Curran",
    description: "All-Rounder",
    price: "18.5 crore",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 162,
    playerName: "Sikandar Raza",
    description: "All-Rounder",
    price: "50 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 163,
    playerName: "Harpreet Bhatia",
    description: "Batter",
    price: "40 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 164,
    playerName: "Vidwath Kaverappa",
    description: "Bowler",
    price: "20 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 165,
    playerName: "Mohit Rathe",
    description: "All-Rounder",
    price: "20 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 166,
    playerName: "Shivam Singh",
    description: "All-Rounder",
    price: "20 lakh",
    from: "pbks",
    isPlaying: false,
  },
  {
    id: 167,
    playerName: "Sanju Samson (c)",
    description: "Batter/Wicket-keeper",
    price: "14 crore",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 168,
    playerName: "Jos Buttler",
    description: "Batter",
    price: "10 crore",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 169,
    playerName: "Yashasvi Jaiswal",
    description: "Batter",
    price: "4 crore",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 170,
    playerName: "R. Ashwin",
    description: "Bowler",
    price: "5 crore",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 171,
    playerName: "Trent Boult",
    description: "Bowler",
    price: "8 crore",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 172,
    playerName: "Shimron Hetmyer",
    description: "Batter",
    price: "8.5 crore",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 173,
    playerName: "Devdutt Padikkal",
    description: "Batter",
    price: "7.75 crore",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 174,
    playerName: "Riyan Parag",
    description: "All-Rounder",
    price: "3.8 crore",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 175,
    playerName: "KC Cariappa",
    description: "Bowler",
    price: "30 lakh",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 176,
    playerName: "Sandeep Sharma",
    description: "Bowler",
    price: "50 lakh",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 177,
    playerName: "Yuzvendra Chahal",
    description: "Bowler",
    price: "6.5 crore",
    from: "rr",
    isPlaying: true,
  },
  {
    id: 178,
    playerName: "Navdeep Saini",
    description: "Bowler",
    price: "2.6 crore",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 179,
    playerName: "Obed McCoy",
    description: "Bowler",
    price: "75 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 180,
    playerName: "Kuldeep Sen",
    description: "Bowler",
    price: "20 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 181,
    playerName: "Dhruv Jurel",
    description: "Batter/Wicket-keeper",
    price: "20 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 182,
    playerName: "Kuldip Yadav",
    description: "Bowler",
    price: "20 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 183,
    playerName: "Jason Holder",
    description: "All-Rounder",
    price: "5.75 crore",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 184,
    playerName: "Donovan Ferreira",
    description: "All-Rounder",
    price: "50 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 185,
    playerName: "Kunal Rathore",
    description: "Wicket-keeper",
    price: "20 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 186,
    playerName: "Adam Zampa",
    description: "Bowler",
    price: "1.5 crore",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 187,
    playerName: "KM Asif",
    description: "Bowler",
    price: "30 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 188,
    playerName: "Murugan Ashwin",
    description: "Bowler",
    price: "20 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 189,
    playerName: "Akash Vashisht",
    description: "All-Rounder",
    price: "20 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 190,
    playerName: "Abdul PA",
    description: "All-Rounder",
    price: "20 lakh",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 191,
    playerName: "Joe Root",
    description: "Batter",
    price: "1 crore",
    from: "rr",
    isPlaying: false,
  },
  {
    id: 192,
    playerName: "MS Dhoni (c)",
    description: "Batter/Wicket-keeper",
    price: "12 crore",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 193,
    playerName: "Devon Conway",
    description: "Batter",
    price: "1 crore",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 194,
    playerName: "Ruturaj Gaikwad",
    description: "Batter",
    price: "6 crore",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 195,
    playerName: "Ambati Rayudu",
    description: "Batter/Wicket-keeper",
    price: "6.75 crore",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 196,
    playerName: "Subhranshu Senapati",
    description: "Batter",
    price: "20 lakh",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 197,
    playerName: "Moeen Ali",
    description: "All-Rounder",
    price: "8 crore",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 198,
    playerName: "Shivam Dube",
    description: "All-Rounder",
    price: "4 crore",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 199,
    playerName: "Rajvardhan Hangargekar",
    description: "Bowler",
    price: "1.5 crore",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 200,
    playerName: "Dwaine Pretorius",
    description: "All-Rounder",
    price: "50 lakh",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 201,
    playerName: "Mitchell Santner",
    description: "Bowler",
    price: "1.9 crore",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 202,
    playerName: "Ravindra Jadeja",
    description: "All-Rounder",
    price: "16 crore",
    from: "csk",
    isPlaying: true,
  },
  {
    id: 203,
    playerName: "Tushar Deshpande",
    description: "Bowler",
    price: "20 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 204,
    playerName: "Akash Singh",
    description: "Bowler",
    price: "20 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 205,
    playerName: "Matheesha Pathirana",
    description: "Bowler",
    price: "20 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 206,
    playerName: "Simarjeet Singh",
    description: "Bowler",
    price: "20 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 207,
    playerName: "Deepak Chahar",
    description: "Bowler",
    price: "14 crore",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 208,
    playerName: "Prashant Solanki",
    description: "Bowler",
    price: "1.2 crore",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 209,
    playerName: "Maheesh Theekshana",
    description: "Bowler",
    price: "70 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 210,
    playerName: "Ajinkya Rahane",
    description: "Batter",
    price: "50 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 211,
    playerName: "Ben Stokes",
    description: "All-Rounder",
    price: "16.25 crore",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 212,
    playerName: "Shaik Rasheed",
    description: "Batter",
    price: "20 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 213,
    playerName: "Nishant Sindhu",
    description: "All-Rounder",
    price: "60 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 214,
    playerName: "Sisanda Magala",
    description: "Bowler",
    price: "50 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 215,
    playerName: "Ajay Mandal",
    description: "All-Rounder",
    price: "20 lakh",
    from: "csk",
    isPlaying: false,
  },
  {
    id: 216,
    playerName: "Bhagath Varma",
    description: "All-Rounder",
    price: "20 lakh",
    from: "csk",
    isPlaying: false,
  },
];
