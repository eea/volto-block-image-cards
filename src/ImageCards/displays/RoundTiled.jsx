import React from 'react';
import { Grid, Message } from 'semantic-ui-react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { UniversalLink } from '@plone/volto/components';
import { BodyClass } from '@plone/volto/helpers';
import cx from 'classnames';
import { getFieldURL } from '@eeacms/volto-block-image-cards/helpers';
import { getScaleUrl } from '../utils';
import '../css/roundtiled.less';

import messages from '@eeacms/volto-block-image-cards/messages';

export const Card = (props) => {
  const { title, image_scale } = props;
  const attachedimage = getFieldURL(props.attachedimage);
  const link = getFieldURL(props.link);

  return (
    <div className="card">
      {link ? (
        <>
          <UniversalLink className="card-link" href={link}>
            <LazyLoadComponent>
              <div
                className="card-image"
                style={
                  attachedimage
                    ? {
                        backgroundImage: `url(${getScaleUrl(
                          attachedimage,
                          image_scale || 'preview',
                        )})`,
                      }
                    : {}
                }
              ></div>
            </LazyLoadComponent>
            <span className="card-title">{title}</span>
          </UniversalLink>
        </>
      ) : (
        <>
          <LazyLoadComponent>
            <div
              className="card-image"
              style={
                attachedimage
                  ? {
                      backgroundImage: `url(${getScaleUrl(
                        attachedimage,
                        image_scale || 'preview',
                      )})`,
                    }
                  : {}
              }
            ></div>
          </LazyLoadComponent>
          <span className="card-title">{title}</span>
        </>
      )}
    </div>
  );
};

const RoundTiled = (props) => {
  const { data, editable, intl } = props;
  const { title, cards, image_scale } = data;

  if (!cards?.length && editable) {
    return <Message>{intl.formatMessage(messages.imageCardsNull)}</Message>;
  }

  return cards?.length ? (
    <div
      className={cx(
        'block align imagecards-block',
        {
          center: !Boolean(data.align),
        },
        data.align,
      )}
    >
      <BodyClass className="has-card-tiles" />
      <div
        className={cx({
          'full-width': data.align === 'full',
        })}
      >
        <div className="roundtiled">
          <h2 className="roundtiled-title">{title}</h2>
          <div className="cards">
            <Grid className="cards-grid">
              {(cards || []).map((card, i) => (
                <Grid.Column key={i} mobile={12} tablet={6} computer={3}>
                  <Card {...card} image_scale={image_scale} />
                </Grid.Column>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default RoundTiled;
