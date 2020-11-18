import React from "react";
import emailjs from "emailjs-com";
import "./style.css";

function Contact() {
    function sendEmail(event) {
        event.preventDefault();
        emailjs.sendForm('service_bokj3ol', 'template_wwo76gm', event.target, 'user_eE4STRSTZQcemToQIuSU5')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
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
                                    <input type="text" name="user_name" className="form-control" id="nameContact" placeholder="Name" />
                                    <br />
                                    <label>Email</label>
                                    <input type="email" name="user_email" className="form-control" id="emailContact"
                                        placeholder="Email Address" />
                                    <small id="emailHelp" className="form-text text-muted">All emails will remain private</small>
                                    <br />
                                    <label>Message</label>
                                    <textarea type="text" name="message" className="form-control" id="messageContact" rows="3"
                                        placeholder="Leave a message here!"></textarea>
                                    <br />
                                    <button type="submit" value="send" className="btn btn-primary" id="modalButton" data-toggle="modal"
                                        data-target="#contactModal">
                                        Submit
                                </button>
                                </form>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
            <div className="push"></div>
        </div>

    )
}


export default Contact;