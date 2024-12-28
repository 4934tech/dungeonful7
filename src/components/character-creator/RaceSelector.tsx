'use client'

import {useState} from 'react'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group"
import {Label} from "@/components/ui/label"
import {ScrollArea} from "@/components/ui/scroll-area"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {races} from '@/data/races'
import {type Race, type Subrace} from '@/types/race'

interface RaceSelectorProps {
    selectedRace: string
    selectedSubrace: string
    onRaceChange: (raceId: string, subraceId?: string) => void
}

export default function RaceSelector({selectedRace, selectedSubrace, onRaceChange}: RaceSelectorProps) {
    const [activeTab, setActiveTab] = useState('overview')
    const currentRace = races.find(race => race.id === selectedRace)

    const handleRaceChange = (raceId: string) => {
        const race = races.find(r => r.id === raceId)
        onRaceChange(raceId, race?.subraces?.[0]?.name)
    }

    const handleSubraceChange = (subraceName: string) => {
        onRaceChange(selectedRace, subraceName)
    }

    const formatHeight = (inches: number) => {
        const feet = Math.floor(inches / 12)
        const remainingInches = inches % 12
        return `${feet}'${remainingInches}"`
    }

    const renderRaceDetails = (race: Race) => {
        return (
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                    <TabsTrigger value="traits">Traits</TabsTrigger>
                    <TabsTrigger value="subraces">Subraces</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-4">
                    <div className="prose dark:prose-invert max-w-none">
                        <p>{race.description}</p>
                        <h4>Age</h4>
                        <p>{race.age.description}</p>
                        <h4>Alignment</h4>
                        <p>{race.alignment}</p>
                        <h4>Size</h4>
                        <p>{race.size.description}</p>
                    </div>
                </TabsContent>

                <TabsContent value="features" className="space-y-4">
                    {race.features.map(feature => (
                        <Card key={feature.name}>
                            <CardHeader>
                                <CardTitle className="text-lg">{feature.name}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </TabsContent>

                <TabsContent value="traits" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <h4 className="font-semibold mb-2">Ability Score Increases</h4>
                            <ul className="list-disc list-inside">
                                {race.abilityScoreIncreases.map(increase => (
                                    <li key={increase.ability}>
                                        {increase.ability.charAt(0).toUpperCase() + increase.ability.slice(1)}:
                                        +{increase.increase}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-2">Speed</h4>
                            <ul className="list-disc list-inside">
                                {Object.entries(race.speed).map(([type, speed]) => (
                                    <li key={type}>
                                        {type.charAt(0).toUpperCase() + type.slice(1)}: {speed} ft.
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {race.darkvision && (
                            <div>
                                <h4 className="font-semibold mb-2">Darkvision</h4>
                                <p>{race.darkvision} feet</p>
                            </div>
                        )}
                        <div>
                            <h4 className="font-semibold mb-2">Languages</h4>
                            <ul className="list-disc list-inside">
                                {race.languages.map(language => (
                                    <li key={language}>{language}</li>
                                ))}
                            </ul>
                        </div>
                        {race.proficiencies && (
                            <div className="col-span-2">
                                <h4 className="font-semibold mb-2">Proficiencies</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(race.proficiencies).map(([category, items]) => (
                                        <div key={category}>
                                            <h5 className="font-medium mb-1 capitalize">{category}</h5>
                                            <ul className="list-disc list-inside">
                                                {items.map(item => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </TabsContent>

                <TabsContent value="subraces" className="space-y-4">
                    {race.subraces ? (
                        race.subraces.map(subrace => (
                            <Card key={subrace.name}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{subrace.name}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <p>{subrace.description}</p>
                                    <div>
                                        <h4 className="font-semibold mb-2">Ability Score Increases</h4>
                                        <ul className="list-disc list-inside">
                                            {subrace.abilityScoreIncreases.map(increase => (
                                                <li key={increase.ability}>
                                                    {increase.ability.charAt(0).toUpperCase() + increase.ability.slice(1)}:
                                                    +{increase.increase}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    {subrace.features.length > 0 && (
                                        <div>
                                            <h4 className="font-semibold mb-2">Features</h4>
                                            <ul className="list-disc list-inside">
                                                {subrace.features.map(feature => (
                                                    <li key={feature.name}>
                                                        <span
                                                            className="font-medium">{feature.name}:</span> {feature.description}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <p>This race has no subraces.</p>
                    )}
                </TabsContent>
            </Tabs>
        )
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Choose Your Race</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup value={selectedRace} onValueChange={handleRaceChange}>
                            {races.map(race => (
                                <div key={race.id} className="flex items-center space-x-2">
                                    <RadioGroupItem value={race.id} id={race.id}/>
                                    <Label htmlFor={race.id}>{race.name}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </CardContent>
                </Card>

                {currentRace && (
                    <Card>
                        <CardHeader>
                            <CardTitle>{currentRace.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {renderRaceDetails(currentRace)}
                        </CardContent>
                    </Card>
                )}
            </div>

            {currentRace?.subraces && (
                <Card>
                    <CardHeader>
                        <CardTitle>Choose Your Subrace</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <RadioGroup value={selectedSubrace} onValueChange={handleSubraceChange}>
                            {currentRace.subraces.map(subrace => (
                                <div key={subrace.name} className="flex items-center space-x-2">
                                    <RadioGroupItem value={subrace.name} id={subrace.name}/>
                                    <Label htmlFor={subrace.name}>{subrace.name}</Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}

