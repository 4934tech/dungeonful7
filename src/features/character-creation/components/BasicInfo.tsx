import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {CustomRace, CustomSubrace, UpdateCharacterProps} from '../types'
import RaceSelector from './RaceSelector'

interface BasicInfoProps extends UpdateCharacterProps {
    customRaces: CustomRace[]
    onCustomRaceAdd: (race: CustomRace) => void
    onCustomSubraceAdd: (raceName: string, subrace: CustomSubrace) => void
}

export default function BasicInfo({
                                      character,
                                      updateCharacter,
                                      customRaces,
                                      onCustomRaceAdd,
                                      onCustomSubraceAdd
                                  }: BasicInfoProps) {
    const handleRaceChange = (raceId: string, subraceId?: string) => {
        updateCharacter({
            race: raceId,
            subrace: subraceId
        })
    }

    return (
        <div className="space-y-8">
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

            <div className="pt-6 border-t">
                <RaceSelector
                    selectedRace={character.race}
                    selectedSubrace={character.subrace}
                    onRaceChange={handleRaceChange}
                    customRaces={customRaces}
                    onCustomRaceAdd={onCustomRaceAdd}
                    onCustomSubraceAdd={onCustomSubraceAdd}
                />
            </div>
        </div>
    )
}

