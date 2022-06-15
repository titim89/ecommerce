import { useState } from "react";
import { useForm } from "react-hook-form";
import Header from "./Header";


export function App() {

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <Header />
      <input value={data.name} onChange={(e) => setData({...data, name: e.target.value})} placeholder="First name" />
      <input value={data.phone} placeholder="Phone" />
      <textarea {...register("aboutYou")} placeholder="About you" />
      <p>{data.comment}</p>
      <input type="submit" />
    </form>
  );
}
