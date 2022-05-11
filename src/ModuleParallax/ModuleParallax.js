import React from 'react';
import "./ModuleParallax.css";
import image1 from "../images/pcblue.jpg";
import image2 from "../images/pexx.jpg";
import image3 from "../images/perfo.jpg";
import { Parallax } from "react-parallax"

const insideStyles = {
  background: "#fff",
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "traslate(-50%, -50%)"
}


export function ModuleParallax() {
  return (
    <div>
      <Parallax bgImage={image1} strength={400}>
        <div style={{ height: "100vh"}}>
          <div style={insideStyles}>CATASISTEMAS.COM</div>
        </div>
      </Parallax>

      <div className='section'>
        <h3 className='border'>Acerca de mi</h3>
        <p>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
      </div>
      <Parallax bgImage={image2} blur= {{min: -1, max: 3}}>
        <div style={{ height: 500}}>
          <div style={insideStyles}>
            Y mucho mas!
          </div>
        </div>

      </Parallax>

      <div className='section'>
        <h3 className='border'>Y mucho mas</h3>
        <p>dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged</p>
      </div>
      <Parallax bgImage={image3} strength={200} renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(255,125,9, ${percentage * 1})`,
              left: "50%",
              top: "50%",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: percentage * 500,
              height: percentage *500
            }}
          />
        </div>
      )}>
        <div style={{ height: 1000}}>
          <div style={insideStyles}>
           Aventurate
          </div>
        </div>

      </Parallax>

    </div>
  )
}
