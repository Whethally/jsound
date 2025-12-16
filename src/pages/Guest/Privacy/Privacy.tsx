import { Flex, List, Typography, Button, Card } from 'antd';
import { useNavigate } from 'react-router-dom';
import styles from './Privacy.module.scss';
import { PRIVACY_CONTENT } from './constants';

const { Title, Paragraph, Text } = Typography;

export const Privacy = () => {
  const navigate = useNavigate();

  return (
    <Card className={styles.privacy}>
      <Card className={styles.container}>
        <Flex vertical gap={16} align='center'>
          <Button type='primary' size='large' onClick={() => navigate('/')}>
            Вернуться на сайт
          </Button>
          <Title level={1} className={styles.title}>
            {PRIVACY_CONTENT.title}
          </Title>
          <Text className={styles.subtitle}>{PRIVACY_CONTENT.subtitle}</Text>
        </Flex>

        <Flex vertical gap={24}>
          {PRIVACY_CONTENT.sections.map((section, sectionIndex) => {
            const sectionNum = sectionIndex + 1;

            return (
              <Flex key={sectionIndex} vertical gap={12} className={styles.section}>
                <Title level={2} className={styles.sectionTitle}>
                  {sectionNum}. {section.title}
                </Title>

                {section.content.map((text, textIndex) => (
                  <Paragraph key={textIndex} className={styles.text}>
                    {text}
                  </Paragraph>
                ))}

                {section.list && (
                  <List
                    dataSource={section.list}
                    split={false}
                    renderItem={(item, itemIndex) => {
                      const isDashItem = item.trim().startsWith('–') || item.trim().startsWith('-');
                      const isSubheading = item.trim().endsWith(':');

                      return (
                        <List.Item
                          style={{
                            border: 'none',
                            padding: isDashItem ? '4px 0 4px 24px' : '4px 0',
                            marginTop: isSubheading && itemIndex > 0 ? '12px' : '0'
                          }}
                        >
                          <Text>
                            {!isDashItem && `${sectionNum}.${itemIndex + 1}${isSubheading ? '.' : ''} `}
                            {item}
                          </Text>
                        </List.Item>
                      );
                    }}
                  />
                )}
              </Flex>
            );
          })}
        </Flex>
      </Card>
    </Card>
  );
};
