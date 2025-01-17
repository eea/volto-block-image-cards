import React from 'react';
import { useIntl } from 'react-intl';

import messages from '@eeacms/volto-block-image-cards/messages';

// See https://react-slick.neostack.com/docs/api
export const CommonCarouselschemaExtender = ({ data }) => {
  const intl = useIntl();

  return {
    fieldsets: [
      {
        id: 'settings',
        title: intl.formatMessage(messages.settingsTitle),
        fields: [
          'autoplay',
          ...(data.autoplay ? ['autoplaySpeed'] : []),
          'pauseOnHover',
          'infinite',
          'hideArrows',
          'hideNavigationDots',
          'fade',
          'height',
        ],
      },
    ],
    properties: {
      autoplay: {
        type: 'boolean',
        title: intl.formatMessage(messages.autoplayTitle),
      },
      autoplaySpeed: {
        type: 'number',
        title: intl.formatMessage(messages.autoplaySpeedTitle),
        description: intl.formatMessage(messages.autoplaySpeedDescription),
        defaultValue: 10000,
      },
      pauseOnHover: {
        type: 'boolean',
        title: intl.formatMessage(messages.pauseOnHoverTitle),
        description: intl.formatMessage(messages.pauseOnHoverDescription),
      },
      infinite: {
        type: 'boolean',
        title: intl.formatMessage(messages.infiniteTitle),
        description: intl.formatMessage(messages.infiniteDescription),
      },
      hideArrows: {
        type: 'boolean',
        title: intl.formatMessage(messages.hideArrowsTitle),
      },
      hideNavigationDots: {
        type: 'boolean',
        title: intl.formatMessage(messages.hideNavigationDotsTitle),
      },
      fade: {
        type: 'boolean',
        title: intl.formatMessage(messages.fadeTitle),
      },
      height: {
        title: (
          <a
            rel="noopener"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/height"
          >
            {intl.formatMessage(messages.heightTitle)}
          </a>
        ),
      },
    },
  };
};
