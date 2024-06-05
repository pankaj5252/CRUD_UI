import React from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <>
      <div className="container">
        <h2 className="text-center">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card bg-transparent text-white">
              <div className="card-body">
                <Fade>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="name" className="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent "
                        id="name"
                        placeholder="Your Name"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control bg-transparent "
                        id="email"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="subject" className="form-label">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="form-control bg-transparent "
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="message" className="form-label">
                        Message
                      </label>
                      <textarea
                        className="form-control bg-transparent "
                        id="message"
                        rows="5"
                        placeholder="Your Message"
                      ></textarea>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn text-white">
                        Submit
                      </button>
                    </div>
                  </form>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
