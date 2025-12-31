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
    id: 'sector-4-reopening',
    title: 'RUMORED RE-OPENING OF SECTOR 4',
    summary: "Dr. Arkeville's simulation is decades away from completion, yet whispers persist. Sector 4, sealed since the great noise contamination, might be stirring.",
    content: `Dr. Arkeville's simulation is decades away from completion, yet whispers persist among the cog-turners and steam-fitters. Sector 4, sealed since the great noise contamination, might be stirring. Officials remain tight-lipped, their silence only fueling the rampant speculation. What secrets, or horrors, has the rust claimed in its long slumber?

Senior Manager insists the sector remains a vital component of the Apex Signal Initiative, though its purpose has been 're-calibrated'. Sources within the lower-depths maintenance crews speak of strange energy readings and vibrations that don't match any known machinery schematics. "It's like the walls themselves are breathing," one anonymous pipe-fitter was heard saying before being transferred to a 're-education' facility.`,
    image1Id: 'sector-4',
    image2Id: 'sector-4-2',
  },
  {
    id: 'new-dawn-lower-depths',
    title: 'A NEW DAWN IN THE LOWER DEPTHS',
    summary: 'The Apex Signal Initiative promises a brighter future, powered by the tireless hum of the great engine. "Productivity is paramount," declared Senior Manager.',
    content: `The Apex Signal Initiative promises a brighter future, powered by the tireless hum of the great engine. "Productivity is paramount," declared Senior Manager, his voice echoing through the brass pipes. "Every gear turned is a step towards universal prosperity." The initiative has seen a 200% increase in quota fulfillment, though reports of worker exhaustion are summarily dismissed as "defeatist propaganda".

New nutrient paste dispensers have been installed in all work-stations, reportedly increasing cognitive function and reducing the need for sleep. Critics, who have since been reassigned to boiler room maintenance, claim the paste has a strange, metallic aftertaste and causes mild hallucinations. Management assures us this is just the taste of progress.`,
    image1Id: 'arkeville',
    image2Id: 'arkeville-2',
  },
  {
    id: 'vending-machine-mystery',
    title: 'VENDING MACHINE B-7: CULINARY CURIOSITY OR CORPORATE CONSPIRACY?',
    summary: 'The machine, known for dispensing items not listed on its display, has become a focal point of breakroom conversation.',
    content: `Vending machine B-7, located in the third-level sub-basement, has long been an anomaly. While its faded panel promises standard-issue nutrient bars and rehydrated coffee, its output is anything but. Recent "purchases" have included a single, perfectly preserved cog from a pre-industrial-era clock, a key that fits no known lock, and a can simply labeled 'Noise'.

Krovus Industries has issued a statement claiming the machine is part of a 'morale-boosting lottery program'. However, employees who have consumed the contents of the 'Noise' can have reported hearing whispers in the static of the overhead speakers, speaking of a 'cold' and 'metallic' entity that hungers. They are now on extended medical leave.`,
    image1Id: 'vending-1',
    image2Id: 'vending-2',
  },
  {
    id: 'the-rust-grows',
    title: 'THE EVER-GROWING RUST: IS IT AFFECTING WORKER PSYCHE?',
    summary: 'The ubiquitous copper-colored corrosion seems to be spreading faster than maintenance crews can scrub it away.',
    content: `It's a fact of life in the lower depths: the rust is everywhere. On pipes, on walls, on the forgotten lunchboxes of transferred workers. But recently, the rate of its spread has increased exponentially. Maintenance crews report scrubbing a bulkhead clean, only to return hours later to find it completely coated in a thick, velvety layer of oxidation.

More disturbing are the psychological reports. An increasing number of workers are reporting pareidolia - seeing faces and patterns in the rust. Dr. Alistair Finch, head of on-site psychological services, attributes this to 'high-stress environmental fatigue'. Yet, some workers swear the patterns are too consistent, too intricate to be random. They speak of seeing circuitry, maps, and even distorted human faces in the endless corrosion.`,
    image1Id: 'rust-1',
    image2Id: 'rust-2',
  },
  {
    id: 'project-decibel',
    title: 'WHAT IS "PROJECT DECIBEL"?',
    summary: 'A leaked memo hints at a new sonic-based initiative, causing concern among the workforce.',
    content: `A partially-redacted memo, found wedged in a pneumatic tube, has sent shockwaves through the employee rumor mill. Titled "Project: DECIBEL", the document speaks of "auditory suppression fields" and "memetic resonance frequencies". The stated goal is to 'eliminate distracting background noise' to improve focus and productivity.

However, the few un-redacted technical specifications mention frequencies that are technically inaudible, yet capable of influencing mood and perception. Could this be the source of the 'Noise' from Vending Machine B-7? Senior Management has refused to comment, and the employee who found the memo, Bob Dwyer, has been reported as MIA.`,
    image1Id: 'decibel-1',
    image2Id: 'decibel-2',
  },
  {
    id: 'synthetic-sunlight',
    title: 'NEW "SUNLIGHT" LAMPS PROMISE END TO VITAMIN D DEFICIENCY',
    summary: 'Krovus Industries has begun rolling out new full-spectrum lighting throughout the residential blocks.',
    content: `In a move praised by the on-site medical staff, Krovus Industries is replacing the dim, flickering incandescent bulbs with state-of-the-art "Helios" lamps. These new lights are designed to mimic natural sunlight, providing the full spectrum of light necessary for Vitamin D synthesis and improved circadian rhythms.

Initial feedback is positive. Workers report feeling more energetic and focused. However, a few have noted an odd side-effect: after prolonged exposure, reflective surfaces seem to shimmer with a faint, rainbow-like aura. Engineering department head, Dr. Eva Rostova, dismisses this as a harmless "retinal after-image effect," assuring everyone that the Helios lamps are perfectly safe and a sign of the company's commitment to worker well-being.`,
    image1Id: 'sunlight-1',
    image2Id: 'sunlight-2',
  },
  {
    id: 'corporate-psalms',
    title: 'MANDATORY MORNING "PSALMS" INTRODUCED',
    summary: 'A new daily ritual has been introduced to "foster a sense of unity and corporate pride."',
    content: `Starting this week, all employees are required to attend a five-minute morning assembly to recite the "Psalms of Productivity." These short, repetitive verses praise the virtues of labor, efficiency, and loyalty to Krovus Industries. An example verse: "The gear turns, the piston fires, our purpose forged in industrial fires."

Management hails the program as a team-building exercise. "A unified voice leads to a unified workforce," said the Senior Manager in a broadcast. While many employees find the ritual odd, they admit the rhythmic chanting is strangely calming. A small number have reported that the words seem to linger in their minds long after the assembly, repeating themselves at odd hours.`,
    image1Id: 'psalm-1',
    image2Id: 'psalm-2',
  },
];
