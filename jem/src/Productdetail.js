import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Productdetail() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pcode"
            name="productName"
            label="Product name"
            fullWidth
            autoComplete="pname"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pweight"
            name="Gross Weight"
            label="Enter Gross Weight"
            fullWidth
            autoComplete="gweight"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="stoneweight"
            name="Stone Weight"
            label="Stone Weight"
            fullWidth
            autoComplete="sweight"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="netweight"
            name="Net weight"
            label="Net Weight"
            fullWidth
            autoComplete="nweight"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="purity"
            name="Purity"
            label="Purity"
            fullWidth
            autoComplete="purity"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="fineweight" name="Fine Weight" label="Fine Weight" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="stonecharges"
            name="Stone Charges"
            label="Stone Charges"
            fullWidth
            autoComplete="Stone Charges"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="remarks"
            name="remarks"
            label="Remarks"
            fullWidth
            autoComplete="Remarks"
          />
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
    </React.Fragment>
  );
}