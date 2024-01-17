import Link from "next/link";
import { Error } from "./components/Layout/ErrorLayout";

export default function NotFound(){
    return (
        <Error>
            <h1 className="text-4xl font-bold">Page Not found</h1>
            <Link href={'/'} shallow className="underline text-blue-600">Return Home</Link>
        </Error>
    )
}