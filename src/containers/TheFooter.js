import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="http://acspa.com.br/" target="_blank" rel="noopener noreferrer">ACS-PA</a>
        <span className="ml-1">&copy; 2021</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Desenvolvido por</span>
        <a href="https://www.linkedin.com/in/jos%C3%A9-nilson-silva-dos-santos-b7aaba194/" target="_blank" rel="noopener noreferrer">Nilson Silva</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
