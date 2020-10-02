import React from "react"
import { Link } from "gatsby"
import './LastPost.css'
import computerImage from './computer.png'
import Button from "../Button/Button"

const LastPost = ({post}) => {

    const register = event => {
      if (event) event.preventDefault()
      document.getElementById("main-event").scrollIntoView()
    }

    return (
      <div id="main-event" className="LastPost container-2">
        <div>
          <img src={computerImage} />
        </div>
        <article itemScope itemType="http://schema.org/Article">
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>
            {new Date(post.frontmatter.date).toLocaleDateString("fa-IR")} - ساعت
            ۶ به وقت تهران
          </p>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <div className="register-button">
            <Button onClick={register}>عضویت در این رویداد</Button>
          </div>
        </article>
      </div>
    )
}

export default LastPost
