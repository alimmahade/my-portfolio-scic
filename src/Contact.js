import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [state, handleSubmit] = useForm("xaykrvlr");
  if (state.succeeded) {
    toast.success("Email Send Sucessfuly!");
    return;
  }
  return (
    <div>
      <ToastContainer position="top-center" />
      <form
        action="https://formspree.io/f/xaykrvlr"
        method="POST"
        onSubmit={handleSubmit}
        className="p-10"
      >
        <label htmlFor="email">Email Address</label>
        <input
          className="input input-bordered input-success w-full max-w-xs"
          id="email"
          type="email"
          name="email"
        />
        <br />
        <br />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          className="textarea textarea-accent"
          placeholder="type messege "
          id="message"
          name="message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <div>
          <button className="btn" type="submit" disabled={state.submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
