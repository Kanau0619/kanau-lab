const speakerLabels = {
  user: "User",
  character: "Character",
  system: "State",
};

export default function ConversationExample({ messages }) {
  return (
    <div className="conversation" aria-label="Conversation example">
      <div className="conversation__header">
        <span>Conversation Example</span>
        <span>Behavior Sample</span>
      </div>
      <div className="conversation__body">
        {messages.map((message, index) => (
          <div
            className={`message message--${message.speaker}`}
            key={`${message.speaker}-${index}`}
          >
            <span>{speakerLabels[message.speaker]}</span>
            <p>{message.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
