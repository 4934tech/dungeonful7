'use client'

import {useState} from 'react'
import {Button} from '@/components/ui/button'
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select'

const diceTypes = ['d4', 'd6', 'd8', 'd10', 'd12', 'd20', 'd100']

export default function DiceRoller() {
    const [selectedDice, setSelectedDice] = useState('d20')
    const [result, setResult] = useState<number | null>(null)

    const rollDice = () => {
        const max = parseInt(selectedDice.slice(1))
        setResult(Math.floor(Math.random() * max) + 1)
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Dice Roller</h2>
            <div className="flex items-center gap-4 mb-4">
                <Select value={selectedDice} onValueChange={setSelectedDice}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select a dice"/>
                    </SelectTrigger>
                    <SelectContent>
                        {diceTypes.map((dice) => (
                            <SelectItem key={dice} value={dice}>
                                {dice}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Button onClick={rollDice}>Roll</Button>
            </div>
            {result !== null && (
                <div className="text-center">
                    <span className="text-4xl font-bold">{result}</span>
                </div>
            )}
        </div>
    )
}

