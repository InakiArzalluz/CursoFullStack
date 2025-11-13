import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1 className="red-text">My Favourite Foods</h1>
    <div>
      <img
        className="food-img"
        src="https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/309436259_517923987003328_1673925456726734248_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TSXbXEdsrjoQ7kNvwHxnc38&_nc_oc=AdnM7zxiEadiJy4x5aetEDktXUm4B5AfsqW04RAr4U5XHSZ2o9cYApasVqNZbB_OdUY&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=la1BoVVXUFc1s9khQEbKRw&oh=00_Afgl-4mEAS8Ms7eIjcTDKJ_JdTWonnS3A1dYbXWBL2fkgg&oe=690EF0BA"
      />
      <img
        className="food-img"
        src="https://scontent.fmdq6-1.fna.fbcdn.net/v/t39.30808-6/307761013_176309074951713_133452558297075211_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=9soVxHKMyi0Q7kNvwGWm7F7&_nc_oc=AdlLkLwOXYGE9V3-FSrJlcHID2JwCeF4ARHwrS9_K4JQ0IE5DjuAGmCn1orljFCBOn4&_nc_zt=23&_nc_ht=scontent.fmdq6-1.fna&_nc_gid=_q9V0CMvJVgAq067z997-A&oh=00_Afi0oWkDon8NBajQ4aJRl6Dp3SCx461yMgbBr88YfeyFyg&oe=690EEE81"
      />
      <img
        className="food-img"
        src="https://24royalbloom.com/wp-content/uploads/2024/12/1-2.png"
      />
    </div>
    <p>And a random extra to have some fun!</p>
    <img className="food-img" src="https://picsum.photos/200" />
    <p>(Though I probably won't be eating it)</p>
  </div>,
  document.getElementById("root")
);
