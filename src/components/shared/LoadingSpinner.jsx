import React from 'react'

export default function LoadingSpinner() {
  return (
    <div>
      <div class="spinner"></div>
      <p className="spinner--text">Fetching...</p>
    </div>
  )
}
