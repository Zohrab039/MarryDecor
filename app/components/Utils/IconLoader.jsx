import React from 'react'

export default function IconLoader({ icon, className }) {
    return (
        <i translate="no" lang="en" className={`notranslate material-symbols-outlined ${className ? className : ''}`}>
            {icon}
        </i>
    )
}