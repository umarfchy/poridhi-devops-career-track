export const Form = ({ setUserInput, handleSubmit }) => {
  return (
    <form
      className="flex flex-col items-center"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
        setUserInput("");
      }}
    >
      <input
        type="text"
        placeholder="Type here..."
        onChange={(e) => setUserInput(e.target.value)}
        className="w-96 p-2 my-4 rounded-md border-2 border-gray-300"
        required
      />
      <button className="bg-blue-500 text-white p-2 rounded-md">
        Add News
      </button>
    </form>
  );
};
