import { Icon } from '@/common/UI/icon';
import { Flex, Layout, Menu, Select, Typography } from 'antd';
import { guestRoutes } from '@/routes/guest.routes';
import Link from 'antd/es/typography/Link';

const { Header: AntHeader } = Layout;
const { Text } = Typography;

const Header = () => {
  const items = guestRoutes.map((item) => ({
    key: item.path,
    label: (
      <Link
        onClick={() => {
          const element = document.getElementById(item.path);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        style={{ cursor: 'pointer' }}
      >
        {item.label}
      </Link>
    )
  }));

  return (
    <AntHeader
      style={{
        height: 'auto'
      }}
    >
      <Flex align='center' gap='1rem' justify='space-between'>
        <Icon type='logo' style={{ color: 'white', fontSize: '8rem' }} />
        <Menu theme='dark' mode='horizontal' items={items} disabledOverflow />
        <Select
          defaultValue='sipaylovo'
          onChange={(value) => {
            console.log(`selected ${value}`);
          }}
          options={[
            {
              value: 'sipaylovo',
              label: (
                <Flex gap={8}>
                  <Icon type='mark' />
                  <Text>Сипайлово, ул. Гагарина, д. 7</Text>
                </Flex>
              )
            }
          ]}
        />
      </Flex>
    </AntHeader>
  );
};

export default Header;
