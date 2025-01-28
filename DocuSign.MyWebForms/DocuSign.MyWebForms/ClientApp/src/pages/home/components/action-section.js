import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const ActionSection = () => {
  const { t } = useTranslation('Home');

  return (
    <div className='text-center'>
      <div className='row'>
        <div className='col-xxl-3 offset-xxl-3 mb-1'>
          <Link
            className='btn btn-lg btn-default d-grid'
            to='https://www.docusign.com/developers/sandbox'
            target='_blank'
            rel='noreferrer'
          >
            {t('SandBoxButton')}
          </Link>
        </div>
        <div className='col-xxl-3 mb-3'>
          <Link
            className='btn btn-lg btn-default d-grid'
            to='https://developers.docusign.com/'
            target='_blank'
            rel='noreferrer'
          >
            {t('LearnMoreButton')}
          </Link>
        </div>
      </div>
    </div>
  );
};
