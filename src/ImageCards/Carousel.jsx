import React, { Component } from 'react';
import loadable from '@loadable/component';
import { Message } from 'semantic-ui-react';
import { Icon, UniversalLink } from '@plone/volto/components';

import leftSVG from '@plone/volto/icons/left-key.svg';
import rightSVG from '@plone/volto/icons/right-key.svg';
import cx from 'classnames';

import 'slick-carousel/slick/slick.css';
import './css/carousel.less';

import { getScaleUrl, getPath } from './utils';

import { serializeNodes } from 'volto-slate/editor/render';
import { BodyClass } from '@plone/volto/helpers';

const Slider = loadable(() => import('react-slick'));

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }

  previous() {
    this.slider.slickPrev();
  }

  renderSlide = (cards, props) => {
    return cards.map((card, index) => {
      return (
        <div className="slider-slide" key={index}>
          <div
            className="slide-img"
            style={
              card.attachedimage
                ? {
                    backgroundImage: `url(${getScaleUrl(
                      getPath(card.attachedimage),
                      props.image_scale || 'large',
                    )})`,
                  }
                : {}
            }
          />
          <div className="slide-overlay"></div>
          <div className="slider-caption ui container">
            <div className="slide-body">
              {card.link ? (
                <UniversalLink href={card.link}>
                  <div className="slide-title">{card.title || ''}</div>
                </UniversalLink>
              ) : (
                <div className="slide-title">{card.title || ''}</div>
              )}
              {/* Incomplete backward-compatibility: */}
              {card.text?.data ? (
                <div
                  className="slide-description"
                  dangerouslySetInnerHTML={{ __html: card.text?.data || '' }}
                />
              ) : (
                <div className="slide-description">
                  {serializeNodes(card.text)}
                </div>
              )}
            </div>
          </div>
          <div className="slide-copyright ui container">
            {serializeNodes(card.copyright)}
          </div>
        </div>
      );
    });
  };

  renderSlideArrows = () => {
    return (
      <div className="slider-arrow">
        <div className="ui container">
          <button
            className="left-arrow"
            aria-label="Prev Slide"
            onClick={() => this.slider.slickPrev()}
          >
            <Icon name={leftSVG} size="55px" />
          </button>

          <button
            className="right-arrow"
            aria-label="Prev Slide"
            onClick={() => this.slider.slickNext()}
          >
            <Icon name={rightSVG} size="55px" />
          </button>
        </div>
      </div>
    );
  };

  render() {
    const { data } = this.props;
    const cards = this.props.data.cards || [];

    var settings = {
      fade: true,
      speed: 800,
      infinite: true,
      autoplay: true,
      pauseOnHover: true,
      autoplaySpeed: 10000,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
    };

    return (
      <div
        className={cx(
          'block align imagecards-block imagecards-carousel',
          {
            center: !Boolean(data.align),
          },
          data.align,
        )}
      >
        <BodyClass className="has-carousel" />
        <div
          className={cx({
            'full-width': data.align === 'full',
          })}
        >
          <div className="slider-wrapper">
            {cards.length ? (
              <Slider {...settings} ref={(slider) => (this.slider = slider)}>
                {this.renderSlide(cards, data)}
              </Slider>
            ) : (
              <Message>No image cards</Message>
            )}
            {cards.length > 1 && this.renderSlideArrows()}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
