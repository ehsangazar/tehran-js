import React from "react"
import { Link } from "gatsby"
import './LastPost.css'
import computerImage from './computer.png'

const LastPost = ({post}) => {
    return (
        <div className="LastPost container">
            <div>
                <img src={computerImage} />
            </div> 
            <article
                itemScope
                itemType="http://schema.org/Article"
            >
                <h1 itemProp="headline">{post.frontmatter.title}</h1>
                <p>
                {new Date(post.frontmatter.date).toLocaleDateString(
                    "fa-IR"
                    )}  - ساعت ۶ به وقت تهران
                </p>
                <section
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody"
                />
            </article>                       
        </div>
    )
}

export default LastPost
