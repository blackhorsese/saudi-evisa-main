import emailjs from 'emailjs-com';
import Navbar from "../navbar";
import { useLocation,} from "react-router-dom";
import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Contact = () => {

  const [email, setEmail] = useState('');
  const location = useLocation();
  const [name, setName] = useState('');
  const [company, setCompany] = useState ('');
  const [number, setNumber] = useState ('');
  const [subject, setSubject] = useState ('');
  const [message, setMessage] = useState ('');
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const templateParams = {
        name: name,
        company: company,
        email: email,
        number: number,
        subject: subject,
        message: message,
    };
    emailjs.send(
      'service_ckzlh2f',
      'template_uwmp5uo',
      templateParams,
      'QQIaVyUi87kjZFhBr'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccess(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setLoading(false);
      });
    };

  return (
    <>
    <div className='supportser'>
        <div className=''>
            <Navbar color={location.pathname} />
            <h1 className='mx-auto text-7xl py-40 max-w-screen-2xl font-displace text-white leading-[1]'>
                Tourist Care
            </h1>
        </div>
    </div>
    <div className='overflow-x-hidden z-10 md:px-10 mx-auto px-5'>
        <div className='fixed-section my-3 w-full bg-[#fff] font-semibold justify-between flex px-10 text-lg max-w-screen-2xl mx-auto text-[#6e6e6e]'>
            <div className=''>
                <h1>
                    Contact us
                </h1>
            </div>
            <div>
                <h1>
                    Frequently Asked Questions
                </h1>
            </div>
            <div>
                <h1>
                    Call Us
                </h1>
            </div>
            <div>
                <h1>
                    Social & Other Channels
                </h1>
            </div>
        </div>
        <div className='border-b border-b-[#b1b1b1]'/>
        <div className='max-w-screen-2xl mx-auto align-middle'>
            <div className='md:px-10 px-5 mx-auto pt-20'>
                <h1 className='text-4xl font-semibold'>
                    Contact Us
                </h1>
                <p className='text-[#949494] py-2'>
                    Send us a message, complaint or enquiry by filling the contact form below.
                </p>
            </div>
        </div>
        <div className='text-black py-5 md:px-10 px-5 max-w-screen-2xl mx-auto'>
            <form onSubmit={handleSubmit}>
                { !success && 
                <div className='mx-auto'>
                    <div className='md:grid md:grid-cols-2 gap-x-8 mx-auto justify-center'>
                        <div className='py-3'>
                            <h1 className='py-2 justify-center'>
                                First Name
                            </h1>
                            <input
                                className='bg-[#f0f0f0] border py-2 w-full px-4 mx-auto'
                                placeholder='Enter First Name'
                                type="name"
                                id="name"
                                value={name}
                                required
                                onChange={(event) => setName(event.target.value)}
                            />
                        </div>
                        <div className='py-3'>
                            <h1 className='py-2 justify-center'>
                                Last Name
                            </h1>
                            <input
                                className='bg-[#f0f0f0] border py-2 w-full px-4 mx-auto md:mt-0'
                                placeholder='Enter Last Name'
                                type="company"
                                id="company"
                                value={company}
                                required
                                onChange={(event) => setCompany(event.target.value)}
                            />
                        </div>
                        <div className='py-3'>
                            <h1 className='py-2 justify-center'>
                                Email Address
                            </h1>
                            <input
                                className='bg-[#f0f0f0] border py-2 w-full px-4 mx-auto'
                                placeholder='Enter Email Address'
                                type="email"
                                id="email"
                                value={email}
                                required
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className='py-3'>
                            <h1 className='py-2 justify-center'>
                                Phone Number
                            </h1>
                            <input
                                className='bg-[#f0f0f0] border py-2 w-full px-4 mx-auto'
                                placeholder='Phone Number'
                                type="number"
                                id="number"
                                value={number}
                                required
                                onChange={(event) => setNumber(event.target.value)}
                            />
                        </div>
                    </div>
                    <div className='mt-5'>
                        <h1 className='py-2'>
                            Message Type
                        </h1>
                        <select
                        
                            className='bg-[#f0f0f0] border w-96 px-4 mx-auto py-2'
                            placeholder='Subject'
                            type="subject"
                            id="subject"
                            value={subject}
                            required
                            onChange={(event) => setSubject(event.target.value)}
                        >
                            <option>
                                Complaint
                            </option>
                            <option value="Emergency">
                                Emergency
                            </option>
                            <option value="Enquiry">
                                Enquiry
                            </option>
                            <option>
                                Suggestion
                            </option>
                        </select>
                        <textarea
                            className='bg-[#f0f0f0] border pb-52 py-5 w-full px-4 mx-auto mt-8 overflow-y-hidden'
                            placeholder='Message'
                            type="message"
                            id="message"
                            value={message}
                            required
                            onChange={(event) => setMessage(event.target.value)}
                        />
                    </div>
                    <div className='items-center'>
                        <button className='bg-[#CD252B] px-10 tracking-wider py-2 md:mt-10 mt-5 text-white' type="submit">
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </div>
                </div>}
                {success && <p className='justify-center mx-auto text-center pt-10 font-semibold text-[#CD252B]'>Email sent successfully!</p>}
            </form>
        </div>
    </div>
    </>
  );  
}

export default Contact;