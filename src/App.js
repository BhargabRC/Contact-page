import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faDribbble } from '@fortawesome/free-brands-svg-icons'
import Form from "./component/Form"
import './App.scss';

function App() {

    return (
        <div className="container">

            <header>

                <h1 className='App-header'>Contact</h1>

            </header>

            <map>

                <iframe width="100%" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=lastminute.com%20London%20Eye+(lastminute.com%20London%20Eye)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">
                    Calculate population in area
                </a>
                </iframe>

            </map>

            <main>
                <Form/>

            </main>

            <aside>

                <div className='categories'>
                    <div className='headcontainer'>
                        <h4>Address</h4>
                    </div>
                    <div className='bodycontainer'>
                        <p>14 LE Gounlburn St, Sydney 1198NSA.</p>
                    </div>
                </div>

                <div className="categories">
                    <div className='headcontainer'>
                        <h4>Phone</h4>
                    </div>
                    <div className='bodycontainer'>
                        <p>(+089) 19918989</p>
                    </div>
                </div>

                <div className="categories">
                    <div className='headcontainer'>
                        <h4>Email</h4>
                    </div>
                    <div className='bodycontainer'>
                        <p>support@domain.com</p>

                    </div>
                </div>

                <div className="categories">
                    <div className='headcontainer'>
                        <h4>Opening Time</h4>
                    </div>
                    <div className='bodycontainer'>
                        <p>8:00Am – 10:00Pm, Sunday Close</p>
                    </div>
                </div>

                <div className="categories">
                    <div className='headcontainer'>
                        <h4>Socials</h4>
                    </div>

                    <div className="bodycontainer">
                        <ul className='social'>
                            <li>
                                <a className="icons" href=''>
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a className="icons" href=''>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a className="icons" href=''>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                            </li>
                            <li>
                                <a className="icons" href=''>
                                    <FontAwesomeIcon icon={faDribbble} />
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

            </aside>

        </div>

    );


}

export default App;