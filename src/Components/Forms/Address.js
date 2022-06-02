import React, { useState } from "react";
// import { Form, Card, Button } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import validator from "validator";

// creating functional component ans getting props from app.js and destucturing them
const Address = ({ nextStep, handleFormData, prevStep, values }) => {
   //creating error state for validation
  const [error, setError] = useState(false);

    // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();

     // checking if value of first name and last name is empty show error else take to next step
    if (validator.isEmpty(values.address) || validator.isEmpty(values.city) || validator.isEmpty(values.state) ) {
      setError(true);
    } else {
      nextStep();
    }
  };
  return (
    <>
      <Box component="form" 
      noValidate 
      autoComplete="off"
      onSubmit={submitFormData} 
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, mt: 12}}>
            <div className="progress-bar">
              <div style={{width: '100%'}}></div>
            </div>
            <Grid container row-spacing={2} columnSpacing={0.4}>
              <Grid item xs={12}>
                
                {error ? (
                    <TextField
                    autoComplete="given-name"
                    name="Address"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    error
                    helperText="Required field"
                    onChange={handleFormData("address")}
                    autoFocus
                  />
              ) : (
                <TextField
                autoComplete="given-name"
                name="address"
                required
                fullWidth
                id="address"
                label="Address"
                
                onChange={handleFormData("address")}
                autoFocus
              />
              )}
              </Grid>
              <Grid item xs={12}>
                
                {error ? (
                    <TextField
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    error
                    helperText="Required field"
                    onChange={handleFormData("city")}
                    autoComplete="family-name"
                  />
              ) : (
                <TextField
                    required
                    fullWidth
                    id="city"
                    label="City"
                    name="city"
                    onChange={handleFormData("city")}
                    autoComplete="family-name"
                  />
              )}
              </Grid>
              <Grid item xs={12}>
                
                {error ? (
                    <TextField
                    required
                    fullWidth
                    id="state"
                    label="State"
                    name="state"
                    error
                    helperText="Write correct state-format"
                    onChange={handleFormData("state")}
                    autoComplete="state"
                  />
              ) : (
                <TextField
                  required
                  fullWidth
                  id="state"
                  label="State"
                  name="state"
                  onChange={handleFormData("state")}
                  autoComplete="state"
                />
              )}

              </Grid>
            </Grid>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button variant="contained" onClick={prevStep} sx={{ mt: 4 }}>
                     Previous
              </Button>
             <Button variant="contained" type="submit" sx={{ mt: 4 }}>
                    Submit
             </Button>
           </div>
            
      </Box>
    </>
  );
};

export default Address;
{/* <Card style={{ marginTop: 100 }}>
<Card.Body>
  <Form onSubmit={submitFormData}>
    <Form.Group className="mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control
        style={{ border: error ? "2px solid red" : "" }}
        type="text"
        name="address"
        placeholder="Address"
        onChange={handleFormData("address")}
      />
      {error ? (
        <Form.Text style={{ color: "red" }}>
          This is a required field
        </Form.Text>
      ) : (
        ""
      )}
    </Form.Group>
    
    <Form.Group className="mb-3">
      <Form.Label>City</Form.Label>
      <Form.Control
        style={{ border: error ? "2px solid red" : "" }}
        type="text"
        name="city"
        placeholder="City"
        onChange={handleFormData("city")}
      />
      {error ? (
        <Form.Text style={{ color: "red" }}>
          This is a required field
        </Form.Text>
      ) : (
        ""
      )}
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>State</Form.Label>
      <Form.Control
        style={{ border: error ? "2px solid red" : "" }}
        type="text"
        name="state"
        placeholder="State"
        onChange={handleFormData("state")}
      />
      {error ? (
        <Form.Text style={{ color: "red" }}>
          This is a required field
        </Form.Text>
      ) : (
        ""
      )}
    </Form.Group>
    
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Button variant="primary" onClick={prevStep}>
        Previous
      </Button>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </div>
  </Form>
</Card.Body>
</Card> */}