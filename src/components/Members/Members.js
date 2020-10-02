import React from "react"
import "./Members.css"

const Members = ({ members }) => {
  return (
    <div className="Members">
      {members &&
        members.map(member => (
          <div className="member">
            <img src={member.image} />
            <div className="tooltip">
              {member.first_name}{` `}{member.last_name}
            </div>
          </div>
        ))}
    </div>
  )
}

export default Members
