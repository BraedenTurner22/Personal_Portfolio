import React, {useState} from "react";
import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils";

export const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.menu}>
                <img className={styles.menuBtn} src={getImageUrl("nav/Three_Lines.png")} alt="menu-button"/>
                <ul className={styles.menuItems}>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#cooking">Cooking</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};