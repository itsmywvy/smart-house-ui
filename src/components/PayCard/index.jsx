import React from 'react';
import chip from '../../assets/images/chip.png';
import visaLogo from '../../assets/images/visa.png';
import mastercardLogo from '../../assets/images/mastercard.png';

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
    <div className="scene">
      <div className="card">
        <div className="card__front">
          <div className="top">
            <div className="chip">
              <img src={chip} alt="" />
            </div>
            <div className="system">{definePaymentSystem}</div>
          </div>
          <div className="number">{hiddenPaymentNumbers}</div>
          <div className="info">
            <div className="name">{name}</div>
            <div className="expires">{expires}</div>
          </div>
        </div>
        <div className="card__back">
          <div className="stripe"></div>
          <div className="sign">
            <div className="sign__stripe"></div>
            <div className="cvc-code">353</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayCard;
