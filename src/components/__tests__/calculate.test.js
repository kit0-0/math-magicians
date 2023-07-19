import calculate from '../../logic/calculate';

describe('calculate data', () => {
  it('Return empty vaue if button AC pressed', () => {
    const data = {
      total: 50,
      next: 100,
      operation: 'x',
    };

    const buttonName = 'AC';
    const result = {
      total: null,
      next: null,
      operation: null,
    };

    expect(calculate(data, buttonName)).toEqual(result);
  });

  it('Save the final operation pressed', () => {
    const data = {
      total: 5,
      next: null,
      operation: 'x',
    };

    const buttonName = '+';
    const result = {
      total: 5,
      next: null,
      operation: '+',
    };

    expect(calculate(data, buttonName)).toEqual(result);
  });

  it('Return result if next value is a number', () => {
    const data = {
      total: 64,
      next: 8,
      operation: '÷',
    };

    const buttonName = '7';
    const value = '87';
    const result = {
      total: 64,
      next: value,
      operation: '÷',
    };

    expect(calculate(data, buttonName)).toEqual(result);
  });

  it('should produce a valid result if the buttonName is "="', () => {
    const data = {
      total: 27,
      next: '7',
      operation: '-',
    };
    const buttonName = '=';
    const expected = {
      total: '20',
      next: null,
      operation: null,
    };

    expect(calculate(data, buttonName)).toEqual(expected);
  });

  it('Set the number to positive or negative when +/- button pressed', () => {
    const data = {
      total: null,
      next: 3,
      operation: 'x',
    };

    const buttonName = '+/-';
    const value = '-3';
    const result = {
      total: null,
      next: value,
      operation: 'x',
    };

    expect(calculate(data, buttonName)).toEqual(result);
  });
  it('should add a decimal point to the "next" value when buttonName is "."', () => {
    const data = {
      total: 93,
      next: '8',
      operation: 'x',
    };
    const buttonName = '.';
    const result = {
      total: 93,
      next: '8.',
      operation: 'x',
    };
    expect(calculate(data, buttonName)).toEqual(result);
  });
});
