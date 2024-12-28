import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

const abilities = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

export default function Abilities({character, updateCharacter}: any) {
    const handleAbilityChange = (ability: string, value: number) => {
        updateCharacter({
            abilities: {
                ...character.abilities,
                [ability]: value
            }
        })
    }

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {abilities.map((ability) => (
                <div key={ability} className="space-y-2">
                    <Label htmlFor={ability} className="capitalize">{ability}</Label>
                    <Input
                        id={ability}
                        type="number"
                        value={character.abilities[ability]}
                        onChange={(e) => handleAbilityChange(ability, parseInt(e.target.value))}
                    />
                </div>
            ))}
        </div>
    )
}

