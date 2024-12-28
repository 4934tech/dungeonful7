import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {type CharacterSheetProps} from "@/types/character"

export default function CharacterSheet({character}: CharacterSheetProps) {
    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent>
                    <dl className="grid grid-cols-2 gap-2">
                        <dt className="font-semibold">Name:</dt>
                        <dd>{character.name}</dd>
                        <dt className="font-semibold">Class:</dt>
                        <dd>{character.class}</dd>
                        <dt className="font-semibold">Race:</dt>
                        <dd>{character.race}</dd>
                        <dt className="font-semibold">Background:</dt>
                        <dd>{character.background}</dd>
                        <dt className="font-semibold">Alignment:</dt>
                        <dd>{character.alignment}</dd>
                        <dt className="font-semibold">Level:</dt>
                        <dd>{character.level}</dd>
                        <dt className="font-semibold">Experience:</dt>
                        <dd>{character.experience}</dd>
                    </dl>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Abilities</CardTitle>
                </CardHeader>
                <CardContent>
                    <dl className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {Object.entries(character.abilities).map(([ability, score]) => (
                            <div key={ability} className="contents">
                                <dt className="font-semibold capitalize">{ability}:</dt>
                                <dd>{score}</dd>
                            </div>
                        ))}
                    </dl>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Skills</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {Object.entries(character.skills).map(([skill, proficient]) => (
                            <li key={skill} className={proficient ? "font-semibold" : ""}>{skill}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Equipment</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside">
                        {character.equipment.map((item, index) => (
                            <li key={item + index}>{item}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </div>
    )
}

