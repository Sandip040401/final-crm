import { Button, Result } from 'antd';

import useLanguage from '@/locale/useLanguage';

const About = () => {
  const translate = useLanguage();
  return (
    <Result
      status="info"
      title={'Xeotec E-Services'}
      subTitle={translate('Do you need help on customize of this app')}
      extra={
        <>
          <p>
            Website : <a href="https://xeotec.net/Home/contact-us">xeotec.net</a>{' '}
          </p>
          <Button
            type="primary"
            onClick={() => {
              window.open(`https://xeotec.net/Home/contact-us`);
            }}
          >
            {translate('Contact us')}
          </Button>
        </>
      }
    />
  );
};

export default About;
