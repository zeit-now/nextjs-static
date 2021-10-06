import Link from "next/link";
import { useRouter } from 'next/router'
import Header from "../components/header";

export default () => {
  const router = useRouter()
  const { wid } = router.query
  return (
  <main>
    <Header />
    <section>
    wid: {wid}
    </section>
    <section>
      <Link href="/about">
        <a>Go to About Me</a>
      </Link>
    </section>
  </main>
)};
