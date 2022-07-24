import React from "react"

type Hello = {
    title: string
}

const Hello: React.FC<Hello> = props => {
    return <h1 className="text-2xl font-semibold">{props.title}.</h1>
}

export default Hello
