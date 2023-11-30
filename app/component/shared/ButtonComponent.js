import { Button } from '@mui/material'
import React from 'react'

const ButtonComponent = ({label,outline}) => {
    return (
        <Button outline={outline}>
         <a href=''>
         {label}
         </a>
        </Button>
    )
}

export default ButtonComponent
