import {Race} from '@/types/race'

export const races: Race[] = [
    {
        id: 'dwarf',
        name: 'Dwarf',
        description: 'Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal.',
        abilityScoreIncreases: [
            {ability: 'constitution', increase: 2}
        ],
        age: {
            maturity: 50,
            lifespan: 350,
            description: 'Dwarves mature at the same rate as humans, but they\'re considered young until they reach the age of 50. On average, they live about 350 years.'
        },
        alignment: 'Most dwarves are lawful, believing firmly in the benefits of a well-ordered society.',
        size: {
            height: {min: 48, max: 60},
            weight: {min: 130, max: 230},
            category: 'Medium',
            description: 'Dwarves stand between 4 and 5 feet tall and average about 150 pounds.'
        },
        speed: {
            walk: 25
        },
        darkvision: 60,
        features: [
            {
                name: 'Dwarven Resilience',
                description: 'You have advantage on saving throws against poison, and you have resistance against poison damage.'
            },
            {
                name: 'Stonecunning',
                description: 'Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check.'
            }
        ],
        languages: ['Common', 'Dwarvish'],
        subraces: [
            {
                name: 'Hill Dwarf',
                description: 'As a hill dwarf, you have keen senses, deep intuition, and remarkable resilience.',
                abilityScoreIncreases: [
                    {ability: 'wisdom', increase: 1}
                ],
                features: [
                    {
                        name: 'Dwarven Toughness',
                        description: 'Your hit point maximum increases by 1, and it increases by 1 every time you gain a level.'
                    }
                ]
            },
            {
                name: 'Mountain Dwarf',
                description: 'As a mountain dwarf, you'
                re strong
                and hardy,
                accustomed to
                a difficult
                life
                in rugged
                terrain
                .',
                abilityScoreIncreases: [
                    {ability: 'strength', increase: 2}
                ],
                features: []
            }
        ],
        proficiencies: {
            weapons: ['Battleaxe', 'Handaxe', 'Light Hammer', 'Warhammer'],
            tools: ['Smith's Tools', 'Brewer's Supplies', 'Mason's Tools']
        }
    },
    {
        id: 'elf',
        name: 'Elf',
        description: 'Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.',
        abilityScoreIncreases: [
            {ability: 'dexterity', increase: 2}
        ],
        age: {
            maturity: 100,
            lifespan: 750,
            description: 'Although elves reach physical maturity at about the same age as humans, they don'
            t consider
            themselves adults
            until they
            reach 100.
            They can
            live to
            be 750
            years old.
            '
        },
        alignment: 'Elves love freedom, variety, and self-expression, so they lean strongly toward chaotic good.',
        size: {
            height: {min: 54, max: 74},
            weight: {min: 90, max: 170},
            category: 'Medium',
            description: 'Elves range from under 5 to over 6 feet tall and have slender builds.'
        },
        speed: {
            walk: 30
        },
        darkvision: 60,
        features: [
            {
                name: 'Keen Senses',
                description: 'You have proficiency in the Perception skill.'
            },
            {
                name: 'Fey Ancestry',
                description: 'You have advantage on saving throws against being charmed, and magic can'
                t put
                you to
                sleep
                .'
            },
            {
                name: 'Trance',
                description: 'Elves don't need to sleep.Instead, they meditate deeply for 4 hours a day.'
            }
        ],
        languages: ['Common', 'Elvish'],
        subraces: [
            {
                name: 'High Elf',
                description: 'As a high elf, you have a keen mind and a mastery of at least the basics of magic.',
                abilityScoreIncreases: [
                    {ability: 'intelligence', increase: 1}
                ],
                features: [
                    {
                        name: 'Cantrip',
                        description: 'You know one cantrip of your choice from the wizard spell list. Intelligence is your spellcasting ability for it.'
                    },
                    {
                        name: 'Extra Language',
                        description: 'You can speak, read, and write one extra language of your choice.'
                    }
                ]
            },
            {
                name: 'Wood Elf',
                description: 'As a wood elf, you have keen senses and intuition, and your fleet feet carry you quickly and stealthily through your native forests.',
                abilityScoreIncreases: [
                    {ability: 'wisdom', increase: 1}
                ],
                features: [
                    {
                        name: 'Fleet of Foot',
                        description: 'Your base walking speed increases to 35 feet.'
                    },
                    {
                        name: 'Mask of the Wild',
                        description: 'You can attempt to hide even when you are only lightly obscured by foliage, heavy rain, falling snow, mist, and other natural phenomena.'
                    }
                ]
            }
        ]
    }
]

