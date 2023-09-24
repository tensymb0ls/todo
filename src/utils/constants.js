// * photo import
import friend1 from '../img/0.jpg'
import friend2 from '../img/1.jpg'
import friend3 from '../img/3.jpg'
import friend4 from '../img/4.jpg'
import friend5 from '../img/5.jpg'
import friend6 from '../img/6.jpg'
import friend7 from '../img/7.jpg'
import friend8 from '../img/8.jpg'
import friend9 from '../img/9.jpg'
// * store images import
import store1 from '../img/store/1.png'
import store2 from '../img/store/2.png'
import store3 from '../img/store/3.png'
import store4 from '../img/store/4.png'
import store5 from '../img/store/5.png'
import store6 from '../img/store/6.png'
import store7 from '../img/store/7.png'
import store8 from '../img/store/8.png'
import store9 from '../img/store/9.png'
// * navigation items
export const items = [
    { text: 'Home', id: '/' },
    { text: 'Characters', id: '/characters' },
    { text: 'LOR', id: '/lor' },
    { text: 'Store', id: '/store' }
];
// * images array
export const friends = [
    friend1, friend2, friend3, friend4, friend5, friend6, friend7, friend8, friend9,
];
// * characters array
export const characters = [
    { name: 'Nebula', link: friend1, desc: `Nebula is a Luphomoid assassin and the adopted daughter of the intergalactic warlord Thanos. She is also Gamora's half-sister. When she served as Ronan the Accuser's "right-hand man" during Thanos' departure, she obtained the Orb and helped him fight Xandar and the Guardians of the Galaxy. After being singled out with her sister, she left the battlefield.` },
    { name: 'Gamora', link: friend2, desc: `Gamora is a former assassin and member of the Guardians of the Galaxy. She became the adopted daughter of Thanos after he destroyed her entire race. She served him for years before betraying him in an attempt to free herself from his influence. Gamora was hired to steal the Orb and was drawn into the Orb Journey, later becoming friends with other members of the Guardians of the Galaxy. After the Battle of Xandar, she went with them.` },
    { name: 'Quill', link: friend3, desc: `Peter Jason Quill (possibly Quill) is a half-human, half-celestial who was kidnapped by the Ravagers as a child. After being kidnapped, he began to build his reputation as the legendary criminal known as Star-Lord, eventually becoming the founder and leader of the Guardians of the Galaxy. Deciding to leave the Ravagers, he stole the Orb, inadvertently drawing himself into the Orb Journey. During the journey, he forged an uneasy alliance with Gamora, Drax the Destroyer, Rocket the Raccoon, and Groot, and helped stop Ronan the Accuser from destroying Xandar.` },
    { name: 'Rocket', link: friend4, desc: `br 89P13 is a genetically modified animal turned criminal for hire who calls himself Rocket. Along with his friend and partner Groot, Rocket traveled the galaxy hunting for bounty until he met Star-Lord, who persuaded him to help him sell the Orb for a hefty reward. However, when the Orb was revealed to contain one of the Infinity Stones that Ronan the Accuser is looking for, Rocket, against his will, decided to help stop Ronan from destroying Xandar. During the battle, Rocket and his friends managed to stop Ronan, though Groot had to sacrifice himself.` },
    { name: 'Groot', link: friend5, desc: `Groot is a sentient, tree-like creature who is a frequent accomplice of the intergalactic criminal Rocket Raccoon. Together, the pair traveled the galaxy on bounty hunting missions until they met Star-Lord, who convinced them to help him sell the Orb for a huge amount of money. However, when the Orb was revealed to be one of the Infinity Stones that Ronan the Accuser is after, Groot convinced his friends to risk everything to stop Ronan from destroying Xandar. During the battle, Groot sacrificed himself to save his new friends. However, part of his destroyed body was potted by Rocket.` },
    { name: 'Yondu', link: friend8, desc: `Yondu Udonta was a Centauri leader of the key Ravager faction and a father figure to Peter Quill. When Quill betrayed the Ravagers and stole the Orb, Yondu went on the hunt for his former ally. As a result, Udonta grabbed Quill, but he persuaded him to help him in the war with Ronan the Accuser, who was going to use the power of the Sphere to destroy Xandar, as a result, Quill stole the Stone of Infinity from Yondu, despite the promise to give it to` },
    { name: 'Collector', link: friend6, desc: `Taneleer Tivan, also known as the Collector, is the leader of the Tivan Group and custodian of the galaxy's largest collection of interstellar fauna, relics, and specimens, operating from a port on Oblivion. He made a deal with the Asgardians and with the Guardians of the Galaxy, he got the Aether to save, and then almost got the power stone in exchange for units. However, he was attacked by Thanos, who took the Reality Stone from him. After the jump, Tivan sold Oblivion to the Guardians of the Galaxy.` },
    { name: 'Thanos', link: friend9, desc: `Thanos, also known to his most loyal subordinates as the Dark Lord and informally referred to as the Mad Titan by the galactic communities, was a powerful cosmic warlord from Titan, ruling over the far reaches of space and commanding a formidable army known as the Chitauri, as well as the Outriders. His main task was to collect the Infinity Stones in order to exterminate half of the universe in order to save the other, which led him to make deals with Loki and Ronan the Accuser, who opposed Earth and Xandar respectively.` },
    { name: 'Ronan', link: friend7, desc: `Ronan the Accuser was a radical Kree and a former member of the Accusers. In 1995, during the war between the Kree and the Skrulls, Ronan worked with Yon-Rogg and Starforce after the ambush on Peat, dropping warheads on the planet to eliminate the Skrulls. Later, Ronan was about to drop the warheads on Earth to kill the Skrulls, but he was confronted by Captain Marvel, whom he lost and left the Earth alone.` }
]
// * store array
export const store = [
    { link: store1, name: 'MobyFox - I am Groot - Smartwatch strap', price: 39.99, desc: 'Wristwatches multicolour by Guardians Of The Galaxy' },
    { link: store2, name: 'Legends Gear - Electronic Star Lord helmet', price: 199.99, desc: ' Replica by Guardians Of The Galaxy' },
    { link: store3, name: 'Vol. 3 - The Guardians', price: 24.99, desc: ' T-Shirt black by Guardians Of The Galaxy' },
    { link: store4, name: '3 - Rocket', price: 47.99, desc: 'Action Figure multicolour by Guardians Of The Galaxy' },
    { link: store5, name: 'Groot', price: 54.99, desc: 'Medium-length dress mottled grey by Guardians Of The Galaxy' },
    { link: store6, name: 'Guardians of the Galaxy Vol. 3', price: 39.99, desc: 'LP by Guardians Of The Galaxy' },
    { link: store7, name: 'Vol. 3 - Star-Lord vinyl figurine no. 1201', price: 11.99, desc: 'Funko Pop! by Guardians Of The Galaxy' },
    { link: store8, name: 'Vol. 3 - Galactic Heroes', price: 24.99, desc: 'T-Shirt black by Guardians Of The Galaxy' },
    { link: store9, name: 'Groot', price: 59.99, desc: 'Hooded zip multicolour by Guardians Of The Galaxy' }
]
// * text
export const mainText = `
In 1980, Meredith Quill is courted by Ego, a “spaceman” 
who shows her an alien seedling he had planted 
in the woods of Missouri.

Thirty-four years later in 2014, the Guardians of the Galaxy
Peter “Star-Lord” Quill, Gamora, Drax, Rocket Raccoon,
and Baby Groot - are renowned as heroes
after defeating Ronan the Accuser.
They accept a job from High Priestess Ayesha,
leader of the xenophobic, gold-skinned Sovereign,
to defend valuable batteries from an inter-dimensional monster,
the Abilisk, in exchange for Nebula,
whom the Sovereign captured following the Battle of Xandar.

Rocket steals several of the Anulax Batteries for himself,
and when the Sovereign discover this, they attack
the Guardians' ship, the Milano, with their own fleet
of Golden Drones. The Milano is heavily damaged and
forced to crash-land on a nearby planet, but the Sovereign
fleet is single-handedly destroyed by Ego, who reveals himself
 as Quill's father. Ego invites Quill to return to his home,
 accompanied by Gamora and Drax. Rocket and Groot remain
 to repair the Milano and guard Nebula.....`;

// ** mockapi url
export const baseURL = 'https://651040523ce5d181df5d128f.mockapi.io/api/v1';