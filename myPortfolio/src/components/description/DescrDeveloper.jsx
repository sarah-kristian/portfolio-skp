function DescrDeveloper(){
    const cardClass = "flex-1 bg-slate-200 rounded-lg mb-4 md:mb-0 p-4"
    const cardContainer = "flex flex-col rounded-lg lg:flex-row bg-indigo-800 p-2 mx-16 gap-2 text-left text-slate-950"
     
    return (
        <section id="description" aria-labelledby="description-heading">
            <h2 id="description-heading" className="sr-only">Developer Description</h2>
            <div role="document">
                <br/>
                <p>As a budding software developer, I’m ready to dive 
                    into the tech world with projects like JavaScript 
                    trivia and Mad Libs, and Python-based tic-tac-toe 
                    and age-facts generator.
                    These creations showcase my ability to blend fun 
                    with functionality, demonstrating my potential to 
                    contribute innovative solutions in my future tech roles. 
                </p>
                <br/>
            </div>

            <div id="descrTeacher" className={cardContainer} role="region" aria-labelledby="descrTeacher-heading">
                <h3 id="descrTeacher-heading" className="sr-only">Teacher Description</h3>
                <div className={cardClass} role="article" aria-labelledby="programming-languages-heading">
                    <div className="pl-4">
                        <p id="programming-languages-heading" className="font-bold">Programming Languages:</p>
                        <ul className="list-disc ml-8 mt-2">
                            <li>JavaScript (JS)</li>
                            <li>Python</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>

                        <p className="text-md font-bold" id="frameworks-libraries-heading">Frameworks and Libraries:</p>
                        <ul className="list-disc ml-8 mt-1">
                            <li>JavaScript: React, Node.js, Vite</li>
                            <li>CSS: Bootstrap, Tailwind CSS</li>
                        </ul>
                    </div>
                </div>
                <div className={cardClass} role="article" aria-labelledby="relevant-sample-heading">
                    <p id="relevant-sample-heading" className="font-bold">Relevant Sample</p>
                    <p>I was thinking of linking to the python age-facts generator I made last semester. Or I might put the trivia game here. </p>
                </div>
            </div>
        </section>)
}

export default DescrDeveloper
