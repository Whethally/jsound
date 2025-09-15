import { Flex, Typography, List, Row, Col, Modal as AntModal } from 'antd';
import Paragraph from 'antd/es/typography/Paragraph';
const { Text } = Typography;

type ModalProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};
const Modal = ({ isModalOpen, handleOk, handleCancel }: ModalProps) => {
  return (
    <AntModal title='Файлы Cookie' zIndex={10000} open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000}>
      <Row>
        <Col span={12}>
          <Flex vertical gap={16}>
            <Flex vertical gap={4}>
              <Text>Что это такое?</Text>
              <Text>
                Cookie — это маленькие записочки, которые сайт оставляет на вашем компьютере или телефоне. Они помогают сайту «помнить» вас
                и ваши предпочтения.
              </Text>
            </Flex>
            <Flex vertical gap={4}>
              <Text>Для чего они нужны?</Text>
              <List
                dataSource={[
                  'Чтобы вам не приходилось каждый раз заново входить на сайт',
                  'Чтобы сайт показывал то, что вам интересно',
                  'Чтобы сохранять ваши настройки (язык, город и т.д.)',
                  'Чтобы улучшать работу сайта'
                ]}
                renderItem={(item) => (
                  <Paragraph>
                    <ul>
                      <li>
                        <Text>{item}</Text>
                      </li>
                    </ul>
                  </Paragraph>
                )}
              />
            </Flex>
            <Flex vertical gap={4}>
              <Text>Что происходит с вашими данными?</Text>
              <Text type='secondary'>Мы сохраняем только то, что нужно для работы сайта:</Text>
              <List
                dataSource={['Время посещения', 'Настройки языка', 'Ваши предпочтения', 'Информацию о покупках (если вы что-то покупаете)']}
                renderItem={(item) => (
                  <Paragraph>
                    <ul>
                      <li>
                        <Text>{item}</Text>
                      </li>
                    </ul>
                  </Paragraph>
                )}
              />
            </Flex>
          </Flex>
        </Col>
        <Col span={12}>
          <Flex vertical gap={16}>
            <Flex vertical gap={4}>
              <Text>Ваши права</Text>
              <Text type='secondary'>Вы всегда можете:</Text>
              <List
                dataSource={[
                  'Посмотреть, какие cookie сохранены',
                  'Удалить их',
                  'Изменить настройки',
                  'Отказаться от некоторых видов cookie'
                ]}
                renderItem={(item) => (
                  <Paragraph>
                    <ul>
                      <li>
                        <Text>{item}</Text>
                      </li>
                    </ul>
                  </Paragraph>
                )}
              />
            </Flex>
            <Flex vertical gap={4}>
              <Text>Как это безопасно?</Text>
              <Text type='secondary'>Мы заботимся о вашей безопасности и:</Text>
              <List
                dataSource={['Храним данные надёжно', 'Не передаём их посторонним', 'Соблюдаем все законы о защите данных']}
                renderItem={(item) => (
                  <Paragraph>
                    <ul>
                      <li>
                        <Text>{item}</Text>
                      </li>
                    </ul>
                  </Paragraph>
                )}
              />
            </Flex>
            <Flex vertical gap={4}>
              <Text>Что будет, если отказаться?</Text>
              <Text type='secondary'>Некоторые функции сайта могут работать не так хорошо, как обычно. Например:</Text>
              <List
                dataSource={[
                  'Придётся чаще вводить логин и пароль',
                  'Сайт может не «помнить» ваши настройки',
                  'Реклама будет менее интересной'
                ]}
                renderItem={(item) => (
                  <Paragraph>
                    <ul>
                      <li>
                        <Text>{item}</Text>
                      </li>
                    </ul>
                  </Paragraph>
                )}
              />
            </Flex>
          </Flex>
        </Col>
      </Row>
    </AntModal>
  );
};

export default Modal;
