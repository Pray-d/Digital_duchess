// RHDepartment.js

import React from 'react';
import './PageStyles.css'; // Import your common styles

const RHDepartment = () => {
  return (
    <div>
      <header>
        {/* Banner */}
        <img src="banner_image_url" alt="Banner" />
        <p>Explore the Excellence of Talent Fusion</p>
        <button>IT Department Page</button>
        <button>Marketing Department Page</button>
      </header>

      {/* About Us */}
      <section>
        <h2>About Us</h2>
        {/* Add content here */}
      </section>

      {/* Results of Planning Votes */}
      <section>
        <h2>Results of Planning Votes</h2>
        {/* Add content here */}
      </section>

      {/* Avis */}
      <section>
        <h2>Avis</h2>
        {/* Add content here */}
      </section>

      {/* Footer */}
      <footer>
        <p>Talent Fusion</p>
        <div>
          <a href="facebook_link">Facebook</a>
          <a href="instagram_link">Instagram</a>
          <a href="linkedin_link">LinkedIn</a>
          <a href="threads_link">Threads</a>
        </div>
      </footer>
    </div>
  );
};

export default RHDepartment;
