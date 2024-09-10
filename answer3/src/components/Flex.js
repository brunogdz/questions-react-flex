import React from 'react'
import './styles.css'

const Flex = () => {

    return (
        <>
            <div className='flexbox'>
                <div className="flexbox-container-top">
                    <div className="box flexbox-content-1">
                        <h1>Hero</h1>
                    </div>
                    <div className="box flexbox-content-2">
                        <h1>Sliderbar</h1>
                    </div>
                </div>
                <div className="flexbox-container-top">
                    <div className="box flexbox-content-3">
                        <h1>Main Content</h1>
                        <span>**If things do not look right, make sure your browser is in "Experimental Mode".</span>
                    </div>
                    <div className="box flexbox-content-4">
                        <h1>Extra Content</h1>
                    </div>
                </div>
                <div className="flexbox-container-bottom">
                    <div className="box flexbox-content-5">
                        <h1>Related Images</h1>
                    </div>
                    <div className="box flexbox-content-6">
                        <h1>Related Posts</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Flex;