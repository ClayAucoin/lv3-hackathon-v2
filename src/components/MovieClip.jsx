import YouTube from "react-youtube";

export default function MovieClip(props) {
  // retrieve props
  const { trailerId, movie } = props;
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 0,
      loop: 0,
      iv_load_policy: 3,
    },
    title: { movie },
  };

  return (
    <div className="trailer-container">
      <YouTube videoId={trailerId} opts={opts} />
    </div>
  );
}
