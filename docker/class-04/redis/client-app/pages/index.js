import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [value, updateValue] = useState("create new data");
  const [input, setInput] = useState("");
  const baseUrl = "http://localhost:5001";
  const getDataUrl = `${baseUrl}/data`;
  const createDataUrl = `${baseUrl}/create`;

  const getData = async () => {
    try {
      const { data } = await axios.get(getDataUrl);
      updateValue(data);
      console.log({ message: "got data", data });
      return res;
    } catch (error) {
      console.error({ message: "failed fetching data.", error });
    }
  };

  const createData = async (inputText) => {
    try {
      const { data } = await axios.post(createDataUrl, { data: inputText });
      console.log({ message: "posted data", data });
      return data;
    } catch (error) {
      console.error({ message: "failed creating data.", error });
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await createData(input);
    setInput("");
  };

  return (
    <main style={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <section style={{ zoom: "1.2", display: "grid", placeItems: "center" }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(evt) => setInput(evt.target.value)}
          />
          <input type="submit" value="create data" />
        </form>
        <button onClick={getData} style={{ margin: "1rem 0" }}>
          get data
        </button>
        <p style={{ textAlign: "justify" }}>
          Try creating a data using input. Then click on "get data" twice to see
          the magic. Keep an eye on the isCached property when you input new
          data.
        </p>
      </section>
      <section style={{ height: "50vh" }}>
        <h3 style={{ textAlign: "center" }}>output</h3>
        <pre>{JSON.stringify(value, null, 2)}</pre>
      </section>
    </main>
  );
}
