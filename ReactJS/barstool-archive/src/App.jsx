import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css'

const BarstoolArchive = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       await axios.get('https://www.jalirani.com/files/barstool.json').then((response) =>
       {
        setArticles(response.data)
       })
       
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
   <div className="mainContainer">
    { articles.map((ar) =>
    {
      
      return(
        <div key={ar.id} className='container'>

            {/* The article thumbnail/image */}
            <img src={ar.thumbnail.location + ar.thumbnail.images.small} alt="Article Thumbnail" />
     
          <div className="content">


            {/* An article title (this should be clickable and take the user to the article on the actual Barstool Sport’s website) */}
          <a href={ar.url} target="_blank" rel="noopener noreferrer">
            <h2>{ar.title}</h2>
          </a>
      
        


          <span>

          <p id='av'>
          {/* The author ,The author’s avatar/image */}
          <img src={ar.author.avatar} alt="Author Avatar" id='avtar'/>
          {ar.author.name}
          </p>
         
          {/* The number of comments for the article */}
          <p>{ar.comment_count}<img src="chat.png" alt="" height= {'40px'} width={'40px'}/></p>
          
          </span>
          </div>
      
        </div>
      )
    })}
   </div>
  );
};

export default BarstoolArchive;

