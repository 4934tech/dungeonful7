'use client'

import {useState} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Button} from "@/components/ui/button"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from "@/components/ui/collapsible"
import {ChevronDown, ChevronUp} from 'lucide-react'
import {BASE_RACES, DARKVISION_OPTIONS, SPEED_OPTIONS} from '../constants/race-options'
import {type CustomRace, type CustomSubrace} from '../types'

interface RaceSelectorProps {
    selectedRace: string
    selectedSubrace: string
    onRaceChange: (raceId: string, subraceId?: string) => void
    customRaces: CustomRace[]
    onCustomRaceAdd: (race: CustomRace) => void
    onCustomSubraceAdd: (raceName: string, subrace: CustomSubrace) => void
}

export default function RaceSelector({
                                         selectedRace,
                                         selectedSubrace,
                                         onRaceChange,
                                         customRaces,
                                         onCustomRaceAdd,
                                         onCustomSubraceAdd
                                     }: RaceSelectorProps) {
    const [showInfo, setShowInfo] = useState<Record<string, boolean>>({})
    const [newCustomRace, setNewCustomRace] = useState({
        name: '',
        darkvision: 0,
        speed: 30,
    })
    const [newCustomSubrace, setNewCustomSubrace] = useState({
        name: '',
        darkvision: 0,
        speed: 30,
    })

    const toggleInfo = (id: string) => {
        setShowInfo(prev => ({
            ...prev,
            [id]: !prev[id]
        }))
    }

    const handleAddCustomRace = () => {
        if (newCustomRace.name.trim()) {
            onCustomRaceAdd({
                ...newCustomRace,
                isCustom: true,
                subraces: []
            })
            setNewCustomRace({
                name: '',
                darkvision: 0,
                speed: 30,
            })
        }
    }

    const handleAddCustomSubrace = (raceName: string) => {
        if (newCustomSubrace.name.trim()) {
            onCustomSubraceAdd(raceName, {
                ...newCustomSubrace,
                isCustom: true
            })
            setNewCustomSubrace({
                name: '',
                darkvision: 0,
                speed: 30,
            })
        }
    }

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                        Race Selection
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setShowInfo({})}
                        >
                            {Object.keys(showInfo).length > 0 ? 'Collapse All' : 'Expand All'}
                        </Button>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {/* Base Races */}
                        {BASE_RACES.map(race => (
                            <Collapsible
                                key={race}
                                open={showInfo[race]}
                                onOpenChange={() => toggleInfo(race)}
                            >
                                <div className="flex items-center space-x-2 py-2">
                                    <RadioGroupItem
                                        value={race.toLowerCase()}
                                        id={race.toLowerCase()}
                                        checked={selectedRace === race.toLowerCase()}
                                        onClick={() => onRaceChange(race.toLowerCase())}
                                    />
                                    <Label htmlFor={race.toLowerCase()}>{race}</Label>
                                    <CollapsibleTrigger className="ml-auto">
                                        {showInfo[race] ? <ChevronUp/> : <ChevronDown/>}
                                    </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent className="pl-6 space-y-2">
                                    <div className="text-sm text-muted-foreground">
                                        Base speed: 30 ft.
                                        {race !== 'Human' && <div>Darkvision: 60 ft.</div>}
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        ))}

                        {/* Custom Races */}
                        {customRaces.map(race => (
                            <Collapsible
                                key={race.name}
                                open={showInfo[race.name]}
                                onOpenChange={() => toggleInfo(race.name)}
                            >
                                <div className="flex items-center space-x-2 py-2">
                                    <RadioGroupItem
                                        value={race.name.toLowerCase()}
                                        id={race.name.toLowerCase()}
                                        checked={selectedRace === race.name.toLowerCase()}
                                        onClick={() => onRaceChange(race.name.toLowerCase())}
                                    />
                                    <Label htmlFor={race.name.toLowerCase()}>{race.name}</Label>
                                    <CollapsibleTrigger className="ml-auto">
                                        {showInfo[race.name] ? <ChevronUp/> : <ChevronDown/>}
                                    </CollapsibleTrigger>
                                </div>
                                <CollapsibleContent className="pl-6 space-y-2">
                                    <div className="text-sm text-muted-foreground">
                                        <div>Speed: {race.speed} ft.</div>
                                        <div>Darkvision: {race.darkvision} ft.</div>
                                    </div>
                                    {/* Custom Subraces */}
                                    {race.subraces.length > 0 && (
                                        <div className="mt-2">
                                            <h4 className="text-sm font-medium mb-2">Subraces:</h4>
                                            <div className="space-y-2">
                                                {race.subraces.map(subrace => (
                                                    <div key={subrace.name} className="flex items-center space-x-2">
                                                        <RadioGroupItem
                                                            value={`${race.name.toLowerCase()}-${subrace.name.toLowerCase()}`}
                                                            id={`${race.name.toLowerCase()}-${subrace.name.toLowerCase()}`}
                                                            checked={selectedSubrace === subrace.name.toLowerCase()}
                                                            onClick={() => onRaceChange(race.name.toLowerCase(), subrace.name.toLowerCase())}
                                                        />
                                                        <Label
                                                            htmlFor={`${race.name.toLowerCase()}-${subrace.name.toLowerCase()}`}>
                                                            {subrace.name}
                                                        </Label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {/* Add Subrace Form */}
                                    <div className="mt-4 space-y-2">
                                        <h4 className="text-sm font-medium">Add Subrace</h4>
                                        <div className="space-y-2">
                                            <Input
                                                placeholder="Subrace name"
                                                value={newCustomSubrace.name}
                                                onChange={(e) => setNewCustomSubrace(prev => ({
                                                    ...prev,
                                                    name: e.target.value
                                                }))}
                                            />
                                            <Select
                                                value={newCustomSubrace.darkvision.toString()}
                                                onValueChange={(value) => setNewCustomSubrace(prev => ({
                                                    ...prev,
                                                    darkvision: parseInt(value)
                                                }))}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select darkvision"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {DARKVISION_OPTIONS.map(option => (
                                                        <SelectItem key={option.value} value={option.value.toString()}>
                                                            {option.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <Select
                                                value={newCustomSubrace.speed.toString()}
                                                onValueChange={(value) => setNewCustomSubrace(prev => ({
                                                    ...prev,
                                                    speed: parseInt(value)
                                                }))}
                                            >
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select speed"/>
                                                </SelectTrigger>
                                                <SelectContent>
                                                    {SPEED_OPTIONS.map(option => (
                                                        <SelectItem key={option.value} value={option.value.toString()}>
                                                            {option.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
                                            <Button
                                                size="sm"
                                                onClick={() => handleAddCustomSubrace(race.name)}
                                                className="w-full"
                                            >
                                                Add Subrace
                                            </Button>
                                        </div>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                        ))}

                        {/* Add Custom Race Form */}
                        <Card className="mt-4">
                            <CardHeader>
                                <CardTitle className="text-lg">Add Custom Race</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="customRaceName">Race Name</Label>
                                    <Input
                                        id="customRaceName"
                                        placeholder="Enter race name"
                                        value={newCustomRace.name}
                                        onChange={(e) => setNewCustomRace(prev => ({
                                            ...prev,
                                            name: e.target.value
                                        }))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="customRaceDarkvision">Darkvision</Label>
                                    <Select
                                        value={newCustomRace.darkvision.toString()}
                                        onValueChange={(value) => setNewCustomRace(prev => ({
                                            ...prev,
                                            darkvision: parseInt(value)
                                        }))}
                                    >
                                        <SelectTrigger id="customRaceDarkvision">
                                            <SelectValue placeholder="Select darkvision"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {DARKVISION_OPTIONS.map(option => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="customRaceSpeed">Speed</Label>
                                    <Select
                                        value={newCustomRace.speed.toString()}
                                        onValueChange={(value) => setNewCustomRace(prev => ({
                                            ...prev,
                                            speed: parseInt(value)
                                        }))}
                                    >
                                        <SelectTrigger id="customRaceSpeed">
                                            <SelectValue placeholder="Select speed"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            {SPEED_OPTIONS.map(option => (
                                                <SelectItem key={option.value} value={option.value.toString()}>
                                                    {option.label}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button onClick={handleAddCustomRace} className="w-full">
                                    Add Race
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
