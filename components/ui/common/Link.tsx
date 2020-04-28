import { useRouter } from 'next/dist/client/router';

export const Link = ({ path, children }) => {
  const router = useRouter();
  return (
    <a href="/"
      onClick={(evt) => {
        evt.preventDefault();
        router.push(path)
      }}
    >
      {children}
    </a>
  )
}
