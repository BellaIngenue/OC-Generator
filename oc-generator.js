console.log("The OC Generator is working!");

const ocTypeInput = document.getElementById("ocType");
const eyeColorInput = document.getElementById("eyeColor");
const hairColorInput = document.getElementById("hairColor");
const personalityInput = document.getElementById("personality");
const siblingsInput = document.getElementById("siblings");
const animalInput = document.getElementById("animal");
const favoriteColorInput = document.getElementById("favoriteColor");
const favoriteFoodInput = document.getElementById("favoriteFood");
const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");


generateButton.addEventListener("click", function() {
    const ocType = ocTypeInput.value;

    const rules = allRules[ocType];

    let outputHTML = "";

    for (const item of rules.output) {

        const label = item[0];
        const ruleName = item[1];

        const rule = rules[ruleName];

        const inputValue = document.getElementById(rule.input).value;

        const generatedValue = rule.values[inputValue];

        outputHTML += `
        <p><strong>${label}:</strong> ${generatedValue}</p>
    `;
    }
    result.innerHTML = `
    <h2>Your ${ocType} OC!</h2>
    ${outputHTML}
`;
});

const fairyRules = {
    wings: {
        input: "eyeColor",
        values: {
            Blue: "Blue Wings",
            Green: "Green Wings",
            Brown: "Brown Wings",
            Black: "Black Wings",
            Other: "Rainbow Wings"
        }
    },
    sparkles: {
        input: "siblings",
        values: {
            0: "No Sparkles",
            1: "Some Sparkles",
            2: "Lots of Sparkles",
            3: "Maximum Sparkles"
        }
    },
    hairColor: {
        input: "favoriteColor",
        values: {
            Red: "Red Hair",
            Orange: "Orange Hair",
            Yellow: "Yellow Hair",
            Green: "Green Hair",
            Blue: "Blue Hair",
            Purple: "Purple Hair",
            Pink: "Pink Hair",
            Brown: "Brown Hair",
            Gray: "Gray Hair",
            Black: "Black Hair",
            White: "White Hair"
        }
    },
    aesthetic: {
        input: "hairColor",
        values: {
            Red: "Warm/Fiery Aesthetic",
            Brown: "CottageCore Aesthetic",
            Blonde: "High Elf/Preppy Aesthetic",
            Black: "Grungy/Goth/Emo Aesthetic",
            Gray: "Vintage Aesthetic",
            Dyed: "Rainbow Aesthetic"
        }
    },
    hairType: {
        input: "favoriteFood",
        values: {
            Fruits: "Pigtails",
            Veggies: "Straight and Long",
            Grains: "Fluffy and Spiky",
            Dairy: "Half-up Half-down",
            Sweets: "Curly Afro-like",
            Protein: "Wavy Shoulder Length"
        }
    },
    eyeColor: {
        input: "personality",
        values: {
            Calm: "Blue Eyes",
            Chaotic: "Red Eyes",
            Extraverted: "Green Eyes",
            Introverted: "Brown Eyes",
            Normal: "Black Eyes"
        }
        },
    accessory: {
        input: "animal",
        values: {
            None: "No Accessories",
            Dogs: "Bow Accessories",
            Cats: "Wand Accessory",
            Reptiles: "Hat Accessory",
            Birds: "Head Wings Accessory",
            Rodents: "Tail Accessory",
            Other: "Dealer's Choice!!"
        }
    },

    output: [
        ["Wings", "wings"],
        ["Sparkles", "sparkles"],
        ["Aesthetic", "aesthetic"],
        ["Hair Type", "hairType"],
        ["Eye Color", "eyeColor"],
        ["Hair Color", "hairColor"],
        ["Accesssory", "accessory"]
    ]
}

const witchRules = {
    outfitColor: {
        input: "eyeColor",
        values: {
            Blue: "Blue Outfit",
            Green: "Green Outfit",
            Brown: "Brown Outfit",
            Black: "Black Outfit",
            Other: "Pastel Outfit"
        }
    },
    magic: {
        input: "siblings",
        values: {
            0: "Air Magic",
            1: "Fire Magic",
            2: "Earth Magic",
            3: "Water Magic"
        }
    },
    hairColor: {
        input: "hairColor",
        values: {
            Red: "Warmish Tones",
            Brown: "Coolish Tones",
            Blonde: "Platinum Blonde",
            Black: "Dark and Mysterious",
            Gray: "Salt and Pepper",
            Dyed: "Rainbow Hair"
        }
    },
    aesthetic: {
        input: "favoriteFood",
        values: {
            Fruits: "Frutiger Aero",
            Veggies: "Techwear",
            Grains: "Baroque",
            Dairy: "Lolita",
            Sweets: "Cyberpunk",
            Protein: "Grungy Punk"
        }
    },
    hairType: {
        input: "personality",
        values: {
            Calm: "Flat and Long Hair",
            Chaotic: "Curly and Fluffy Afro",
            Extraverted: "Long and Wavy",
            Introverted: "Straight Bob",
            Normal: "Twintails"
        }
    },
    eyeColor: {
        input: "favoriteColor",
        values: {
            Red: "Red Eyes",
            Orange: "Orange Eyes",
            Yellow: "Yellow Eyes",
            Green: "Green Eyes",
            Blue: "Blue Eyes",
            Purple: "Purple Eyes",
            Pink: "Pink Eyes",
            Brown: "Brown Eyes",
            Gray: "Gray Eyes",
            Black: "Black Eyes",
            White: "White Eyes"
        }
    },
    familiar: {
        input: "animal",
        values: {
        None: "No Familiar",
        Dogs: "Dog Familiar",
        Cats: "Cat Familiar",
        Reptiles: "Reptile Familiar",
        Birds: "Bird Familiar",
        Rodents: "Rodent Familiar",
        Other: "Underwater Familiar"
            }
    },

    output: [
        ["Outfit Color", "outfitColor"],
        ["Magic", "magic"],
        ["Familiar", "familiar"],
        ["Aesthetic", "aesthetic"],
        ["Hair Type", "hairType"],
        ["Eye Color", "eyeColor"],
        ["Hair Color", "hairColor"]
    ]
}

const allRules = {
    Fairy: fairyRules,
    Witch: witchRules,
}