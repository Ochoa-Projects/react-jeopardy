import PageContainer from "../../../../components/PageContainer";

export default function Question() {
  return (
    <PageContainer>
      <h1>CATEGORY - $600</h1>
      <div>
        <h2>
          This React tool is used to share state and other important information
          with the use of "prop drilling".
        </h2>
      </div>
      <p>X seconds remaining...</p>
      <form method="post">
        <label for="answer">Please Enter your answer:</label>
        <input id="answer" placeholder="Answer here..." />
        <button type="submit">Submit</button>
      </form>
    </PageContainer>
  );
}
