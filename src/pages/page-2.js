import * as React from "react"
import { Link } from "gatsby"
import "aframe"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ThreeSixty from '../images/RYLO0006_still.jpg'
import ThreeVid from '../images/vrexport.mp4'


const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <div style={{height:500}}>
    <a-scene embedded>
      <a-sky src={ThreeSixty} rotation="0 -130 0"></a-sky>
      <a-text
        font="kelsonsans"
        value="Clearwater, Florida, Bridge01"
        width="6"
        position="-2.5 0.25 -1.5"
        rotation="0 15 0"
      ></a-text>
    </a-scene>
    </div>
    <div style={{height:500}}>
      <div>And now some video for your enjoyment</div>
    <a-scene embedded>
      <a-videosphere rotation="0 180 0" src={ThreeVid} 
                     play-on-window-click
                     play-on-vrdisplayactivate-or-enter-vr>
      </a-videosphere>
    </a-scene>
    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
