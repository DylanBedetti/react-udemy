import React from "react";
// import VideoItem from "./VideoItem";
import { List, Avatar } from "antd";

const VideoList = ({ videos }) => {
  // const renderedList = videos.map((video) => {
  //   return <VideoItem video={video} key={video.id.videoId} />;
  // });

  return (
    <List
      itemLayout="horizontal"
      dataSource={videos}
      size="large"
      locale={{ emptyText: "No Videos..." }} // WHY DOUBLE BRACKETS>
      renderItem={(item) => (
        <List.Item>
          <List.Item.Meta
            avatar={
              <Avatar
                shape="square"
                size={{ xxl: 100 }}
                src={item.snippet.thumbnails.default.url}
              />
            }
            title={item.snippet.title}
            // description={item.snippet.description}
          />
        </List.Item>
      )}
    />
  );
};

export default VideoList;
