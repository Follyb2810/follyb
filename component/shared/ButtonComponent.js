import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ButtonComponent = ({label,variant,style,url,color}) => {
    return (
        <Button variant={variant} sx={style} color={color}>
        { url ? 
            (<Link href={url}>
                {label}
            </Link>):
             label
             }
        </Button>
    )
}

export default ButtonComponent
