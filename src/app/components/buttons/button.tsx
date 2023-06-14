import { IconInstagram } from "../icons/instagram";
import { IconGithub } from "../icons/github";
import { IconLinkedin } from "../icons/linkedin";
import { IconWhatsapp } from "../icons/whatsapp";

import './buttons.scss'

export function Buttons() {
    return (
        <div className="social">
            <a target="_blank" href="https://www.instagram.com/guilherme.developer/"><IconInstagram width="24" height="24" color="white" /></a>
            <a target="_blank" href="https://github.com/gbflores/"><IconGithub width="24" height="24" color="white" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/devguilherme/"><IconLinkedin width="24" height="24" color="white" /></a>
            <a target="_blank" href="https://api.whatsapp.com/send?phone=5551992029800"><IconWhatsapp width="24" height="24" color="white" /></a>
        </div>
    )
}