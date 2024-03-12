
import React, { useState, useEffect } from 'react'
import AnimatedCursor from 'react-animated-cursor'

const Cursor = () => {
    const [state, setState] = useState('blendmode')
    const searchParams = new URLSearchParams(document.location.search)
    const cursorParam = searchParams.get('cursor')

    useEffect(() => {
        if (cursorParam) setState(cursorParam)
    }, [cursorParam])
    return (
        <>
            {state === 'blendmode' && (
                <AnimatedCursor
                    color="255,255,255"
                    innerSize={10}
                    outerSize={15}
                    innerScale={1}
                    outerScale={3}
                    outerAlpha={1}
                    hasBlendMode={true}
                    outerStyle={{
                        mixBlendMode: 'exclusion'
                    }}
                    innerStyle={{
                        backgroundColor: 'var(--cursor-color)',
                        mixBlendMode: 'exclusion'
                    }}
                />
            )}
        </>
    )
}

export default Cursor
