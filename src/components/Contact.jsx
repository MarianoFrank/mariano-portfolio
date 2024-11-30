import React from "react";

import Button from "./Button";
import SectionHeader from "./SectionHeader";

const Contact = () => (
    <section className="tiny-content">
        <SectionHeader text="Contacto" icon="mailbox-flag-up" />
        <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-2">
                {/* TODO */}
                <Button icon="copy" buttonType="normal" text=" marianofrank@hotmail.com" />

                <Button icon="paper-plane" buttonType="normal" href="mailto:marianofrank@hotmail.com" />
            </div>
            <div className="flex justify-between items-center gap-2">
                {/* TODO Instagram */}

                <Button iconFa="fa-brands fa-github" buttonType="normal" />

                <Button iconFa="fa-brands fa-linkedin" buttonType="normal" />
            </div>
        </div>
    </section>
);

export default Contact;
