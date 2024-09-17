"use client"
import styles from './contactcard.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { MdAccessTimeFilled } from "react-icons/md";


function ContactCard() {
    function openPhone() {
        window.location.href = "tel:+905531983575"
    }
    function openMail() {
        window.location.href = "mailto:yazilim@iyte.edu.tr"
    }
    return (
        <div>
            <div className={styles.container}>
                <h1>Contact Us </h1>
                <div className={styles.items}>
                    <FaLocationDot style={{ fontSize: "30px", color: "rgb(242, 162, 70)" }} />
                    <p>Gülbahçe, Urla, İzmir</p>
                </div>
                <div className={styles.items}>
                    <BsFillTelephoneFill onClick={openPhone} style={{ cursor: "pointer", fontSize: "30px", color: "rgb(242, 162, 70)" }} />
                    <p> +90 (553) 198 3575</p>
                </div>
                <div className={styles.items}>
                    <IoMdMail onClick={openMail} style={{ cursor: "pointer", fontSize: "30px", color: "rgb(242, 162, 70)" }} />
                    <p>yazilim@iyte.edu.tr </p>
                </div>
                <div className={styles.items}>
                    <MdAccessTimeFilled style={{ fontSize: "30px", color: "rgb(242, 162, 70)" }} />
                    <p>Pzt-Cm: 08.30-17.30 <br />
                        Hafta Sonu: Kapalı
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ContactCard