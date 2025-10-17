function getRandomPrice(min = 7, max = 14) {
  return (Math.random() * (max - min) + min).toFixed(2);
}

function getRandomStock(min = 3, max = 50) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const films = [
  {
    title: "12 Angry Men",
    description:
      "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
    release_year: 1957,
    director: "Sidney Lumet",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
    genres: ["Drama"],
  },
  {
    title: "Parasite",
    description:
      "All unemployed, Ki-taek’s family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    release_year: 2019,
    director: "Bong Joon Ho",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7hLSzZX2jROmEXz2aEoh6JKUFy2.jpg",
    genres: ["Thriller", "Comedy", "Drama"],
  },
  {
    title: "The Shawshank Redemption",
    description:
      "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
    release_year: 1994,
    director: "Frank Darabont",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    genres: ["Drama", "Crime"],
  },
  {
    title: "Schindler's List",
    description:
      "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
    release_year: 1993,
    director: "Steven Spielberg",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
    genres: ["Drama", "History", "War"],
  },
  {
    title: "The Dark Knight",
    description:
      "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    release_year: 2008,
    director: "Christopher Nolan",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    genres: ["Drama", "Action", "Crime", "Thriller"],
  },
  {
    title: "Spirited Away",
    description:
      "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    release_year: 2001,
    director: "Hayao Miyazaki",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    genres: ["Animation", "Family", "Fantasy"],
  },
  {
    title: "Grave of the Fireflies",
    description:
      "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
    release_year: 1988,
    director: "Isao Takahata",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
    genres: ["Animation", "Drama", "War"],
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    description:
      'Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson "Kingpin" Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.',
    release_year: 2018,
    director: "Bob Persichetti",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    genres: ["Animation", "Action", "Adventure", "Science Fiction"],
  },
  {
    title: "Princess Mononoke",
    description:
      "Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
    release_year: 1997,
    director: "Hayao Miyazaki",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
    genres: ["Adventure", "Fantasy", "Animation"],
  },
  {
    title: "The Pianist",
    description:
      "The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
    release_year: 2002,
    director: "Roman Polanski",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
    genres: ["Drama", "War"],
  },
  {
    title: "Howl's Moving Castle",
    description:
      "Sophie, a young milliner, is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.",
    release_year: 2004,
    director: "Hayao Miyazaki",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url: "https://image.tmdb.org/t/p/w500/TkTPELv4kC3u1lkloush8skOjE.jpg",
    genres: ["Fantasy", "Animation", "Adventure"],
  },
  {
    title: "Pulp Fiction",
    description:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    release_year: 1994,
    director: "Quentin Tarantino",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    genres: ["Thriller", "Crime", "Comedy"],
  },
  {
    title: "Your Name.",
    description:
      "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    release_year: 2016,
    director: "Makoto Shinkai",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONONX.jpg",
    genres: ["Animation", "Romance", "Drama"],
  },
  {
    title: "1917",
    description:
      "At the height of the First World War, two young British soldiers must cross enemy territory and deliver a message that will stop a deadly attack on hundreds of soldiers.",
    release_year: 2019,
    director: "Sam Mendes",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
    genres: ["War", "History", "Thriller"],
  },
  {
    title: "Look Back",
    description:
      "Popular, outgoing Fujino is celebrated by her classmates for her funny comics in the class newspaper. One day, her teacher asks her to share the space with Kyomoto, a truant recluse whose beautiful artwork sparks a competitive fervor in Fujino. What starts as jealousy transforms when Fujino realizes their shared passion for drawing.",
    release_year: 2024,
    director: "Kiyotaka Oshiyama",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/4f2EcNkp1Mvp9wE5w7HKxcmACWg.jpg",
    genres: ["Animation", "Drama"],
  },
  {
    title: "The Godfather",
    description:
      "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
    release_year: 1972,
    director: "Francis Ford Coppola",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    genres: ["Drama", "Crime"],
  },
  {
    title: "Everything Everywhere All at Once",
    description:
      "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save what's important to her by connecting with the lives she could have led in other universes.",
    release_year: 2022,
    director: "Daniel Scheinert",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/u68AjlvlutfEIcpmbYpKcdi09ut.jpg",
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    title: "Django Unchained",
    description:
      "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    release_year: 2012,
    director: "Quentin Tarantino",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
    genres: ["Drama", "Western"],
  },
  {
    title: "The Substance",
    description:
      "A fading celebrity decides to use a black market drug, a cell-replicating substance that temporarily creates a younger, better version of herself.",
    release_year: 2024,
    director: "Coralie Fargeat",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/lqoMzCcZYEFK729d6qzt349fB4o.jpg",
    genres: ["Drama", "Horror", "Science Fiction"],
  },
  {
    title: "Paprika",
    description:
      "When a machine that allows therapists to enter their patient’s dreams is stolen, all hell breaks loose. Only a young female therapist can stop it and recover it before damage is done: Paprika.",
    release_year: 2006,
    director: "Satoshi Kon",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kjOuNoHNy8IF6v6BHzfEbli1G3W.jpg",
    genres: ["Animation", "Thriller", "ScienceFiction"],
  },
  {
    title: "The Hateful Eight",
    description:
      "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
    release_year: 2015,
    director: "Quentin Tarantino",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg",
    genres: ["Drama", "Mystery", "Western"],
  },
  {
    title: "The Grand Budapest Hotel",
    description:
      "The Grand Budapest Hotel tells of a legendary concierge at a famous European hotel between the wars and his friendship with a young employee who becomes his trusted protégé. The story involves the theft and recovery of a priceless Renaissance painting, the battle for an enormous family fortune and the slow and then sudden upheavals that transformed Europe during the first half of the 20th century.",
    release_year: 2014,
    director: "Wes Anderson",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    description:
      "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
    release_year: 2004,
    director: "Michel Gondry",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
    genres: ["Science Fiction", "Drama", "Romance"],
  },
  {
    title: "Amélie",
    description:
      "At a tiny Parisian café, the adorable yet painfully shy Amélie accidentally discovers a gift for helping others. Soon Amelie is spending her days as a matchmaker, guardian angel, and all-around do-gooder. But when she bumps into a handsome stranger, will she find the courage to become the star of her very own love story?",
    release_year: 2001,
    director: "Jean-Pierre Jeunet",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/nSxDa3M9aMvGVLoItzWTepQ5h5d.jpg",
    genres: ["Comedy", "Romance"],
  },
  {
    title: "Little Miss Sunshine",
    description:
      "A family loaded with quirky, colorful characters piles into an old van and road trips to California for little Olive to compete in a beauty pageant.",
    release_year: 2006,
    director: "Jonathan Dayton",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/wKn7AJw730emlmzLSmJtzquwaeW.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    title: "Bye Bye Morons",
    description:
      "When 43-year-old hairdresser Suze Trappet finds out that she's seriously ill, she decides to go looking for a child she was forced to abandon when she was only 15. On her madcap bureaucratic quest she crosses paths with JB, a 50-year-old man in the middle of a burnout, and Mr. Blin, a blind archivist prone to overenthusiasm. The unlikely trio set off on a hilarious and poignant helterskelter journey across the city in search of Suze's long-lost child.",
    release_year: 2020,
    director: "Albert Dupontel",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/iEzAKYpwdfFprRV39B7GxJoz9LV.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    title: "Her",
    description:
      "In the not so distant future, Theodore, a lonely writer, purchases a newly developed operating system designed to meet the user's every need. To Theodore's surprise, a romantic relationship develops between him and his operating system. This unconventional love story blends science fiction and romance in a sweet tale that explores the nature of love and the ways that technology isolates and connects us all.",
    release_year: 2013,
    director: "Spike Jonze",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    genres: ["Romance", "Science Fiction", "Drama"],
  },
  {
    title: "La La Land",
    description:
      "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    release_year: 2016,
    director: "Damien Chazelle",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    title: "The Lobster",
    description:
      "In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into animals and sent off into The Woods.",
    release_year: 2015,
    director: "Yorgos Lanthimos",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/7Y9ILV1unpW9mLpGcqyGQU72LUy.jpg",
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    title: "La Haine",
    description:
      "After a chaotic night of rioting in a marginal suburb of Paris, three young friends, Vinz, Hubert and Saïd, wander around unoccupied waiting for news about the state of health of a mutual friend who has been seriously injured when confronting the police.",
    release_year: 1995,
    director: "Mathieu Kassovitz",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/a6DGCZC2fHNr07tyRumM30ALEKE.jpg",
    genres: ["Drama"],
  },
  {
    title: "Perfect Blue",
    description:
      "Rising pop star Mima quits singing to pursue a career as an actress. After she takes up a role on a popular detective show, her handlers and collaborators begin turning up murdered. Harboring feelings of guilt and haunted by visions of her former self, Mima's reality and fantasy meld into a frenzied paranoia.",
    release_year: 1998,
    director: "Satoshi Kon",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/6WTiOCfDPP8XV4jqfloiVWf7KHq.jpg",
    genres: ["Animation", "Thriller"],
  },
  {
    title: "Mommy",
    description:
      "A peculiar neighbor offers hope to a recent widow who is struggling to raise a teenager who is unpredictable and, sometimes, violent.",
    release_year: 2014,
    director: "Xavier Dolan",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/3zyQtPg3avKprmJP2gBiYgyWUQC.jpg",
    genres: ["Drama"],
  },
  {
    title: "Come and See",
    description:
      "The invasion of a village in Belarus by German forces sends young Florya into the forest to join the weary Resistance fighters, against his family's wishes. There he meets a girl, Glasha, who accompanies him back to his village. On returning home, Florya finds his family and fellow peasants massacred. His continued survival amidst the brutal debris of war becomes increasingly nightmarish, a battle between despair and hope.",
    release_year: 1985,
    director: "Elem Klimov",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/qNbMsKVzigERgJUbwf8pKyZogpb.jpg",
    genres: ["Drama", "War", "Horror"],
  },
  {
    title: "A Very Long Engagement",
    description:
      "Young Frenchwoman Mathilde searches for the truth about her missing fiancé, lost during World War I, and learns many unexpected things along the way. The love of her life is gone. But she refuses to believe he's gone forever — and she needs to know for sure.",
    release_year: 2004,
    director: "Jean-Pierre Jeunet",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url: "https://image.tmdb.org/t/p/w500/t73m7lX0eFYDjlB1Gcb7r3S5Yt.jpg",
    genres: ["Drama", "Romance", "War"],
  },
  {
    title: "Se7en",
    description:
      'Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Somerset researches each sin in an effort to get inside the killer\'s mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.',
    release_year: 1995,
    director: "David Fincher",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/191nKfP0ehp3uIvWqgPbFmI4lv9.jpg",
    genres: ["Crime", "Mystery", "Thriller"],
  },
  {
    title: "Good Will Hunting",
    description:
      "Headstrong yet aimless, Will Hunting has a genius-level IQ but chooses to work as a janitor at MIT. When he secretly solves highly difficult graduate-level math problems, his talents are discovered by Professor Gerald Lambeau, who decides to help the misguided youth reach his potential. When Will is arrested for attacking a police officer, Professor Lambeau makes a deal to get leniency for him if he gets court-ordered therapy. Eventually, therapist Dr. Sean Maguire helps Will confront the demons that are holding him back.",
    release_year: 1997,
    director: "Gus Van Sant",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg",
    genres: ["Drama"],
  },
  {
    title: "Raging Bull",
    description:
      "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
    release_year: 1980,
    director: "Martin Scorsese",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/1WV7WlTS8LI1L5NkCgjWT9GSW3O.jpg",
    genres: ["Drama"],
  },
  {
    title: "Full Metal Jacket",
    description:
      "A pragmatic U.S. Marine observes the dehumanizing effects the U.S.-Vietnam War has on his fellow recruits from their brutal boot camp training to the bloody street fighting in Hue.",
    release_year: 1987,
    director: "Stanley Kubrick",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/kMKyx1k8hWWscYFnPbnxxN4Eqo4.jpg",
    genres: ["Drama", "War"],
  },
  {
    title: "In the Mood for Love",
    description:
      "In 1962 Hong Kong, neighbors Su Li-zhen (Mrs. Chan) and Chow Mo-wan (Mr. Chow) discover their spouses are having an affair. As they spend time together, they develop feelings for each other, but their relationship remains chaste and unspoken, reflecting societal constraints and their own moral compass.",
    release_year: 2000,
    director: "Wong Kar-Wai",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/8BgGbbWiLNhPtkMkN0gGTnbtvBv.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "The Whale",
    description:
      "A reclusive English teacher suffering from severe obesity attempts to reconnect with his estranged teenage daughter for one last chance at redemption.",
    release_year: 2022,
    director: "Darren Aronofsky",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/jQ0gylJMxWSL490sy0RrPj1Lj7e.jpg",
    genres: ["Drama"],
  },
  {
    title: "The Hunt",
    description:
      "A teacher lives a lonely life, all the while struggling over his son’s custody. His life slowly gets better as he finds love and receives good news from his son, but his new luck is about to be brutally shattered by an innocent little lie.",
    release_year: 2012,
    director: "Thomas Vinterberg",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/wzrrF5ct6gYLyUEGCjwn8f1fOdv.jpg",
    genres: ["Drama"],
  },
  {
    title: "Portrait of a Lady on Fire",
    description:
      "On an isolated island in Brittany at the end of the eighteenth century, a female painter is obliged to paint a wedding portrait of a young woman.",
    release_year: 2019,
    director: "Céline Sciamma",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/2LquGwEhbg3soxSCs9VNyh5VJd9.jpg",
    genres: ["Drama", "Romance", "History"],
  },
  {
    title: "Shutter Island",
    description:
      "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by troubling visions and a mysterious doctor.",
    release_year: 2010,
    director: "Martin Scorsese",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    genres: ["Drama", "Thriller", "Mystery"],
  },
  {
    title: "The Holdovers",
    description:
      "A curmudgeonly instructor at a New England prep school is forced to remain on campus during Christmas break to babysit the handful of students with nowhere to go. Eventually, he forms an unlikely bond with one of them — a damaged, brainy troublemaker — and with the school’s head cook, who has just lost a son in Vietnam.",
    release_year: 2023,
    director: "Alexander Payne",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url: "https://image.tmdb.org/t/p/w500/VHSzNBTwxV8vh7wylo7O9CLdac.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    title: "No Country for Old Men",
    description:
      "Llewelyn Moss stumbles upon dead bodies, $2 million and a hoard of heroin in a Texas desert, but methodical killer Anton Chigurh comes looking for it, with local sheriff Ed Tom Bell hot on his trail. The roles of prey and predator blur as the violent pursuit of money and justice collide.",
    release_year: 2007,
    director: "Joel Coen",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/6d5XOczc226jECq0LIX0siKtgHR.jpg",
    genres: ["Crime", "Thriller", "Western"],
  },
  {
    title: "Perfect Days",
    description:
      "Hirayama is content with his life as a toilet cleaner in Tokyo. Outside of his structured routine, he cherishes music on cassette tapes, books, and taking photos of trees. Through unexpected encounters, he reflects on finding beauty in the world.",
    release_year: 2023,
    director: "Wim Wenders",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/mjEk5Wwx6TYVqw29zSaUHclMIgp.jpg",
    genres: ["Drama"],
  },
  {
    title: "The Handmaiden",
    description:
      "1930s Korea, in the period of Japanese occupation, a new girl, Sookee, is hired as a handmaiden to a Japanese heiress, Hideko, who lives a secluded life on a large countryside estate with her domineering Uncle Kouzuki. But the maid has a secret. She is a pickpocket recruited by a swindler posing as a Japanese Count to help him seduce the Lady to steal her fortune.",
    release_year: 2016,
    director: "Park Chan-wook",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/dLlH4aNHdnmf62umnInL8xPlPzw.jpg",
    genres: ["Thriller", "Drama", "Romance"],
  },
  {
    title: "Lady Bird",
    description:
      "Lady Bird McPherson, a strong willed, deeply opinionated, artistic 17 year old comes of age in Sacramento. Her relationship with her mother and her upbringing are questioned and tested as she plans to head off to college.",
    release_year: 2017,
    director: "Greta Gerwig",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/gl66K7zRdtNYGrxyS2YDUP5ASZd.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    title: "John Wick",
    description:
      "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
    release_year: 2014,
    director: "Chad Stahelski",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    genres: ["Action", "Thriller"],
  },
  {
    title: "John Wick: Chapter 2",
    description:
      "John Wick is forced out of retirement by a former associate looking to seize control of a shadowy international assassins’ guild. Bound by a blood oath to aid him, Wick travels to Rome and does battle against some of the world’s most dangerous killers.",
    release_year: 2017,
    director: "Chad Stahelski",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/hXWBc0ioZP3cN4zCu6SN3YHXZVO.jpg",
    genres: ["Action", "Thriller", "Crime"],
  },
  {
    title: "Spider-Man: Across the Spider-Verse",
    description:
      "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    release_year: 2023,
    director: "Kemp Powers",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    genres: ["Animation", "Action", "Adventure", "Science Fiction"],
  },
  {
    title: "Oldboy",
    description:
      "With no clue how he came to be imprisoned, drugged and tortured for 15 years, a desperate man seeks revenge on his captors.",
    release_year: 2003,
    director: "Park Chan-wook",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/qxZ6RNRrA8O6KLeJ1s2wYBadpPT.jpg",
    genres: ["Drama", "Thriller", "Mystery", "Action"],
  },
  {
    title: "Fantastic Mr. Fox",
    description:
      "The Fantastic Mr. Fox, bored with his current life, plans a heist against the three local farmers. The farmers, tired of sharing their chickens with the sly fox, seek revenge against him and his family.",
    release_year: 2009,
    director: "Wes Anderson",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/hhhJN8aJdTlzGmARCbwWflHXhwI.jpg",
    genres: ["Adventure", "Animation", "Comedy", "Family"],
  },
  {
    title: "Aftersun",
    description:
      "Sophie reflects on the shared joy and private melancholy of a holiday she took with her father twenty years earlier. Memories fill the gaps between camcorder footages as she tries to reconcile the father she knew with the troubled man she didn't.",
    release_year: 2022,
    director: "Charlotte Wells",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/evKz85EKouVbIr51zy5fOtpNRPg.jpg",
    genres: ["Drama"],
  },
  {
    title: "Inglourious Basterds",
    description:
      'In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as "The Basterds" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.',
    release_year: 2009,
    director: "Quentin Tarantino",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
    genres: ["Drama", "Thriller", "War"],
  },
  {
    title: "The Virgin Suicides",
    description:
      "A group of male friends become obsessed with five mysterious sisters who are sheltered by their strict, religious parents.",
    release_year: 2000,
    director: "Sofia Coppola",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/1NCQtXPQnaHRjOZVmktA9BSM35F.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "Children of Men",
    description:
      "In 2027, in a chaotic world in which humans can no longer procreate, a former activist agrees to help transport a miraculously pregnant woman to a sanctuary at sea, where her child's birth may help scientists save the future of humankind.",
    release_year: 2006,
    director: "Alfonso Cuarón",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/8Xgvmx7WWc7Z9Ws9RAYk7uya2kh.jpg",
    genres: ["Drama", "Action", "Thriller", "Science Fiction"],
  },
  {
    title: "Forrest Gump",
    description:
      "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    release_year: 1994,
    director: "Robert Zemeckis",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    genres: ["Comedy", "Drama", "Romance"],
  },
  {
    title: "The Suicide Squad",
    description:
      "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
    release_year: 2021,
    director: "James Gunn",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/q61qEyssk2ku3okWICKArlAdhBn.jpg",
    genres: ["Action", "Comedy", "Adventure"],
  },
  {
    title: "25th Hour",
    description:
      "In New York City in the days following the events of 9/11, Monty Brogan is a convicted drug dealer about to start a seven-year prison sentence, and his final hours of freedom are devoted to hanging out with his closest buddies and trying to prepare his girlfriend for his extended absence.",
    release_year: 2002,
    director: "Spike Lee",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/uW7tTRElr2tRhmAVESzvHy4ByXg.jpg",
    genres: ["Drama", "Crime"],
  },
  {
    title: "Uncut Gems",
    description:
      "A charismatic New York City jeweler always on the lookout for the next big score makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides in his relentless pursuit of the ultimate win.",
    release_year: 2019,
    director: "Benny Safdie",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/sg0xxJeb3u1C4kAxhSuTwTNpEDt.jpg",
    genres: ["Drama", "Thriller", "Crime"],
  },
  {
    title: "Cure",
    description:
      "A detective starts spiraling out of control when a wave of gruesome murders with seemingly similar bizarre circumstances is sweeping Tokyo.",
    release_year: 1997,
    director: "Kiyoshi Kurosawa",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/xNVJr9q6AtSbjosS6Ed9YirOkSo.jpg",
    genres: ["Crime", "Horror", "Thriller", "Mystery"],
  },
  {
    title: "Anatomy of a Fall",
    description:
      "A woman is suspected of her husband's murder, and their blind son faces a moral dilemma as the sole witness.",
    release_year: 2023,
    director: "Justine Triet",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/kQs6keheMwCxJxrzV83VUwFtHkB.jpg",
    genres: ["Thriller", "Mystery", "Crime"],
  },
  {
    title: "Call Me by Your Name",
    description:
      "In the summer of 1983, a 17-year-old Elio spends his days in his family's villa in Italy. One day Oliver, a graduate student, arrives to assist Elio's father, a professor of Greco-Roman culture. Soon, Elio and Oliver discover a summer that will alter their lives forever.",
    release_year: 2017,
    director: "Luca Guadagnino",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/mZ4gBdfkhP9tvLH1DO4m4HYtiyi.jpg",
    genres: ["Romance", "Drama"],
  },
  {
    title: "Three Colors: Blue",
    description:
      "The wife of a famous composer survives a car accident that kills her husband and daughter. Now alone, she shakes off her old identity and explores her newfound freedom but finds that she is unbreakably bound to other humans, including her husband’s mistress, whose existence she never suspected.",
    release_year: 1993,
    director: "Krzysztof Kieślowski",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/33wsWxzsNstI8N7dvuwzFmj1qBd.jpg",
    genres: ["Drama"],
  },
  {
    title: "GoodFellas",
    description:
      "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    release_year: 1990,
    director: "Martin Scorsese",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    genres: ["Drama", "Crime"],
  },
  {
    title: "American History X",
    description:
      "Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
    release_year: 1998,
    director: "Tony Kaye",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/x2drgoXYZ8484lqyDj7L1CEVR4T.jpg",
    genres: ["Drama"],
  },
  {
    title: "Léon: The Professional",
    description:
      "Léon, the top hit man in New York, has earned a rep as an effective \"cleaner\". But when his next-door neighbors are wiped out by a loose-cannon DEA agent, he becomes the unwilling custodian of 12-year-old Mathilda. Before long, Mathilda's thoughts turn to revenge, and she considers following in Léon's footsteps.",
    release_year: 1994,
    director: "Luc Besson",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/bxB2q91nKYp8JNzqE7t7TWBVupB.jpg",
    genres: ["Crime", "Drama", "Action"],
  },
  {
    title: "American Beauty",
    description:
      "Lester Burnham, a depressed suburban father in a mid-life crisis, decides to turn his hectic life around after developing an infatuation with his daughter's attractive friend.",
    release_year: 1999,
    director: "Sam Mendes",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/wby9315QzVKdW9BonAefg8jGTTb.jpg",
    genres: ["Drama"],
  },
  {
    title: "Joker",
    description:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    release_year: 2019,
    director: "Todd Phillips",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    genres: ["Crime", "Thriller", "Drama"],
  },
  {
    title: "Baby Driver",
    description:
      "After being coerced into working for a crime boss, a young getaway driver finds himself taking part in a heist doomed to fail.",
    release_year: 2017,
    director: "Edgar Wright",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/tYzFuYXmT8LOYASlFCkaPiAFAl0.jpg",
    genres: ["Action", "Crime"],
  },
  {
    title: "Shaun of the Dead",
    description:
      "Shaun lives a supremely uneventful life, which revolves around his girlfriend, his mother, and, above all, his local pub. This gentle routine is threatened when the dead return to life and make strenuous attempts to snack on ordinary Londoners.",
    release_year: 2004,
    director: "Edgar Wright",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/dgXPhzNJH8HFTBjXPB177yNx6RI.jpg",
    genres: ["Horror", "Comedy"],
  },
  {
    title: "Monty Python and the Holy Grail",
    description:
      'King Arthur, accompanied by his squire, recruits his Knights of the Round Table, including Sir Bedevere the Wise, Sir Lancelot the Brave, Sir Robin the Not-Quite-So-Brave-As-Sir-Lancelot and Sir Galahad the Pure. On the way, Arthur battles the Black Knight who, despite having had all his limbs chopped off, insists he can still fight. They reach Camelot, but Arthur decides not  to enter, as "it is a silly place".',
    release_year: 1975,
    director: "Terry Jones",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/7nTkHjETdGMYK1phHwDbPsrzbYl.jpg",
    genres: ["Adventure", "Comedy", "Fantasy"],
  },
  {
    title: "Life of Brian",
    description:
      "Brian Cohen is an average young Jewish man, but through a series of ridiculous events, he gains a reputation as the Messiah. When he's not dodging his followers or being scolded by his shrill mother, the hapless Brian has to contend with the pompous Pontius Pilate and acronym-obsessed members of a separatist movement. Rife with Monty Python's signature absurdity, the tale finds Brian's life paralleling Biblical lore, albeit with many more laughs.",
    release_year: 1979,
    director: "Terry Jones",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/lSSA64WF0M0BXnjwr2quMh6shCl.jpg",
    genres: ["Comedy"],
  },
  {
    title: "My Neighbor Totoro",
    description:
      "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
    release_year: 1988,
    director: "Hayao Miyazaki",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/rtGDOeG9LzoerkDGZF9dnVeLppL.jpg",
    genres: ["Fantasy", "Animation", "Family"],
  },
  {
    title: "Porco Rosso",
    description:
      "In Italy in the 1930s, sky pirates in biplanes terrorize wealthy cruise ships as they sail the Adriatic Sea. The only pilot brave enough to stop the scourge is the mysterious Porco Rosso, a former World War I flying ace who was somehow turned into a pig during the war. As he prepares to battle the pirate crew's American ace, Porco Rosso enlists the help of spunky girl mechanic Fio Piccolo and his longtime friend Madame Gina.",
    release_year: 1992,
    director: "Hayao Miyazaki",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/8mIvSvnVBApfORL9N6S38Q7wD6A.jpg",
    genres: ["Family", "Comedy", "Animation", "Adventure"],
  },
  {
    title: "Scream",
    description:
      "A year after the murder of her mother, a teenage girl is terrorized by a masked killer who targets her and her friends by using scary movies as part of a deadly game.",
    release_year: 1996,
    director: "Wes Craven",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/lr9ZIrmuwVmZhpZuTCW8D9g0ZJe.jpg",
    genres: ["Crime", "Horror", "Mystery"],
  },
  {
    title: "Scream 2",
    description:
      "Two years after the first series of murders, as Sidney Prescott acclimates to college life, someone donning the Ghostface costume begins a new string of killings.",
    release_year: 1997,
    director: "Wes Craven",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/dORlVasiaDkJXTqt9bdH7nFNs6C.jpg",
    genres: ["Horror", "Mystery"],
  },
  {
    title: "Me Before You",
    description:
      "A small town girl is caught between dead-end jobs. A high-profile, successful man becomes wheelchair bound following an accident. The man decides his life is not worth living until the girl is hired for six months to be his new caretaker. Worlds apart and trapped together by circumstance, the two get off to a rocky start. But the girl becomes determined to prove to the man that life is worth living and as they embark on a series of adventures together, each finds their world changing in ways neither of them could begin to imagine.",
    release_year: 2016,
    director: "Thea Sharrock",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url: "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "Three Colors: White",
    description:
      "Polish immigrant Karol Karol finds himself out of a marriage, a job and a country when his French wife, Dominique, divorces him after six months due to his impotence. Forced to leave France after losing the business they jointly owned, Karol enlists fellow Polish expatriate Mikołaj to smuggle him back to their homeland.",
    release_year: 1994,
    director: "Krzysztof Kieślowski",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/fdIet3NSa27gobMbaUml66oCQNT.jpg",
    genres: ["Comedy", "Drama", "Mystery"],
  },
  {
    title: "Three Colors: Red",
    description:
      "Part-time model Valentine unexpectedly befriends a retired judge after she runs over his dog. At first, the grumpy man shows no concern about the dog, and Valentine decides to keep it. But the two form a bond when she returns to his house and catches him listening to his neighbors’ phone calls.",
    release_year: 1994,
    director: "Krzysztof Kieślowski",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url: "https://image.tmdb.org/t/p/w500/JHmsBiX1tjCKqAul1lzC20WcAW.jpg",
    genres: ["Drama", "Mystery", "Romance"],
  },
  {
    title: "The Good, the Bad and the Ugly",
    description:
      "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    release_year: 1966,
    director: "Sergio Leone",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    genres: ["Western"],
  },
  {
    title: "The Northman",
    description:
      "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
    release_year: 2022,
    director: "Robert Eggers",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/aSSJMnHknzKjlZ6zybwD7eyJ4Po.jpg",
    genres: ["Action", "Adventure", "Fantasy"],
  },
  {
    title: "The Umbrellas of Cherbourg",
    description:
      "This simple romantic tragedy begins in 1957. Guy Foucher, a 20-year-old French auto mechanic, has fallen in love with 17-year-old Geneviève Emery, an employee in her widowed mother's chic but financially embattled umbrella shop. On the evening before Guy is to leave for a two-year tour of combat in Algeria, he and Geneviève make love. She becomes pregnant and must choose between waiting for Guy's return or accepting an offer of marriage from a wealthy diamond merchant.",
    release_year: 1964,
    director: "Jacques Demy",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/tAgTf64XKK5ir7w5C7dnB53jWWG.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "Poor Things",
    description:
      "Brought back to life by an unorthodox scientist, a young woman runs off with a lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
    release_year: 2023,
    director: "Yorgos Lanthimos",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
    genres: ["Science Fiction", "Romance", "Comedy"],
  },
  {
    title: "The Shape of Water",
    description:
      "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
    release_year: 2017,
    director: "Guillermo del Toro",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg",
    genres: ["Drama", "Fantasy", "Romance"],
  },
  {
    title: "Chungking Express",
    description:
      "Two melancholic Hong Kong policemen fall in love: one with a mysterious underworld figure, the other with a beautiful and ethereal server at a late-night restaurant.",
    release_year: 1994,
    director: "Wong Kar-Wai",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/43I9DcNoCzpyzK8JCkJYpHqHqGG.jpg",
    genres: ["Drama", "Comedy", "Romance"],
  },
  {
    title: "Hamilton",
    description:
      "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
    release_year: 2025,
    director: "Thomas Kail",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/h1B7tW0t399VDjAcWJh8m87469b.jpg",
    genres: ["History", "Drama"],
  },
  {
    title: "Guardians of the Galaxy",
    description:
      "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
    release_year: 2014,
    director: "James Gunn",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    genres: ["Action", "Science Fiction", "Adventure"],
  },
  {
    title: "Guardians of the Galaxy Vol. 2",
    description:
      "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
    release_year: 2017,
    director: "James Gunn",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    genres: ["Science Fiction", "Adventure", "Action"],
  },
  {
    title: "Guardians of the Galaxy Vol. 3",
    description:
      "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    release_year: 2023,
    director: "James Gunn",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    genres: ["Science Fiction", "Adventure", "Action", "Comedy"],
  },
  {
    title: "The Last Duel",
    description:
      "King Charles VI declares that Knight Jean de Carrouges settle his dispute with his squire, Jacques Le Gris, by challenging him to a duel.",
    release_year: 2021,
    director: "Ridley Scott",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/zjrJE0fpzPvX8saJXj8VNfcjBoU.jpg",
    genres: ["History", "Drama", "Action"],
  },
  {
    title: "10 Things I Hate About You",
    description:
      "On the first day at his new school, Cameron instantly falls for Bianca, the gorgeous girl of his dreams. The only problem is that Bianca is forbidden to date until her ill-tempered, completely un-dateable older sister Kat goes out, too. In an attempt to solve his problem, Cameron singles out the only guy who could possibly be a match for Kat: a mysterious bad boy with a nasty reputation of his own.",
    release_year: 1999,
    director: "Gil Junger",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/ujERk3aKABXU3NDXOAxEQYTHe9A.jpg",
    genres: ["Comedy", "Romance", "Drama"],
  },
  {
    title: "Jojo Rabbit",
    description:
      "Jojo, a lonely German boy during World War II has his world shaken when he learns that his single mother is hiding a Jewish girl in their home. Influenced by a buffoonish imaginary version of Adolf Hitler, he begins to question his beliefs and confront the conflict between propaganda and his own humanity.",
    release_year: 2019,
    director: "Taika Waititi",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/1mqL7VG4Ix8wmxwypmCA1HTHBky.jpg",
    genres: ["Comedy", "War", "Drama"],
  },
  {
    title: "Tangled",
    description:
      "Feisty teenager Rapunzel, who has long and magical hair, wants to go and see sky lanterns on her eighteenth birthday, but she's bound to a tower by her overprotective mother. She strikes a deal with Flynn Rider, a charming wanted thief, and the duo set off on an action-packed escapade.",
    release_year: 2010,
    director: "Byron Howard",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/ym7Kst6a4uodryxqbGOxmewF235.jpg",
    genres: ["Animation", "Family", "Adventure"],
  },
  {
    title: "Another Round",
    description:
      "Four stagnant high school teachers decide to test out a theory that maintaining a constant level of intoxication will improve their overall lives.",
    release_year: 2020,
    director: "Thomas Vinterberg",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/sV5VxI65oSx0td7gmOSQnEbakFW.jpg",
    genres: ["Drama", "Comedy"],
  },
  {
    title: "Inside Out",
    description:
      "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
    release_year: 2015,
    director: "Pete Docter",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    genres: ["Animation", "Family", "Adventure", "Drama", "Comedy"],
  },
  {
    title: "Rogue One: A Star Wars Story",
    description:
      "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
    release_year: 2016,
    director: "Gareth Edwards",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg",
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    title: "Licorice Pizza",
    description:
      "The story of Gary Valentine and Alana Kane growing up, running around and going through the treacherous navigation of first love in the San Fernando Valley, 1973.",
    release_year: 2021,
    director: "Paul Thomas Anderson",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/ivXtvzfliGvoJ1DhSHIGyYBToWe.jpg",
    genres: ["Drama", "Comedy", "Romance"],
  },
  {
    title: "Soul",
    description:
      "Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
    release_year: 2020,
    director: "Pete Docter",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/pEz5aROvfy5FBW1OTlrDO3VryWO.jpg",
    genres: ["Animation", "Family", "Comedy", "Fantasy", "Drama"],
  },
  {
    title: "The Witch",
    description:
      "In 1630, a farmer relocates his family to a remote plot of land on the edge of a forest where strange, unsettling things happen. With suspicion and paranoia mounting, each family member's faith, loyalty and love are tested in shocking ways.",
    release_year: 2016,
    director: "Robert Eggers",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/zap5hpFCWSvdWSuPGAQyjUv2wAC.jpg",
    genres: ["Horror", "Fantasy", "Drama"],
  },
  {
    title: "The King",
    description:
      "England, 15th century. Hal, a capricious prince who lives among the populace far from court, is forced by circumstances to reluctantly accept the throne and become Henry V.",
    release_year: 2019,
    director: "David Michôd",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/8u0QBGUbZcBW59VEAdmeFl9g98N.jpg",
    genres: ["Drama", "History", "War"],
  },
  {
    title: "Conclave",
    description:
      "After the unexpected death of the Pope, Cardinal Lawrence is tasked with managing the covert and ancient ritual of electing a new one. Sequestered in the Vatican with the Catholic Church’s most powerful leaders until the process is complete, Lawrence finds himself at the center of a conspiracy that could lead to its downfall.",
    release_year: 2024,
    director: "Edward Berger",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/m5x8D0bZ3eKqIVWZ5y7TnZ2oTVg.jpg",
    genres: ["Drama", "Thriller"],
  },
  {
    title: "The Menu",
    description:
      "A young couple travels to a remote island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    release_year: 2022,
    director: "Mark Mylod",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/fPtUgMcLIboqlTlPrq0bQpKK8eq.jpg",
    genres: ["Comedy", "Horror", "Thriller"],
  },
  {
    title: "Anora",
    description:
      "A young sex worker from Brooklyn gets her chance at a Cinderella story when she meets and impulsively marries the son of an oligarch. Once the news reaches Russia, her fairytale is threatened as his parents set out to get the marriage annulled.",
    release_year: 2024,
    director: "Sean Baker",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/cgXk2tNYhJZLXdBDO5DidAVzQ82.jpg",
    genres: ["Drama", "Comedy", "Romance"],
  },
  {
    title: "Captain America: Brave New World",
    description:
      "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
    release_year: 2025,
    director: "Julius Onah",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
    genres: ["Action", "Thriller", "Science Fiction"],
  },
  {
    title: "The Favourite",
    description:
      "England, early 18th century. The close relationship between Queen Anne and Sarah Churchill is threatened by the arrival of Sarah's cousin, Abigail Hill, resulting in a bitter rivalry between the two cousins to be the Queen's favourite.",
    release_year: 2018,
    director: "Yorgos Lanthimos",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/cwBq0onfmeilU5xgqNNjJAMPfpw.jpg",
    genres: ["History", "Comedy", "Drama"],
  },
  {
    title: "Casino Royale",
    description:
      "Le Chiffre, a banker to the world's terrorists, is scheduled to participate in a high-stakes poker game in Montenegro, where he intends to use his winnings to establish his financial grip on the terrorist market. M sends Bond—on his maiden mission as a 00 Agent—to attend this game and prevent Le Chiffre from winning. With the help of Vesper Lynd and Felix Leiter, Bond enters the most important poker game in his already dangerous career.",
    release_year: 2006,
    director: "Martin Campbell",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/lMrxYKKhd4lqRzwUHAy5gcx9PSO.jpg",
    genres: ["Adventure", "Action", "Thriller"],
  },
  {
    title: "Sing Sing",
    description:
      "Divine G, imprisoned at Sing Sing for a crime he didn’t commit, finds purpose by acting in a theatre group alongside other incarcerated men in this story of resilience, humanity, and the transformative power of art.",
    release_year: 1983,
    director: "Greg Kwedar",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/tYAxWlI6Skl1R0UMoArHhUmwVRg.jpg",
    genres: ["Drama"],
  },
  {
    title: "Spotlight",
    description:
      "The true story of how the Boston Globe uncovered the massive scandal of child molestation and cover-up within the local Catholic Archdiocese, shaking the entire Catholic Church to its core.",
    release_year: 2015,
    director: "Tom McCarthy",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/8DPGG400FgaFWaqcv11n8mRd2NG.jpg",
    genres: ["Drama", "History"],
  },
  {
    title: "Hacksaw Ridge",
    description:
      "WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.",
    release_year: 2016,
    director: "Mel Gibson",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/wuz8TjCIWR2EVVMuEfBnQ1vuGS3.jpg",
    genres: ["Drama", "History", "War"],
  },
  {
    title: "Taxi Driver",
    description:
      "Suffering from insomnia, disturbed loner Travis Bickle takes a job as a New York City cabbie, haunting the streets nightly, growing increasingly detached from reality as he dreams of cleaning up the filthy city.",
    release_year: 1976,
    director: "Martin Scorsese",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    genres: ["Crime", "Drama"],
  },
  {
    title: "Tokyo Godfathers",
    description:
      "On Christmas Eve, three homeless people living on the streets of Tokyo discover a newborn baby among the trash and set out to find its parents.",
    release_year: 2003,
    director: "Satoshi Kon",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/sPC66btzQlzuRdPKiSDYZ5Hvxgc.jpg",
    genres: ["Animation", "Drama", "Comedy"],
  },
  {
    title: "Faces Places",
    description:
      "Director Agnès Varda and photographer/muralist JR journey through rural France and form an unlikely friendship.",
    release_year: 2017,
    director: "Agnès Varda",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/1NX6NTj9FiiJwEgRUmEifSzE7Na.jpg",
    genres: ["Documentary"],
  },
  {
    title: "Drive",
    description:
      "Driver is a skilled Hollywood stuntman who moonlights as a getaway driver for criminals. Though he projects an icy exterior, lately he's been warming up to a pretty neighbor named Irene and her young son, Benicio. When Irene's husband gets out of jail, he enlists Driver's help in a million-dollar heist. The job goes horribly wrong, and Driver must risk his life to protect Irene and Benicio from the vengeful masterminds behind the robbery.",
    release_year: 2011,
    director: "Nicolas Winding Refn",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
    genres: ["Drama", "Thriller", "Crime"],
  },
  {
    title: "A Silent Voice: The Movie",
    description:
      "Shouya Ishida starts bullying the new girl in class, Shouko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on Shouya for his lack of compassion. When they leave elementary school, Shouko and Shouya do not speak to each other again... until an older, wiser Shouya, tormented by his past behaviour, decides he must see Shouko once more. He wants to atone for his sins, but is it already too late...?",
    release_year: 2016,
    director: "Naoko Yamada",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg",
    genres: ["Animation", "Drama", "Romance"],
  },
  {
    title: "Liz and the Blue Bird",
    description:
      "In their last year of high school, two girls in the brass band club perform a song inspired by a fairy tale that parallels their friendship.",
    release_year: 2018,
    director: "Naoko Yamada",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/7xRIkqWJy4cNpUxPo5aZ24O0Tyx.jpg",
    genres: ["Animation", "Drama", "Music"],
  },
  {
    title: "From Up on Poppy Hill",
    description:
      "Yokohama, 1963. Japan is picking itself up from the devastation of World War II and preparing to host the 1964 Olympics—and the mood is one of both optimism and conflict as the young generation struggles to throw off the shackles of a troubled past. Against this backdrop of hope and change, a friendship begins to blossom between high school students Umi and Shun—but a buried secret from their past emerges to cast a shadow on the future and pull them apart.",
    release_year: 2011,
    director: "Goro Miyazaki",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/rRLYX4RZIyloHSJwvZKAhphAjiB.jpg",
    genres: ["Animation", "Drama"],
  },
  {
    title: "Ani*Kuri15",
    description:
      '15 one-minute shorts created by various people from Japan\'s animation industry. The title of the collection, Ani*Kuri15, is abbreviated from the words "anime" and "creators".',
    release_year: 2008,
    director: "Mamoru Oshii",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/9YrTQAKVJaDUgDOVevZ0LJbhJGm.jpg",
    genres: ["Adventure", "Animation", "Comedy", "Drama", "Family", "Fantasy"],
  },
  {
    title: "The Farewell",
    description:
      "A headstrong Chinese-American woman returns to China when her beloved grandmother is given a terminal diagnosis. Billi struggles with her family's decision to keep grandma in the dark about her own illness as they all stage an impromptu wedding to see grandma one last time.",
    release_year: 2019,
    director: "Lulu Wang",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/7ht2IMGynDSVQGvAXhAb83DLET8.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    title: "Longlegs",
    description:
      "FBI Agent Lee Harker is a gifted new recruit assigned to the unsolved case of an elusive serial killer. As the case takes complex turns, unearthing evidence of the occult, Harker discovers a personal connection to the merciless killer and must race against time to stop him before he claims the lives of another innocent family.",
    release_year: 2024,
    director: "Osgood Perkins",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/1EwNyiiNFd863H4e8nWEzutnZD7.jpg",
    genres: ["Crime", "Horror", "Thriller"],
  },
  {
    title: "Suzume",
    description:
      "Suzume, 17, lost her mother as a little girl. On her way to school, she meets a mysterious young man. But her curiosity unleashes a calamity that endangers the entire population of Japan, and so Suzume embarks on a journey to set things right.",
    release_year: 2022,
    director: "Makoto Shinkai",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/yStW1TXF5s7Tbtu9KjIZEaWl6HL.jpg",
    genres: ["Animation", "Drama", "Adventure", "Fantasy"],
  },
  {
    title: "A Real Pain",
    description:
      "Mismatched cousins David and Benji reunite for a tour through Poland to honor their beloved grandmother. The adventure takes a turn when the pair's old tensions resurface against the backdrop of their family history.",
    release_year: 2024,
    director: "Jesse Eisenberg",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/67xRIXm5TxXRT4nV2V4AEJ9yq2d.jpg",
    genres: ["Comedy", "Drama"],
  },
  {
    title: "Logan",
    description:
      "In the near future, a weary Logan cares for an ailing Professor X in a hideout on the Mexican border. But Logan’s attempts to hide from the world and his legacy are upended when a young mutant arrives, pursued by dark forces.",
    release_year: 2017,
    director: "James Mangold",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/pF7CLvow3KQRF2Ua3koKXezohU9.jpg",
    genres: ["Drama", "Action", "Science Fiction"],
  },
  {
    title: "The Hunger Games",
    description:
      "In a dystopian society where the Capitol forces each district to send two young tributes to fight to the death in a televised spectacle, a girl volunteers to take her sister’s place, setting the stage for a struggle of survival and defiance.",
    release_year: 2012,
    director: "Gary Ross",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/yXCbOiVDCxO71zI7cuwBRXdftq8.jpg",
    genres: ["Science Fiction", "Adventure", "Action", "Thriller"],
  },
  {
    title: "The Hunger Games: Catching Fire",
    description:
      "After surviving the Hunger Games, Katniss and Peeta struggle with the consequences of their victory as unrest spreads across Panem. Forced back into the spotlight, they become symbols of hope and resistance while the Capitol prepares a new and deadly challenge that will change the future of the nation forever.",
    release_year: 2013,
    director: "Francis Lawrence",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/vrQHDXjVmbYzadOXQ0UaObunoy2.jpg",
    genres: ["Adventure", "Action", "Science Fiction"],
  },
  {
    title: "The Hunger Games: Mockingjay - Part 1",
    description:
      "After surviving the Quarter Quell, Katniss finds herself in the hidden stronghold of District 13, where the rebellion against the Capitol is gaining momentum. Struggling with the weight of becoming the symbol of resistance, she must navigate fragile alliances while trying to protect those she loves. As propaganda battles rage and Panem moves closer to full-scale war, Katniss is forced to confront the true cost of revolution.",
    release_year: 2014,
    director: "Francis Lawrence",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
    genres: ["Science Fiction", "Adventure", "Thriller"],
  },
  {
    title: "The Hunger Games: Mockingjay - Part 2",
    description:
      "As the war between the Capitol and the districts reaches its peak, Katniss Everdeen embarks on a perilous mission to liberate Panem and confront President Snow. Joined by a team of trusted allies, she navigates deadly traps, shifting loyalties, and the heavy cost of rebellion, determined to bring freedom to her people and end the Hunger Games once and for all.",
    release_year: 2015,
    director: "Francis Lawrence",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/lImKHDfExAulp16grYm8zD5eONE.jpg",
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    title: "Nomadland",
    description:
      "A woman in her sixties embarks on a journey through the western United States after losing everything in the Great Recession, living as a van-dwelling modern-day nomad.",
    release_year: 2021,
    director: "Chloé Zhao",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/8Vc5EOUEIF1EUXuX9eLFf7BvN3P.jpg",
    genres: ["Drama"],
  },
  {
    title: "Thunderbolts*",
    description:
      "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    release_year: 2025,
    director: "Jake Schreier",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg",
    genres: ["Action", "Science Fiction", "Adventure"],
  },
  {
    title: "Humanist Vampire Seeking Consenting Suicidal Person",
    description:
      "Sasha is a young vampire with a serious problem: she's too sensitive to kill. When her exasperated parents cut off her blood supply, Sasha's life is in jeopardy. Luckily, she meets Paul, a lonely teenager with suicidal tendencies who is willing to give his life to save hers. But their friendly agreement soon becomes a nocturnal quest to fulfill Paul's last wishes before day breaks.",
    release_year: 2023,
    director: "Ariane Louis-Seize",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/m5OItLBY5T38ew1YI4VSIXjl5G2.jpg",
    genres: ["Romance", "Comedy", "Fantasy", "Horror"],
  },
  {
    title: "The Piano Teacher",
    description:
      "Erika Kohut, a sexually repressed piano teacher living with her domineering mother, meets a young man who starts romantically pursuing her.",
    release_year: 2001,
    director: "Michael Haneke",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/gNHKYQnP1RnqEhkivHJzBPb4MOP.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "Shoplifters",
    description:
      "In the outskirts of Tokyo, a poor but close-knit group living on the fringes of society survives through shoplifting and odd jobs. When Osamu and his son take in a neglected young girl, their already fragile existence begins to unravel. As the family grows attached to her, buried secrets surface, forcing them to confront the true meaning of love, belonging, and what makes a family.",
    release_year: 2018,
    director: "Hirokazu Kore-eda",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/qjYptA2Kk7Z7WM0iTf7aNYFucfD.jpg",
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    title: "Short Term 12",
    description:
      "Grace, a compassionate young supervisor at a foster care facility, helps at-risk teens. But when a new charge dredges up memories of her own troubled past, Grace's tough exterior begins eroding.",
    release_year: 2013,
    director: "Destin Daniel Cretton",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/qKnsyaJZLXfiL2JhIJEkpA8C3LU.jpg",
    genres: ["Drama"],
  },
  {
    title: "Monster",
    description:
      "After an outburst at school involving her son, a concerned single mother demands answers, triggering a sequence of deepening suspicion and turmoil.",
    release_year: 2023,
    director: "Hirokazu Kore-eda",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/aevmNtJCNG4ZlfEeEGZ79frMUes.jpg",
    genres: ["Mystery", "Drama", "Thriller"],
  },
  {
    title: "Submarine",
    description:
      "15-year-old deep-thinking Welsh schoolboy Oliver Tate struggles to initiate and maintain a relationship with Jordana, his devilish, dark-haired classmate at their Swansea high school. As his parents' marriage begins to fall apart, similar problems arise in his relationship with Jordana.",
    release_year: 2011,
    director: "Richard Ayoade",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/nbzXX3CYtKUBrPeMcG7PVoLQHXB.jpg",
    genres: ["Drama", "Comedy", "Romance"],
  },
  {
    title: "Beau Travail",
    description:
      "Foreign Legion officer Galoup recalls his once glorious life, training troops in the Gulf of Djibouti. His existence there was happy, strict and regimented, until the arrival of a promising young recruit, Sentain, plants the seeds of jealousy in Galoup's mind.",
    release_year: 2000,
    director: "Claire Denis",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/6X0TGA4jdSayTvJgyyOEIn1XKGf.jpg",
    genres: ["Drama"],
  },
  {
    title: "Queen Margot",
    description:
      "Paris, Kingdom of France, August 18, 1572. To avoid the outbreak of a religious war, the Catholic princess Marguerite de Valois, sister of the feeble King Charles IX, marries the Huguenot King Henry III of Navarre.",
    release_year: 1994,
    director: "Patrice Chéreau",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/8uGkhBLiJMIkwohGPo3iB9AuwDg.jpg",
    genres: ["Drama", "History", "Romance"],
  },
  {
    title: "La Grande Bouffe",
    description:
      "Four friends gather at a villa with the intention of eating themselves to death.",
    release_year: 1973,
    director: "Marco Ferreri",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/om8Kka9e4GStOAcX6gVEBJAoAXc.jpg",
    genres: ["Drama", "Comedy"],
  },
  {
    title: "Monsieur Aznavour",
    description:
      "From his poor childhood to his rise to fame, from his triumphs to his failures, from Paris to New York, discover the exceptional journey of an artist. Intimate, intense, fragile and indestructible, devoted to his art until the very end, here is one of the most immortal singers of all time: MONSIEUR AZNAVOUR.",
    release_year: 2024,
    director: "Mehdi Idir",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/23FkaTaAosaTcTgyuJdTf7TvcJu.jpg",
    genres: ["History", "Music", "Drama"],
  },
  {
    title: "Marie Antoinette",
    description:
      "The retelling of France’s iconic but ill-fated queen, Marie Antoinette - from her betrothal and marriage to Louis XVI at fifteen to her reign as queen at nineteen and ultimately the fall of Versailles.",
    release_year: 2006,
    director: "Sofia Coppola",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/cybXGmv8Rjd5Os8Xml6YxMBQ0Zt.jpg",
    genres: ["Drama", "History"],
  },
  {
    title: "Green Book",
    description:
      "Tony Lip, a bouncer in 1962, is hired to drive pianist Don Shirley on a tour through the Deep South in the days when African Americans, forced to find alternate accommodations and services due to segregation laws below the Mason-Dixon Line, relied on a guide called The Negro Motorist Green Book.",
    release_year: 2018,
    director: "Peter Farrelly",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/7BsvSuDQuoqhWmU2fL7W2GOcZHU.jpg",
    genres: ["Drama", "Comedy", "History"],
  },
  {
    title: "Little Women",
    description:
      "Four sisters come of age in America in the aftermath of the Civil War.",
    release_year: 2019,
    director: "Greta Gerwig",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/yn5ihODtZ7ofn8pDYfxCmxh8AXI.jpg",
    genres: ["Drama", "Romance", "History"],
  },
  {
    title: "Heat",
    description:
      "Obsessive master thief Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse game may end in violence.",
    release_year: 1995,
    director: "Michael Mann",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/umSVjVdbVwtx5ryCA2QXL44Durm.jpg",
    genres: ["Crime", "Drama", "Action"],
  },
  {
    title: "Petite Maman",
    description:
      "After the death of her beloved grandmother, eight-year-old Nelly meets a strangely familiar girl her own age in the woods. Instantly forming a connection with this mysterious new friend, Nelly embarks on a fantastical journey of discovery which helps her come to terms with this newfound loss.",
    release_year: 2021,
    director: "Céline Sciamma",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/fxl2ARZO2vRfUGDfqSz2bostauE.jpg",
    genres: ["Drama", "Fantasy", "Family"],
  },
  {
    title: "Mission: Impossible - The Final Reckoning",
    description:
      "Ethan Hunt and team continue their search for the terrifying AI known as the Entity — which has infiltrated intelligence networks all over the globe — with the world's governments and a mysterious ghost from Hunt's past on their trail. Joined by new allies and armed with the means to shut the Entity down for good, Hunt is in a race against time to prevent the world as we know it from changing forever.",
    release_year: 2025,
    director: "Christopher McQuarrie",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
    genres: ["Action", "Adventure", "Thriller"],
  },
  {
    title: "Secretary",
    description:
      "A young woman, recently released from a mental hospital, gets a job as a secretary to a demanding lawyer, where their employer-employee relationship turns into a sexual, sadomasochistic one.",
    release_year: 2002,
    director: "Steven Shainberg",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/mdRXSE7ho185SZlXj0JSwuecEd3.jpg",
    genres: ["Romance", "Drama", "Comedy"],
  },
  {
    title: "Pride & Prejudice",
    description:
      "A story of love and life among the landed English gentry during the Georgian era. Mr. Bennet is a gentleman living in Hertfordshire with his overbearing wife and five daughters, but if he dies their house will be inherited by a distant cousin whom they have never met, so the family's future happiness and security is dependent on the daughters making good marriages.",
    release_year: 2005,
    director: "Joe Wright",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/v5gShop7147X33ytbcC2u05KDuc.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "Master and Commander: The Far Side of the World",
    description:
      "After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British Royal Navy begins a chase over two oceans to capture or destroy the enemy, though he must weigh his commitment to duty and ferocious pursuit of glory against the safety of his devoted crew, including the ship's thoughtful surgeon, his best friend.",
    release_year: 2003,
    director: "Peter Weir",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg",
    genres: ["Adventure", "Drama", "War"],
  },
  {
    title: "Chicago",
    description:
      "Murderesses Velma Kelly and Roxie Hart find themselves on death row together and fight for the fame that will keep them from the gallows in 1920s Chicago.",
    release_year: 2002,
    director: "Rob Marshall",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/3ED8cWCXY9zkx77Sd0N5qMbsdDP.jpg",
    genres: ["Comedy", "Drama", "Crime"],
  },
  {
    title: "The Summit of the Gods",
    description:
      "A photojournalist’s obsessive quest for the truth about the first expedition to Mt. Everest leads him to search for an esteemed climber who went missing.",
    release_year: 2021,
    director: "Patrick Imbert",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/iowz7MwaTWMYlfLUE6GeM0m3Hze.jpg",
    genres: ["Adventure", "Animation", "Mystery"],
  },
  {
    title: "Punch-Drunk Love",
    description:
      "A socially awkward and volatile small business owner meets the love of his life after being threatened by a gang of scammers.",
    release_year: 2002,
    director: "Paul Thomas Anderson",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/htYp4yqFu4rzBEIa6j9jP8miDm3.jpg",
    genres: ["Romance", "Drama", "Comedy"],
  },
  {
    title: "We Live in Time",
    description:
      "An up-and-coming chef and a recent divorcée find their lives forever changed when a chance encounter brings them together, in a decade-spanning, deeply moving romance.",
    release_year: 2024,
    director: "John Crowley",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/oeDNBgnlGF6rnyX1P1K8Vl2f3lW.jpg",
    genres: ["Romance", "Drama"],
  },
  {
    title: "The Princess Bride",
    description:
      "In this enchantingly cracked fairy tale, the beautiful Princess Buttercup and the dashing Westley must overcome staggering odds to find happiness amid six-fingered swordsmen, murderous princes, Sicilians and rodents of unusual size. But even death can't stop these true lovebirds from triumphing.",
    release_year: 1987,
    director: "Rob Reiner",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/dvjqlp2sAhUeFjUOfQDgqwpphHj.jpg",
    genres: ["Adventure", "Family", "Fantasy", "Comedy", "Romance"],
  },
  {
    title: "Turning Red",
    description:
      "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
    release_year: 2022,
    director: "Domee Shi",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    genres: ["Animation", "Family", "Comedy", "Fantasy"],
  },
  {
    title: "Before Sunrise",
    description:
      "An unexpected meeting on a train leads two travelers to spend an evening wandering through Vienna. As the night unfolds, they share stories and conversations about life and love, exploring new ideas while a quiet intimacy grows between them, knowing it may be their only night together.",
    release_year: 1995,
    director: "Richard Linklater",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/kf1Jb1c2JAOqjuzA3H4oDM263uB.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "Night and Fog",
    description:
      "Filmmaker Alain Resnais documents the atrocities behind the walls of Hitler’s concentration camps.",
    release_year: 1956,
    director: "Alain Resnais",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/herZba8EbIJisqnu8kTm0JBEDLU.jpg",
    genres: ["History", "Documentary"],
  },
  {
    title: "Hiroshima Mon Amour",
    description:
      "The deep conversation between a Japanese architect and a French actress forms the basis of this celebrated French film, considered one of the vanguard productions of the French New Wave. Set in Hiroshima after the end of World War II, the couple -- lovers turned friends -- recount, over many hours, previous romances and life experiences. The two intertwine their stories about the past with pondering the devastation wrought by the atomic bomb dropped on the city.",
    release_year: 1959,
    director: "Alain Resnais",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/vjP7eX9c0xUD5i5dTRaP3NYC8iN.jpg",
    genres: ["Drama", "History", "Romance"],
  },
  {
    title: "The Sorrow and the Pity",
    description:
      "An investigation into the nature, details and reasons for the collaboration, from 1940 to 1944, during World War II, between the Vichy regime, established in the south of France and headed by Marshal Pétain, and Nazi Germany.",
    release_year: 1969,
    director: "Marcel Ophüls",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/e2U7S6kmiwsvq0vgiuKSYWOBFKM.jpg",
    genres: ["Documentary", "History"],
  },
  {
    title: "The Big Lebowski",
    description:
      "Jeffrey 'The Dude' Lebowski, a Los Angeles slacker who only wants to bowl and drink White Russians, is mistaken for another Jeffrey Lebowski, a wheelchair-bound millionaire, and finds himself dragged into a strange series of events involving nihilists, adult film producers, ferrets, errant toes, and large sums of money.",
    release_year: 1998,
    director: "Joel Coen",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/9mprbw31MGdd66LR0AQKoDMoFRv.jpg",
    genres: ["Comedy", "Crime"],
  },
  {
    title: "Oppenheimer",
    description:
      "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    release_year: 2023,
    director: "Christopher Nolan",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    genres: ["Drama", "History"],
  },
  {
    title: "Millennium Actress",
    description:
      "Documentary filmmaker Genya Tachibana has tracked down the legendary actress Chiyoko Fujiwara, who mysteriously vanished at the height of her career. When he presents her with a key she had lost and thought was gone forever, the filmmaker could not have imagined that it would not only unlock the long-held secrets of Chiyoko’s life... but also his own.",
    release_year: 2002,
    director: "Satoshi Kon",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/p44UXOFBCY5xbpCKEsWpi4filCD.jpg",
    genres: ["Animation", "Drama", "Romance", "Comedy", "Fantasy"],
  },
  {
    title: "28 Days Later",
    description:
      "Twenty-eight days after a killer virus was accidentally unleashed from a British research facility, a small group of London survivors are caught in a desperate struggle to protect themselves from the infected. Carried by animals and humans, the virus turns those it infects into homicidal maniacs -- and it's absolutely impossible to contain.",
    release_year: 2002,
    director: "Danny Boyle",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/sQckQRt17VaWbo39GIu0TMOiszq.jpg",
    genres: ["Horror", "Thriller", "Science Fiction"],
  },
  {
    title: "Dunkirk",
    description:
      "The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.",
    release_year: 2017,
    director: "Christopher Nolan",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/b4Oe15CGLL61Ped0RAS9JpqdmCt.jpg",
    genres: ["Drama", "War", "Action"],
  },
  {
    title: "Room",
    description:
      "Held captive for 7 years in an enclosed space, a woman and her young son finally gain their freedom, allowing the boy to experience the outside world for the first time.",
    release_year: 2015,
    director: "Lenny Abrahamson",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/2hHDMeYyZjbGWn0BeNH1cTMxuM7.jpg",
    genres: ["Drama", "Thriller"],
  },
  {
    title: "Carol",
    description:
      "In 1950s New York, a department-store clerk who dreams of a better life falls for an older, married woman.",
    release_year: 2015,
    director: "Todd Haynes",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/cJeled7EyPdur6TnCA5GYg0UVna.jpg",
    genres: ["Romance", "Drama"],
  },
  {
    title: "The Batman",
    description:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    release_year: 2022,
    director: "Matt Reeves",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    genres: ["Crime", "Mystery", "Thriller"],
  },
  {
    title: "Mad Max: Fury Road",
    description:
      "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    release_year: 2015,
    director: "George Miller",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    title: "Dune",
    description:
      "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    release_year: 2021,
    director: "Denis Villeneuve",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "Dune: Part Two",
    description:
      "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    release_year: 2024,
    director: "Denis Villeneuve",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "There Will Be Blood",
    description:
      "Ruthless silver miner, turned oil prospector, Daniel Plainview, moves to oil-rich California. Using his son to project a trustworthy, family-man image, Plainview cons local landowners into selling him their valuable properties for a pittance. However, local preacher Eli Sunday suspects Plainview's motives and intentions, starting a slow-burning feud that threatens both their lives.",
    release_year: 2007,
    director: "Paul Thomas Anderson",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
    genres: ["Drama"],
  },
  {
    title: "KPop Demon Hunters",
    description:
      "When K-pop superstars Rumi, Mira and Zoey aren't selling out stadiums, they're using their secret powers to protect their fans from supernatural threats.",
    release_year: 2025,
    director: "Chris Appelhans",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/AjlRXTpRLAIiuofNqKcqrpUfPCZ.jpg",
    genres: ["Fantasy", "Music", "Comedy", "Animation"],
  },
  {
    title: "Challengers",
    description:
      'Tennis player turned coach Tashi has taken her husband, Art, and transformed him into a world-famous Major champion. To jolt him out of his recent losing streak, she signs him up for a "Challenger" event — close to the lowest level of pro tournament — where he finds himself standing across the net from his former best friend and Tashi\'s former boyfriend.',
    release_year: 2024,
    director: "Luca Guadagnino",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url: "https://image.tmdb.org/t/p/w500/H6vke7zGiuLsz4v4RPeReb9rsv.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "The Florida Project",
    description:
      "The story of a precocious six year-old and her ragtag group of friends whose summer break is filled with childhood wonder, possibility and a sense of adventure while the adults around them struggle with hard times.",
    release_year: 2017,
    director: "Sean Baker",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/bnSTP1PY2fDyat0eUa4QouuGV7F.jpg",
    genres: ["Drama"],
  },
  {
    title: "When Harry Met Sally...",
    description:
      "Sex always gets in the way of friendships between men and women. At least, that's what Harry Burns believes. So when Harry meets Sally Albright and a deep friendship blossoms between them, Harry's determined not to let his attraction to Sally destroy it. But when a night of weakness ends in a morning of panic, can the pair avoid succumbing to Harry's fears by remaining friends and admitting they just might be the perfect match for each other?",
    release_year: 1989,
    director: "Rob Reiner",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/rFOiFUhTMtDetqCGClC9PIgnC1P.jpg",
    genres: ["Comedy", "Romance", "Drama"],
  },
  {
    title: "Jurassic World Rebirth",
    description:
      "Five years after the events of Jurassic World Dominion, covert operations expert Zora Bennett is contracted to lead a skilled team on a top-secret mission to secure genetic material from the world's three most massive dinosaurs. When Zora's operation intersects with a civilian family whose boating expedition was capsized, they all find themselves stranded on an island where they come face-to-face with a sinister, shocking discovery that's been hidden from the world for decades.",
    release_year: 2025,
    director: "Gareth Edwards",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/1RICxzeoNCAO5NpcRMIgg1XT6fm.jpg",
    genres: ["Science Fiction", "Adventure", "Action"],
  },
  {
    title: "Arrival",
    description:
      "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
    release_year: 2016,
    director: "Denis Villeneuve",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
    genres: ["Drama", "Science Fiction", "Mystery"],
  },
  {
    title: "American Murder: The Family Next Door",
    description:
      "Using raw, firsthand footage, this documentary examines the disappearance of Shanann Watts and her children, and the terrible events that followed.",
    release_year: 2020,
    director: "Jenny Popplewell",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/jjs3hE3mQlVGTX3u5ZH2EJBJpf3.jpg",
    genres: ["Documentary"],
  },
  {
    title: "Man of Steel",
    description:
      "A young boy learns that he has extraordinary powers and is not of this earth. As a young man, he journeys to discover where he came from and what he was sent here to do. But the hero in him must emerge if he is to save the world from annihilation and become the symbol of hope for all mankind.",
    release_year: 2013,
    director: "Zack Snyder",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/8GFtkImmK0K1VaUChR0n9O61CFU.jpg",
    genres: ["Action", "Adventure", "Science Fiction"],
  },
  {
    title: "Superman",
    description:
      "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
    release_year: 2025,
    director: "James Gunn",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/wPLysNDLffQLOVebZQCbXJEv6E6.jpg",
    genres: ["Science Fiction", "Adventure", "Action"],
  },
  {
    title: "X",
    description:
      "In 1979, a group of young filmmakers set out to make an adult film in rural Texas, but when their reclusive, elderly hosts catch them in the act, the cast find themselves fighting for their lives.",
    release_year: 2022,
    director: "Ti West",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/lopZSVtXzhFY603E9OqF7O1YKsh.jpg",
    genres: ["Horror", "Thriller"],
  },
  {
    title: "Pearl",
    description:
      "Trapped on her family’s isolated farm, Pearl must tend to her ailing father under the bitter and overbearing watch of her devout mother. Lusting for a glamorous life like she’s seen in the movies, Pearl’s ambitions, temptations, and repressions collide.",
    release_year: 2022,
    director: "Ti West",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/z5uIG81pXyHKg7cUFIu84Wjn4NS.jpg",
    genres: ["Horror", "Thriller"],
  },
  {
    title: "Godzilla Minus One",
    description:
      "In postwar Japan, Godzilla brings new devastation to an already scorched landscape. With no military intervention or government help in sight, the survivors must join together in the face of despair and fight back against an unrelenting horror.",
    release_year: 2023,
    director: "Takashi Yamazaki",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/2E2WTX0TJEflAged6kzErwqX1kt.jpg",
    genres: ["Science Fiction", "Horror", "Action"],
  },
  {
    title: "Vive L'Amour",
    description:
      "Three lonely young denizens of Taipei unknowingly share an apartment: May, a real estate agent who uses it for her sexual affairs; Ah-jung, her current lover; and Hsiao-kang, who's stolen the key and uses the apartment as a retreat.",
    release_year: 1994,
    director: "Tsai Ming-liang",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/uiVAPBx9D2Gb9ZGejvxMhRboaYz.jpg",
    genres: ["Drama"],
  },
  {
    title: "Decision to Leave",
    description:
      "From a mountain peak in South Korea, a man plummets to his death. Did he jump, or was he pushed? When detective Hae-joon arrives on the scene, he begins to suspect the dead man’s wife Seo-rae. But as he digs deeper into the investigation, he finds himself trapped in a web of deception and desire.",
    release_year: 2022,
    director: "Park Chan-wook",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url: "https://image.tmdb.org/t/p/w500/TDaXKGBqJUSbCQ9XjkrJs8GYuU.jpg",
    genres: ["Thriller", "Mystery", "Romance"],
  },
  {
    title: "The Fantastic Four: First Steps",
    description:
      "Against the vibrant backdrop of a 1960s-inspired, retro-futuristic world, Marvel’s First Family is forced to balance their roles as heroes with the strength of their family bond, while defending Earth from a ravenous space god called Galactus and his enigmatic Herald, Silver Surfer.",
    release_year: 2025,
    director: "Matt Shakman",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/cm8TNGBGG0aBfWj0LgrESHv8tir.jpg",
    genres: ["Science Fiction", "Adventure"],
  },
  {
    title: "The Life of Chuck",
    description:
      "In this extraordinary story of an ordinary man, Charles 'Chuck' Krantz experiences the wonder of love, the heartbreak of loss, and the multitudes contained in all of us.",
    release_year: 2025,
    director: "Mike Flanagan",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/oumprkO9bThExP8NwxBIBnvBu2v.jpg",
    genres: ["Fantasy", "Drama"],
  },
  {
    title: "How to Make Millions Before Grandma Dies",
    description:
      "M, a university dropout low on money and luck, volunteers to take care of his terminally ill grandmother, in the hope of pocketing an inheritance.",
    release_year: 2024,
    director: "Pat Boonnitipat",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/9Xa0Grd2jq2lM2gqcoTB4F9TjMd.jpg",
    genres: ["Drama"],
  },
  {
    title: "No Other Land",
    description:
      "This film made by a Palestinian-Israeli collective shows the destruction of the occupied West Bank's Masafer Yatta by Israeli soldiers and the alliance which develops between the Palestinian activist Basel and Israeli journalist Yuval.",
    release_year: 2024,
    director: "Rachel Szor",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/s7XYieuZg9kMe07i9VI4bfGN4Pw.jpg",
    genres: ["Documentary"],
  },
  {
    title: "Dog Day Afternoon",
    description:
      "Based on the true story of would-be Brooklyn bank robbers John Wojtowicz and Salvatore Naturile. Sonny and Sal attempt a bank heist which quickly turns sour and escalates into a hostage situation and stand-off with the police. As Sonny's motives for the robbery are slowly revealed and things become more complicated, the heist turns into a media circus.",
    release_year: 1975,
    director: "Sidney Lumet",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/mavrhr0ig2aCRR8d48yaxtD5aMQ.jpg",
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    title: "Get Out",
    description:
      "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
    release_year: 2017,
    director: "Jordan Peele",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    genres: ["Mystery", "Thriller", "Horror"],
  },
  {
    title: "Sorry, Baby",
    description:
      "Agnes feels stuck. Unlike her best friend, Lydie, who’s moved to New York and is now expecting a baby, Agnes still lives in the New England house they once shared as graduate students, now working as a professor at her alma mater. A ‘bad thing’ happened to Agnes a few years ago and, since then, despite her best efforts, life hasn’t gotten back on track.",
    release_year: 2025,
    director: "Eva Victor",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/iq1QtN1H8AVEBfl1SgNAqhMgTbQ.jpg",
    genres: ["Drama", "Comedy"],
  },
  {
    title: "Red Rooms",
    description:
      "The high-profile case of serial killer Ludovic Chevalier has just gone to trial, and Kelly-Anne is obsessed. When reality blurs with her morbid fantasies, she goes down a dark path to seek the final piece of the case’s puzzle.",
    release_year: 2023,
    director: "Pascal Plante",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/uBJvbf0g9rcsYElcwZCMYU0Vrj8.jpg",
    genres: ["Thriller", "Crime"],
  },
  {
    title: "Breathless",
    description:
      "A small-time thief steals a car and impulsively murders a motorcycle policeman. Wanted by the authorities, he attempts to persuade a girl to run away to Italy with him.",
    release_year: 1960,
    director: "Jean-Luc Godard",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/9Wx0Wdn2EOqeCZU4SP6tlS3LOml.jpg",
    genres: ["Crime", "Drama"],
  },
  {
    title: "Dinner in America",
    description:
      "An on-the-lam punk rocker and a young woman obsessed with a local band go on an unexpected and epic journey together through the decaying suburbs of the American Midwest.",
    release_year: 2020,
    director: "Adam Rehmeier",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/kbZSktEZOvn4Rc2l234PHbAVTkQ.jpg",
    genres: ["Romance", "Comedy", "Music"],
  },
  {
    title: "Joyland",
    description:
      "As a patriarchal family yearns for the birth of a son to continue their family line, their youngest son secretly joins an erotic dance theatre and falls for its transgender starlet.",
    release_year: 2022,
    director: "Saim Sadiq",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/ekWbRm3JXXzstpgtgebMV4nrjUz.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "House of Pleasures",
    description:
      "The dawn of the 20th century: L’Apollonide, a luxurious and traditional brothel in Paris, is living its last days. In this closed world, where some men fall in love and others become viciously harmful, the women share their secrets, their fears, their joys and their pains.",
    release_year: 2011,
    director: "Bertrand Bonello",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/adkiqkEOKW8nMlfF8hVcaPWTAwB.jpg",
    genres: ["Drama"],
  },
  {
    title: "One Million Yen Girl",
    description:
      "A 21-year-old girl is released from prison, only to deal with the neighborhood gossip about her and family conflicts. She decides to save one million yen, move to where no one knows her and keep repeating the process.",
    release_year: 2008,
    director: "Yuki Tanada",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/qtsVcg3iLYNWmTRgt0FKEcPpsjz.jpg",
    genres: ["Drama"],
  },
  {
    title: "Pierrot le Fou",
    description:
      "Pierrot escapes his boring society and travels from Paris to the Mediterranean Sea with Marianne, a girl chased by hit-men from Algeria. They lead an unorthodox life, always on the run.",
    release_year: 1965,
    director: "Jean-Luc Godard",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/i124H6iQB4CawrgFW9aZaZs7OBO.jpg",
    genres: ["Drama", "Romance", "Crime"],
  },
  {
    title: "All the Long Nights",
    description:
      "Two work colleagues: he suffers from panic attacks, she has extreme PMS. Their company distributes toy planetariums. What may not sound like Ozu Yasujirō is actually precisely that: people are attentive and do each other good, without even realising.",
    release_year: 2024,
    director: "Shô Miyake",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/cihErynZk0v0A0xKlMMg6tb9zfJ.jpg",
    genres: ["Drama"],
  },
  {
    title: "The Green Ray",
    description:
      "A lonely Parisian woman comes to terms with her isolation and anxieties during a long summer vacation.",
    release_year: 1986,
    director: "Éric Rohmer",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/1E3pliSC7lXWw6zJhMvG6ba0UNX.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "Pirates of the Caribbean: The Curse of the Black Pearl",
    description:
      "After Port Royal is attacked and pillaged by a mysterious pirate crew, capturing the governor's daughter Elizabeth Swann in the process, William Turner asks free-willing pirate Jack Sparrow to help him locate the crew's ship—The Black Pearl—so that he can rescue the woman he loves.",
    release_year: 2003,
    director: "Gore Verbinski",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/z8onk7LV9Mmw6zKz4hT6pzzvmvl.jpg",
    genres: ["Adventure", "Fantasy", "Action"],
  },
  {
    title: "Fish Tank",
    description:
      "Fifteen-year-old Mia is in a constant state of war with her family and the world around her. When she meets her party-girl mother’s charming new boyfriend Connor, she is amazed to find he returns her attention, and believes he might help her start to make sense of her life.",
    release_year: 2009,
    director: "Andrea Arnold",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/rI3MKBDsWzQHi9PWDAMKkgmYcff.jpg",
    genres: ["Drama"],
  },
  {
    title: "Mars Express",
    description:
      "In 2200, private detective Aline Ruby and her android partner Carlos Rivera are hired by a wealthy businessman to track down a notorious hacker. On Mars, they descend deep into the underbelly of the planet's capital city where they uncover a darker story of brain farms, corruption, and a missing girl who holds a secret about the robots that threatens to change the face of the universe.",
    release_year: 2023,
    director: "Jérémie Périn",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/g8rUn0khoYB3G4gPPGTF1Xv9Olu.jpg",
    genres: ["Animation", "Science Fiction", "Action", "Mystery"],
  },
  {
    title: "Little Girl",
    description:
      "7-year-old Sasha has always known that she is a girl. Sasha’s family has recently accepted her gender identity, embracing their daughter for who she truly is while working to confront outdated norms and find affirmation in a small community of rural France.",
    release_year: 2025,
    director: "Sébastien Lifshitz",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/kciAX2iBP09RfZ9d2ldLjgHiL2u.jpg",
    genres: ["Documentary"],
  },
  {
    title: "Climax",
    description:
      "When a dance troupe is lured to an empty school, a bowl of drug-laced sangria causes their jubilant rehearsal to descend into a dark and explosive nightmare as they try to survive the night—and find who’s responsible—before it’s too late.",
    release_year: 2018,
    director: "Gaspar Noé",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/cV6M5nJFdxYC2hyLiMdjrxYpB4F.jpg",
    genres: ["Horror", "Drama"],
  },
  {
    title: "Sinners",
    description:
      "Trying to leave their troubled lives behind, twin brothers return to their hometown to start again, only to discover that an even greater evil is waiting to welcome them back.",
    release_year: 2025,
    director: "Ryan Coogler",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/4CkZl1LK6a5rXBqJB2ZP77h3N5i.jpg",
    genres: ["Horror", "Action", "Thriller"],
  },
  {
    title: "Into the Abyss",
    description:
      "We do not know when and how we will die. Death Row inmates do. Werner Herzog embarks on a dialogue with Death Row inmates, asks questions about life and death and looks deep into these individuals, their stories, their crimes.",
    release_year: 2011,
    director: "Werner Herzog",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/2ogmMOC3B7A9vSUseh3f5O4CGA9.jpg",
    genres: ["Documentary", "Crime"],
  },
  {
    title: "All We Imagine as Light",
    description:
      "In Mumbai, Nurse Prabha's routine is troubled when she receives an unexpected gift from her estranged husband. Her younger roommate, Anu, tries in vain to find a spot in the city to be intimate with her boyfriend. A trip to a beach town allows them to find a space for their desires to manifest.",
    release_year: 2024,
    director: "Payal Kapadia",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/ruImrzB4POsrgwCMozmOBV67zs5.jpg",
    genres: ["Drama", "Romance"],
  },
  {
    title: "The Battle of Algiers",
    description:
      "Paratrooper commander Colonel Mathieu, a former French Resistance fighter during World War II, is sent to Algeria to reinforce efforts to squelch the uprisings of the Algerian War. There he faces Ali la Pointe, a former petty criminal who, as the leader of the Algerian Front de Liberation Nationale, directs terror strategies against the colonial French government occupation. As each side resorts to ever-increasing brutality, no violent act is too unthinkable.",
    release_year: 1966,
    director: "Gillo Pontecorvo",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/2p3AFtOHFvP6OeVMqlnL1zLKOqL.jpg",
    genres: ["Drama", "War", "History"],
  },
  {
    title: "Fear City: A Family-Style Comedy",
    description:
      "A second-class horror movie has to be shown at Cannes Film Festival, but, before each screening, the projectionist is killed by a mysterious fellow, with hammer and sickle, just as it happens in the film to be shown.",
    release_year: 1994,
    director: "Alain Berbérian",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/xaTVWUrPbGM4SgrLOaaWLeUEafI.jpg",
    genres: ["Comedy"],
  },
  {
    title: "Persepolis",
    description:
      "In 1970s Iran, Marjane 'Marji' Satrapi watches events through her young eyes and her idealistic family of a long dream being fulfilled of the hated Shah's defeat in the Iranian Revolution of 1979. However as Marji grows up, she witnesses first hand how the new Iran, now ruled by Islamic fundamentalists, has become a repressive tyranny on its own.",
    release_year: 2007,
    director: "Marjane Satrapi",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/aU8i2QAdTyRR1nYb36Gq51xXP8p.jpg",
    genres: ["Animation", "Drama"],
  },
  {
    title: "Polytechnique",
    description:
      "A dramatization of the Montreal Massacre of 1989 where several female engineering students were murdered by an unstable misogynist.",
    release_year: 2009,
    director: "Denis Villeneuve",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/k0xmtct9cSseksuFKMSXxM8hfni.jpg",
    genres: ["Crime", "Drama", "Thriller"],
  },
  {
    title: "Manchester by the Sea",
    description:
      "After his older brother passes away, Lee Chandler is forced to return home to care for his 16-year-old nephew. There he is compelled to deal with a tragic past that separated him from his family and the community where he was born and raised.",
    release_year: 2016,
    director: "Kenneth Lonergan",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/o9VXYOuaJxCEKOxbA86xqtwmqYn.jpg",
    genres: ["Drama"],
  },
  {
    title: "The Father",
    description:
      "A man refuses all assistance from his daughter as he ages and, as he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality.",
    release_year: 2020,
    director: "Florian Zeller",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/w500/uxWXW1YYQENSv7OzHB4Hds0bK3b.jpg",
    genres: ["Drama"],
  },
  {
    title: "Four Daughters",
    description:
      "Between light and darkness stands Olfa, a Tunisian woman and the mother of four daughters. One day, her two older daughters disappear. To fill in their absence, the filmmaker Kaouther Ben Hania invites professional actresses and invents a unique cinema experience that will lift the veil on Olfa and her daughters’ life stories. An intimate journey of hope, rebellion, violence, transmission and sisterhood that will question the very foundations of our societies.",
    release_year: 2023,
    director: "Kaouther Ben Hania",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/iSpJ6fg1OOSO30IUkZskZDufVzN.jpg",
    genres: ["Drama", "Documentary"],
  },
  {
    title: "Love Letter",
    description:
      "Hiroko attends the memorial service of her fiancé, Itsuki Fujii, who died in a mountain-climbing incident. Although Itsuki’s mother says that their old house is gone, Hiroko records the address listed under his name in his yearbook and sends him a letter. Surprisingly, she receives a reply, and discovers it came from his old classmate, a girl who also happens to be called Itsuki Fujii.",
    release_year: 1995,
    director: "Shunji Iwai",
    price: getRandomPrice(),
    stock: getRandomStock(),
    cover_url:
      "https://image.tmdb.org/t/p/original/e5lkke4fKEZNfl28gCOe6MrAjhA.jpg",
    genres: ["Romance", "Drama"],
  },
];

module.exports = { films };
