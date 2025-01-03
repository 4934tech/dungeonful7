import CharacterCreation from '@/features/character-creation'

export default function Home() {
    return (
        <main className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8 text-center">D&D Character Creator</h1>
            <CharacterCreation/>
        </main>
    )
}

