import { useRouter } from 'next/router';
import Link from 'next/link';

// menu name and link
const menu = [
  { text: 'home', link: '/' },
  { text: 'about', link: '/about' },
  { text: 'articles', link: '/articles' }
];

export default function Navmenu() {

  const
    router = useRouter(),
    currentPage = router.pathname;

  return (
    <nav>
      <ul>
        { menu.map(item => (

          <Navlink
            key={ item.link }
            text={ item.text }
            link={ item.link }
            currentpage={ currentPage }
          />

        ))}
      </ul>
    </nav>
  )
}


function Navlink({ text, link, currentpage }) {

  if (link === currentpage) {

    return (
      <li className="active"><strong>{ text }</strong></li>
    );

  }
  else {

    return (
      <li><Link href={ link }><a>{ text }</a></Link></li>
    );

  }

}
