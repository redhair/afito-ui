import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { usePrevious } from '../../utils';

const IMAGE_MARGIN = 5;

const GalleryWrapper = styled.div`
  position: relative;
`;
const ImageWrapper = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  height: 325px;
  position: relative;
`;
const Images = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${props =>
    props.offset ? `calc(50% - ${props.width / 2}px - ${props.offset}px)` : `calc(50% - ${props.width / 2}px)`};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: left 0.2s cubic-bezier(0.3, 0, 0.45, 1);
`;
const Image = styled.img`
  margin-right: ${() => `${IMAGE_MARGIN}px`};
  width: ${props => `${props.width}px`};
  height: 100%;
  object-fit: cover;
`;
const Arrow = styled.div`
  background: white;
  border-radius: 50%;
  color: rgb(164, 164, 164);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 35px;
  cursor: pointer;
  box-shadow: 0px 5px 8.55px 0.45px rgba(0, 0, 0, 0.16);
`;
const Controls = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ThumbnailWrapper = styled.div`
  overflow-x: hidden;
  white-space: nowrap;
  width: 100%;
  height: 40px;
  position: relative;
`;
const Thumbnails = styled.div`
  margin-top: ${() => `${IMAGE_MARGIN}px`};
  position: absolute;
  top: 0;
  left: ${props => (props.offset ? `-${props.offset}px` : '0')};
  display: flex;
  justify-content: flex-start;
  align-items: center;

  transition: left 0.2s cubic-bezier(0.3, 0, 0.45, 1);
`;
const Thumbnail = styled.img`
  height: 33px;
  width: 50px;
  cursor: pointer;
  opacity: ${props => (props.active ? '1' : '.5')};
  object-fit: cover;

  & + & {
    margin-left: ${() => `${IMAGE_MARGIN}px`};
  }
`;

function ImageGallery({ images, width, loop }) {
  const THUMBNAIL_WIDTH = 50 + IMAGE_MARGIN;
  const [curr, setCurr] = useState(0);
  const prev = usePrevious(curr);
  const [offset, setOffset] = useState();
  const [thumbnailOffset, setThumbnailOffset] = useState(0);
  const [thumbWindow, setThumbWindow] = useState();

  const thumbnailSliderWidth = THUMBNAIL_WIDTH * images.length;

  useEffect(() => {
    setOffset(curr * (width + IMAGE_MARGIN));

    if (curr === 0) {
      return setThumbnailOffset(0);
    }

    if (curr === images.length - 1) {
      return setThumbnailOffset(thumbnailSliderWidth - 15 * THUMBNAIL_WIDTH);
    }

    // moving forward
    if (curr > prev) {
      //console.log("moving forward")
      //thumbnails run out
      if (curr >= 15 && curr < images.length) {
        //console.log("out of thumbnails, show new one")
        //move to right to show new one
        setThumbnailOffset(thumbnailOffset + THUMBNAIL_WIDTH);
      }
      // moving backward
    } else if (prev > curr) {
      //console.log("moving backward")
      //thumbnails run out
      if (curr <= 15 && thumbnailOffset > 0) {
        //console.log("out of thumbnails, show new one")
        // move to left to show past one
        setThumbnailOffset(thumbnailOffset - THUMBNAIL_WIDTH);
      }
    }

    //console.log(thumbnailOffset, curr)
    /*
    if (curr >= 15 && curr < images.length) {
      setThumbnailOffset(thumbnailOffset + THUMBNAIL_WIDTH);
    } else if (curr <= 15 && thumbnailOffset > 0) {
      setThumbnailOffset(thumbnailOffset - THUMBNAIL_WIDTH);
    } else {
      setThumbnailOffset(0);
    }
    */
  }, [curr]);

  return (
    <GalleryWrapper>
      <ImageWrapper>
        <Images offset={offset} width={width}>
          {images.map(img => {
            return <Image width={width} src={img} />;
          })}
        </Images>
        <Controls>
          <Arrow
            onClick={() => {
              if (curr > 0) setCurr(curr - 1);
              if (loop && curr === 0) setCurr(images.length - 1);
            }}
          >
            <i className="fas fa-chevron-left"></i>
          </Arrow>
          <Arrow
            onClick={() => {
              if (curr < images.length - 1) setCurr(curr + 1);
              if (loop && curr === images.length - 1) setCurr(0);
            }}
          >
            <i className="fas fa-chevron-right"></i>
          </Arrow>
        </Controls>
      </ImageWrapper>

      <ThumbnailWrapper>
        <Thumbnails offset={thumbnailOffset}>
          {images.map((img, idx) => {
            return <Thumbnail active={curr === idx} onClick={() => setCurr(idx)} src={img} />;
          })}
        </Thumbnails>
      </ThumbnailWrapper>
    </GalleryWrapper>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  width: PropTypes.number.isRequired,
  loop: PropTypes.bool
};

export default ImageGallery;