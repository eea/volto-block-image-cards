import cx from 'classnames';
import React from 'react';
import config from '@plone/volto/registry';
import { flattenToAppURL } from '@plone/volto/helpers';
import { Grid } from 'semantic-ui-react';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { UniversalLink } from '@plone/volto/components';
import { BodyClass } from '@plone/volto/helpers';

import { fixUrl, getPath } from './utils';

import './css/roundtiled.less';

// export const getPath = (url) =>
//   url.startsWith('http') ? new URL(url).pathname : url;

// TODO: the approach for the URL path generation is not correct, it does not
// work on local;

export const thumbUrl = (url) =>
  (url || '').includes(config.settings.apiPath)
    ? `${flattenToAppURL(url.replace('/api', ''))}/@@images/image/preview`
    : `${url.replace('/api', '')}/@@images/image/preview`;

export const Card = (props) => {
  const { title, link, attachedimage } = props;

  return (
    <div className="card">
      {link ? (
        <>
          <UniversalLink className={'card-link'} href={link}>
            <LazyLoadComponent>
              <div
                className="card-image"
                style={
                  attachedimage
                    ? {
                        backgroundImage: `url(${fixUrl(
                          getPath(attachedimage),
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
              style={{
                backgroundImage: `url(${thumbUrl(getPath(attachedimage))})`,
              }}
            ></div>
          </LazyLoadComponent>
          <span className="card-title">{title}</span>
        </>
      )}
    </div>
  );
};

const RoundTiled = ({ data }) => {
  const { title, cards } = data;
  return (
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
        <div className={'roundtiled'}>
          <h2 className={'roundtiled-title'}>{title}</h2>
          <div className="cards">
            <Grid className={'cards-grid'}>
              {(cards || []).map((card, i) => (
                <Grid.Column key={i} mobile={12} tablet={6} computer={3}>
                  <Card {...card} />
                </Grid.Column>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundTiled;
