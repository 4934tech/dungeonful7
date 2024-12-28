'use client'

import {useState} from 'react'
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'

export default function CharacterSheet() {
    const [character, setCharacter] = useState({
        name: '',
        class: '',
        level: '',
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setCharacter(prev => ({...prev, [name]: value}))
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Character Sheet</h2>
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" value={character.name} onChange={handleChange}/>
                </div>
                <div>
                    <Label htmlFor="class">Class</Label>
                    <Input id="class" name="class" value={character.class} onChange={handleChange}/>
                </div>
                <div>
                    <Label htmlFor="level">Level</Label>
                    <Input id="level" name="level" type="number" value={character.level} onChange={handleChange}/>
                </div>
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">Abilities</h3>
            <div className="grid grid-cols-3 gap-4">
                {['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'].map((ability) => (
                    <div key={ability}>
                        <Label htmlFor={ability} className="capitalize">{ability}</Label>
                        <Input
                            id={ability}
                            name={ability}
                            type="number"
                            value={character[ability as keyof typeof character]}
                            onChange={handleChange}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

