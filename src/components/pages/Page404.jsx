import React from 'react'
import GoBackButton from '../buttons/GoBackButton'

export default function Page404() {
  return (
    <div id="page_404">
      The content you were looking for does not exist or is located on a different address!
      <GoBackButton className="page404--button" />Go back
    </div>
  )
}
