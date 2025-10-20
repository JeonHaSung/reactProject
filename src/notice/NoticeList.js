import React, { useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import NoticeListItem from "./NoticeListItem";
import "./noticeList.scss";
import { AutoSizer, List } from "react-virtualized";

//1.노티스 컨테이너에서 전딜받은 프롭스
const NoticeList = ({ reviews, onToggle }) => {
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.forceUpdateGrid();
  }, [reviews]);

  //무한 스크롤 구현
  // <List> 컴포넌트에서 화면에 보이는 영역만 렌더링하기 위해
  // 자동으로 { index, key, style } 값을 전달해줌
  // → <List>가 내부적으로 .map()처럼 동작하며 각 아이템을 계산함
  const rowRenderer = useCallback(
    ({ index, key, style }) => {
      console.log("렌더링:", index);
      //역순
      const review = reviews[reviews.length - 1 - index];
      if (!review) return null;
      return (
        <NoticeListItem
          key={key} //고유번호
          notice={review} // state 배열 전달
          style={style} //이걸 전당해야 깨지짖 않는다.
          onToggle={onToggle} // 좋아요 토글 전달
        />
      );
    },
    [reviews]
  );

  //  <List> 렌더링 파트
  //  <AutoSizer>는 부모 크기에 맞춰 width, height를 자동 계산
  //  <List>는 react-virtualized 컴포넌트로,
  //   화면에 보이는 구간만 효율적으로 렌더링함 (가상 스크롤)

  // 리스트의 각 행(row)을 렌더링할 때마다
  // 자동으로 rowRenderer() 함수를 호출하여 해당 아이템을 그려줌
  return (
    <div className="notice-list">
      <AutoSizer>
        {({ width, height }) => (
          <List
            ref={listRef}
            className="NoticeList"
            width={width} //리스트 가로값
            height={height} //리스트 세로값
            rowCount={reviews.length} // 전체 아이템 개수
            rowHeight={130} // 각 행의 높이(px)
            rowRenderer={rowRenderer} // 각 행을 렌더링할 함수
            style={{ outline: "none" }}
          />
        )}
      </AutoSizer>
    </div>
  );
};

export default NoticeList;
