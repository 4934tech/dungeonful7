'use client'

import {useState} from 'react'
import {Card, CardContent} from "@/components/ui/card"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Checkbox} from "@/components/ui/checkbox"
import {Button} from "@/components/ui/button"
import {ScrollArea} from "@/components/ui/scroll-area"

interface ClassLevelProps {
    character: {
        class: string;
        level: number;
        favoredEnemies: string[];
        favoredTerrains: string[];
    };
    onUpdate: (data: Partial<{
        class: string;
        level: number;
        favoredEnemies: string[];
        favoredTerrains: string[];
    }>) => void;
}

const ENEMY_TYPES = [
    'aberration', 'beast', 'celestial', 'construct', 'dragon',
    'elemental', 'fey', 'fiend', 'giant', 'monstrosity',
    'ooze', 'plant', 'undead'
]

const TERRAIN_TYPES = [
    'arctic', 'coast', 'desert', 'forest', 'grassland',
    'mountain', 'swamp', 'underdark'
]

export default function ClassLevel({character, onUpdate}: ClassLevelProps) {
    const [hitPoints, setHitPoints] = useState({
        base: 10,
        con: 0,
        misc: 0,
        total: 10
    })

    const handleFavoredEnemyToggle = (value: string) => {
        const current = new Set(character.favoredEnemies)
        if (current.has(value)) {
            current.delete(value)
        } else {
            current.add(value)
        }
        onUpdate({favoredEnemies: Array.from(current)})
    }

    const handleFavoredTerrainToggle = (value: string) => {
        const current = new Set(character.favoredTerrains)
        if (current.has(value)) {
            current.delete(value)
        } else {
            current.add(value)
        }
        onUpdate({favoredTerrains: Array.from(current)})
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardContent className="pt-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="class">Class</Label>
                            <Select
                                value={character.class}
                                onValueChange={(value) => onUpdate({class: value})}
                            >
                                <SelectTrigger id="class">
                                    <SelectValue placeholder="Select class"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="barbarian">Barbarian</SelectItem>
                                    <SelectItem value="bard">Bard</SelectItem>
                                    <SelectItem value="cleric">Cleric</SelectItem>
                                    <SelectItem value="druid">Druid</SelectItem>
                                    <SelectItem value="fighter">Fighter</SelectItem>
                                    <SelectItem value="monk">Monk</SelectItem>
                                    <SelectItem value="paladin">Paladin</SelectItem>
                                    <SelectItem value="ranger">Ranger</SelectItem>
                                    <SelectItem value="rogue">Rogue</SelectItem>
                                    <SelectItem value="sorcerer">Sorcerer</SelectItem>
                                    <SelectItem value="warlock">Warlock</SelectItem>
                                    <SelectItem value="wizard">Wizard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="level">Level</Label>
                            <Select
                                value={character.level.toString()}
                                onValueChange={(value) => onUpdate({level: parseInt(value)})}
                            >
                                <SelectTrigger id="level">
                                    <SelectValue placeholder="Select level"/>
                                </SelectTrigger>
                                <SelectContent>
                                    {Array.from({length: 20}, (_, i) => (
                                        <SelectItem key={i + 1} value={(i + 1).toString()}>
                                            {i + 1}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold mb-4">Hit Points</h3>
                    <div className="grid grid-cols-4 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="base-hp">Base</Label>
                            <Input
                                id="base-hp"
                                type="number"
                                value={hitPoints.base}
                                onChange={(e) => {
                                    const base = parseInt(e.target.value)
                                    setHitPoints(prev => ({
                                        ...prev,
                                        base,
                                        total: base + prev.con + prev.misc
                                    }))
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="con-hp">Con</Label>
                            <Input
                                id="con-hp"
                                type="number"
                                value={hitPoints.con}
                                onChange={(e) => {
                                    const con = parseInt(e.target.value)
                                    setHitPoints(prev => ({
                                        ...prev,
                                        con,
                                        total: prev.base + con + prev.misc
                                    }))
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="misc-hp">Misc</Label>
                            <Input
                                id="misc-hp"
                                type="number"
                                value={hitPoints.misc}
                                onChange={(e) => {
                                    const misc = parseInt(e.target.value)
                                    setHitPoints(prev => ({
                                        ...prev,
                                        misc,
                                        total: prev.base + prev.con + misc
                                    }))
                                }}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="total-hp">Total</Label>
                            <Input
                                id="total-hp"
                                type="number"
                                value={hitPoints.total}
                                disabled
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {character.class === 'ranger' && (
                <>
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="text-lg font-semibold mb-4">Favored Enemy Type</h3>
                            <ScrollArea className="h-[200px] pr-4">
                                <div className="grid grid-cols-2 gap-4">
                                    {ENEMY_TYPES.map((enemy) => (
                                        <div key={enemy} className="flex items-center space-x-2">
                                            <Checkbox
                                                id={`enemy-${enemy}`}
                                                checked={character.favoredEnemies.includes(enemy)}
                                                onCheckedChange={() => handleFavoredEnemyToggle(enemy)}
                                            />
                                            <Label htmlFor={`enemy-${enemy}`} className="capitalize">
                                                {enemy}
                                            </Label>
                                        </div>
                                    ))}
                                </div>
                            </ScrollArea>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="text-lg font-semibold mb-4">Favored Terrain</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {TERRAIN_TYPES.map((terrain) => (
                                    <div key={terrain} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={`terrain-${terrain}`}
                                            checked={character.favoredTerrains.includes(terrain)}
                                            onCheckedChange={() => handleFavoredTerrainToggle(terrain)}
                                        />
                                        <Label htmlFor={`terrain-${terrain}`} className="capitalize">
                                            {terrain}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}

            <div className="flex justify-end space-x-2">
                <Button variant="outline">Add Another Class</Button>
                <Button variant="outline">Add Subclass</Button>
            </div>
        </div>
    )
}

