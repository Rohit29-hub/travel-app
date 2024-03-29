'use client'
import { ErrorModal } from "@/components/modals/Errormodal"
export default function ErrorBoundry({error,reset}){
    return (
        <ErrorModal>
            <h1 className="text-3xl font-bold">Error Message</h1>
            <p>Home Layout Error :- {error.message}</p>
            <button onClick={()=> reset()} className="py-2 px-4 rounded text-white bg-violet-500">Try Again</button>
        </ErrorModal>
    )
}