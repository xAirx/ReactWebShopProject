import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
// we are using a functional component here since we arent going to have any state in this component or lifecycle methods.
const HomePage = () => (
  <div className="homepage">
    <h1>Welcome to my Homepage</h1>
    <Directory />
  </div>
);

// we are exporting as default because we are not goin to export anything from our homepage component file.
export default HomePage;
