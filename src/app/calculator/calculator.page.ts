import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {
  valuesSelected: string[] = [];

  constructor() {}

  ngOnInit() {}

  calculatorItems: CalculatorItem[] = [
    {
      value: 'C',
      isOperator: true,
    },
    {
      value: '%',
      isOperator: true,
    },
    {
      value: '+',
      isOperator: true,
    },
    {
      value: 'x',
      isOperator: true,
    },

    {
      value: '7',
      isOperator: false,
    },
    {
      value: '8',
      isOperator: false,
    },
    {
      value: '9',
      isOperator: false,
    },
    {
      value: '-',
      isOperator: true,
    },

    {
      value: '4',
      isOperator: false,
    },
    {
      value: '5',
      isOperator: false,
    },
    {
      value: '6',
      isOperator: false,
    },
    {
      value: '+',
      isOperator: true,
    },

    {
      value: '1',
      isOperator: false,
    },
    {
      value: '2',
      isOperator: false,
    },
    {
      value: '3',
      isOperator: false,
    },
    {
      value: '=',
      isOperator: true,
    },

    {
      value: '0',
      isOperator: false,
    },
    {
      value: '.',
      isOperator: false,
    },
    {
      value: 'DEL',
      isOperator: true,
    },
    {
      value: '=',
      isOperator: true,
    },
  ];

  handleButtonClick(item: CalculatorItem) {
    this.valuesSelected.push(item.value);
    console.log(this.valuesSelected);

    if (item.value === 'C') {
      this.valuesSelected = [];
    }
    if (item.value === '=') {
      this.calculate();
    }
  }

  calculate() {
    this.valuesSelected.map((value) => {
      console.log(value);
    });
  }
}

export interface CalculatorItem {
  value: string;
  isOperator: boolean;
}
