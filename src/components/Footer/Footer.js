import React from "react"
import { Link } from "gatsby"
import './Footer.css'

const Footer = ({ post }) => {
    return (
        <div className="Footer container">
            <div className="Footer--Followers">
                <h2>
                    تهران‌جی‌اس را دنبال کنید
                </h2>
                <ul>
                    <li>
                        <a href="https://t.me/tehranjs">
                            <i class="fa fa-telegram"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <footer>
                © {new Date().getFullYear()}, Built with
                {` `}
                <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    )
}

export default Footer
