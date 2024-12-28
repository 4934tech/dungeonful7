'use client'

import {useState} from 'react'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import BasicInfo from './components/BasicInfo'
import Description from './components/Description'
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

    const updateDescription = (newData: Partial<Character['description']>) => {
        setCharacter(prev => ({
            ...prev,
            description: {...prev.description, ...newData}
        }))
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

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Create Your Character</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="basic" className="space-y-4">
                    <TabsList className="grid grid-cols-2 w-full">
                        <TabsTrigger value="basic">Basic Info</TabsTrigger>
                        <TabsTrigger value="description">Description</TabsTrigger>
                    </TabsList>
                    <TabsContent value="basic">
                        <BasicInfo
                            character={character}
                            updateCharacter={updateCharacter}
                            customRaces={customRaces}
                            onCustomRaceAdd={handleCustomRaceAdd}
                            onCustomSubraceAdd={handleCustomSubraceAdd}
                        />
                    </TabsContent>
                    <TabsContent value="description">
                        <Description description={character.description} onUpdate={updateDescription}/>
                    </TabsContent>
                </Tabs>
                <div className="mt-6 flex justify-end space-x-4">
                    <Button variant="outline">Save Character</Button>
                    <Button>Finish</Button>
                </div>
            </CardContent>
        </Card>
    )
}

