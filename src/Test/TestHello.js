import React from 'react'

const TestHello = ({name}) => {
  return (
    <div>
      <form>
        
<label htmlFor="name">Name</label>
<input type="text" id="name" />
<textarea ></textarea>
< label htmlFor="job-location"> Job location</label>
<select id="job-location">
<option value="">Select a country</option>
<option value="US">United States</option>
<option value="GB">United Kingdom</option>
<option value="CA"> Canada</option>
<option value="IN"> India</option> 
<option value="AU">Australia</option>
</ select>

< label>
<input type="checkbox" id="terms" /> I agree to the terms and conditions
</ label>

< button>Submit</button>
</form>
    </div>
  )
}

export default TestHello

