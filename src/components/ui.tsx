import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"

export default function ExampleComponent() {
    return (
        <div>
            <Label htmlFor="example-input">Example Input</Label>
            <Input id="example-input" placeholder="Type something..."/>
            <Button>Click me</Button>
        </div>
    )
}

