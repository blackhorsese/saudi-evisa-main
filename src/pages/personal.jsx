import Navbar from "../component/navbar";
import { useLocation,} from "react-router-dom";
import Footer from "../component/footer";
import Steppers from "../component/stepper";
import React, { useState } from "react";
import jsPDF from 'jspdf';

const PerfonalInfo = () => {
  const location = useLocation();
  const [step, setStep] = useState(1);
  const [image, setImage] = useState(null);
  const [countrynationality, setCountrynationality] = useState ('');
  const [firstname, setFirstname] = useState('');
  const [father, setFather] = useState ('');
  const [lastname, setLastname] = useState('');
  const [gender, setGender] = useState ('');
  const [marital, setMarital] = useState ('');
  const [dbirth, setDbirth] = useState ('');
  const [cbirth, setCbirth] = useState ('');
  const [ctbirth, setCtbirth] = useState ('');
  const [profession, setProfession] = useState ('');
  const [country, setCountry] = useState ('');
  const [city, setCity] = useState ('');
  const [zipcode, setZipcode] = useState ('');
  const [address, setAddress] = useState ('');
  
  // Step 2 Form Data
  const [passport, setPassport] = useState("");
  const [passportno, setPassportno] = useState ('');
  const [passportissueplace, setPassportissueplace] = useState ('');
  const [passportissuedate, setPassportissuedate] = useState ('');
  const [passportexpirydate, setPassportexpirydate] = useState ('');
  const [arrivaldate, setArrivaldate] = useState ('');
  const [departuredate, setDeparturedate] = useState ('');
  const [communication, setCommunication] = useState ('');
  const [phoneno, setPhoneno] = useState ('');
  const [residentialrorelative, setResidentialrorelative] = useState ('');
  const [commercial, setCommmercial] = useState ('');
  const [nameofperson, setNameofperson] = useState ('');
  const [scity, setScity] = useState ('');
  const [address1, setAddress1] = useState ('');
  const [address2, setAddress2] = useState ('');
  const [primarynumber, setPrimarynumber] = useState ('');
  const [email, setEmail] = useState ('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if input data is valid
    if (!image || !countrynationality || !firstname || !father || !lastname || !gender || !marital || !dbirth || !cbirth || !ctbirth || !profession || !country || !city || !zipcode || !address || !passport || !passportno || !passportissuedate || !passportissueplace || !passportexpirydate || !arrivaldate || !departuredate || !communication || !phoneno || !residentialrorelative || !commercial || !nameofperson || !scity || !address1 || !address2 || !primarynumber || !email ) {
      console.error('Please fill in all the fields');
      return;
    }

    // Store input data in local storage
    const inputData = { image, countrynationality, firstname, father, lastname, gender, marital, dbirth, cbirth, ctbirth, profession, country, city, zipcode, address, passport, passportno, passportissuedate, passportissueplace, passportexpirydate, arrivaldate, departuredate, communication, phoneno, residentialrorelative, commercial, nameofperson, scity, address1, address2, primarynumber, email };
    localStorage.setItem('inputData', JSON.stringify(inputData));

    try {
      // Send POST request to API
      const response = await postDataToAPI(inputData);
      if (response.ok) {
        const confirmation = window.confirm("Are you sure you want to submit this form?");
        if (confirmation) {
          // Redirect to selected coin's page
          window.location.href = '/review';
          // Generate and download PDF file
          generatePDF(inputData);
        }
      } else {
        console.error('Server responded with an error:', response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const postDataToAPI = async (inputData) => {
    const response = await fetch('https://eviasebackend.adaptable.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputData),
    });
    return response;
  };

  function handleImageUpload (event) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    };
    reader.onerror = error => {
      console.log("Error: ", error);
    };
  };

  const handleCountrynationalityChange = (event) => {
    setCountrynationality(event.target.value);
  }

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };

  const handleFatherChange = (event) => {
    setFather(event.target.value);
  }

  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }

  const handleMaritalChange = (event) => {
    setMarital(event.target.value);
  }

  const handleDbirthChange = (event) => {
    setDbirth(event.target.value);
  }
  const handleCbirthChange = (event) => {
    setCbirth(event.target.value);
  }

  const handleCtbirthChange = (event) => {
    setCtbirth(event.target.value);
  }

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  }

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  }
  const handleZipcodeChange = (event) => {
    setZipcode(event.target.value);
  }

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  }

  const handlePassportChange = (event) => {
    setPassport(event.target.value);
  }

  const handlePassportnoChange = (event) => {
    setPassportno(event.target.value);
  }

  const handlePassportissueplaceChange = (event) => {
    setPassportissueplace(event.target.value);
  }

  const handlePassportissuedateChange = (event) => {
    setPassportissuedate(event.target.value);
  }

  const handlePassportexpirydateChange = (event) => {
    setPassportexpirydate(event.target.value);
  }

  const handleArrivaldateChange = (event) => {
    setArrivaldate(event.target.value);
  }

  const handleDeparturedateChange = (event) => {
    setDeparturedate(event.target.value);
  }

  const handleCommunicationChange = (event) => {
    setCommunication(event.target.value);
  }

  const handlePhonenoChange = (event) => {
    setPhoneno(event.target.value);
  }

  const handleResidentialrorelativeChange = (event) => {
    setResidentialrorelative(event.target.value);
  }

  const handleCommmercialChange = (event) => {
    setCommmercial(event.target.value);
  }

  const handleNameofpersonChange = (event) => {
    setNameofperson(event.target.value);
  }

  const handleScityChange = (event) => {
    setScity(event.target.value);
  }

  const handleAddress1Change = (event) => {
    setAddress1(event.target.value);
  }

  const handleAddress2Change = (event) => {
    setAddress2(event.target.value);
  }

  const handlePrimarynumberChange = (event) => {
    setPrimarynumber(event.target.value);
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const generatePDF = (inputData) => {
    const doc = new jsPDF();
  
    // Add content to PDF file
    doc.text(`Image: ${inputData.image}`, 10, 10);
    doc.text(`Country Nationality: ${inputData.countrynationality}`, 10, 10);
    doc.text(`First Name: ${inputData.firstname}`, 10, 10);
    doc.text(`Father: ${inputData.father}`, 10, 20);
    doc.text(`Last Name: ${inputData.lastname}`, 10, 20);
    doc.text(`Gender: ${inputData.gender}`, 10, 20);
    doc.text(`Marital: ${inputData.marital}`, 10, 20);
    doc.text(`Date of Birth: ${inputData.dbirth}`, 10, 20);
    doc.text(`Country of Birth: ${inputData.cbirth}`, 10, 20);
    doc.text(`City of Birth: ${inputData.ctbirth}`, 10, 20);
    doc.text(`Profession: ${inputData.profession}`, 10, 20);
    doc.text(`Country: ${inputData.country}`, 10, 20);
    doc.text(`City: ${inputData.city}`, 10, 20);
    doc.text(`Zip Code: ${inputData.zipcode}`, 10, 20);
    doc.text(`Address: ${inputData.address}`, 10, 20);
    doc.text(`Passport: ${inputData.passport}`, 10, 20);
    doc.text(`Passport Number: ${inputData.passportno}`, 10, 20);
    doc.text(`Passprot Issue Place: ${inputData.passportissuedate}`, 10, 20);
    doc.text(`Passport Expir Date: ${inputData.passportexpirydate}`, 10, 20);
    doc.text(`Arrival Date: ${inputData.arrivaldate}`, 10, 20);
    doc.text(`Departuredate: ${inputData.departuredate}`, 10, 20);
    doc.text(`Communication: ${inputData.communication}`, 10, 20);
    doc.text(`Phone Number: ${inputData.phoneno}`, 10, 20);
    doc.text(`Residential Rorelative: ${inputData.residentialrorelative}`, 10, 20);
    doc.text(`Commercial: ${inputData.commercial}`, 10, 30);
    doc.text(`Name of Person: ${inputData.nameofperson}`, 10, 30);
    doc.text(`Saudi City: ${inputData.scity}`, 10, 30);
    doc.text(`Saudi City Address 1: ${inputData.address1}`, 10, 30);
    doc.text(`Saudi City Address 2: ${inputData.address2}`, 10, 30);
    doc.text(`Primary Number: ${inputData.primarynumber}`, 10, 30);
    doc.text(`Email: ${inputData.email}`, 10, 30);
    
    // Download PDF file
    doc.save('form-data.pdf');
  };

  return (
    <>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1  md:grid-cols-3">
        <div
          className="md:block lg:block hidden -z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed md:w-[25%] w-[90%] mx-auto "
          // style={{ overflowY: "scroll" }}
        >
          <Steppers />
        </div>

        <form onSubmit={handleSubmit} className="md:col-span-2 md:ml-[300px] lg:ml-[400px] xl:ml-[500px] md:w-[80%] mx-auto w-[90%] ">
          {step === 1 && (
            <div>
              <div className="mt-20">
                <p className=" text-[20px] font-semibold">Personal Picture</p>
                <p className="text-gray-400 text-sm py-4 md:w-1/2 md:mt-5">
                  Please upload image of dimension 200 x 200 px Personal Image Size
                  must be from 5 to 100 Kb Allowed picture file types are .jpg,
                  .jpeg, .png, .gif, .bmp Photo Specifications
                </p>

                <div style={{width: "auto"}}>
                  <input type="file"
                  accept="image/*"
                  onChange={handleImageUpload}/>
                  {image==""|| image==null?"": <img width={100} height={100} src={image}/>}
                </div>
              </div>
              <div className="mt-10 ">
                <label className="text-secondary font-medium ">
                  Country of Nationality*
                </label>
                <br />
                <select value={countrynationality}
                onChange={handleCountrynationalityChange}
                type="text"
                className="border-[1px] border-gray-500 w-[90%] py-3 mt-5 ">
                  <option>Select</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Canada">Canada</option>
                  <option value="China">China</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="CzechRepublic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="Germany">Germany</option>
                  <option value="Greece">Greece</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Italy">Italy</option>
                  <option value="Japan">Japan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Korea">Korea, South</option>
                  <option value="Spain">Spain</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="TaiwanChina">Taiwan China</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="UnitedKingdom">United Kingdom</option>
                  <option value="UnitedStates">United States</option>
                </select>
              </div>
              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  First Name or Given Name (English)*
                </label>
                <br />
                <input
                  type="text"
                  value={firstname}
                  onChange={handleFirstnameChange}
                  placeholder="First Name or Given Name (English)"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
                <p className="text-[12px] mt-2 text-gray-400">
                  Please make sure to enter the names exactly mentioned on your
                  passport in English only
                </p>
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Father Name or Middle Name (English){" "}
                  <span className="text-red-500">
                    'Optional,if available in passport'
                  </span>
                </label>
                <br />
                <input
                  type="text"
                  value={father}
                  onChange={handleFatherChange}
                  placeholder="Father Name or Middle Name (English)"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Last Name or Family Name (English)*
                </label>
                <br />
                <input
                  type="text"
                  value={lastname}
                  onChange={handleLastnameChange}
                  placeholder="Last Name or Family Name (English)*"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
                <p className="text-[12px] mt-2 text-gray-400">
                  Please make sure to enter the names exactly mentioned on your
                  passport in English only
                </p>
              </div>

              <div className="mt-10 ">
                <label className="text-secondary font-medium ">Gender*</label>

                <br />
                <select value={gender} 
                onChange={handleGenderChange}
                type="text" 
                className="border-[1px]  border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400 ">
                  <option>Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="mt-10 ">
                <label className="text-secondary font-medium ">
                  Marital Status*
                </label>
                <br />
                <select
                type="text" 
                value={marital} 
                onChange={handleMaritalChange} className="border-[1px] border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400">
                  <option>Select</option>
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Widow">Widow</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Date of Birth*
                </label>
                <br />
                <input
                  type="date"
                  value={dbirth}
                  onChange={handleDbirthChange}
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
                <p className="text-[12px] mt-2 text-gray-400">
                  Click on the title of the popup window to scroll multiple
                  months/years at a time
                </p>
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Country of Birth*
                </label>
                <br />
                <select value={cbirth} onChange={handleCbirthChange} className="border-[1px] border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400">
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antarctic">Antarctic</option>
                  <option value="Antigua">Antigua</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="19">Benin</option>
                  <option value="28">Bermuda</option>
                  <option value="33">Bhutan</option>
                  <option value="29">Bolivia</option>
                  <option value="25">Bosnia</option>
                  <option value="231">Botswana</option>
                  <option value="34">Bouvet Island</option>
                  <option value="30">Brazil</option>
                  <option value="241">British Indian Ocean Territory</option>
                  <option value="32">Brunei</option>
                  <option value="22">Bulgaria</option>
                  <option value="20">Burkina Faso</option>
                  <option value="17">Burundi</option>
                  <option value="106">Cambodia</option>
                  <option value="42">Cameroon</option>
                  <option value="36">Canada</option>
                  <option value="47">Cape Verde</option>
                  <option value="51">Cayman Island</option>
                  <option value="35">Central African Republic</option>
                  <option value="194">Chad</option>
                  <option value="39">Chile</option>
                  <option value="40">China</option>
                  <option value="50">Christmas Island</option>
                  <option value="37">Cocos Island</option>
                  <option value="45">Colombia</option>
                  <option value="46">Comoros</option>
                  <option value="43">Congo</option>
                  <option value="44">Cook Island</option>
                  <option value="48">Costa Rica</option>
                  <option value="41">Cote Divoire</option>
                  <option value="90">Croatia</option>
                  <option value="49">Cuba</option>
                  <option value="52">Cyprus</option>
                  <option value="53">Czech Republic</option>
                  <option value="57">Denmark</option>
                  <option value="55">Djibouti</option>
                  <option value="56">Dominica</option>
                  <option value="58">Dominican Republic</option>
                  <option value="228">East Timor</option>
                  <option value="60">Ecuador</option>
                  <option value="61">Egypt</option>
                  <option value="181">El Salvador</option>
                  <option value="79">Equatorial  Guinea</option>
                  <option value="224">Eritrea</option>
                  <option value="63">Estonia</option>
                  <option value="64">Ethiopia</option>
                  <option value="67">Falkland Islands</option>
                  <option value="69">Faroe Islands</option>
                  <option value="66">Fiji</option>
                  <option value="65">Finland</option>
                  <option value="68">France</option>
                  <option value="237">France, Metropolitan</option>
                  <option value="84">French Guiana</option>
                  <option value="167">French Polynesia</option>
                  <option value="12">French Southern and Antarctic</option>
                  <option value="70">Gabon</option>
                  <option value="77">Gambia</option>
                  <option value="72">Georgia</option>
                  <option value="54">Germany</option>
                  <option value="73">Ghana</option>
                  <option value="74">Gibraltar</option>
                  <option value="80">Greece</option>
                  <option value="82">Greenland</option>
                  <option value="81">Grenada</option>
                  <option value="76">Guadeloupe</option>
                  <option value="85">Guam</option>
                  <option value="83">Guatemala</option>
                  <option value="75">Guinea</option>
                  <option value="78">Guinea-Bissau</option>
                  <option value="86">Guyana</option>
                  <option value="91">Haiti</option>
                  <option value="88">Heard Island and McDonald Island</option>
                  <option value="89">Honduras</option>
                  <option value="1278">Hong Kong China</option>
                  <option value="92">Hungary</option>
                  <option value="98">Iceland</option>
                  <option value="94">India</option>
                  <option value="93">Indonesia</option>
                  <option value="96">Iran</option>
                  <option value="97">Iraq</option>
                  <option value="95">Ireland</option>
                  <option value="99">Italy</option>
                  <option value="100">Jamaica</option>
                  <option value="102">Japan</option>
                  <option value="101">Jordan</option>
                  <option value="103">Kazakhstan</option>
                  <option value="104">Kenya</option>
                  <option value="107">Kiribati</option>
                  <option value="109">Korea , South</option>
                  <option value="164">Korea, North</option>
                  <option value="87">Kosovo</option>
                  <option value="110">Kuwait</option>
                  <option value="105">Kyrgyzstan</option>
                  <option value="111">Laos</option>
                  <option value="121">Latvia</option>
                  <option value="112">Lebanon</option>
                  <option value="118">Lesotho</option>
                  <option value="113">Liberia</option>
                  <option value="114">Libya</option>
                  <option value="116">Liechtenstein</option>
                  <option value="119">Lithuania</option>
                  <option value="120">Luxembourg</option>
                  <option value="122">Macau China</option>
                  <option value="236">Macedonia, The Former Yugoslav Republic of</option>
                  <option value="126">Madagascar</option>
                  <option value="140">Malawi</option>
                  <option value="141">Malaysia</option>
                  <option value="127">Maldives</option>
                  <option value="130">Mali</option>
                  <option value="131">Malta</option>
                  <option value="129">Marshall Island</option>
                  <option value="230">Marshall Islands</option>
                  <option value="138">Martinique</option>
                  <option value="135">Mauritania</option>
                  <option value="139">Mauritius</option>
                  <option value="142">Mayotte</option>
                  <option value="128">Mexico</option>
                  <option value="229">Micronesia , Federated Stat</option>
                  <option value="124">Monaco</option>
                  <option value="133">Mongolia</option>
                  <option value="243">Montenegro</option>
                  <option value="137">Montserrat</option>
                  <option value="123">Morocco</option>
                  <option value="134">Mozambique</option>
                  <option value="132">Myanmar</option>
                  <option value="143">Namibia</option>
                  <option value="153">Nauru</option>
                  <option value="152">Nepal</option>
                  <option value="150">Netherlands</option>
                  <option value="238">Netherlands Antilles</option>
                  <option value="144">New Caledonia</option>
                  <option value="154">New Zealand</option>
                  <option value="148">Nicaragua</option>
                  <option value="145">Niger</option>
                  <option value="147">Nigeria</option>
                  <option value="149">Niue</option>
                  <option value="146">Norfolk Island</option>
                  <option value="227">Northern Mariana Islands</option>
                  <option value="151">Norway</option>
                  <option value="155">Oman</option>
                  <option value="156">Pakistan</option>
                  <option value="235">Palau</option>
                  <option value="234">Palestinian Territory, Occupied</option>
                  <option value="157">Panama</option>
                  <option value="161">Papua New Guinea</option>
                  <option value="166">Paraguay</option>
                  <option value="159">Peru</option>
                  <option value="160">Philippines</option>
                  <option value="158">Pitcairn Islands</option>
                  <option value="162">Poland</option>
                  <option value="165">Portugal</option>
                  <option value="163">Puerto Rico</option>
                  <option value="168">Qatar</option>
                  <option value="125">Republic of Moldova</option>
                  <option value="136">Republic of South Sudan</option>
                  <option value="169">Reunion</option>
                  <option value="170">Romania</option>
                  <option value="171">Russian Federation</option>
                  <option value="172">Rwanda</option>
                  <option value="233">Saint Helena</option>
                  <option value="108">Saint Kitts and Nevis</option>
                  <option value="115">Saint Lucia</option>
                  <option value="184">Saint Pierre and Miquelon</option>
                  <option value="212">Saint Vincent and  the Grenadines</option>
                  <option value="226">Samoa</option>
                  <option value="182">San Marino</option>
                  <option value="185">Sao Tome And Principe</option>
                  <option value="173">Saudi Arabia</option>
                  <option value="175">Senegal</option>
                  <option value="242">Serbia</option>
                  <option value="223">Serbia and Montenegro</option>
                  <option value="191">Seychelles</option>
                  <option value="180">Sierra Leone</option>
                  <option value="176">Singapore</option>
                  <option value="187">Slovak Republic</option>
                  <option value="188">Slovenia</option>
                  <option value="179">Solomon Islands</option>
                  <option value="183">Somalia</option>
                  <option value="219">South Africa</option>
                  <option value="177">South Georgia and The South</option>
                  <option value="62">Spain</option>
                  <option value="117">Sri Lanka</option>
                  <option value="174">Sudan</option>
                  <option value="186">Suriname</option>
                  <option value="178">Svalbard</option>
                  <option value="190">Swaziland</option>
                  <option value="189">Sweden</option>
                  <option value="38">Switzerland</option>
                  <option value="192">Syrian</option>
                  <option value="205">Taiwan China</option>
                  <option value="197">Tajikistan</option>
                  <option value="196">Thailand</option>
                  <option value="195">Togo</option>
                  <option value="198">Tokelau</option>
                  <option value="200">Tonga</option>
                  <option value="201">Trinidad and Tobago</option>
                  <option value="202">Tunisia</option>
                  <option value="203">Turkey</option>
                  <option value="199">Turkmenistan</option>
                  <option value="193">Turks and Caicos Islands</option>
                  <option value="204">Tuvalu</option>
                  <option value="207">Uganda</option>
                  <option value="208">Ukraine</option>
                  <option value="7">United Arab Emirates</option>
                  <option value="71">United Kingdom</option>
                  <option value="210">United States</option>
                  <option value="239">United States Minor Outlying Islands</option>
                  <option value="206">UR Tanzania</option>
                  <option value="209">Uruguay</option>
                  <option value="211">Uzbekistan</option>
                  <option value="216">Vanuatu</option>
                  <option value="240">Vatican City State</option>
                  <option value="213">Venezuela</option>
                  <option value="215">Vietnam</option>
                  <option value="214">Virgin Islands</option>
                  <option value="232">Virgin Islands(U.S.)</option>
                  <option value="217">Wallis and Futuna</option>
                  <option value="218">Yemen</option>
                  <option value="225">Yugoslavia</option>
                  <option value="220">Zaire</option>
                  <option value="221">Zambia</option>
                  <option value="222">Zimbabwe</option>
                </select>
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  City of Birth*
                </label>
                <br />
                <input
                  type="text"
                  value={ctbirth}
                  onChange={handleCtbirthChange}
                  placeholder="City of Birth*"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">Profession*</label>
                <br />
                <input value={profession}
                onChange={handleProfessionChange}
                  type="text"
                  placeholder="Profession"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
                <p className="text-[12px] mt-2 text-gray-400">
                  In case of minor please write "None"
                </p>
              </div>

              <div className="mt-20">
                <p className=" text-[30px] font-displace">
                  Current Residence Address
                </p>
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">Country*</label>
                <br />
                <input value={country} onChange={handleCountryChange}
                  type="text"
                  placeholder="Country"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">City*</label>
                <br />
                <input
                  type="text"
                  value={city}
                  onChange={handleCityChange}
                  placeholder="City"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Zip/Postal Code*
                </label>
                <br />
                <input
                  type="text"
                  value={zipcode}
                  onChange={handleZipcodeChange}
                  placeholder="Zip/Postal Code"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">Address*</label>
                <br />
                <input
                  type="text"
                  value={address}
                  onChange={handleAddressChange}
                  placeholder="Address"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
              </div>
              <button variant="primary" onClick={handleNext}>
                Next
              </button>
            </div>
          )}

          {step === 2 && (
          <div>
          <div>
            <p className=" text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-secondary">
            Application No.: 230328006206727
            </p>

            <div className="mt-10 ">
              <label className="text-secondary font-medium ">
                Passport Type*
              </label>

              <br />
              <select 
                value={passport} 
                onChange={handlePassportChange} 
                className="border-[1px]  border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400 ">
                <option>Select</option>
                <option value="diplomatic">Diplomatic Passport</option>
                <option value="regularrt">Regularrt</option>
                <option value="special">Special Passport</option>
              </select>
            </div>

            <div className="mt-10">
              <label className="text-secondary font-medium ">Passport No*</label>
              <br />
              <input
                type="text"
                value={passportno}
                onChange={handlePassportnoChange}
                placeholder="Passport No."
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>

            <div className="mt-10">
              <label className="text-secondary font-medium ">
                Passport Issue Place (Country or City)*
              </label>
              <br />
              <input
                type="text"
                value={passportissueplace}
                onChange={handlePassportissueplaceChange}
                placeholder="Passport Issue Place (Country or City)"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>

            <div className="md:flex grid ">
              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Passport Issue Date*
                </label>
                <br />
                <input
                  type="date"
                  value={passportissuedate}
                  onChange={handlePassportissuedateChange}
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
                />
                <p className="text-[12px] mt-2 text-gray-400">
                  Click on the title of the popup window to scroll multiple
                  months/years at a time
                </p>
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Passport Expiry Date*
                </label>
                <br />
                <input
                  type="date"
                  value={passportexpirydate}
                  onChange={handlePassportexpirydateChange}
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
                />
                <p className="text-[12px] mt-2 text-gray-400">
                  Passport must be valid at least 6 months from the Visa
                  application submission date
                </p>
              </div>
            </div>

            <div className="md:flex grid ">
              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Expected Date of Arrival*
                </label>
                <br />
                <input
                  type="date"
                  value={arrivaldate}
                  onChange={handleArrivaldateChange}
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
                />
                <p className="text-[12px] mt-2 text-gray-400">
                  Expected Date of Arrival should be chosen in the Visa validity
                  (1 year), from the date of submission
                </p>
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Expected Date of Departure*
                </label>
                <br />
                <input
                  type="date"
                  value={departuredate}
                  onChange={handleDeparturedateChange}
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
                />
                <p className="text-[12px] mt-2 text-gray-400">
                  The tourist visa is valid for 1 year starting from the issuance
                  date and the period of stay is 90 days.
                </p>
              </div>
            </div>

            <div className="mt-14">
              <p className="font-displace text-[23px]  md:text-[25px] font-medium">
                Communication Preference *
              </p>
            </div>

            <div className="mt-10">
              <input
                type="text"
                value={communication}
                onChange={handleCommunicationChange}
                placeholder="example@gmail.com*"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>
            <div className="mt-10">
              <input
                type="number"
                value={phoneno}
                onChange={handlePhonenoChange}
                placeholder="+332222222232"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>

            <div className="mt-20">
              <p className=" text-[30px] font-displace">
                Residence Address in Saudi Arabia
              </p>
            </div>

            <div className="flex justify-between w-[80%] mt-10">
              <div className="flex">
                <input 
                  value={residentialrorelative} 
                  onChange={handleResidentialrorelativeChange} 
                  type="text" 
                  id="myCheckboxs" 
                />
                <p className="self-center ml-2 "> RESIDENTIAL OR RELATIVE</p>
              </div>

              <div className="flex">
                <input 
                  type="text" 
                  id="myCheckboxs"
                  value={commercial}
                  onChange={handleCommmercialChange}
                />
                <p className="self-center ml-2"> COMMERCIAL ACCOMMODATION</p>
              </div>
            </div>

            <div className="mt-10">
              <label className="text-secondary font-medium ">
                Name of Person*
              </label>
              <br />
              <input
                type="text"
                value={nameofperson}
                onChange={handleNameofpersonChange}
                placeholder="Name of Person"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>

            <div className="mt-10">
              <label className="text-secondary font-medium ">City*</label>
              <br />
              <select
                type="text"
                value={scity}
                onChange={handleScityChange}
                placeholder="City"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              >
                <option>Select</option>
                <option value="Abha">Abha</option>
                <option value="Afif">Afif</option>
                <option value="AlGhat">Al Ghat</option>
              </select>
            </div>

            <div className="mt-10">
              <label className="text-secondary font-medium ">Address 1*</label>
              <br />
              <input
                type="text"
                value={address1}
                onChange={handleAddress1Change}
                placeholder="Address 1"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>

            <div className="mt-10">
              <label className="text-secondary font-medium ">Address 2*</label>
              <br />
              <input
                type="text"
                value={address2}
                onChange={handleAddress2Change}
                placeholder="Address 2"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>

            <div className="md:flex  grid justify-between">
              <div className="mt-10">
                <label className="text-secondary font-medium ">
                  Primary Contact Number
                </label>
                <br />
                <div className="flex">
                  <div className="border-2 border-gray-400 w-[20%] mt-3 p-3 text-[20px] text-gray-500">
                    966
                  </div>
                  <input
                    type="number"
                    value={primarynumber}
                    onChange={handlePrimarynumberChange}
                    placeholder="XXXXXXXXXXX"
                    className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                  />
                </div>
              </div>

              <div className="mt-10">
                <label className="text-secondary font-medium ">Email</label>
                <br />
                <input
                  type="mail"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="example@example.com"
                  className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center my-20">
            <button variant="primary" onClick={handlePrev}>
              Previous
            </button>{" "}
            <button type="submit" variant="primary" value={handleSubmit}
              className="ml-5 text-secondary text-[17px] border-4 border-secondary w-[30%] p-3 rounded-full  block h-[60px]  self-end"
            >
              Submit
            </button>
          </div>
        </div>
        )}
        </form>
      </div>

      <Footer />
    </>
  );
}

export default PerfonalInfo;
