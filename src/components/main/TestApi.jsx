import React from 'react'
import axios from "axios";

/* 
1=>https://proxy.gxcorner.games/new-content/corners/trailers/
35:gx-corner-mobile-single-video-surprising-success-stories, 
178: gx-corner-boredom-busters,
61: gx-corner-mobile-single-videos-halloween,
76: gx-corner-mobile-single-video-visual-novels,
83: gx-corner-mobile-single-video-top-indie-2023,
112: "gx-corner-mobile-single-video-christmas-horror",
5: "gx-corner-videos",
68: "gx-corner-mobile-single-video-stealth-games",
113: "gx-corner-mobile-single-video-worst-games-2023",
124: "gx-corner-mobile-single-video-kojima",
3: "gx-corner-trailers"


2=>https://proxy.gxcorner.games/new-content/daily-sections/desktop/88/in/en?pagination[limit]=100
  55: "gx-corner-top-2-horror-ai",
4: "gx-corner-news",
18: "gx-corner-top-gx-games-awards-2023",
88: "Daily section",

3=> https://proxy.gxcorner.games/eneba?region=in&size=100

4=> https://proxy.gxcorner.games/new-content/corners/desktop/calendar/1/in/en
1: "gx-corner-release-calendar"

5=>https://proxy.gxcorner.games/new-content/corners/video/17/en
*/


const TestApi = () => {
    const fetch = async (param = 178) => {
        try {
          const result = await axios.get(
            `https://proxy.gxcorner.games/new-content/corners/trailers/${param}/en`
          );
    
          console.log(param, result.data);
        } catch (error) {
          // console.log(error);
        }
      };
    
      const handleSub = () => {
        for (let index = 0; index < 200; index++) {
          fetch(index);
        }
      };
    
      return (
        <>
          <button onClick={handleSub}>Fetch</button>
        </>
      );
}

export default TestApi