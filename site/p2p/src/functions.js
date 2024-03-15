export function format_price(price) {
  let price_str = '' + price;
  let answer = '';

  for (let i = 0; i < price_str.length; i++) {
    if (i % 3 === 0) {
      answer += ' ';
    }

    answer += price_str[price_str.length - i - 1];
  }

  return answer.trim().split('').reverse().join('');
}

export function format_card(card) {
  let card_str = '' + card;
  let answer = '';

  for (let i = 0; i < card_str.length; i++) {
    if (i % 4 === 0) {
      answer += ' ';
    }

    answer += card_str[card_str.length - i - 1];
  }

  return answer.trim().split('').reverse().join('');
}