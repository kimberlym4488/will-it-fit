import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './Closet.css';
import Items from '../components/Items.js';

import { useQuery } from '@apollo/client';
import { GET_ME } from '../utils/queries';

const Homepage = ({ windowSize }) => {
  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};
  console.log(userData);

  const [follow, setFollow] = React.useState(false);


  return (
    <div className="profile-page">
      <div className="profile-head">
           <ToggleButton
      value="check"
      selected={follow}
      onChange={() => {
        setFollow(!follow);
        
      }}
    >
      <FavoriteIcon className="unfollow" />
    </ToggleButton>
    {/* toggle 'Following' and 'Follow' on click'*/} 
        {/* <button className="unfollow">Following</button> */}
      </div>
      <Items windowSize={windowSize} />
   
 
</div>


  );
};

 









export default Homepage;