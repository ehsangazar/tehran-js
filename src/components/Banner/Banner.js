import React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import './Banner.css'
import bannerImage from './bg.jpg'

const Banner = () => {

    const scrollDown = (event) => {
        if (event) event.preventDefault()
        document.getElementById("main-event").scrollIntoView()
    }

    return (
        <div className="Banner--Parent">
            <div className="Banner--Image">
                <img src={bannerImage} />
            </div>
            <div className="container">
                <div className="Banner">
                    <div className="Banner--Headline">
                        <h1>به تهران جی‌اس خوش آمدید</h1>
                        <p>
                            این گروه متشکل از برنامه‌نویسان فارسی زبان سراسر دنیاست که قصد دارند رویداد‌هایی را به صورت ماهانه برای یادگیری برگزار کنند.
                        </p>
                        <div>
                            <Button onClick={scrollDown}>
                                مشاهده رویداد آینده
                            </Button>
                            <Button model="white">
                                پیشنهاد برای سخنرانی
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="arrow-down">
                <a href="#" title="" onClick={scrollDown}><i className="fa fa-chevron-down"></i></a>
            </div>
        </div>
    )
}

export default Banner
