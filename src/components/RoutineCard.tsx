import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Text, useTheme} from 'react-native-paper';

interface RoutineCardProps {
  id: number,
  name: string,
  description: string,
}

const RoutineCard: React.FC<RoutineCardProps> = ({id, name, description}) => {
    const {colors} = useTheme();
    const styles = makeStyles(colors);
  return (
    <Card key={id} style={styles.card}>
      <Card.Title
        titleVariant="titleLarge"
        title={name}
        titleStyle={styles.title}
      />
      <Card.Content>
        <Text variant="titleMedium">{description}</Text>
      </Card.Content>
    </Card>
  );
};

export default RoutineCard;

const makeStyles = (colors: any) =>
  StyleSheet.create({
    card: {
      width: '100%',
      margin: 8,
      backgroundColor: colors.background,
    },
    title: {
      color: colors.text,
    },
  });
