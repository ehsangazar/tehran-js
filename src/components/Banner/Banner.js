import React from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import './Banner.css'
import bannerImage from './bg.jpg'

const Banner = () => {
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
                            <Button>
                                عضویت در رویداد
                            </Button>
                            <Button model="white">
                                پیشنهاد برای سخنرانی
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
