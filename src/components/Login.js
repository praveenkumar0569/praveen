import { Height } from '@mui/icons-material'
import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
const Login = () => {
    const [userdata,setUserdata]=useState({
        username:'',
        password:''
    })
    const [validate,setValidate]=useState(false)
    const handlechange=(e)=>{
        const {name,value}=e.target
        setUserdata({...userdata,[name]:value})
    }
    
  const handleButton=()=>{
    if(userdata.username=="praveen" && userdata.password=="9848705345"){
       setValidate(true)
       console.log(userdata)
       setUserdata({username:'',password:''})
       
    }
    else{
        console.log("wrong");
        setValidate(false)
    }    
  }
  console.log(userdata)
  return (
    <Box  sx={{
        borderRadius:'10px',
        width:'80%',
        height:'600px',
        bgcolor:'#266575',
       marginLeft:'140px',
      
        marginTop:'50px',
        display:'flex',
        alignItems:'center',
        textAlign:'center',
        justifyContent:'center'
    }}
    >
      <Paper spacing={2} elevation={0} sx={{bgcolor:'#a7e3f2',width:'80%',height:'500px' ,display:'flex',justifyContent:'space-between'}} >
      <img className='images' src='https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' width='50%' height='400px' />
        <Paper sx={{bgcolor:'white' ,width:'40%',height:'80%' ,marginRight:'40px',marginTop:'40px'}}>
           
            <Stack spacing={2} sx={{margin:'50px'}}>
            <Typography variant="h4" component="h4" color="primary">
             Log in
            </Typography>
         <TextField type='text' id="outlined-basic" label="Email Address" variant="outlined" name='username' value={userdata.username} onChange={handlechange} required/>
        <TextField type='password'  id="outlined-basic" label="Password" variant="outlined" name='password' value={userdata.password} onChange={handlechange} required/>
        <Button variant="contained" onClick={handleButton} >Log in</Button>
        
        </Stack>
        <Typography variant="subtitle2" component="h6" color="inherit" sx={{marginLeft:'200px',marginTop:'-50px',fontSize:'10px'}}>
             forgotten password ?
            </Typography>
            
            
            
            {
                validate ? (<Alert severity="success">sucessfull Login</Alert>) : (<Alert severity="error">You Enter wrong username & password.</Alert>)
            }
            
        </Paper>
      </Paper>
      
    </Box>
  )
}

export default Login
