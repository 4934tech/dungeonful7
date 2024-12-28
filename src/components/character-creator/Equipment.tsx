import {useState} from 'react'
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Label} from "@/components/ui/label"

export default function Equipment({character, updateCharacter}: any) {
    const [newItem, setNewItem] = useState('')

    const addItem = () => {
        if (newItem.trim()) {
            updateCharacter({
                equipment: [...character.equipment, newItem.trim()]
            })
            setNewItem('')
        }
    }

    const removeItem = (index: number) => {
        updateCharacter({
            equipment: character.equipment.filter((_: string, i: number) => i !== index)
        })
    }

    return (
        <div className="space-y-4">
            <div className="flex space-x-2">
                <div className="flex-grow">
                    <Label htmlFor="new-item" className="sr-only">Add new item</Label>
                    <Input
                        id="new-item"
                        value={newItem}
                        onChange={(e) => setNewItem(e.target.value)}
                        placeholder="Add new item"
                    />
                </div>
                <Button onClick={addItem}>Add</Button>
            </div>
            <ul className="space-y-2">
                {character.equipment.map((item: string, index: number) => (
                    <li key={index} className="flex justify-between items-center">
                        <span>{item}</span>
                        <Button variant="destructive" size="sm" onClick={() => removeItem(index)}>Remove</Button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

