import React from 'react'

function Language() {
  return (
    <form action="" className='lang'>
        <select name="lang" defaultValue="0" style={{color:"black"}}>
    <option value="0">English</option>
    <option value="1">Malayalam</option>
</select>

    </form>
  )
}

export default Language