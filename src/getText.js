export default () => {
  const texts = [
    "Here's to the crazy ones. The misfits. The rebels. The troublemakers." +
      " The round pegs in the square holes. The ones who see things differently.",

    "I believe that everything happens for a reason. People change so that you can learn to let go," +
      " things go wrong so that you appreciate them when they're right, you believe lies ",

    "To love at all is to be vulnerable. Love anything and your heart will be wrung and possibly broken. If" +
      " you want to make sure of keeping it intact you must give it to no one, not even an animal.",

      "Betrayed cheerful declared end and. Questions we additions is extremely incommode. Next half add call them eat face. Age lived smile six defer bed their few."+
      "Had admitting concluded too behaviour him she. Of death to or to being other",

      "Attention he extremity unwilling on otherwise. Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor. So if he into shot half many long. China fully him every fat was world grave"

      

  ];

  return texts[Math.floor(Math.random() * texts.length)];
};
