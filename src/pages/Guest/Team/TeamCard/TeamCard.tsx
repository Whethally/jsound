import { Flex, Tag, Typography } from 'antd';
import styles from '../Team.module.scss';
import type { TeamMember } from '../constants';

const { Text } = Typography;

type TeamCardProps = {
  member: TeamMember;
};

export const TeamCard = ({ member }: TeamCardProps) => (
  <div className={styles.teamSlide}>
    <div className={styles.teamCard}>
      <div className={styles.teamImageContainer}>
        <img src={member.img} alt={member.name} className={styles.teamImage} />
        <div className={styles.teamOverlay}>
          <Text className={styles.memberName}>{member.fullName}</Text>
          <Flex wrap className={styles.memberRoles}>
            {member.roles.map((role) => (
              <Tag key={role} className={styles.roleTag}>
                {role}
              </Tag>
            ))}
          </Flex>
        </div>
      </div>
    </div>
  </div>
);
