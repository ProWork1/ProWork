import React, { useState } from 'react'

const PanelColor = () => {
    const [oldColor, setOldColor] = useState('cyan')
    const [openClose, setOpenClose] = useState({
        display: 'none',
    })

    const mytheme = color => {
        document.getElementById('wrapper').classList.replace(oldColor, color)
        setOldColor(color)
    }

    const colorPanel = () => {
        if (openClose.display === 'none') {
            setOpenClose({})
        } else {
            setOpenClose({
                display: 'none',
            })
        }
        document.getElementById('panel-admin').animate({ width: 'toggle' }, 100)
    }

    return (
        <div id='panel'>
            <div id='panel-admin' style={openClose}>
                <div class='panel-admin-box'>
                    <div id='tootlbar_colors'>
                        <button
                            class='color'
                            style={{ backgroundColor: '#1abac8' }}
                            onClick={() => mytheme('cyan')}
                        ></button>
                        <button
                            class='color'
                            style={{ backgroundColor: '#ff8a00' }}
                            onClick={() => mytheme('orange')}
                        ></button>
                        <button
                            class='color'
                            style={{ backgroundColor: '#b4de50' }}
                            onClick={() => mytheme('lightgreen')}
                        ></button>
                        <button
                            class='color'
                            style={{ backgroundColor: '#e54e53' }}
                            onClick={() => mytheme('red')}
                        ></button>
                        <button
                            class='color'
                            style={{ backgroundColor: '#1abc9c' }}
                            onClick={() => mytheme('green')}
                        ></button>
                        <button
                            class='color'
                            style={{ backgroundColor: '#159eee' }}
                            onClick={() => mytheme('blue')}
                        ></button>
                    </div>
                </div>
            </div>
            <a class='open' style={{ cursor: 'pointer' }} onClick={colorPanel}>
                <span>
                    <i class='fas fa-cog fa-spin'></i>
                </span>
            </a>
        </div>
    )
}
export default PanelColor
