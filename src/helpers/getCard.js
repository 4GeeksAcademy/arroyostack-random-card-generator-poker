export const generatePokerCard = (card, image) => {
  const url =
    "https://raw.githubusercontent.com/4GeeksAcademy/arroyostack-random-card-generator-poker/2581db635539c3834a4e1d7d57fdc7255c46a038/src/assets/poker-cards/";

  switch (card) {
    case "1clubs":
      image.src = `${url}AC.svg`;
      break;
    case "1diamons":
      image.src = `${url}AD.svg`;
      break;
    case "1hearts":
      image.src = `${url}AH.svg`;
      break;
    case "1spades":
      image.src = `${url}AS.svg`;
      break;
    case "2clubs":
      image.src = `${url}2C.svg`;
      break;
    case "2diamons":
      image.src = `${url}2D.svg`;
      break;
    case "2hearts":
      image.src = `${url}2H.svg`;
      break;
    case "2spades":
      image.src = `${url}2S.svg`;
      break;
    case "3clubs":
      image.src = `${url}3C.svg`;
      break;
    case "3diamons":
      image.src = `${url}3D.svg`;
      break;
    case "3hearts":
      image.src = `${url}3H.svg`;
      break;
    case "3spades":
      image.src = `${url}3S.svg`;
      break;
    case "4clubs":
      image.src = `${url}4C.svg`;
      break;
    case "4diamons":
      image.src = `${url}4D.svg`;
      break;
    case "4hearts":
      image.src = `${url}4H.svg`;
      break;
    case "4spades":
      image.src = `${url}4S.svg`;
      break;
    case "5clubs":
      image.src = `${url}5C.svg`;
      break;
    case "5diamons":
      image.src = `${url}5D.svg`;
      break;
    case "5hearts":
      image.src = `${url}5H.svg`;
      break;
    case "5spades":
      image.src = `${url}5S.svg`;
      break;
    case "6clubs":
      image.src = `${url}6C.svg`;
      break;
    case "6diamons":
      image.src = `${url}6D.svg`;
      break;
    case "6hearts":
      image.src = `${url}6H.svg`;
      break;
    case "6spades":
      image.src = `${url}6S.svg`;
      break;
    case "7clubs":
      image.src = `${url}7C.svg`;
      break;
    case "7diamons":
      image.src = `${url}7D.svg`;
      break;
    case "7hearts":
      image.src = `${url}7H.svg`;
      break;
    case "7spades":
      image.src = `${url}7S.svg`;
      break;
    case "8clubs":
      image.src = `${url}8C.svg`;
      break;
    case "8diamons":
      image.src = `${url}8D.svg`;
      break;
    case "8hearts":
      image.src = `${url}8H.svg`;
      break;
    case "8spades":
      image.src = `${url}8S.svg`;
      break;
    case "9clubs":
      image.src = `${url}9C.svg`;
      break;
    case "9diamons":
      image.src = `${url}9D.svg`;
      break;
    case "9hearts":
      image.src = `${url}9H.svg`;
      break;
    case "9spades":
      image.src = `${url}9S.svg`;
      break;
    case "10clubs":
      image.src = `${url}TC.svg`;
      break;
    case "10diamons":
      image.src = `${url}TD.svg`;
      break;
    case "10hearts":
      image.src = `${url}TH.svg`;
      break;
    case "10spades":
      image.src = `${url}TS.svg`;
      break;
    case "11clubs":
      image.src = `${url}JC.svg`;
      break;
    case "11diamons":
      image.src = `${url}JD.svg`;
      break;
    case "11hearts":
      image.src = `${url}JH.svg`;
      break;
    case "11spades":
      image.src = `${url}JS.svg`;
      break;
    case "12clubs":
      image.src = `${url}QC.svg`;
      break;
    case "12diamons":
      image.src = `${url}QD.svg`;
      break;
    case "12hearts":
      image.src = `${url}QH.svg`;
      break;
    case "12spades":
      image.src = `${url}QS.svg`;
      break;
    case "13clubs":
      image.src = `${url}KC.svg`;
      break;
    case "13diamons":
      image.src = `${url}KD.svg`;
      break;
    case "13hearts":
      image.src = `${url}KH.svg`;
      break;
    case "13spades":
      image.src = `${url}KS.svg`;
      break;

    default:
      break;
  }

  return card;
};
