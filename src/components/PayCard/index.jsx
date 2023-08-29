import React from 'react';
import chipIcon from '../../assets/images/chip.png';
import visaLogo from '../../assets/images/visa.png';
import mastercardLogo from '../../assets/images/mastercard.png';

import styles from './PayCard.module.scss';

const PayCard = () => {
  const [number, setNumber] = React.useState('5234567891234567');
  const [name, setName] = React.useState('DAVID KONDZHARIA');
  const [expires, setExpires] = React.useState('03 27');
  const [background, setBackground] = React.useState('');

  const hiddenPaymentNumbers = React.useMemo(() => {
    return [...number].map((num, i) => (i < 4 || i >= 12 ? num : '#'));
  });

  const definePaymentSystem =
    number.charAt(0) === '4' ? (
      <img src={visaLogo} />
    ) : number.charAt(0) === '5' ? (
      <img src={mastercardLogo} />
    ) : null;

  React.useEffect(() => {
    async function getBackground() {
      const response = await fetch('https://api.api-ninjas.com/v1/randomimage?category=nature', {
        headers: {
          'X-Api-Key': 'WDt4sIjG3Q9+uqcFvZ4GsQ==76rMTgvr2KMsh2zy',
          Accept: 'image/jpg',
        },
      });
      setBackground(response.body);
    }
    getBackground();
  }, []);

  return (
    <div className={styles.scene}>
      <div className={styles.card}>
        <div className={styles.card__frontside}>
          <div className={styles.card__top}>
            <div className={styles.card__chip}>
              <img src={chipIcon} alt="" />
            </div>
            <div className={styles.card__system}>{definePaymentSystem}</div>
          </div>
          <div className={styles.card__number}>{hiddenPaymentNumbers}</div>
          <div className={styles.card__info}>
            <div className={styles.card__name}>{name}</div>
            <div className={styles.card__expires}>{expires}</div>
          </div>
        </div>
        <div className={styles.card__backside}>
          <div className={styles.card__stripe}></div>
          <div className={styles.card__sign}>
            <div className={styles.card__sign__stripe}></div>
            <div className={styles.card__code}>353</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayCard;
