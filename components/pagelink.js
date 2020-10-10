import Link from 'next/link';

export default function Pagelink(props) {

  const link = `/${ props.postsdir }/${ props.id }`;

  return (

    <article>
      <h2><Link href={ link }><a>{ props.title }</a></Link></h2>
      <p className="time"><time dateTime={ props.dateymd }>{ props.datefriendly }</time></p>
      <p>{ props.description }</p>
    </article>

  );

}
