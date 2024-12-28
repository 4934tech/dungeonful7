import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Card, CardContent} from "@/components/ui/card"
import {UpdateDescriptionProps} from '../types'

export default function Description({description, onUpdate}: UpdateDescriptionProps) {
    const generateRandomName = () => {
        const prefixes = ['Sir', 'Lady', 'Lord', 'Master', 'Captain', 'Duke', 'Baron']
        const names = ['John', 'Jane', 'Smith', 'Doe', 'Black', 'White', 'Green']
        const suffixes = ['the Brave', 'the Wise', 'the Strong', 'the Swift', 'the Bold']

        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)]
        const name = names[Math.floor(Math.random() * names.length)]
        const suffix = suffixes[Math.floor(Math.random() * suffixes.length)]

        return `${prefix} ${name} ${suffix}`
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="playerName">Player Name</Label>
                            <Input
                                id="playerName"
                                value={description.playerName}
                                onChange={(e) => onUpdate({playerName: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="characterName">Character Name</Label>
                            <div className="flex gap-2">
                                <Input
                                    id="characterName"
                                    value={description.playerName}
                                    onChange={(e) => onUpdate({playerName: e.target.value})}
                                />
                                <Button
                                    variant="outline"
                                    onClick={() => onUpdate({playerName: generateRandomName()})}
                                    className="shrink-0"
                                >
                                    Random
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="age">Age</Label>
                            <Input
                                id="age"
                                type="number"
                                value={description.age}
                                onChange={(e) => onUpdate({age: parseInt(e.target.value) || 0})}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="sex">Sex</Label>
                            <Select
                                value={description.sex}
                                onValueChange={(value) => onUpdate({sex: value})}
                            >
                                <SelectTrigger id="sex">
                                    <SelectValue placeholder="Select sex"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="height">Height</Label>
                            <Input
                                id="height"
                                value={description.height}
                                onChange={(e) => onUpdate({height: e.target.value})}
                                placeholder="5'10''"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="weight">Weight</Label>
                            <Input
                                id="weight"
                                value={description.weight}
                                onChange={(e) => onUpdate({weight: e.target.value})}
                                placeholder="180 lbs"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="hairColor">Hair Color</Label>
                            <Input
                                id="hairColor"
                                value={description.hairColor}
                                onChange={(e) => onUpdate({hairColor: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="eyeColor">Eye Color</Label>
                            <Input
                                id="eyeColor"
                                value={description.eyeColor}
                                onChange={(e) => onUpdate({eyeColor: e.target.value})}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="skinColor">Skin Color</Label>
                            <Input
                                id="skinColor"
                                value={description.skinColor}
                                onChange={(e) => onUpdate({skinColor: e.target.value})}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="personalityTrait1">Personality Trait 1</Label>
                        <Textarea
                            id="personalityTrait1"
                            value={description.personalityTrait1}
                            onChange={(e) => onUpdate({personalityTrait1: e.target.value})}
                            placeholder="Describe a notable personality trait..."
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="personalityTrait2">Personality Trait 2</Label>
                        <Textarea
                            id="personalityTrait2"
                            value={description.personalityTrait2}
                            onChange={(e) => onUpdate({personalityTrait2: e.target.value})}
                            placeholder="Describe another notable personality trait..."
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="ideals">Ideals</Label>
                        <Textarea
                            id="ideals"
                            value={description.ideals}
                            onChange={(e) => onUpdate({ideals: e.target.value})}
                            placeholder="What principles does your character believe in?"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="bonds">Bonds</Label>
                        <Textarea
                            id="bonds"
                            value={description.bonds}
                            onChange={(e) => onUpdate({bonds: e.target.value})}
                            placeholder="What connects your character to people, places, or events?"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="flaws">Flaws</Label>
                        <Textarea
                            id="flaws"
                            value={description.flaws}
                            onChange={(e) => onUpdate({flaws: e.target.value})}
                            placeholder="What weaknesses or limitations does your character have?"
                        />
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="pt-6 space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="imageUrl">Character Image URL</Label>
                        <Input
                            id="imageUrl"
                            value={description.imageUrl}
                            onChange={(e) => onUpdate({imageUrl: e.target.value})}
                            placeholder="https://example.com/character-image.jpg (128k max)"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="factionName">Faction Name</Label>
                        <Input
                            id="factionName"
                            value={description.factionName}
                            onChange={(e) => onUpdate({factionName: e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="factionImageUrl">Faction Image URL</Label>
                        <Input
                            id="factionImageUrl"
                            value={description.factionImageUrl}
                            onChange={(e) => onUpdate({factionImageUrl: e.target.value})}
                            placeholder="https://example.com/faction-image.jpg (128k max)"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="backstory">Description/Backstory</Label>
                        <Textarea
                            id="backstory"
                            value={description.backstory}
                            onChange={(e) => onUpdate({backstory: e.target.value})}
                            placeholder="Tell us your character's story..."
                            className="min-h-[200px]"
                        />
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

