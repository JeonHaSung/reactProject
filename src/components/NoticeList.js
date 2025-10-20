import React, { useCallback, useRef, useEffect } from "react";
import NoticeListItem from "./NoticeListItem";
import "./noticeList.scss";
import { AutoSizer, List } from "react-virtualized";

const NoticeList = ({ reviews, onToggle }) => {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.forceUpdateGrid();
  }, [reviews]);

  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      console.log("렌더링:", index);
      const review = reviews[reviews.length - 1 - index];
      if (!review) return null;
      return (
        <NoticeListItem
          key={key}
          notice={review}
          style={style}
          onToggle={onToggle}
        />
      );
    },
    [reviews]
  );

  return (
    <div className="notice-list">
      <AutoSizer>
        {({ width, height }) => (
          <List
            ref={listRef}
            className="NoticeList"
            width={width}
            height={height}
            rowCount={reviews.length}
            rowHeight={130}
            rowRenderer={rowRenderer}
            style={{ outline: "none" }}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default NoticeList;
