$(() => {

  let $moneyBlock = $('.js-range-value'),
      $moneyRefundBlock = $('.js-refund'),
      $moneyDiscondBlock = $('.js-discount'),
      $moneySumDiscondBlock = $('.js-sum-discount'),
      $dateBlock = $('.js-date'),
      $timeBlock = $('.js-range-time'),
      $day_ref = $('.js-decl-days'),
      // $moneyRange = $('.js-range-slider-money'),
      // $timeRange = $('.js-range-slider-time'),
      fullDate = new Date(),
      twoDigitMonth = ((fullDate.getMonth().toString().length) == 1)? '0'+(fullDate.getMonth()+1) : (fullDate.getMonth()+1),
      twoDigitDate = ((fullDate.getDate().toString().length) == 1)? '0'+(fullDate.getDate()) : (fullDate.getDate()),
      currentDate = twoDigitDate + "." + twoDigitMonth + "." + fullDate.getFullYear(),
      dayVal;

  function declOfNum(n, text_forms) {
    n = Math.abs(n) % 100;
    let n1 = n % 10;
    if (n > 4 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 == 1) { return text_forms[0]; }
    return text_forms[2];
  }

  $dateBlock.html(currentDate)


  $(".js-range-slider-money").ionRangeSlider({
    skin: "round",
    min: 500,
    max: 50000,
    from: 15000,
    step: 500,
    force_edges: true,
    prettify_enabled: false,
    hide_from_to: true,
    hide_min_max: true,
    onChange: function (data) {
      $moneyBlock.html(data.from + ' ₽');
      $moneyRefundBlock.html(data.from * 101 / 100 + ' ₽');
      $moneyDiscondBlock.html(Math.round((data.from * 101 / 100) * 0.007) + ' ₽');
      $moneySumDiscondBlock.html((data.from * 101 / 100) - Math.round((data.from * 101 / 100) * 0.007) + ' ₽')
    }
  });

  $(".js-range-slider-time").ionRangeSlider({
    skin: "round",
    min: 1,
    max: 30,
    from: 10,
    step: 1,
    force_edges: true,
    prettify_enabled: false,
    hide_from_to: true,
    hide_min_max: true,
    onChange: function (data) {
      $timeBlock.text(data.from);
      dayVal = declOfNum(data.from, ['день', 'дня', 'дней'])
      $day_ref.text(dayVal)
      console.log(typeof data.from)
    }
  });

});
