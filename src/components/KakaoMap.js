import React, { useEffect, useState } from "react";
import axios from "axios";
import "./KakaoMap.scss";

const KakaoMap = () => {
  const [loaded, setLoaded] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(null);

  const kakaoJsKey = "f21df4d9eb3323138cbc232871ea740c";
  const kakaoRestKey = "75549da53792f06de50149a19f197a98";

  // 1. 카카오 지도 SDK 로드
  useEffect(() => {
    const loadKakaoMapScript = () => {
      const script = document.createElement("script");
      script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${kakaoJsKey}&autoload=false&libraries=services`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          setLoaded(true);
        });
      };
      document.head.appendChild(script);
    };

    !window.kakao ? loadKakaoMapScript() : setLoaded(true);
  }, []);

  // 2. 현재 위치 얻기
  useEffect(() => {
    if (!loaded) return;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // 실제 위치를 저장하는 변수 - 위치가 부정확함
        // const lat = position.coords.latitude;
        // const lng = position.coords.longitude;

        // 하드코딩으로 직접 주소값 입력.
        const lat = 37.5012356; // 학원 위치
        const lng = 127.0250145; // 학원 위치
        setCurrentPosition({ lat, lng });
      },
      (error) => {
        console.error("위치 정보 에러:", error);
        alert("위치 정보를 가져올 수 없습니다.");
      }
    );
  }, [loaded]);

  // 3. 지도 생성 및 마커 표시
  useEffect(() => {
    const loadMap = () => {
      if (!loaded || !currentPosition) return;

      const { kakao } = window;

      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(currentPosition.lat, currentPosition.lng),
        level: 3,
      };

      const mapInstance = new kakao.maps.Map(container, options);

      // 현재 위치 마커
      const imageSrc = "https://cdn-icons-png.flaticon.com/512/684/684908.png";
      const imageSize = new kakao.maps.Size(40, 40);
      const imageOption = { offset: new kakao.maps.Point(20, 40) };

      const markerImage = new kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      const userMarker = new kakao.maps.Marker({
        map: mapInstance,
        position: new kakao.maps.LatLng(
          currentPosition.lat,
          currentPosition.lng
        ),
        image: markerImage,
        zIndex: 10,
      });

      // 현재 위치 커스텀 오버레이
      const currentOverlayContent = `
      <div class="custom-overlay current">현재 위치</div>
    `;
      const currentOverlay = new kakao.maps.CustomOverlay({
        position: new kakao.maps.LatLng(
          currentPosition.lat,
          currentPosition.lng
        ),
        content: currentOverlayContent,
        yAnchor: 2.5,
        zIndex: 10,
      });
      currentOverlay.setMap(mapInstance);

      // 4. 편의점 검색 (axios로 비동기 처리)
      const fetchStores = async () => {
        try {
          const query = "편의점";
          const x = currentPosition.lng;
          const y = currentPosition.lat;

          const response = await axios.get(
            "https://dapi.kakao.com/v2/local/search/keyword.json",
            {
              params: {
                query,
                x,
                y,
                radius: 2000,
                size: 6,
              },
              headers: {
                Authorization: `KakaoAK ${kakaoRestKey}`,
              },
            }
          );

          const places = response.data.documents;

          // 마커 찍기
          places.forEach((place) => {
            const marker = new kakao.maps.Marker({
              map: mapInstance,
              position: new kakao.maps.LatLng(place.y, place.x),
            });
            const overlayContent = `
            <div class="custom-overlay">${place.place_name}<br/>${place.address_name}</div>
          `;

            const overlay = new kakao.maps.CustomOverlay({
              position: new kakao.maps.LatLng(place.y, place.x),
              content: overlayContent,
              yAnchor: 1.8,
              zIndex: 11,
            });

            kakao.maps.event.addListener(marker, "mouseover", () => {
              overlay.setMap(mapInstance);
            });
            kakao.maps.event.addListener(marker, "mouseout", () => {
              overlay.setMap(null);
            });
          });
        } catch (err) {
          console.error("편의점 검색 실패:", err);
        }
      };

      fetchStores();
    };
    loadMap();
  }, [loaded, currentPosition]);

  return (
    <div className="map-container">
      <h2>현재 위치 주변 편의점</h2>
      <div id="map"></div>
    </div>
  );
};

export default KakaoMap;
