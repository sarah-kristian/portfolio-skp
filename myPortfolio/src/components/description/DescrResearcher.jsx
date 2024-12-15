function DescrResearcher(){

    const cardClass = "flex-1 bg-slate-100/90 rounded-lg mb-4 md:mb-0 p-4"
    const cardContainer = "flex flex-col rounded-lg lg:flex-row bg-violet-800 p-2 mx-16 gap-2 text-left text-slate-950"
    
    return (
        <section id="description" aria-labelledby="description-heading">
            <h2 id="description-heading" className="sr-only">Description</h2>
            <div>
                <br />
                <p> A researcher at heart, my years (and years!) of academic pursuits 
                    have honed sharp analytical skills and a strong problem-solving 
                    drive. Now in software development, I will channel these strengths 
                    to enhance software functionality and user experiences. My 
                    transition from academia to tech showcases my dedication to 
                    transforming theoretical knowledge into practical, user-focused 
                    solutions.
                </p> 
                <br />
            </div>
                
            <div id="descrResearcher" className={cardContainer} role="region" aria-labelledby="descrResearcher-heading">
                <h3 id="descrResearcher-heading" className="sr-only">Researcher Description</h3>
                <div className={cardClass} role="article" aria-labelledby="relevant-experiences-heading">
                    <h4 id="relevant-experiences-heading" className="font-bold">Relevant Experiences</h4>
                    <p>Research Assistant:</p>
                    <p>Labrador Language Preservation Project</p> 
                    <p>Innu Language Project</p>
                    <p>Publications / Presentations?</p>
                </div>
                <div className={cardClass} role="article" aria-labelledby="collaborative-development-heading">
                    <h4 id="collaborative-development-heading" className="font-bold">Sample Collaborative Development</h4>
                    <p>Creation of Innu-read alongs</p>
                    <div className="flex flex-col lg:flex-row p-2 mx-16 gap-6">
                        <img
                            src="./src/assets/kidsbook.png"
                            alt="cover of Innu-aimun childrens's book"
                            className="rounded w-32 h-auto hover:opacity-75 transition-opacity duration-300"
                            onClick={() => window.open('https://www.innu-aimun.ca/english/stories/innu-read-alongs/kinderarten-social-studies/mushuau-dialect/tshe-nishi-manukashunanitsh/', '_blank')}
                            role="button"
                            aria-label="Open Innu-aimun children's book 1"
                        />
                        <img
                            src="./src/assets/kidsbook2.png"
                            alt="cover of Innu-aimun childrens's book"
                            className="rounded w-32 h-auto hover:opacity-75 transition-opacity duration-300"
                            onClick={() => window.open('https://www.innu-aimun.ca/english/stories/innu-read-alongs/writing-workshop-books/mushuau-dialect/tanien-mak-umushuma-natshi-kusseuatsh/', '_blank')}
                            role="button"
                            aria-label="Open Innu-aimun children's book 2"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DescrResearcher