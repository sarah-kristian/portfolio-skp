
function Home(){

    const cardClass = "flex-1 bg-slate-200/90 rounded-lg mb-4 md:mb-0 p-4"
    const cardContainer = "flex flex-col lg:flex-row bg-blue-500 p-2 mx-16 gap-2 rounded-lg text-slate-950"

    return (
    <section id="home" className="my-6">
        <div id ="home containder"className={cardContainer}>
            <div className={cardClass}>
            <p> My name is Sarah. I&apos;m linguist turned software developer. My journey through academia into software development has equipped me with a unique blend of skills, making my projects not just functional but also enriching.</p>
            <p> Whether you&apos;re here to explore my work or looking for a potential collaboration, thank you for visiting. </p>
            </div>
        </div>
    </section>
    )
}

export default Home