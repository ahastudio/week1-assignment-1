Feature('Click me');

Scenario('Click me test', (I) => {
  I.amOnPage('/');

  // 버튼 확인
  I.see('Click me!');

  // 카운터 증가
  I.click('Click me!');
  I.see('(1)');

  // 카운터 증가
  I.click('Click me!');
  I.click('Click me!');
  I.click('Click me!');
  I.click('Click me!');
  I.see('(5)');

  // 숫자 강제 세팅
  I.click('2');
  I.see('(2)');
});
