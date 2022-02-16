import { FaSwatchbook } from 'react-icons/fa';
import { RiPencilRuler2Fill } from 'react-icons/ri';
import { FaShippingFast } from 'react-icons/fa';

export type AboutIconProps = {
  icon: any;
  title: string;
  desc: string;
};

export const IconsContent = [
  {
    icon: RiPencilRuler2Fill,
    title: 'PRECYZJA',
    desc:
      'Do każdego zamówienia podchodzimy z należytą prezycją, ' +
      'zapewniając najwyższą jakość',
  },
  {
    icon: FaSwatchbook,
    title: 'NA ZAMÓWIENIE',
    desc:
      'Każdy przedmiot, który posiadamy w ofercie można zamówić w różnych ' +
      'kolorach i rozmiarach',
  },
  {
    icon: FaShippingFast,
    title: 'DOSTAWA',
    desc:
      'Zapewniamy transport na terenie Częstochowy +50km (więcej informacji ' +
      'pod nr. tel.)',
  },
];
