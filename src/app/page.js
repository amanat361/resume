import Link from "next/link"

export default function Home() {
  return (
    <main className="">
      <Link href="/sam">
        <p>Sams Resume</p>
      </Link>
      <Link href="/ethan">
        <p>Ethans Resume</p>
      </Link>
    </main>
  )
}
