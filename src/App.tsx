import {
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import Button
    from "./Components/Buttons/Button.tsx";
import IconButton from "./Components/Buttons/IconButton.tsx";


export default function App() {
    return (
        <>
            <Button className={"text-yellow-500"} text={"test"} variant={"info"}/>

            <IconButton text={"sd"} variant={"primary"} size={""}/>


        </>
    );
}
