const FightLogic = ({ userPokemon, opponentPokemon, onFightFinish }) => {
  let result = "";

  const typeChart = {
    fire: {
      fire: 0.5,
      water: 0.5,
      grass: 2,
      ice: 2,
      bug: 2,
      rock: 0.5,
      dragon: 0.5,
      steel: 2,
    },
    water: {
      fire: 2,
      water: 0.5,
      grass: 0.5,
      ground: 2,
      rock: 2,
      dragon: 0.5,
    },
    grass: {
      fire: 0.5,
      water: 2,
      grass: 0.5,
      poison: 0.5,
      ground: 2,
      flying: 0.5,
      bug: 0.5,
      rock: 2,
      dragon: 0.5,
      steel: 0.5,
    },
    electric: {
      water: 2,
      electric: 0.5,
      grass: 0.5,
      ground: 0,
      flying: 2,
      dragon: 0.5,
    },
    ice: {
      fire: 0.5,
      water: 0.5,
      grass: 2,
      ice: 0.5,
      ground: 2,
      flying: 2,
      dragon: 2,
      steel: 0.5,
    },
    fighting: {
      normal: 2,
      ice: 2,
      poison: 0.5,
      flying: 0.5,
      psychic: 0.5,
      bug: 0.5,
      rock: 2,
      ghost: 0,
      steel: 2,
      fairy: 0.5,
    },
    poison: {
      grass: 2,
      poison: 0.5,
      ground: 0.5,
      rock: 0.5,
      ghost: 0.5,
      steel: 0,
      fairy: 2,
    },
    ground: {
      fire: 2,
      electric: 2,
      grass: 0.5,
      poison: 2,
      flying: 0,
      bug: 0.5,
      rock: 2,
      steel: 2,
    },
    flying: {
      electric: 0.5,
      grass: 2,
      fighting: 2,
      bug: 2,
      rock: 0.5,
      steel: 0.5,
    },
    psychic: {
      fighting: 2,
      poison: 2,
      psychic: 0.5,
      dark: 0,
      steel: 0.5,
    },
    bug: {
      fire: 0.5,
      grass: 2,
      fighting: 0.5,
      ground: 0.5,
      flying: 0.5,
      rock: 2,
      steel: 0.5,
      fairy: 0.5,
    },
    rock: {
      fire: 2,
      ice: 2,
      fighting: 0.5,
      ground: 0.5,
      flying: 2,
      bug: 2,
      steel: 0.5,
    },
    ghost: {
      normal: 0,
      psychic: 2,
      ghost: 2,
      dark: 0.5,
    },
    dragon: {
      dragon: 2,
      steel: 0.5,
      fairy: 0,
    },
    dark: {
      fighting: 2,
      psychic: 2,
      ghost: 2,
      dark: 0.5,
      fairy: 0.5,
    },
    steel: {
      fire: 0.5,
      water: 0.5,
      electric: 0.5,
      ice: 2,
      rock: 2,
      steel: 0.5,
      fairy: 2,
    },
    fairy: {
      fire: 0.5,
      fighting: 2,
      poison: 0.5,
      dragon: 2,
      dark: 2,
      steel: 0.5,
    },
  };

  const handleFight = () => {
    const userAttack = userPokemon.attack;
    const userDefense = userPokemon.defense;
    const userSpeed = userPokemon.speed;
    const userType = userPokemon.type;
    const opponentAttack = opponentPokemon.attack;
    const opponentDefense = opponentPokemon.defense;
    const opponentSpeed = opponentPokemon.speed;
    const opponentType = opponentPokemon.type;

    const userAttackPower = userAttack - opponentDefense;
    const opponentAttackPower = opponentAttack - userDefense;

    const userSpeedPower = userSpeed - opponentSpeed;
    const opponentSpeedPower = opponentSpeed - userSpeed;

    const userTypePower = typeChart[userType][opponentType];
    const opponentTypePower = typeChart[opponentType][userType];

    const userTotalPower = userAttackPower + userSpeedPower * userTypePower;
    const opponentTotalPower =
      opponentAttackPower + opponentSpeedPower * opponentTypePower;

    let result;
    if (userTotalPower > opponentTotalPower) {
      result = "user";
    } else {
      result = "opponent";
    }

    onFightFinish(result);
  };

  return <div></div>;
};

export default FightLogic;
