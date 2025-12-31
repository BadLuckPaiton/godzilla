// import HomePage from './home/homepage';

// export default function Home() {
//   return (
//     <div>
//       <HomePage />
//     </div>
//   );
// }
"use client";

import { useAppDispatch, useAppSelector } from "./store/hook";
import { increment, decrement } from "./playground/counterslice";
import { login, logout } from "./playground/userslice";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const name = useAppSelector((state)=>state.user.name);
  const dispatch = useAppDispatch();

  return (
    <main>
      <h1>Counter: {count}</h1>
      <h1>Name: {name }</h1>
      <button onClick={() => dispatch(login("jesus"))}>+</button>
      <button onClick={() => dispatch(login("Manuel"))}>/</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </main>
  );
}