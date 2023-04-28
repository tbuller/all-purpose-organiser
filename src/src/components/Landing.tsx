import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LandingProps {
  navigate: ReturnType<typeof useNavigate>;
}

const Landing: React.FC<LandingProps> = ({ navigate }) => {

  return (
    <div className="landing-page-container">
      This is the landing page
    </div>
  )
}

export default Landing;