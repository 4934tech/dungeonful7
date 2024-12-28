import CharacterSheet from '@/components/CharacterSheet'
import DiceRoller from '@/components/DiceRoller'

export default function Home() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">D&D Interface</h1>
            <div className="grid md:grid-cols-2 gap-8">
                <CharacterSheet/>
                <DiceRoller/>
            </div>
        </main>
    )
}
