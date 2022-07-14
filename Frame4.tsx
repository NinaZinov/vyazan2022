import { FC, memo } from 'react';

import { ArrowLeft1Icon } from './ArrowLeft1Icon';
import { Ellipse1Icon } from './Ellipse1Icon';
import classes from './Frame4.module.css';
import { SocialMediaFacebookIcon } from './SocialMediaFacebookIcon';
import { SocialMediaInstagramIcon } from './SocialMediaInstagramIcon';

interface Props {
  className?: string;
  classes?: {
    unnamed?: string;
    _359529111?: string;
    _16106806752d5af207014fa12ff965?: string;
    _160981797480f231f0633ea274ba8f?: string;
    unnamed2?: string;
    _2999?: string;
    unnamed3?: string;
    _3799?: string;
    unnamed4?: string;
    _4399?: string;
    frame25?: string;
    image3?: string;
    pointinghand1?: string;
    ellipse1?: string;
    arrowLeft1?: string;
    _2022?: string;
    unnamed5?: string;
    facebookTwitterInstagram?: string;
    a?: string;
    frame1?: string;
    _74955458766?: string;
    frame2?: string;
    helloVyazanRu?: string;
    unnamed6?: string;
    rectangle2?: string;
    unnamed7?: string;
    _20222?: string;
    _2a490b5f992f19571871b27b38d45a?: string;
    unnamed8?: string;
    image2?: string;
    unnamed9?: string;
    unnamed10?: string;
    unnamed11?: string;
    unnamed12?: string;
    socialMediaFacebook?: string;
    socialMediaInstagram?: string;
  };
}
export const Frame4: FC<Props> = memo(function Frame4(props = {}) {
  return (
    <div className={`${classes.root} ${props.className || ''}`}>
      <div className={`${classes.unnamed} ${props.classes?.unnamed || ''}`}>
        <div className={`${classes._359529111} ${props.classes?._359529111 || ''}`}></div>
        <div
          className={`${classes._16106806752d5af207014fa12ff965} ${
            props.classes?._16106806752d5af207014fa12ff965 || ''
          }`}
        ></div>
        <div
          className={`${classes._160981797480f231f0633ea274ba8f} ${
            props.classes?._160981797480f231f0633ea274ba8f || ''
          }`}
        ></div>
        <div className={`${classes.unnamed2} ${props.classes?.unnamed2 || ''}`}>Топ Ромбы</div>
        <div className={`${classes._2999} ${props.classes?._2999 || ''}`}> 2 999 р</div>
        <div className={`${classes.unnamed3} ${props.classes?.unnamed3 || ''}`}>Топ Искры</div>
        <div className={`${classes._3799} ${props.classes?._3799 || ''}`}>3 799 р</div>
        <div className={`${classes.unnamed4} ${props.classes?.unnamed4 || ''}`}>Топ Кружево</div>
        <div className={`${classes._4399} ${props.classes?._4399 || ''}`}> 4 399 р</div>
      </div>
      <div className={`${classes.frame25} ${props.classes?.frame25 || ''}`}>
        <div className={`${classes.image3} ${props.classes?.image3 || ''}`}></div>
        <div className={`${classes.pointinghand1} ${props.classes?.pointinghand1 || ''}`}></div>
        <Ellipse1Icon className={`${classes.ellipse1} ${props.classes?.ellipse1 || ''}`} />
        <ArrowLeft1Icon className={`${classes.arrowLeft1} ${props.classes?.arrowLeft1 || ''}`} />
        <div className={`${classes._2022} ${props.classes?._2022 || ''}`}>© 2022 Вязань. Все права защищены.</div>
        <div className={`${classes.unnamed5} ${props.classes?.unnamed5 || ''}`}>
          О производстве
          <br />
          Коллекции
          <br />
          Магазины
          <br />
          Партнеры
          <br />
          Контакты
          <br />
        </div>
        <div className={`${classes.facebookTwitterInstagram} ${props.classes?.facebookTwitterInstagram || ''}`}>
          Facebook
          <br />
          Twitter
          <br />
          Instagram
        </div>
        <div className={`${classes.a} ${props.classes?.a || ''}`}>Москва, ул. Большая Мятежная, 33</div>
        <div className={`${classes.frame1} ${props.classes?.frame1 || ''}`}>
          <div className={`${classes._74955458766} ${props.classes?._74955458766 || ''}`}>+7 (495) 545-87-66</div>
        </div>
        <div className={`${classes.frame2} ${props.classes?.frame2 || ''}`}>
          <div className={`${classes.helloVyazanRu} ${props.classes?.helloVyazanRu || ''}`}>hello@vyazan.ru</div>
        </div>
      </div>
      <div className={`${classes.unnamed6} ${props.classes?.unnamed6 || ''}`}>
        <div className={`${classes.rectangle2} ${props.classes?.rectangle2 || ''}`}></div>
        <div className={`${classes.unnamed7} ${props.classes?.unnamed7 || ''}`}>Зной Марокко</div>
        <div className={`${classes._20222} ${props.classes?._20222 || ''}`}>
          Тонкие воздушные ткани, летящие фасоны, изящные узоры — все, чтобы почувствовать себя мароканской принцессой.
          <br />
          <br />
          Летняя коллекция 2022 дышит полуденным зноем, бризом моря <br />и свободой.
          <br />
          <br />
          Авторское вязание делает вещи коллекции неповторимыми.
        </div>
        <div
          className={`${classes._2a490b5f992f19571871b27b38d45a} ${
            props.classes?._2a490b5f992f19571871b27b38d45a || ''
          }`}
        ></div>
      </div>
      <div className={`${classes.unnamed8} ${props.classes?.unnamed8 || ''}`}>
        <div className={`${classes.image2} ${props.classes?.image2 || ''}`}></div>
        <div className={`${classes.unnamed9} ${props.classes?.unnamed9 || ''}`}>Коллекции</div>
        <div className={`${classes.unnamed10} ${props.classes?.unnamed10 || ''}`}>Магазины</div>
        <div className={`${classes.unnamed11} ${props.classes?.unnamed11 || ''}`}>Производство</div>
        <div className={`${classes.unnamed12} ${props.classes?.unnamed12 || ''}`}>
          <SocialMediaFacebookIcon
            className={`${classes.socialMediaFacebook} ${props.classes?.socialMediaFacebook || ''}`}
          />
          <SocialMediaInstagramIcon
            className={`${classes.socialMediaInstagram} ${props.classes?.socialMediaInstagram || ''}`}
          />
        </div>
      </div>
    </div>
  );
});
