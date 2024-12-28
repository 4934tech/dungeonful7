'use client'

import {useState} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import RaceSelector from './components/race-selector'
import {type Character, type CustomRace, type CustomSubrace} from './types'

const defaultCharacter: Character = {
    name: '',
    class: '',
    race: '',
    background: '',
    alignment: '',
    level: 1,
    experience: 0,
    description: {
        playerName: '',
        age: 0,
        sex: '',
        height: '',
        weight: '',
        hairColor: '',
        eyeColor: '',
        skinColor: '',
        personalityTrait1: '',
        personalityTrait2: '',
        ideals: '',
        bonds: '',
        flaws: '',
        imageUrl: '',
        factionName: '',
        factionImageUrl: '',
        backstory: ''
    },
    abilities: {
        strength: 10,
        dexterity: 10,
        constitution: 10,
        intelligence: 10,
        wisdom: 10,
        charisma: 10
    },
    skills: {},
    equipment: [],
}

export default function CharacterCreation() {
    const [character, setCharacter] = useState<Character>(defaultCharacter)
    const [customRaces, setCustomRaces] = useState<CustomRace[]>([])

    const updateCharacter = (newData: Partial<Character>) => {
        setCharacter(prev => ({...prev, ...newData}))
    }

    const handleCustomRaceAdd = (race: CustomRace) => {
        setCustomRaces(prev => [...prev, race])
    }

    const handleCustomSubraceAdd = (raceName: string, subrace: CustomSubrace) => {
        setCustomRaces(prev => prev.map(race =>
            race.name === raceName
                ? {...race, subraces: [...race.subraces, subrace]}
                : race
        ))
    }

    const handleRaceChange = (raceId: string, subraceId?: string) => {
        updateCharacter({
            race: raceId,
            subrace: subraceId
        })
    }

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Race Selection</CardTitle>
            </CardHeader>
            <CardContent>
                <RaceSelector
                    selectedRace={character.race}
                    selectedSubrace={character.subrace || ''}
                    onRaceChange={handleRaceChange}
                    customRaces={customRaces}
                    onCustomRaceAdd={handleCustomRaceAdd}
                    onCustomSubraceAdd={handleCustomSubraceAdd}
                />
            </CardContent>
        </Card>
    )
}
