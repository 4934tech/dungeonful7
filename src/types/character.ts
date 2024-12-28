export interface Character {
    name: string
    class: string
    race: string
    subrace?: string
    background: string
    alignment: string
    level: number
    experience: number
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

