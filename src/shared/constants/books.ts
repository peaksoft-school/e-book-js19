import HarryPotterImage from '../assets/images/harry-potter.png';
import RemarkImage from '../assets/images/remark.png';
import BookHistoryImage from '../assets/images/book-history.png';
import BookHistory220Image from '../assets/images/book-history220.png';
import PofigizmImage from '../assets/images/pofigizm.png';
import WomenPlanImage from '../assets/images/women-plan.png';
import NiSyImage from '../assets/images/nisy.png';
import GreenLightImage from '../assets/images/green-light.png';
import EmpireOfTheMilkyWayImage from '../assets/images/empire-of-the-milky-way.png';

export const SLIDER_BOOKS = [
  {
    id: 1,
    image: HarryPotterImage,
    title: 'Гарри Поттер и Тайная ко...',
    author: 'Роулинг Джоан Кэтлин',
    price: 450
  },
  {
    id: 2,
    image: RemarkImage,
    title: 'Земля обетованная',
    author: 'Эрих Мария Ремарк',
    price: 350
  },
  {
    id: 3,
    image: BookHistoryImage,
    title: 'История Книги',
    author: 'Э. Эггер, А. Бахтияров',
    price: 450
  },
  {
    id: 4,
    image: HarryPotterImage,
    title: 'Гарри Поттер и Тайная ко...',
    author: 'Роулинг Джоан Кэтлин',
    price: 450
  },
  {
    id: 5,
    image: RemarkImage,
    title: 'Земля обетованная',
    author: 'Эрих Мария Ремарк',
    price: 350
  },
  {
    id: 6,
    image: BookHistoryImage,
    title: 'История Книги',
    author: 'Э. Эггер, А. Бахтияров',
    price: 450
  }
];

export const BOOKS = [
  {
    id: 1,
    image: PofigizmImage,
    title: 'Тонкое искусство пофигизма',
    description:
      'Современное общество пропагандирует культ успеха: будь умнее, богаче, продуктивнее — будь лучше всех. Соцсети изобилуют историями на тему, как какой-то малец придумал. Соцсети изобилуют историями на тему, как какой-то малец придумал приложение…',
    price: 450
  },
  {
    id: 2,
    image: WomenPlanImage,
    title: 'Женщина у которой есть план',
    description:
      'В своей первой книге Маск не только рассказывает историю своей богатой приключениями жизни, но и с удовольствием дает множество полезных советов о том, как сохранить здоровье и красоту, быть стильной и уверенной, оставаться хорошей матерью и при этом строить карьеру, а главное - принимать себя, не бояться пробовать ...',
    price: 350
  },
  {
    id: 3,
    image: BookHistory220Image,
    title: 'История Книги',
    description:
      'История книги охватывает развитие от глиняных табличек и папирусных свитков до рукописных пергаментов, печатных изданий и электронных форматов. Эволюция книг направлена на улучшение хранения информации, мобильность и снижение стоимости производства. Описание книги (аннотация) включает тему, отличительные особенности и время издания',
    price: 450
  },
  {
    id: 4,
    image: WomenPlanImage,
    title: 'Женщина у которой есть план',
    description:
      'В своей первой книге Маск не только рассказывает историю своей богатой приключениями жизни, но и с удовольствием дает множество полезных советов о том, как сохранить здоровье и красоту, быть стильной и уверенной, оставаться хорошей матерью и при этом строить карьеру, а главное - принимать себя, не бояться пробовать ...',
    price: 350
  },
  {
    id: 5,
    image: BookHistory220Image,
    title: 'История Книги',
    description:
      'История книги охватывает развитие от глиняных табличек и папирусных свитков до рукописных пергаментов, печатных изданий и электронных форматов. Эволюция книг направлена на улучшение хранения информации, мобильность и снижение стоимости производства. Описание книги (аннотация) включает тему, отличительные особенности и время издания',
    price: 450
  }
];

export const LAST_PUBLICATIONS_BOOKS = [
  {
    id: 1,
    name: 'Бизнес-литература',
    book: {
      title: 'ИСТОРИЯ КНИГИ',
      description:
        'Предлагаемый перевод является первой попыткой обращения к творчеству Павла Орозия — римского христианского историка начала V века, сподвижника и современника знаменитого Августина Блаженн...',
      price: 456,
      image: BookHistoryImage
    }
  },
  {
    id: 2,
    name: 'Детские книги',
    book: {
      title: 'ГАРРИ ПОТТЕР',
      description:
        'Гарри Поттер и его друзья возвращаются в Хогвартс, где таинственные события угрожают школе волшебства и всему магическому миру...',
      price: 450,
      image: HarryPotterImage
    }
  },
  {
    id: 3,
    name: 'Хобби и досуг',
    book: {
      title: 'ЗЕМЛЯ ОБЕТОВАННАЯ',
      description:
        'Роман о людях, потерявших всё и ищущих новый смысл жизни в послевоенное время. История о любви, потерях и надежде...',
      price: 350,
      image: RemarkImage
    }
  },
  {
    id: 4,
    name: 'Публицистика',
    book: {
      title: 'ИСТОРИЯ КНИГИ',
      description:
        'Предлагаемый перевод является первой попыткой обращения к творчеству Павла Орозия — римского христианского историка начала V века...',
      price: 456,
      image: BookHistoryImage
    }
  },
  {
    id: 5,
    name: 'Учебная литература',
    book: {
      title: 'ГАРРИ ПОТТЕР',
      description:
        'Гарри Поттер и его друзья возвращаются в Хогвартс, где таинственные события угрожают школе волшебства...',
      price: 450,
      image: HarryPotterImage
    }
  },
  {
    id: 6,
    name: 'Поэзия',
    book: {
      title: 'ЗЕМЛЯ ОБЕТОВАННАЯ',
      description:
        'Роман о людях, потерявших всё и ищущих новый смысл жизни в послевоенное время...',
      price: 350,
      image: RemarkImage
    }
  }
];

export const AUDIO_BOOKS = [
  {
    id: 1,
    image: NiSyImage,
    title: 'НИ СЫ',
    author: 'Джен Синсеро',
    duration: '19 ч. 44 мин. 19 сек.',
    price: 234,
    new: false
  },
  {
    id: 2,
    image: GreenLightImage,
    title: 'Зеленый свет',
    author: 'Мэттью Макконахи',
    duration: '19 ч. 44 мин. 19 сек.',
    price: 234,
    new: true
  },
  {
    id: 3,
    image: EmpireOfTheMilkyWayImage,
    title: 'Империя Млечного пути',
    author: 'Книга 3. Пилигрим.',
    duration: '19 ч. 44 мин. 19 сек.',
    price: 234,
    new: false
  }
];
