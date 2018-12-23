//surveyfield contains logic to render a single labale and text input

import React from 'react';

export default ({ input }) => {
  
  return (
    <div>
      <input {...input}/>
    </div>
  )
}