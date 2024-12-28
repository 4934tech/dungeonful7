'use client'

import {useState} from 'react'
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import BasicInfo from './character-creator/BasicInfo'
import Abilities from './character-creator/Abilities'
import Skills from './character-creator/Skills'
import Equipment from './character-creator/Equipment'
import CharacterSheet from './character-creator/CharacterSheet'

export default function CharacterCreator() {
    const [character, setCharacter] = useState({
        name: '',
        class: '',
        race: '',
        background: '',
        alignment: '',
        level: 1,
        experience: 0,
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
    })

    const updateCharacter = (newData: Partial<typeof character>) => {
        setCharacter(prev => ({...prev, ...newData}))
    }

    return (
        <Card className="w-full max-w-4xl mx-auto">
            <CardHeader>
                <CardTitle>Create Your Character</CardTitle>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="basic" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="basic">Basic Info</TabsTrigger>
                        <TabsTrigger value="abilities">Abilities</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="equipment">Equipment</TabsTrigger>
                        <TabsTrigger value="sheet">Character Sheet</TabsTrigger>
                    </TabsList>
                    <TabsContent value="basic">
                        <BasicInfo character={character} updateCharacter={updateCharacter}/>
                    </TabsContent>
                    <TabsContent value="abilities">
                        <Abilities character={character} updateCharacter={updateCharacter}/>
                    </TabsContent>
                    <TabsContent value="skills">
                        <Skills character={character} updateCharacter={updateCharacter}/>
                    </TabsContent>
                    <TabsContent value="equipment">
                        <Equipment character={character} updateCharacter={updateCharacter}/>
                    </TabsContent>
                    <TabsContent value="sheet">
                        <CharacterSheet character={character}/>
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

