import React, { useState } from "react";
// import { Form, Card, Button } from "react-bootstrap";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import '../../App.css';
import validator from "validator";



const PersonalDetails = ({ nextStep, handleFormData, values }) => {
  //creating error state for validation
  const [error, setError] = useState(false);

  // after form submit validating the form data using validator
  const submitFormData = (e) => {
    e.preventDefault();
    // nextStep();

    // checking if value of first name and last name is empty show error else take to step 2
    if (
      validator.isEmpty(values.firstName) ||
      validator.isEmpty(values.lastName) || validator.isEmpty(values.email) || !validator.isEmail(values.email)
    ) {
      setError(true);
    } else {
      nextStep();
    }
  };

  return (
    <div>
      
      <Box component="form" 
      noValidate 
      autoComplete="off"
      onSubmit={submitFormData} 
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, mt: 15}}>
            <div className="progress-bar" style={{marginBottom: '15px'}}>
              <div style={{width: '50%'}}></div>
            </div>
            <Grid container row-spacing={2} columnSpacing={0.4}>
              <Grid item xs={12}>
                
                {error ? (
                    <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    error
                    helperText="Required field"
                    onChange={handleFormData("firstName")}
                    autoFocus
                  />
              ) : (
                <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                defaultValue={values.firstName}
                onChange={handleFormData("firstName")}
                autoFocus
              />
              )}
              </Grid>
              <Grid item xs={12}>
                
                {error ? (
                    <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    error
                    helperText="Required field"
                    onChange={handleFormData("lastName")}
                    autoComplete="family-name"
                  />
              ) : (
                <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    defaultValue={values.lastName}
                    onChange={handleFormData("lastName")}
                    autoComplete="family-name"
                  />
              )}
              </Grid>
              <Grid item xs={12}>
                
                {error ? (
                    <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    error
                    helperText="Write correct email-format"
                    onChange={handleFormData("email")}
                    autoComplete="email"
                  />
              ) : (
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={handleFormData("email")}
                  autoComplete="email"
                />
              )}

              </Grid>
            </Grid>
            <Button variant="contained" type="submit" sx={{ mt: 4 }}>Continue</Button>
      </Box>
      {/* <Card style={{ marginTop: 100 }}>
        <Card.Body>
          <Form onSubmit={submitFormData}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.firstName}
                type="text"
                placeholder="First Name"
                onChange={handleFormData("firstName")}
              />
              
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                name="lastName"
                defaultValue={values.lastName}
                type="text"
                placeholder="Last Name"
                onChange={handleFormData("lastName")}
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
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                
                
                type="email"
                placeholder="Email"
                onChange={handleFormData("email")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card> */}
    </div>
  );
};

export default PersonalDetails;
 