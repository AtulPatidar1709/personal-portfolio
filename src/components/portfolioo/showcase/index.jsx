import React from 'react'

const Showcase = ({data ,transition}) => {
  return (
    <div className="projects-showcase">
        {data.map((project) => (
            <div className="showcase-item">
                <img src={project.media.thumbnail} alt ="" />
            </div>
        ))}
    </div>
  )
}

export default Showcase;
