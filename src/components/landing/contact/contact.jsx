import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { keys } from '../../../utils/keys';
import { toast } from 'react-toastify';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(keys.service_key, keys.template_id, e.target, keys.public_key).then(() => {
            e.target.name.value = "";
            e.target.email.value = "";
            e.target.textarea.value = "";
            toast.success("Your Email Sent Successfully")
            emailjs.sendForm(keys.service_key, keys.template_reply_id, e.target, keys.public_key)
        }).catch((err) => {
            console.log(err);
            toast.error("Error Sending Email")
        })

    }

    return (
        <div className='w-full' id="contact-sec">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                <div className="mb-4">
                    <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
                        <h2
                            className="font-heading mb-4 font-bold tracking-tight text-3xl sm:text-5xl text-logo-color-same">
                            Get in Touch
                        </h2>
                        <p className="mx-auto mt-4 max-w-3xl text-xl text-gray-600">Feel free to contact us
                        </p>
                    </div>
                </div>
                <div className="flex items-stretch justify-center">
                    <div className="grid md:grid-cols-2">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg text-gray-600">
                                Need IT assistance? Fill out the form below and our expert consultant, Exetom, will get back to you shortly!
                                <br />
                                Have a question or need support? Reach out to Exetom using the form, and we'll respond as soon as possible!
                            </p>
                            <ul className="mb-6 md:mb-0">
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0b1927] text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            <path
                                                d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Our Address
                                        </h3>
                                        <p className="text-gray-600">17a Shrubland Road, Banstead</p>
                                        <p className="text-gray-600">England, SM7 2ES</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0b1927] text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path
                                                d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                                            </path>
                                            <path d="M15 7a2 2 0 0 1 2 2"></path>
                                            <path d="M15 3a6 6 0 0 1 6 6"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Contact
                                        </h3>
                                        <p className="text-gray-600 flex items-center gap-2">Mobile: + (447) 84 215-3349 <FaWhatsapp color='#25D366' size={20} /></p>
                                        <p className="text-gray-600">Mail: info@exetom.com</p>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div className="flex h-10 w-10 items-center justify-center rounded bg-[#0b1927] text-gray-50">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                            fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="h-6 w-6">
                                            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                                            <path d="M12 7v5l3 3"></path>
                                        </svg>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900">Working
                                            hours</h3>
                                        <p className="text-gray-600">Monday - Friday: 9:00 (AM to PM) EST</p>
                                        <p className="text-gray-600">Saturday &amp; Sunday: off</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                            <h2 className="mb-4 text-2xl font-bold">Ready to Get Started?</h2>
                            <form id="contactForm" onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label><input type="text" id="name" autoComplete="off" placeholder="Your name" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="name" required />
                                        </div>
                                        <div className="mx-0 mb-1 sm:mb-4">
                                            <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label><input type="email" id="email" autoComplete="off" placeholder="Your email address" className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" name="email" required />
                                        </div>
                                    </div>
                                    <div className="mx-0 mb-1 sm:mb-4">
                                        <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label><textarea id="textarea" name="description" cols="30" rows="5" placeholder="Write your message..." className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md sm:mb-0" required ></textarea>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="w-full bg-[#0b1927] text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact