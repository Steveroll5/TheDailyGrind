
export type Article = {
  id: string;
  title: string;
  summary: string;
  content: string;
  image1Id: string;
  image2Id: string;
};

export const articles: Article[] = [
  {
    id: 'anniversary-of-silence',
    title: 'The Anniversary of Silence: 5 Years Since Krovus Fell',
    summary: 'FIVE YEARS OF SILENCE Today marks the 5th anniversary of the catastrophic shutdown of Krovus Industries. While official reports cite "unexpected heavy oxidation," survivors from Sector 4 tell a different story involving missing staff and strange mechanical noises.',
    content: `FIVE YEARS OF RUST: THE SILENCE OF SECTOR 4\n\nToday marks the fifth anniversary of the Krovus Industries shutdown. Management still cites 'unexpected oxidation' as the official cause, but survivors tell a different story. They speak of the Decibots—mechanical pests that mimic the sound of industry until it's too late.\n\nWe remember the first soul lost: Bob Dwyer (#WIRE-808). A Perimeter Specialist who vanished near the North Gate while screaming about 'metal bugs.' He was the first of 67 confirmed casualties. To this day, the Fence Gate remains locked, and the clicking sounds from within have only gotten louder.`,
    image1Id: 'article-img-1',
    image2Id: 'article-img-2',
  },
  {
    id: 'arkeme-tech-launch',
    title: 'Arkeme Tech Launch',
    summary: 'WALKING THROUGH WALLS? Tech mogul Udel Ifer unveils "ARKEME," a startup dedicated to commercializing Phasewalking. Investors are skeptical, citing high mortality rates and the inconvenience of getting stuck inside drywall.',
    content: `ARKEME: THE FUTURE OF TRESPASSING\n\nEccentric visionary Udel Ifer has officially launched "ARKEME," a company promising to bring military-grade Phasewalking tech to the consumer market. "Doors are a suggestion, not a rule," Ifer claimed at the press conference, while his hand notably flickered in and out of existence.\n\nRegulators are already drafting bans, citing the "Molecular Displacement Act of 1892." Early beta testers have reported side effects including nausea, loss of eyebrows, and permanently fusing their left foot with their shoes. Arkeme shares are up 12%.`,
    image1Id: 'article-img-3',
    image2Id: 'article-img-4',
  },
  {
    id: 'cold-fries-scandal',
    title: 'The "Cold Fries" Scandal',
    summary: "CULINARY DISASTER AT KRIX'S Patrons of Krix's Famous Grease-Spoon are revolting after receiving their orders at absolute zero temperatures. The chef blames the heaters, but the regulars are calling it the 'Cold Fries Conspiracy.'",
    content: `THE COLD FRIES CONSPIRACY\n\nA riot nearly broke out at Krix's Diner this morning when the lunch rush was served their signature Gear-Oil Fries frozen solid. "I bit into a potato and shattered a molar," said one irate steam-fitter.\n\nChef Krix claims the industrial warmers were hacked, but conspiracy theorists believe this is a coded message from the underground. Why serve COLD FRIES now? Is it a warning? Or just another failure of the municipal steam grid? Management advises customers to bring their own blowtorches until further notice.`,
    image1Id: 'article-img-5',
    image2Id: 'article-img-6',
  },
  {
    id: 'kplr-product-launch',
    title: "Kings Row Power & Light Product Launch",
    summary: "KINGS ROW POWER & LIGHT UNVEILS NEXT GEN 'RE-BOTS' Is your workspace currently on fire? Kings Row Power & Light announces the 'Series-T' line—expendable units designed to fix what biological workers can't survive.",
    content: `THE RE-BOT REVOLUTION IS HERE\n\nKings Row Power & Light (KRPL) has finally unveiled their solution to the rising workplace mortality rate: The Model-T Hazard Unit. These compact, heat-resistant automata are designed for "High-Temperature Asset Recovery."\n\n"They don't unionize, they don't take lunch breaks, and they are adorable," says a KRPL spokesperson. Critics argue that automating dangerous jobs takes the 'romance' out of industrial suffering, but KRPL insists that safety is profitable. The first batch of units is being deployed to 'unnamed abandoned sectors' for field testing next week.`,
    image1Id: 'article-img-7',
    image2Id: 'article-img-8',
  },
  {
    id: 'stymcafe-incident',
    title: 'Stymcafe Incident',
    summary: 'BARISTA CHARGES FOR BOLT A customer at Sector 7 Stymcafe found a melted 9mm bolt in their mocha. The barista refused a refund, labeling it an "Exotic Iron Supplement" and upcharging the patron.',
    content: `HEAVY METAL FLAVOR AT STYMCAFE\n\nThe morning coffee run turned crunchy for one local welder at the Sector 7 Stymcafe. After choking on a jagged, half-melted 9mm fastening bolt hidden in the foam of a Morning Mocha, the customer demanded to speak to the manager.\n\nInstead of an apology, the head barista updated the bill to include a 3-credit surcharge for "Mineral Enrichment." "Iron is good for the blood," the barista stated. "You should be thanking us for the texture." The customer paid the fine to avoid delaying the line.`,
    image1Id: 'article-img-9',
    image2Id: 'article-img-10',
  },
  {
    id: 'university-shutdown',
    title: 'University Of Salis Inatic Obera Newors Shutdown',
    summary: 'UNIVERSITY OF SALIS INATIC OBERA NEWORS CLOSES GATES The University of Salis Inatic Obera Newors declares its traditional methods "heavily irrelevant" to modern needs. Student intake has halted immediately, with plans to convert the campus into a dirigible parking lot.',
    content: `ACADEMIC COLLAPSE: UNIVERSITY SHUTDOWN\n\nDean Amun of the University of Salis Inatic Obera Newors announced today that the institution will cease all operations. "The pedagogical approach of the University of Salis Inatic Obera Newors is unfortunately incompatible with current industrial reality," Amun admitted via telegraph.\n\nThe Board of Directors determined that the traditional curriculum is no longer producing viable workforce candidates. The University of Salis Inatic Obera Newors will stop student intake immediately. Existing students have been advised to "figure it out" or transfer to a vocational center. The historic library will be demolished to make room for a luxury airship docking station.`,
    image1Id: 'article-img-11',
    image2Id: 'article-img-12',
  },
  {
    id: 'dehydrated-water-firing',
    title: 'Dehydrated Water Firing',
    summary: 'FIRED FOR PHYSICS VIOLATION An office worker was terminated for filling the toilet cisterns with "Krovus Dehydrated Water™." The resulting dust explosion coated the fourth floor in instant-mud.',
    content: `TERMINATED FOR GROSS MISUSE OF PHYSICS\n\nAn unnamed junior clerk was escorted out of the Bureau of Bureaucracy yesterday after attempting a "budget hack." The employee reportedly replaced the building's flushing water supply with Krovus Brand Dehydrated Water™ to save on utility bills.\n\n"He didn't read the manual," said the HR director. "You have to add water to rehydrate the water. He just dumped the powder in the tank." When the auto-flush triggered, the powder reacted with the ambient humidity, causing a rapid expansion event that buried the executive washroom in 400 gallons of instant mud. The employee is currently seeking legal counsel.`,
    image1Id: 'article-img-13',
    image2Id: 'article-img-14',
  },
];
