import React from 'react';
import { Popup, Image, Message } from 'semantic-ui-react';
import ResponsiveContainer from './ResponsiveContainer';

import loadable from '@loadable/component';

import 'slick-carousel/slick/slick.css';
import './css/discreetcarousel.less';
// import 'slick-carousel/slick/slick-theme.css';

import { getScaleUrl, getPath } from './utils';

const Slider = loadable(() => import('react-slick'));

const Card = ({ card = {}, height, image_scale, mode = 'view' }) => {
  const { link, title } = card;

  const LinkWrapper =
    link && mode === 'view'
      ? ({ children }) => (
          <a href={link} target="_blank" rel="noreferrer" title={title}>
            {children}
          </a>
        )
      : ({ children }) => children;
  const PopupWrapper = title
    ? ({ children }) => <Popup content={title} trigger={children} on="hover" />
    : ({ children }) => children;

  return (
    <div className="discreet-slide-img" style={{ height }}>
      <PopupWrapper>
        <LinkWrapper>
          <Image
            className="bg-image"
            src={getScaleUrl(
              getPath(card.attachedimage),
              image_scale || 'large',
            )}
          />
        </LinkWrapper>
      </PopupWrapper>
    </div>
  );
};

const DiscreetCarousel = (props) => {
  const { data = {}, editable = false } = props;
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => setIsClient(true), []);
  const {
    cards = [],
    height = '100px',
    itemsPerRow = 4,
    hideNavigationDots = false,
    autoplay = false,
    autoplaySpeed = 3000,
    image_scale = 'large',
  } = data;

  const carouselSettings = {
    // speed: 800,
    infinite: true,
    slidesToShow: Math.min(cards.length, itemsPerRow),
    slidesToScroll: 1,
    dots: itemsPerRow > 1 && !hideNavigationDots,
    autoplay: itemsPerRow > 1 && autoplay && !editable,
    autoplaySpeed,
    fade: false,
    useTransform: false,
    lazyLoad: 'ondemand',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return !cards.length ? (
    editable ? (
      <Message>No cards</Message>
    ) : (
      ''
    )
  ) : (
    <div className="discreet-carousel-spotlight">
      <ResponsiveContainer>
        {({ parentWidth }) => {
          return parentWidth && isClient ? (
            <div style={{ width: `${parentWidth - 100}px`, margin: '0 auto' }}>
              <Slider {...carouselSettings}>
                {cards.map((card, i) => (
                  <Card
                    key={i}
                    mode={editable ? 'edit' : 'view'}
                    card={card}
                    height={height}
                    image_scale={image_scale}
                  />
                ))}
              </Slider>
            </div>
          ) : (
            ''
          );
        }}
      </ResponsiveContainer>
    </div>
  );
};

export default DiscreetCarousel;

// See https://react-slick.neostack.com/docs/api
export const DiscreetCarouselSpotlightSchema = ({ data, schema, intl }) => {
  return {
    fieldsets: [
      {
        id: 'discreetCarouselSpotlight',
        title: 'Discreet Carousel Settings',
        fields: [
          'autoplay',
          'autoplaySpeed',
          'hideNavigationDots',
          'height',
          'itemsPerRow',
        ],
      },
    ],
    properties: {
      autoplay: {
        type: 'boolean',
        title: 'Autoplay',
      },
      autoplaySpeed: {
        type: 'number',
        title: 'Autoplay delay',
        defaultValue: 50,
      },
      hideNavigationDots: {
        type: 'boolean',
        title: 'Hide navigation dots',
      },
      itemsPerRow: {
        type: 'number',
        title: 'Items per row',
        defaultValue: 4,
      },
      height: {
        title: (
          <a
            rel="noreferrer"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"
          >
            CSS height
          </a>
        ),
      },
    },
  };
};

DiscreetCarousel.schemaExtender = (schema, data, intl) => {
  const Custom = DiscreetCarouselSpotlightSchema({ data, schema, intl });
  return {
    ...schema,
    ...Custom,
    properties: { ...schema.properties, ...Custom.properties },
    fieldsets: [
      // { id: 'empty', fields: [] },
      ...schema.fieldsets,
      ...Custom.fieldsets,
    ],
  };
};
