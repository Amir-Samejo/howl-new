import React from 'react'

function Preloader() {
    return (
        <>
            <div class="loader-wrap">
                <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
                    <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
                </svg>

                <div class="loader-wrap-heading">
                    <div class="load-text">
                        <span>H</span>
                        <span>O</span>
                        <span>W</span>
                        <span>L</span>
                        <span>D</span>
                        <span>I</span>
                        <span>G</span>
                        <span>I</span>
                        <span>T</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Preloader
