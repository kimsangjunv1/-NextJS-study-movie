import Image from "next/image";
import styles from "./page.module.css";
import Test from "@/pages";

export default function Home() {
  return (
    <>
      <p>메인입니다.</p>
      <Test />
    </>
  );
}
