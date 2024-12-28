export interface AbilityScoreIncrease {
    ability: 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'
    increase: number
}

export interface Subrace {
    name: string
    description: string
    abilityScoreIncreases: AbilityScoreIncrease[]
    features: RaceFeature[]
}

export interface RaceFeature {
    name: string
    description: string
    levelRequired?: number
}

export interface Race {
    id: string
    name: string
    description: string
    abilityScoreIncreases: AbilityScoreIncrease[]
    age: {
        maturity: number
        lifespan: number
        description: string
    }
    alignment: string
    size: {
        height: {
            min: number // in inches
            max: number
        }
        weight: {
            min: number // in pounds
            max: number
        }
        category: 'Small' | 'Medium' | 'Large'
        description: string
    }
    speed: {
        walk: number
        climb?: number
        swim?: number
        fly?: number
    }
    darkvision?: number // in feet, if applicable
    features: RaceFeature[]
    languages: string[]
    subraces?: Subrace[]
    resistances?: string[]
    proficiencies?: {
        weapons?: string[]
        armor?: string[]
        tools?: string[]
        skills?: string[]
    }
}
