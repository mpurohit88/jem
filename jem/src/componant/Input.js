import React from 'react'
import TextField from '@material-ui/core/TextField';
// var, let, const

function Input({label,id,defaultValue}) {

        return <div> <TextField
          label={label}
          id={id}
          defaultValue={`Enter ${defaultValue}`}
          variant="filled"
        />
        </div>
    }
export default Input;
