import React, { useEffect, useState } from 'react'
import './loading.css';

export default function Loading(props) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, props.time);
      },props.change);
  return (
    <>
    {loading ? (
      <div className="loader-container" style={{zIndex: '9999',}}>
        <div className="spinner"></div>
      </div>
    ) : (
    <div></div>
    )}
    </>
  )
}
