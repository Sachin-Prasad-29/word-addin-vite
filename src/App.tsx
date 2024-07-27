/// <reference types="office-js" />

import React, { useEffect, useState } from 'react'

const App: React.FC = () => {
    const [selectedText, setSelectedText] = useState('')
    const [inputText, setInputText] = useState('')

    useEffect(() => {
        Office.onReady(() => {
            // Office.js is ready
            console.log('Office.js is ready')
        })
    }, [])

    const getSelectedText = async () => {
        await Word.run(async (context) => {
            const range = context.document.getSelection()
            range.load('text')
            await context.sync()
            setSelectedText(range.text)
        })
    }

    const addTextToDocument = async () => {
        await Word.run(async (context) => {
            const body = context.document.body
            body.insertText(inputText, Word.InsertLocation.end)
            await context.sync()
            setInputText('') // Clear the input field
        })
    }

    return (
        <div>
            <h1 className="text-3xl font-bold underline">Hello world!</h1>

            <div className="my-4">
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={getSelectedText}
                >
                    Get Selected Text
                </button>
            </div>

            <div className="my-4">
                <h2 className="text-xl">Selected Text:</h2>
                <p>{selectedText}</p>
            </div>

            <div className="my-4">
                <input
                    title="inputText"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    className="px-2 py-1 border rounded"
                />
                <button
                    className="ml-2 px-4 py-2 bg-green-500 text-white rounded"
                    onClick={addTextToDocument}
                >
                    Add Text
                </button>
            </div>
        </div>
    )
}

export default App
