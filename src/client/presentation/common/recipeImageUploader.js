import React, { Component } from 'react';
import ImagesUploader from 'react-images-uploader';
import 'react-images-uploader/styles.css';
import 'react-images-uploader/font.css';
import { useIntl } from 'react-intl';

const RecipeImageUploader = () => {
  const intl = useIntl();

  return (
    <ImagesUploader
      url="http://localhost:9090/notmultiple"
      optimisticPreviews
      multiple={false}
      onLoadEnd={(err) => {
        if (err) {
          console.error(err);
        }
      }}
      label={intl.formatMessage({
        id: 'common.uploadImage',
      })}
    />
  );
};

export default RecipeImageUploader;
