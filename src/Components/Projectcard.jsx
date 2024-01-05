import React from 'react'
import SourceIcon from '@mui/icons-material/Source';
import PreviewIcon from '@mui/icons-material/Preview';

function Projectcard({imgsrc,title,view,source,byusing1,byusing2,byusing3,text}) {
  return (
    <div className='main-container'>
<div className='container-content'>
<div className='project-img'>
      <img src={imgsrc}  alt="" />
      </div>
      <div className='project-content'>
        <h2>{title}</h2>
        <p>{text}</p>
        <ul>
          <li>{byusing1}</li>
          <li>{byusing2}</li>
          <li>{byusing3}</li>
        </ul>
        <div className='project-icons'>
          <a href={view}> <SourceIcon className="list-icon"/></a>
          <a href={source}> <PreviewIcon className="list-icon"/></a>
        </div>
      </div>
</div>
    </div>
  )
}

export default Projectcard



