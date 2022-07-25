import React from "react"
import Navbar from "../Navbar"

const MainLayout: React.FC<any> = props => {
    return (
        <main data-theme="mytheme">
            <Navbar />
            {props.children}
        </main>
    )
}

export default MainLayout
