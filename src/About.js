import React from 'react'

const About = () => {
  return (
    <section id="about">
        <div class="container mt-4 pt-4">
            <h1 class="text-center">About Me</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <img src={require('./images/me.jpg')} class= "imageAboutPage" alt=""/>
                </div>

                <div class="col-lg-8">
                    <p> Every Night I Tell MySelf, Yes I Did Amazing Job Today
                        
                    </p>
                    <div className="row mt-3">
                        <div className="col-md-6">
                            <ul>
                                <li>Name: Smriti Panta</li>
                                <li>Age: 22</li>
                                <li>Occupation: Junior Developer</li>

                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>Phone: +977 9861306563</li>
                                <li>Email: smritipanta1@gmail.com</li>
                                <li>Address: Nepal</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <p>
                            I am highly motivated to learn about various programming languages.It Keeps me motivated and good going towards my work.I would love to work with reputed company to polish my skills and capabilites.I hope i would be able to learn enough to be a senior developer in my coming future.
    
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About