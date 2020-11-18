import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./style.css";
function Contact() {

    const [modalClass, setModalClass] = useState("modal hideModal");
    const [text, setText] = useState("I'll get back to you as soon as possible.")

    useEffect(() => {
    }, [modalClass]);
    useEffect(() => {
    }, [text]);

    function sendEmail(event) {
        event.preventDefault();
        console.log("working");
        if (event.target[0].value && event.target[1].value && event.target[2].value) {
            setModalClass("modal showModal");
            setText("I'll get back to you as soon as possible.")
            console.log("event target", event);
            emailjs.sendForm('service_bokj3ol', 'template_wwo76gm', event.target, 'user_eE4STRSTZQcemToQIuSU5')
                .then((result) => {
                    console.log(result.text);
                    event.target[0].value = "";
                    event.target[1].value = "";
                    event.target[2].value = "";
                }, (error) => {
                    console.log(error.text);
                });
        } else {
            console.log("incomplete");
            setText("Please complete all fields.");
            setModalClass("modal showModal");
        }
    }

    function modalClose() {
        setModalClass("modal hideModal");
    }

    return (
        <div data-aos="fade-right" data-aos-duration="700" data-aos-easing="linear">
            <div className="push"></div>
            <section className="row">
                <section className="col-lg-12">
                    <section className="card border-light mb-3 back">
                        <header className="card-header">
                            <h2>Contact</h2>
                        </header>
                        <section className="card-body">
                            <section>
                                <form className="form-group contact-form" onSubmit={sendEmail}>
                                    <label>Name</label>
                                    <input type="text" name="user_name" className="form-control" placeholder="Name" />
                                    <br />
                                    <label>Email</label>
                                    <input type="email" name="user_email" className="form-control"
                                        placeholder="Email Address" />
                                    <small id="emailHelp" className="form-text text-muted">All emails will remain private</small>
                                    <br />
                                    <label>Message</label>
                                    <textarea type="text" name="message" className="form-control" rows="3"
                                        placeholder="Leave a message here!"></textarea>
                                    <br />
                                    <button type="submit" value="send" className="btn btn-primary" id="modalButton">
                                        Submit
                                </button>
                                </form>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <div className={modalClass} id="contactModal" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Thank you!</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body mt-2">
                            <p>{text}</p>
                        </div>
                        <div className="modal-footer">
                            <button onClick={() => modalClose()} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="push"></div>
        </div>

    )
}


export default Contact;