import React from "react";

function Contact() {
    return (
        <div data-aos="zoom-in-down" data-aos-duration="3000">
            <section class="row">
                <section class="col-lg-12">
                    <section class="card border-light mb-3 back">
                        <header class="card-header">
                            <h2>Contact</h2>
                        </header>
                        <section class="card-body">
                            <section>
                                <form class="form-group">
                                    <label for="nameContact">Name</label>
                                    <input type="text" class="form-control" id="nameContact" placeholder="Name" />
                                </form>
                                <form class="form-group">
                                    <label for="emailContact">Email</label>
                                    <input type="email" class="form-control" id="emailContact"
                                        placeholder="Email Address" />
                                    <small id="emailHelp" class="form-text text-muted">All emails will remain private</small>
                                </form>
                                <form class="form-group">
                                    <label for="messageContact">Message</label>
                                    <textarea type="text" class="form-control" id="messageContact" rows="3"
                                        placeholder="Leave a message here!"></textarea>
                                </form>
                                <button type="button" class="btn btn-primary" id="modalButton" data-toggle="modal"
                                    data-target="#contactModal">
                                    Submit
                                </button>


                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    )
}


export default Contact;