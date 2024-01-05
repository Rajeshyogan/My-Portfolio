import "./Projectcard.css"
import React from 'react'
import Projectcard from "./Projectcard"
import { projectcarddata } from "./Projectcards"
import "./Projectexample.css"

function ProjectExample() {
  return (
      <div  className="projectex-style">
        {projectcarddata.map(({ imgsrc, title, text, view, source, id ,using1,using2,using3}) => (
          <Projectcard
            key={id} // Ensure 'index' is unique for each item
            imgsrc={imgsrc}
            title={title}
            text={text ? text.slice(0,67)+"..." : text}
            view={view}
            source={source}
            byusing1={using1}
            byusing2={using2}
            byusing3={using3}
          />
        ))}
      </div>
  );
}


export default ProjectExample