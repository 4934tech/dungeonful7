export interface AbilityScoreIncrease {
    ability: 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'
    increase: number
}

export interface RaceFeature {
    name: string
    description: string
    levelRequired?: number
}

export interface Subrace {
    name: string
    description: string
    abilityScoreIncreases: AbilityScoreIncrease[]
    features: RaceFeature[]
    darkvision?: number
    speed?: number
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
            min: number
            max: number
        }
        weight: {
            min: number
            max: number
        }
        category: 'Small' | 'Medium' | 'Large'
        description: string
    }
    speed: number
    darkvision?: number
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

export interface CustomRace {
    name: string
    darkvision: number
    speed: number
    isCustom: true
    subraces: CustomSubrace[]
}

export interface CustomSubrace {
    name: string
    darkvision: number
    speed: number
    isCustom: true
}

export interface CharacterDescription {
    playerName: string
    age: number
    sex: string
    height: string
    weight: string
    hairColor: string
    eyeColor: string
    skinColor: string
    personalityTrait1: string
    personalityTrait2: string
    ideals: string
    bonds: string
    flaws: string
    imageUrl: string
    factionName: string
    factionImageUrl: string
    backstory: string
}

export interface Character {
    name: string
    class: string
    race: string
    subrace?: string
    background: string
    alignment: string
    level: number
    experience: number
    description: CharacterDescription
    abilities: {
        strength: number
        dexterity: number
        constitution: number
        intelligence: number
        wisdom: number
        charisma: number
    }
    skills: Record<string, boolean>
    equipment: string[]
}
