import {createRoot} from 'react-dom/client'
import './styles.css'
import {App} from './App'

/*
Model JSX auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.3 model.glb --transform --simplify --resolution=2048
Author: Omar Faruq Tawsif (https://sketchfab.com/omarfaruqtawsif32)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
*/

function Root() {
    return (
        <>
            <nav>
                <img alt="ZK Table Top & Webisoft x Laplace link" src="ll_logo.png" width="35"/>
                <a href="https://www.webisoft.com">zKTT<br/>wbsft x laplace</a>
                <p>launching in <br/>2025</p>
            </nav>
            <div className={"three-js"}>
                <App/>
            </div>
            <footer>
                <div>
                    <a href="https://github.com/webisoftSoftware/">github</a> | <a
                    href="https://x.com/zktabletop">twitter</a>
                </div>
                <a href="mailto:zktt.team@gmail.com">get in touch</a>
            </footer>
        </>
    )
}

createRoot(document.getElementById('root')).render(
    <Root/>
)
