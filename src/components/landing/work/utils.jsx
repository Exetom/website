function openLink(link, target = "_blank") {
    window.open(link, target)
}
export const SingleProject = (props) => {
    const { image, index, link } = props
    const handleOnClickWindow = () => {
        openLink(link)
    }
    return (
        <div data-aos={index % 2 === 0 ? 'zoom-in-right' : "zoom-in-left"} className='single-work-container our-works-projects-single' onClick={handleOnClickWindow}>
            <div className="flex items-center taskbar">
                <div className="dots">
                    <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                </div>
                <div className="flex justify-center items-center w-full task-url">
                    <div className="url-bar">
                        {link}
                    </div>
                </div>
            </div>
            <img src={image} alt="" />
        </div>
    )
}
