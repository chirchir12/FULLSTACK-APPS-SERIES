import React from 'react';
import Card from '../Card/Card';
function List(props) {
  const data = [
    {
      title:
        'ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis gravida. Praesent',
      company:
        'torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam',
      link: 'mattis@augueporttitorinterdum.edu',
      site:
        'cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut',
    },
    {
      title:
        'adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo',
      company:
        'at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac',
      link: 'molestie@Crasdolordolor.edu',
      site: 'Curabitur egestas nunc sed libero. Proin sed turpis nec mauris',
    },
    {
      title:
        'auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus rhoncus. Donec est. Nunc ullamcorper, velit in aliquet',
      company:
        'mauris blandit mattis. Cras eget nisi dictum augue malesuada malesuada.',
      link: 'ac@ante.ca',
      site:
        'ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper',
    },
    {
      title:
        'mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis ultrices. Vivamus',
      company:
        'fringilla. Donec feugiat metus sit amet ante. Vivamus non lorem',
      link: 'euismod.est.arcu@pedesagittisaugue.net',
      site: 'lectus convallis est, vitae sodales nisi magna sed dui. Fusce',
    },
    {
      title:
        'erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec metus',
      company:
        'malesuada augue ut lacus. Nulla tincidunt, neque vitae semper egestas,',
      link: 'urna@disparturient.org',
      site:
        'aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam',
    },
    {
      title:
        'fringilla ornare placerat, orci lacus vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus. Cum sociis natoque',
      company:
        'bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum,',
      link: 'enim.nec@interdumligula.net',
      site: 'Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean',
    },
    {
      title:
        'in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu dolor egestas',
      company:
        'dictum sapien. Aenean massa. Integer vitae nibh. Donec est mauris,',
      link: 'Aliquam.nec.enim@Vivamuseuismod.net',
      site:
        'lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus.',
    },
    {
      title:
        'vel, vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut,',
      company:
        'diam luctus lobortis. Class aptent taciti sociosqu ad litora torquent',
      link: 'tortor.nibh@Suspendisse.org',
      site:
        'dui augue eu tellus. Phasellus elit pede, malesuada vel, venenatis',
    },
    {
      title:
        'a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at',
      company:
        'ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede.',
      link: 'Etiam.laoreet@Phasellus.net',
      site:
        'vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis.',
    },
    {
      title:
        'auctor, nunc nulla vulputate dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper',
      company:
        'gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum',
      link: 'pede.ac.urna@Praesentluctus.com',
      site: 'a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras',
    },
    {
      title:
        'dictum augue malesuada malesuada. Integer id magna et ipsum cursus vestibulum. Mauris magna. Duis dignissim tempor arcu. Vestibulum ut eros',
      company: 'ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt',
      link: 'dui@tinciduntadipiscing.org',
      site:
        'vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet',
    },
    {
      title:
        'enim, sit amet ornare lectus justo eu arcu. Morbi sit amet massa. Quisque porttitor eros nec tellus. Nunc lectus pede,',
      company:
        'Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus,',
      link: 'vitae.orci@ametorciUt.org',
      site:
        'enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum',
    },
    {
      title:
        'mi eleifend egestas. Sed pharetra, felis eget varius ultrices, mauris ipsum porta elit, a feugiat tellus lorem eu metus. In',
      company: 'enim, gravida sit amet, dapibus id, blandit at, nisi. Cum',
      link: 'semper@fermentumconvallisligula.com',
      site: 'tellus non magna. Nam ligula elit, pretium et, rutrum non,',
    },
    {
      title:
        'Cras pellentesque. Sed dictum. Proin eget odio. Aliquam vulputate ullamcorper magna. Sed eu eros. Nam consequat dolor vitae dolor. Donec',
      company: 'interdum. Sed auctor odio a purus. Duis elementum, dui quis',
      link: 'lacus@justoeu.org',
      site:
        'consectetuer, cursus et, magna. Praesent interdum ligula eu enim. Etiam',
    },
    {
      title:
        'libero nec ligula consectetuer rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at, velit. Pellentesque ultricies dignissim lacus. Aliquam',
      company: 'nec enim. Nunc ut erat. Sed nunc est, mollis non,',
      link: 'est.Nunc.laoreet@felisNullatempor.edu',
      site: 'Donec est mauris, rhoncus id, mollis nec, cursus a, enim.',
    },
    {
      title:
        'magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam nisl. Nulla eu',
      company:
        'fermentum metus. Aenean sed pede nec ante blandit viverra. Donec',
      link: 'auctor.vitae.aliquet@amagnaLorem.co.uk',
      site: 'Curae; Phasellus ornare. Fusce mollis. Duis sit amet diam eu',
    },
    {
      title:
        'penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse tristique neque venenatis lacus. Etiam bibendum fermentum',
      company:
        'vel, convallis in, cursus et, eros. Proin ultrices. Duis volutpat',
      link: 'Nulla@nibhvulputate.com',
      site: 'semper, dui lectus rutrum urna, nec luctus felis purus ac',
    },
    {
      title:
        'neque venenatis lacus. Etiam bibendum fermentum metus. Aenean sed pede nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat,',
      company: 'nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus',
      link: 'fringilla.est@tellusAenean.edu',
      site:
        'aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non',
    },
    {
      title:
        'gravida non, sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt pede ac',
      company:
        'Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate,',
      link: 'fringilla.mi.lacinia@veliteget.com',
      site:
        'dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur',
    },
    {
      title:
        'eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem, luctus ut, pellentesque',
      company:
        'feugiat placerat velit. Quisque varius. Nam porttitor scelerisque neque. Nullam',
      link: 'sollicitudin@Phasellusfermentum.net',
      site: 'metus. Aenean sed pede nec ante blandit viverra. Donec tempus,',
    },
    {
      title:
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare.',
      company:
        'auctor velit. Aliquam nisl. Nulla eu neque pellentesque massa lobortis',
      link: 'arcu.ac.orci@egestasSedpharetra.net',
      site: 'a ultricies adipiscing, enim mi tempor lorem, eget mollis lectus',
    },
    {
      title:
        'rhoncus id, mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros',
      company: 'ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat',
      link: 'vitae.purus@vitaesodales.edu',
      site: 'habitant morbi tristique senectus et netus et malesuada fames ac',
    },
    {
      title:
        'Suspendisse eleifend. Cras sed leo. Cras vehicula aliquet libero. Integer in magna. Phasellus dolor elit, pellentesque a, facilisis non, bibendum',
      company:
        'iaculis aliquet diam. Sed diam lorem, auctor quis, tristique ac,',
      link: 'Duis@Craslorem.ca',
      site: 'fringilla euismod enim. Etiam gravida molestie arcu. Sed eu nibh',
    },
    {
      title:
        'Duis a mi fringilla mi lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus,',
      company:
        'nec ante blandit viverra. Donec tempus, lorem fringilla ornare placerat,',
      link: 'Maecenas.ornare@Aliquamultrices.org',
      site:
        'Nullam lobortis quam a felis ullamcorper viverra. Maecenas iaculis aliquet',
    },
    {
      title:
        'Aliquam ultrices iaculis odio. Nam interdum enim non nisi. Aenean eget metus. In nec orci. Donec nibh. Quisque nonummy ipsum',
      company:
        'diam. Sed diam lorem, auctor quis, tristique ac, eleifend vitae,',
      link: 'volutpat.nunc@aliquetliberoInteger.net',
      site: 'amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat.',
    },
    {
      title:
        'convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a, magna. Lorem ipsum dolor sit',
      company:
        'hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus.',
      link: 'libero@Loremipsumdolor.com',
      site:
        'lacinia mattis. Integer eu lacus. Quisque imperdiet, erat nonummy ultricies',
    },
    {
      title:
        'mollis nec, cursus a, enim. Suspendisse aliquet, sem ut cursus luctus, ipsum leo elementum sem, vitae aliquam eros turpis non',
      company:
        'tellus. Suspendisse sed dolor. Fusce mi lorem, vehicula et, rutrum',
      link: 'Quisque.purus.sapien@eu.com',
      site:
        'nibh sit amet orci. Ut sagittis lobortis mauris. Suspendisse aliquet',
    },
  ];

  return (
    <>
      {data.map((item, idx) => (
        <Card key={idx} item={item} />
      ))}
    </>
  );
}

export default List;
