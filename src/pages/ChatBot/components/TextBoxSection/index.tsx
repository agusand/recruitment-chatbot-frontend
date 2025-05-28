import TextField from '../TextField';
import styles from './index.module.scss';

import { useChatService } from 'pages/ChatBot/services/ChatService/ChatService.hook';

export default function TextBoxSection() {
  const { onChatFormSubmit, INPUT_NAME, MIN_LENGTH } = useChatService();
  return (
    <div className={styles.section}>
      <TextField
        placeholder="Enter your answer"
        onSubmit={onChatFormSubmit}
        name={INPUT_NAME}
        min={MIN_LENGTH}
      />
      <p className={styles.infoText}>
        Enter each answer in a single submission of at least {MIN_LENGTH} characters
      </p>
    </div>
  );
}
