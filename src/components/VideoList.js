//import react videoitem and videolist.css
import VideoItem from "./VideoItem";
import "./VideoList.css";
//create an arrow function named VideoList that deconstructs the videos and onvideoselect prop, default videos to an empty array.

const VideoList = ({ videos = [], onVideoSelect }) => {
  // inside the VideoList function, create a new renderedList function that use the map method on videos and return the videoitem
  // with the props onvideoslect, video and key

  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        onVideoSelect={onVideoSelect}
        key={video.id.videoId}
        video={video}
      />
    );
  });
  //in the return function of videolist, plase a div with classnames video-thumbs ui relaxed divided list and place the renderedlist there.
  return (
    <div className="video-thumbs ui relaxed divided list">{renderedList}</div>
  );
};

//export the component.
export default VideoList;
