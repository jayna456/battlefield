const express = require('express');
const cors = require('cors');
const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.static(__dirname + '/images'));

const battleList = [
    {
        linkId: 1,
        heading: "LARGE SCALE BATTLES",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "The best vehicle focused Conqueset large maps.",
        color:"#ff8a00",
        background: "none"
    },
    {
        linkId: 2,
        heading: "THE BATTLEFIELD",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "Battlefield at its best. Conquest Small, Rush, and Obligation, with a good balance between infantry and vehicle gameplay",
        color: "#ff8a00",
        background: "none"
    },
    {
        linkId: 3,
        heading: "CLOSE QUARTERS",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "Smaller scale infantry focused maps and modes",
        color: "#ff8a00",
        background: "none"
    },
    {
        linkId: 4,
        heading: "NIGHT OPERATIONS",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "A tactical mode where flashlights, flares, scopes and other gadgets shine in the dark. - Take the fight into nighttime - as part of the graveyard shift you are re-visiting a familiar but a very different battlefield.",
        color: "white",
        background: "none"
    },
    {
        linkId: 5,
        heading: "NIGHT OPERATIONS LARGE",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "A tactical mode where flashlights, flares, scopes and other gadgets shine in the dark. - Take the fight into nighttime - as part of the graveyard shift you are re-visiting a familiar but a very different battlefield.",
        color: "white",
        background: "none"
    },
    {
        linkId: 6,
        heading: "NIGHT OPERATIONS INFANTRY",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "An infantry mode where flashlights, flares, scopes and other gadgets shine in the dark. - Take the fight into nighttime - as part of the graveyard shift you are re-visiting a familiar but a very different battlefield.",
        color: "white",
        background: "none"
    },
    {
        linkId: 7,
        heading: "Community OPERATIONS",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "Experience Conquest Small, Rush, Obligation, CTF, and Chainlink on Operation Outbreak. - Battlefield at its best with Conquest Small, Rush, Obliteration, Capture the flag and Chain link on the jungle map Operation Outbreak.",
        color: "white",
        background: "none"
    },
    {
        linkId: 8,
        heading: "Community OPERATIONS LARGE",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "Experience Conquest Large Operation Outbreak. - All-out war with Conquest Large on the jungle map Operation Outbreak",
        color: "white",
        background: "none"
    },
    {
        linkId: 9,
        heading: "Community OPERATIONS INFANTRY",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "Experience Infantry based game modes on Operation Outbreak. - Infantry focused with Team Death Match, Squad Death Match, Domination, and Gun master on the jungle map Operation",
        color: "white",
        background: "none"
    },
    {
        linkId: 10,
        heading: "LEGACY OPERATIONS LARGE",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "Experience Conquest large on Dragon Valley 2015. - All-out warfare on the 2015 version of the classic Dragon Valley map",
        color: "white",
        background: "none"
    },
    {
        linkId: 11,
        heading: "LEGACY OPERATIONS",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: "Experience Conquest Small, Rush, and Obliteration on Dragon Velly 2015. - Balltefield at its best with Conquest Small, Rush and Obliteration on the 2015 version of the classic Dragon Valley map",
        color: "white",
        background: "none"
    },
    {
        linkId: 12,
        heading: "LEGACY OPERATIONS INFANTRY",
        image: "",
        subHeader: "Experience infantry based game modes on Dragon Velly 2015. - Infantry focused with Team/Squad Death Match, Domination and Gun Master- in the Nashahr Canals inspired Harbor on the 2015 version of the classic Dragon Velly map",
        color: "white",
        background: "none"
    },
    {
        linkId: 13,
        heading: "AIR SUPERiDRITY",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Air warfare on a massive scale. Capture and hold objectives using only air vehicles.
        - Control the majority of the objectives to drain the enemies' tickets
        - Avoid casulaties
        - The team with the most tickets remaining wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 14,
        heading: "CAPTURE THE FLAG",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Medium-scale warfare. Each team must capture the enemy flag while keeping their own flag protected. 
        - Capture the enemy flag by bringing it back to your base
        - Defend your base, if the enemy team has your flag you cannot capture and score points
        - The first team to capture 3 flags wings`,
        color: "white",
        background: "none"
    },
    {
        linkId: 15,
        heading: "CARRIER ASSULT LARGE",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Capture and hold objectives to damage the enemy carrier. When the carrier is open take out 2 objectives while defending your own carrier to win. 
        - Capture and hold missile launchers to damage the enemy carrier
        - When the enemy carrier is at half health, it cracks open and can be boarded
        - Board the enemy carrier and destroy the two objectives inside to win
        - Defend your carrier objectives to prevent the enemy from winning
        - Destroy the two objectives or bring the carrier to zero health to win the game`,
        color: "white",
        background: "none"
    },
    {
        linkId: 16,
        heading: "CARRIER ASSULT SMALL",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Capture and hold objectives to damage the enemy carrier. When the carrier is open take out 2 objectives while defending your own carrier to win. 
        - Capture and hold missile launchers to damage the enemy carrier
        - When the enemy carrier is at half health, it cracks open and can be boarded
        - Board the enemy carrier and destroy the two objectives inside to win
        - Defend your carrier objectives to prevent the enemy from winning
        - Destroy the two objectives or bring the carrier to zero health to win the game`,
        color: "white",
        background: "none"
    },
    {
        linkId: 17,
        heading: "CHAINLINK",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Create links by capturing two adjacent capture points. The more links you control, the more enemy tickets bleed. The team with the most tickets remaining wins.
        - Create links by capturing two adjacent capture points
        - The more links you control, the more enemy tickets bleed
        - The team with the most tickets remaining wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 18,
        heading: "CONQUEST LARGE",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Expereience our signature game made on the largest scale possible, with up to 64 players per map.
        - Control the majority of the objectives to drain the enemies' tickets
        - Avoid casulaties
        - The team with the most tickets remaining wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 19,
        heading: "CONQUEST SMALL",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Expereience our signature game made on some of the greatest Battelfield maps of all time.
        - Control the majority of the objectives to drain the enemies' tickets
        - Avoid casulaties
        - The team with the most tickets remaining wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 20,
        heading: "DEFUSE",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Take turns in trying to detonate a bomb at the enemy base. Quick rounds are played out and the team with the most won rounds wins the game.
        - No redeplay - if all players on your team die you lose the round
        - Attackers can plant and detonote a bomb at one of the two enemy objectives to win round
        - The team with the most rounds wins the match`,
        color: "white",
        background: "none"
    },
    {
        linkId: 21,
        heading: "DOMINATION",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Capture and hold objectives. Similar to the conquest game made but faster pace and smaller maps.
        - Control the majority of the objectives to drain the enemies's tickets
        - Avoid casulaties
        - The team with the most tickets remaining wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 22,
        heading: "GUN MASTER",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Progress through a series of weapons by killing the enemy. The first player to earn a kill with the last weapon wins.
        - Progress through a series of weapons by killing the enemy
        - The first player to earn a kill with last weapon wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 23,
        heading: "OBLITERATION",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Use teamwork to obliterates the enemy by first delivering, then detonating bombs at their bases while defending your own. New game made in Battlefield 4.
        - Teams fights over possession of a bomb
        - The bomb must be planted at the enemy objectives
        - First team to destroy all enemy objectives wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 24,
        heading: "RUSH",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Togather with your team, attack or defend pairs of M-COM objectives. Kits, gadgets and vehicles are at your disposal
        - Arm and detonate both enemy objectives in a base to advance
        - If successful, your team gains new reinforcement tickets and a new base opens up
        - Destroy all the enemy objectives to win
        - Defend your base objectives to stop attackers from advancing
        - Successfully defend at least one objective to win`,
        color: "white",
        background: "none"
    },
    {
        linkId: 25,
        heading: "SQUAD DEATHMATCH",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Your squad fights three other squads simulaneous. The objective is for your squad to get the highest amount of kills togather.
        - 4 squads combat
        - Each enemy kill gives kill count
        - The squad with the most kills wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 26,
        heading: "SQUAD OBLITERATION",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Close quarters infantry combot. Both teams fight over possession of a bomb that they need to detonote at the enemy objectives.
        - Teams fights over possession of a bomb
        - The bomb must be planted at the enemy objectives
        - First team to destroy all enemy objectives wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 27,
        heading: "TEAM DEATHMATCH",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `Small maps, high intensity and no vehicles. One single objecive for your team: kill the enemy.
        - Each enemy kill gives a kill count
        - The team with the most tickets remaining wins`,
        color: "white",
        background: "none"
    },
    {
        linkId: 28,
        heading: "COMMANDER",
        image: "http://localhost:8000/quickmatch__I-CAL.png",
        subHeader: `- Unite your team by setting the right orders
        - Help your team with supplies and strikes at the enemy
        - Keep the enemy commander at bay to protect your team`,
        color: "white",
        background: "none"
    },
];

app.get('/', (req,res) => {
    res.json({ code: 200, data: battleList });
})
app.listen(PORT, () => console.log("Your backend application is running on port",PORT));