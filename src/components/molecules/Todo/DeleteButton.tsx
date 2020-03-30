import React from 'react';
import { StyleSheet } from 'react-native';

import { UiContext } from '../../../contexts';
import { COLOR } from '../../../constants/theme';
import testIDs from '../../../constants/testIDs';
import IconButton from '../../atoms/IconButton';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR.CAUTION,
  },
});

export interface RemoveTodo {
  (id: string): void;
}
interface Props {
  state: {
    id: string;
  };
  actions: {
    removeTodo: RemoveTodo;
    closeRow: () => void;
  };
}

export default function DeleteButton(props: Props) {
  const { setError } = React.useContext(UiContext);

  const {
    state: { id },
    actions: { removeTodo, closeRow },
  } = props;

  const onPress = React.useCallback(() => {
    try {
      removeTodo(id);
      closeRow();
    } catch (e) {
      setError(e);
    }
  }, [id, closeRow, removeTodo, setError]);

  return <IconButton onPress={onPress} icon="delete" style={styles.button} testID={testIDs.TODO_ROW_DELETE} />;
}
