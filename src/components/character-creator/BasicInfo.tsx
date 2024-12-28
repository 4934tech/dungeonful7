import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"

export default function BasicInfo({character, updateCharacter}: any) {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Character Name</Label>
                    <Input
                        id="name"
                        value={character.name}
                        onChange={(e) => updateCharacter({name: e.target.value})}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="class">Class</Label>
                    <Select
                        value={character.class}
                        onValueChange={(value) => updateCharacter({class: value})}
                    >
                        <SelectTrigger id="class">
                            <SelectValue placeholder="Select class"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="fighter">Fighter</SelectItem>
                            <SelectItem value="wizard">Wizard</SelectItem>
                            <SelectItem value="rogue">Rogue</SelectItem>
                            <SelectItem value="cleric">Cleric</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="race">Race</Label>
                    <Select
                        value={character.race}
                        onValueChange={(value) => updateCharacter({race: value})}
                    >
                        <SelectTrigger id="race">
                            <SelectValue placeholder="Select race"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="human">Human</SelectItem>
                            <SelectItem value="elf">Elf</SelectItem>
                            <SelectItem value="dwarf">Dwarf</SelectItem>
                            <SelectItem value="halfling">Halfling</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="background">Background</Label>
                    <Input
                        id="background"
                        value={character.background}
                        onChange={(e) => updateCharacter({background: e.target.value})}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="alignment">Alignment</Label>
                    <Select
                        value={character.alignment}
                        onValueChange={(value) => updateCharacter({alignment: value})}
                    >
                        <SelectTrigger id="alignment">
                            <SelectValue placeholder="Select alignment"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="lawful-good">Lawful Good</SelectItem>
                            <SelectItem value="neutral-good">Neutral Good</SelectItem>
                            <SelectItem value="chaotic-good">Chaotic Good</SelectItem>
                            <SelectItem value="lawful-neutral">Lawful Neutral</SelectItem>
                            <SelectItem value="true-neutral">True Neutral</SelectItem>
                            <SelectItem value="chaotic-neutral">Chaotic Neutral</SelectItem>
                            <SelectItem value="lawful-evil">Lawful Evil</SelectItem>
                            <SelectItem value="neutral-evil">Neutral Evil</SelectItem>
                            <SelectItem value="chaotic-evil">Chaotic Evil</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="level">Level</Label>
                    <Input
                        id="level"
                        type="number"
                        value={character.level}
                        onChange={(e) => updateCharacter({level: parseInt(e.target.value)})}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="experience">Experience Points</Label>
                    <Input
                        id="experience"
                        type="number"
                        value={character.experience}
                        onChange={(e) => updateCharacter({experience: parseInt(e.target.value)})}
                    />
                </div>
            </div>
        </div>
    )
}

