import { Button } from '@mui/material';
import React, { useState } from 'react'

const ShowText:React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleTextVisibility = () => {
    setIsVisible((prev) => !prev);
  }
  return (
    <>
    <div><h3 className="titleTag">You click show Button to show the text otherwise to click hide button it is hide the text</h3></div>
     <div style={{ textAlign: 'center', margin: '20px' }}>
      <Button variant="contained" onClick={toggleTextVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </Button>
      {isVisible && <p>Hi Wellcome to see on my task</p>}
    </div>
    </>
  )
}

export default ShowText;