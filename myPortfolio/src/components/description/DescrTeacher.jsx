function DescrTeacher(){

    const cardClass = "flex-1 bg-slate-100/90 rounded-lg mb-4 md:mb-0 p-4"
    const cardContainer = "flex flex-col rounded-lg lg:flex-row bg-fuchsia-800 p-2 mx-16 gap-2 text-left text-slate-950"

    return (
        <section id="description" aria-label="Teacher Description">
            <div>
                <br />
                <p>As a teacher stepping into the tech world, I will leverage what I know to help bridge the gap between learning and doing. Whether it’s picking up the language of your ancestors or getting the hang of algebra, I’m here to make learning accessible and engaging. 
                </p>
                <br />
            </div>
            <div id="descrTeacher" className={cardContainer} role="region" aria-label="Teacher Experience and Samples">

                <div className={cardClass} role="article" aria-label="Relevant Experience">
                    <p className="font-bold">Relevant Experience</p>
                    <p>Undergraduate Linguistics Courses (Memorial University)</p>
                    <p>Private tutoring (Math, Python, Computer Fundamentals)</p>
                </div>
                <div className={cardClass} role="article" aria-label="Relevant Sample">
                    <p className="font-bold">Relevant Sample</p>
                    <p>I might put a link to a madLibs game I made that can teach word categories or syntactic categories.</p>
                </div>
            </div>
        </section>)
}

export default DescrTeacher