import React from 'react';
import "./SocialMedia.css";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function SocialMedia() {
    return (
        <div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />    <ul class="icon-list">
      <li class="icon-item">
        <a href="https://www.kfintech.com/" target="_blank" class="icon-link"><TwitterIcon fontSize="large" style={{margin:"auto"}}/></a>
      </li>
      
      <li class="icon-item">
        <a href="" target="_blank" class="icon-link"><FacebookIcon fontSize="large" style={{margin:"auto"}}/></a>
      </li>
      
     
      
      <li class="icon-item">
        <a href="" target="_blank" class="icon-link"><LinkedInIcon fontSize="large" style={{margin:"auto"}}/></a>
      </li>
    </ul>
 
        </div>
    )
}

export default SocialMedia
