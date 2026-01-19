

export default function FaqCard(open, question, answer) {
    return (
      <details className="faq__item" open={open}>
        <summary className="faq__question">{question}</summary>
        <div className="faq__answer">
          {answer}
        </div>
      </details>
    );
}